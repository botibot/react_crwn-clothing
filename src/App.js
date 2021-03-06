import React from 'react';
import './App.css';
import { Route, Switch }from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
    <h1> Hats Page </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}
export default App;

// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       };
//     }

//   render(){
//     return (
//       <div>
//           <HomePage/>
//       </div>
//     );
//   }
// }

// export default App;