import React from 'react';
import {useState} from 'react';
import './Form.scss';

const Form = (props)=> {

  const [formData, setFormData] = useState({
    method: 'GET',
    url: '',
    body: '',
  });
  
  // const [isLoading, setIsLoading] = useState(false);

  // const handleClick = (e) => {
  //   const {name, value} = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //   method:"GET",
    //   url: "https://pokeapi.co/api/v2/pokemon",
    // };

    // call the handleApiCall function that passing inthe formData (object to the newState in App.jsx)
    props.handleApiCall(formData);
  }

  const handleFormInput = (e) => {
    //what was set previously is the ...formData
    const {name, value} = e.target;
    // (when its a variable you have to use square bracket notation) and set the name to whatever the value is. 
    setFormData({...formData, [name]: value})
  }

  const handleTextArea = (e) => {
    setFormData({...formData, body: e.target.value})
  }

  const handleButtonClick = (e) => {
    setFormData({...formData, method: e.target.id.toUpperCase() });
  };
    return (
      <>
        <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
          <label >
            <span>URL: </span>
            <input 
            name='url' 
            type='text'
            data-testid="formInput" 
            value={formData.url} 
            onChange={handleFormInput} 
            style={{
              marginRight: '10px',
              padding: '10px',
              borderRadius: '5px'
            }}
            />
            <button data-testid="goButton" style={{color: "black", background:'ivory', borderRadius: '5px', cursor: 'pointer'}} type="submit">GO!</button>
          </label>
          <label className="methods">
            <button className="method"id="get" type="button" onClick={handleButtonClick}>GET</button>
            <button className="method"id="post" type="button" onClick={handleButtonClick}>POST</button>
            <button className="method"id="put" type="button" onClick={handleButtonClick}>PUT</button>
            <button className="method"id="delete" type="button" onClick={handleButtonClick}>DELETE</button>
          </label>
          {/* whatever is on the left is true to move to the right */}
          {["PUT", "POST"].includes(formData.method) && 
          <textarea 
          data-testid='inputText'
            value={formData.body}
            style={{
              marginTop: '10px',
              padding: '5px',
              borderRadius: '5px',
              display: 'flex',
            }} 
            rows={10} 
            onChange={handleFormInput}
            name='body'
            
            />}
          {/* other way of doing this below: v v v */}
          {/* {(formData.method === "POST" || formData.method === "PUT") && <textarea />} */}
          {/* {myArray.length && {"BAD"}};
          {myArray.length >0 && {"GOOD"}}; */}
        </form>
      </>
    );

}

export default Form;
