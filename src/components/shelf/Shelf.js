import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './shelf.css'


export default class Shelf extends Component {
    constructor(props){
        super(props)
        this.state={
            bin: ['1','2','3','4','5'],
            hasItem: false,

        }
    }
   
    
    render(){
        let displayedBins = this.state.bin.map((id,i)=>{
            return(
                <div>
                    <ul>
                        <li>
                            <Link to={`/bin/${id}`} key = {i}>
                                <button className='shelfButton'>Bin {id}</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )
        })
       
        return(
            <div>
                <h1>{displayedBins}</h1>
            </div> 
        )
    }
}