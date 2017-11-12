import React from 'react';
import moment from 'moment';
import ReduxDemoForm from './ReduxForm/index.jsx';

const App = (props) => {
  const handleSubmit = (data) => {
    console.log('submitted data ', data);
  }
  return (
    <div>
      <ReduxDemoForm 
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default App;