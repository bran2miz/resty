import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
// import TestComponent from './Components/TestComponent';
import History from './Components/History';


const initialState = {
    data: {},
    requestParams: {},
    history: [],
    loading: true
}
// inside of history this is what each object would look like: history: [
//                url: "something",
//                method: 'GET',
//                results: ''
//             ]

const reducerFunction = (state, action) => {
    // add results (which updates data and pushes a new history item)
    // add params (called from the callAPI function and adds the form data)
    switch (action.type) {
        case 'SET_REQUEST_PARAMS':
            return {...state, requestParams:action.data, data:{}, loading:true};
        case 'SET_DATA':
            return {...state, data: action.data, loading:false, history:[...state.history,action.history]};
        default:
            return state;
    }   
    }
 

// update the appState to use useReducer, add history as a property
const App = () => {
    const [appState, dispatch] = useReducer(reducerFunction, initialState);

    // right here we will dipatch updating data, and we will add a record to history (addResult)
    //history: [{url: "something", method: 'GET', results:''}]
    const callApi = async (requestParams) => {
        console.log(requestParams)
        const action = {
            type: 'SET_REQUEST_PARAMS',
            data:requestParams
        }
        dispatch(action)
    }



    useEffect(()=> {
    // console.log('this is a callback function');
    // can do anything

   
    
    // if (appState.loading && !appState.requestParams.url) return;
   
    // // if data return newState.
    // // early exit gate
    
    // if (appState.loading && appState.data && Object.keys(appState.data).length) return;

     // if there isn't a url, there isn't a method and it isn't loading don't run this and return to the callback.
    if(appState.loading === true && appState.requestParams.method && appState.requestParams.url) {
    // wrap the async function in parenthesis so that it turns it into an anonymous function
    (async () => {
        // make the request
        // console.log("this is new state", newState);

        //this is to use it for an actual website, in which you have access to do CRUD stuff with CORS policy
        // const responseData = await axios.get(appState.requestParams.url);
        // console.log(responseData);
        
        const url = appState.requestParams.url
  
        const method = appState.requestParams.method
        console.log(url, method);

        // this is the mock request that you add to see if you are retreiving the history and the fake data when you do CRUD stuff. 
        const request = {
            data: {
              count: 2,
              results: [
                { name: "fake thing 1", url: "http://fakethings.com/1" },
                { name: "fake thing 2", url: "http://fakethings.com/2" },
              ],
            },
          };
        
        // console.log(responseData)
        
        // could add an uuid on the responseData so that in your History.jsx you aren't assigning your key with just the idx.
        const historyObj = {url:url, method:method, data:request.data }

        const action = {
            type: "SET_DATA",
            data: request.data,
            history: historyObj
        }

        dispatch(action);
        
    })();
        return() => {
            console.log('component unmounts');
        }
    }
    }, [appState])
    

    // addParams
    return (
        <React.Fragment>
          <Header />
          <div>Request Method: {appState.requestParams.method}</div>
          {/* use the appState which is the state object, the requestParams which the empty object that now has the formData, and grab the url key to render the url value from the form */}
          <div>URL: {appState.requestParams.url}</div>
          {appState.requestParams.body && <div>Body: {appState.requestParams.body}</div>}
          <Form handleApiCall={callApi} />
          {/* {<Results data={appState.data} />} */}
          {/* {Object.keys(appState.data).length > 0 && <Results data={appState.data} />}  */}
        <main>
          <Results data={appState.data} />
          <History history={appState.history} 
          />    
        </main>   
          <Footer />
        </React.Fragment>
      );
}
export default App;