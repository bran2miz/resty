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

useReducer
useMemo
useCallback