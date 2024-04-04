import React, {useState} from 'react';


import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [newState, setState] = useState({
    data: null,
    requestParams: {}
  });


  const callApi = () => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: "fake thing 1", url: "http://fakethings.com/1"},
        {name: "fake thing 2", url: "http://fakethings.com/2"},
      ],
    };
    setState({...newState, data})
  }


    return (
     <>
        <Header />
        <div>Request Method: {newState.requestParams.method}</div>
        <div>URL: {newState.requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={newState.data} />
        <Footer />
    </>
    );
  
}

export default App;
