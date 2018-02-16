import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Shelf from '../shelf/Shelf'
import Shelves from '../shelves/Shelves'
import Bins from '../bins/Bins'

export default function Home(){
    return(
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' component={Shelves} exact/>
                <Route path={`/shelf/:bin`} component={Shelf}/>
                <Route path={`/shelf/:bin/:id`} component={Bins}/>
            </Switch>
        </div>
    )
}