const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('./servercontroller')

const port = 3005
    , app = express();

app.use(bodyParser.json())

app.get('/api/shelf',ctrl.readBin)
app.post('/api/shelf',ctrl.createBin)
app.put('/api/shelf/:bin',ctrl.updateBin)
app.delete('/api/shelf/:bin',ctrl.deleteBin)

app.listen(port, ()=>console.log(`Listening on port ${port}`))