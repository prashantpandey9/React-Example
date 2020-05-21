import React from 'react';
import './App.css';
// import Tweet from './Tweet';
// import State from './state';
// import Counter from './Counter';
// import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent'
import UserGreeting from './UserGreeting'
import NameList from './NameList'
function App(){

   return(
    <div className='app'>
      {/* <Tweet name="Prashant" message="He is an Engineer"/>
      <Tweet name='John Snow' message="He is an Engineer"/>
      <Tweet name="winter is coming" message="yes"/>
      <Tweet name="mosh" message="He is an Engineer"/> */}
      {/* <State/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <NameList />
    </div>
    
  );
}
export default App;
