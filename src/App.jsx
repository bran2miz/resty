import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import TestComponent from './Components/TestComponent';

const App = () => {
  // const [loader, setLoader] = useState(false)
  const [newState, setState] = useState({
    data: {},
    requestParams: {}
  });
  // useState is a special function that can accept an argument
  // the argument represents the starting value of the state
  // returns an array of a getter and setter


  // listen for the state (newState.requestParams) when it changes (url and method, maybe body)
  // when they change, make a http request 
  // update the DATA (appState.data) to the new values. 


  // use a useEffect to do this
  //OPTION 1 (option 2 in README.md)
  useEffect(() => {
    // console.log('this is a callback function');
    // can do anything
    // use wrap the async function in parenthesis so that it turns it into an anonymous function

    // if there isn't a url, don't run this and return to the callback.
    if (!newState.requestParams.url) return;

    // if data return newState.
    // early exit gate
    if (newState.data && Object.keys(newState.data).length) return;
    // run this function only if I don't have data...:
    (async () => {
      // make the request
      const url = newState.requestParams.url

      const method = newState.requestParams.method
      console.log(url, method)
      // make a dummy request
      // const request = {
      //   count: 2,
      //   results: [
      //     { name: "fake thing 1", url: "http://fakethings.com/1" },
      //     { name: "fake thing 2", url: "http://fakethings.com/2" },
      //   ],
      // };

      
      // make the request, get back data
      const {data} = await axios.get(newState.requestParams.url);



      // ...newState is a spread operator
      // takes the object and spreads it apart
      // {data, requestParams}
      // {...newState, pizza: "yum"}
      // newState is now {data, requestParams, pizza: "yum"}
      // {data: {fjfjfje:}, requestParams: {url: "yaya", method: "GET"}, data {}}

      // new value of data will be an empty object or the things back from the request you make

      setState({ ...newState, data })

      // be very careful that you don't create a circular dependency where the state of the the thing you are watching changes every time the function runs
    })();
    return () => {
      console.log('component unmounts');
    }
  }, [newState])

  const callApi = (requestParams) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     {name: "fake thing 1", url: "http://fakethings.com/1"},
    //     {name: "fake thing 2", url: "http://fakethings.com/2"},
    //   ],
    // };
    // setting form data as requestParams
    //setState of requestParams (an empty object) to formData which is object with keys of method, url, and reqBody. 
    setState({ data: {}, requestParams })
  }




  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {newState.requestParams.method}</div>
      {/* use the newState which is the state object, the requestParams which the empty object that now has the formData, and grab the url key to render the url value from the form */}
      <div>URL: {newState.requestParams.url}</div>
      {newState.requestParams.body && <div>Body: {newState.requestParams.body}</div>}
      <Form handleApiCall={callApi} />
      {/* {<Results data={newState.data} />} */}
      {Object.keys(newState.data).length > 0 && <Results data={newState.data} />}        
      <Footer />
      <TestComponent />
    </React.Fragment>
  );

}

export default App;
