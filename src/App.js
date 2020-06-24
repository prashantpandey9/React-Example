// import React from 'react';
// import './App.css';
// import Tweet from './Tweet';
// import State from './state';
// import Counter from './Counter';
// import FunctionClick from './FunctionClick';
// import ClassClick from './ClassClick';
// import EventBind from './EventBind';
// import ParentComponent from './ParentComponent'
// import UserGreeting from './UserGreeting'
// import NameList from './NameList'
// import Stylesheet from './Stylesheet'
// import Inline from './Inline'
// function App(){

//    return(
//     <div className='app'>
//       {/* <Tweet name="Prashant" message="He is an Engineer"/>
//       <Tweet name='John Snow' message="He is an Engineer"/>
//       <Tweet name="winter is coming" message="yes"/>
//       <Tweet name="mosh" message="He is an Engineer"/> */}
//       {/* <State/> */}
//       {/* <Counter/> */}
//       {/* <FunctionClick/> */}
//       {/* <ClassClick/> */}
//       {/* <EventBind/> */}
//       {/* <ParentComponent /> */}
//       {/* <UserGreeting /> */}
//       {/* <NameList /> */}
//       {/* <Stylesheet primary={true}/> */}
//       <Inline/>
//     </div>
    
//   );
// }
// export default App;

import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
class App extends Component {
  render() {
    return (
      <div className='app'>
        <Form/> 
      </div>
    )
  }
}

export default App
