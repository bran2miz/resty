# React + Vite

## Project Name: Resty

# Author: Brandon Mizutani

# Overview

To this point, state has been owned and managed soley in class based React components, using 'this.state' with 'this.setState()' and instance methods to manage it all. 

Newer versions of React allow for "function components" to also manage their own state, using a newly exposed API, called "Hooks"

# Class Outline

rafce - react arrow function export component (auto creates a function based component)

- give the name of the state (variable name) and set a starting value. 
- no need to use "this"

# Lab 27 useEffect to tap into the lifestyle

- works in replacement of componentDidMount
- use an effect hook to manage state at various (tactical) times during the life of a component

- useEffect is a hook, it takes 2 arguments: callback function and a dependency array.

  useEffect(() => {
    // console.log('this is a callback function');
    // can do anything

    // if there isn't a url, don't run this and return to the callback.
    if (!newState.requestParams.url) return;
    (async () => {
      // make the request
      const url = newState.requestParams.url;

      const method = newState.requestParams.method;

    


      // make the request, get back data
      // ...newState is a spread operator
      // takes the object and spreads it apart
      // {data, requestParams}
      // {...newState, pizza: "yum"}
      // newState is now {data, requestParams, pizza: "yum"}
      // {data: {fjfjfje:}, requestParams: {url: "yaya", method: "GET"}, data {}}

      // new value of data will be an empty object or the things back from the request you make
      // don't use appState and use a different word, like previous where it will spread what previous was
      setState((prev) => ({ ...prev, data: {} }))

      // be very careful that you don't create a circular dependency where the state of the the thing you are watching changes every time the function runs
    })();
  }, [newState.requestParams])



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
    setState({data: {}, requestParams})
  }

# Lab 29

Technical Requirements / Note

Refactor your state management within the App component to use the useReducer() hook.

Replace any component state managements to use derived state from useReducer() with a reducer function and initial state. Suggested approach:

: Use a reducer to store and manage all application state: loading, results, history. Add to history array in state after every api call method, url, results (json).

: Iterates the history array in state and shows the previous API calls. When one is clicked on, show the results in the results component. Note: the results component renders whatever is in state.

Reminder:

- CORS policy is enforced by web browsers to prevent web pages from making requests to a different domain than the one that served the page.

- When you make a request using Axios to a different domain, the server hosting that domain needs to include the appropriate CORS headers in its response to allow your frontend application to access the requested resource.

- When you make a request using axios.get to appState.requestParams.url, if the server doesn't include the Access-Control-Allow-Origin header in its response with the appropriate value (e.g., allowing requests from http://localhost:5173), the browser blocks the request due to CORS policy.

- Alternatively, for testing and development purposes, you can use a mock response or a dummy request (ie mock object like the one in the useEffect()).This allows you to continue developing and testing your frontend application without being blocked by CORS policy.


Circular dependencies

- Circular dependencies can occur in JavaScript when two or more modules depend on each other directly or indirectly. Try to avoid a circular dependency between your useEffect and the module containing appState and dispatch.

In React, useEffect allows you to perform side effects in function components. However, it's crucial to understand that when useEffect dependencies are passed as an array, the effect runs after every render if any of the dependencies have changed.

By putting the condition if(appState.loading === true && appState.requestParams.method && appState.requestParams.url) at the beginning of your useEffect, it will ensure that the effect will only run when these conditions are met.

The cleanup function that happens after the async function will be called when the component unmounts. This is useful for cleaning up resources such as subscriptions or timers to avoid memory leaks.
