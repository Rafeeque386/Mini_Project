import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Header from './Components/Header';
import India from './Components/India';





export class App extends Component {
  render() {
    return (
      
               <div className="container-fluid">

                <Router>
                  <Header/>
                <Switch>

                    <Route exact path="/">
                         <India/>
                    </Route>

                   <Route exact path="/india">
                         <India/>
                   </Route>

                    

                   
                  
                  
                  
                </Switch>
                
                   </Router>
                   
             </div>
    )
  }

}
export default App
