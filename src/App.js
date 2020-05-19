import React from 'react';
import Tweet from './Tweet';
import State from './state';
function App(){

   return(
    <div className='app'>
      {/* <Tweet name="Prashant" message="He is an Engineer"/>
      <Tweet name='John Snow' message="He is an Engineer"/>
      <Tweet name="winter is coming" message="yes"/>
      <Tweet name="mosh" message="He is an Engineer"/> */}
      <State/>
    </div>
    
  );
}
export default App;
