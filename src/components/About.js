
import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component did Mount");
        
    }

    render() {
       // console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React </h2>
                {/* <User name={"Akash Gangule (function)"}/> */}
    
                <UserClass name={"First"} location={"Pune Class"}/>
            </div>
        );
    }
}

/*
*
- Parent Constructor
- Parent render

    - FirstChild Constructor
    - FirstChild Render

    - SecondChild Constrctor
    - SecondChild Render

    - FirstChild ComponentDidMount
    - SecondChild ComponentDidMount

- Parent ComponentDidMount
*
*/

export default About;