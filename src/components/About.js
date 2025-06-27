import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is about my app</h2>
            <User/>
            <UserClass name ={"Aryan Gupta wo bhi class wala"} />
        </div>
    )
}

export default About;