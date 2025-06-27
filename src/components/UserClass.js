import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
         userInfo:{
            name:"Dummy",
            location:"sudf",
            avatar_url:"sfjsj",
         },
        }
        }
    async componentDidMount( ){
        const data = await fetch("https://api.github.com/users/kunalkushwaha");
        const json = await data.json();
         this.setState({
            userInfo:json,
         })
    }
    
    
    render(){
        const {name , location , avatar_url}=this.state.userInfo;
           return(
        <div className="user-card">
        <img src={avatar_url}></img>
            <h2>{name}</h2>
            <h2>{location}</h2>
            <h2>Contact Us: 39403829</h2>
        </div>
    );
        
    }
}

export default UserClass;