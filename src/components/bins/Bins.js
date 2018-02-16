import React, { Component } from 'react';
import axios from 'axios'


export default class Bins extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        axios.get('/api/shelf').then(res=>{
            this.setState({
                
            })
        })
    }

    handleChange(value,prop){
        this.setState({
            [prop]:value
        })
    }

    handleUpdate(){
        const body = {
            name: this.state.name,
            price: this.state.price,
        }
        axios.put(`/api/shelf/:bin/${this.props.state.newShelf[this.props.state.hasItem].id}`,body).then((newShelf)=>{
        })
    }

    handleDelete(){
        axios.delete(`/api/shelf/:bin${this.props.state.newShelf[this.props.state.hasItem].id}}`).then((newShelf)=>{
        })
    }


    render(){
        const {newShelf} = this.props.state
        return (
            <div className='container'>
                <div className="contBox">
                    <div className="nameBox">Name:<input onChange={(e)=>this.handleChange(e.target.value,'name')} value = {this.state.name}/></div>
                    <div className="priceBox">Price:<input onChange={(e)=>this.handleChange(e.target.value,'price')} value = {this.state.price}/></div>
                </div>
                
                <ul className='updateDelete'>
                    <li><button className="button" onClick={()=>this.handleUpdate()}>Update</button></li>
                    <li><button className="delete" onClick={()=>this.handleDelete()}>Delete</button></li>
                </ul>
            </div>
        )
    }
}