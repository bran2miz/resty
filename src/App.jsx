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
  // const [loader, setLoader] = useState(false)
  const [newState, setState] = useState({
    data: null,
    requestParams: {}
  });
// useState is a special function that can accept an argument
// the argument represents the starting value of the state
// returns an array of a getter and setter

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: "fake thing 1", url: "http://fakethings.com/1"},
        {name: "fake thing 2", url: "http://fakethings.com/2"},
      ],
    };
    // setting form data as requestParams
    //setState of requestParams (an empty object) to formData which is object with keys of method, url, and reqBody. 
    setState({data, requestParams})
  }


    return (
     <>
        <Header />
        <div>Request Method: {newState.requestParams.method}</div>
{/* use the newState which is the state object, the requestParams which the empty object that now has the formData, and grab the url key to render the url value from the form */}
        <div>URL: {newState.requestParams.url}</div>
        {newState.requestParams.body && <div>Body: {newState.requestParams.body}</div>}
        <Form handleApiCall={callApi} />
        <Results data={newState.data} />
        <Footer />
    </>
    );
  
}

export default App;
