
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default"
            }
        };

        console.log("Child Constructor")

    }
    
    async componentDidMount(){
        console.log("Child Component did Mount");

        //API call
        const data = await fetch("https://api.github.com/users/akashgangule14");      
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("ComponenetDid Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
        console.log("Child Render");

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
            <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contat : @akash11</h4>
            </div>
        );
    }
}

export default UserClass;


/*
* ----- MOUNTING ------
* 
* Constructor (Dummy)
* Render (Dummy)
*       <HTML Dummy />
*
* ComponentDid Mount
*       <API Call />
*       <this.setState/>   -> State variable is updated
*
*------ UPDATING ------
*       
*       render(API Data)
*       <HTML (new API Data) />
*       componentDid Update
*
*
*
*/


