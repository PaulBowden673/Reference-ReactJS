import React from "react";

const FunctionalGreetingWithProps = (props) => {
console.log(props)
//Props can be called anything and have to be added to App and called in function
return <h1>Hello from React With Props, {props.greeting} Mr {props.name} You are:{props.age}</h1>
}
export default FunctionalGreetingWithProps

//This is a stateless Functional component