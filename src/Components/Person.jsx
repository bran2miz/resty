import {useEffect, useState} from "react";

const Person = (props) => {
    const { name, setName} = props;
    const [counter, setCounter] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    
    // useEffect is a function that takes two arguments
    // a function (and optional the function would return a clean up
    // effect)
    // a function and an arrray of dependencies (are things that could
    // change that would effect how this function would run)
    
    const handleClick = () => {
        setName("");
    }
    // can be used when state is changed, or when the button is clicked.
    useEffect(()=> {
        // this is great to use when:
        // you want something to run when the component mounts
        // you want something to run when a specific piece of state has changed. 
        console.log("is counting has changed!!")
        
        if(!isCounting) return;

        // setInterval(()=> {
        //     setCounter((prev) => prev + 1)
        // }, 1000)
    // empty dependency array it runs one time, if you remove the
    // dependency array it will run on every render
    // if you put stuff into the array it will only run when the things
    // change
        setName("Counting person");
        console.log("I run when my dependencies updated")
    }, [isCounting, setName]);

    useEffect(()=> {
        console.log("hello, I run when the component mounts");
    }, []);

    useEffect(()=> {
        console.log("no dependency array, I run ANY TIME state changes")
        //runs anytime any piece of state changes. 
    });

    return(
        <>
        <h2>{name}</h2>
        <button onClick={handleClick}>reset name</button>
        <h3> counter: {counter} </h3>
        <button onClick={() => setIsCounting(!isCounting)}>is counter? {isCounting? "true": "false"}</button>
        </>
    )

}
export default Person;