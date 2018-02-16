let id = 0;
let newShelf = [
    {
        name: 'Bob',
        price: '312',
        id:0
    }
]

module.exports = {

    createBin:(req,res)=>{
        req.body.id = ++id
        newShelf.push(newShelf)
        res.statues(200).send(newShelf)
    },

    readBin:(req, res)=>{
        res.status(200).send(newShelf)
    },
    updateBin:(req, res)=>{
        newShelf.map((bin)=>{
            if(+req.params.id === bin.id){
                bin.name = req.body.name
                bin.price = req.body.price 
            }
        })
        res.status(200).send(newShelf)
    },
    deleteBin:(req,res)=>{
        newShelf = newShelf.filter(val=>req.params.id !== val.id)
        res.status(200).send(newShelf)
    }
}