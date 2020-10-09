import React from 'react';
import './App.css'
import Form from './components/Form'

import Tables from './components/Table'


function App() {
  return (
    <div>
      <div className="row ml-5">
        
        
            <div className="col-3 mt-5">
              <Form></Form>
            </div>
            <div className="col-7 offset-1 mt-5">
              <Tables></Tables>
            </div>
          
      </div>



    </div>
  );
}

export default App;
