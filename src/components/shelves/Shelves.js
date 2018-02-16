import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './shelves.css'


export default class Shelves extends Component {
    constructor(props){
        super(props)
        this.state={
            shelvesName: ['A','B','C','D']
        }
    }

    render(){
        let displayedShelves = this.state.shelvesName.map((bin,i)=>{
            return(
                <div>
                    <ul>
                        <li>
                            <Link to={`/shelf/${bin}`} key = {i}>
                            <button className='shelvesButton'>Shelf {bin}</button>
                            </Link> 
                        </li>
                    </ul>
                </div>         
            )
        })
        return(
            <div>
                <h1>{displayedShelves}</h1>
            </div> 
        )
    }
}