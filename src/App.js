import React from 'react';
import Tweet from './Tweet'
function App(){

   return(
    <div className='app'>
      <Tweet name="Prashant"/>
      <Tweet name='John Snow'/>
      <Tweet name="winter is coming"/>
      <Tweet name="mosh"/>

    </div>
  );
}
export default App;