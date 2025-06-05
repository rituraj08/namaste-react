import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  // Parent, UserClass->Child
  constructor(props) {
    super(props);

    console.log("Parent constructor ");
  }

  componentDidMount() {
    console.log("Parent componentDidMount ");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate ");
  }

  render() {
    console.log("Parent render ");
    return (
      <div>
        <h1>About!!</h1>
        <User name={"Ritu"} />
        <UserClass name={"Ritu"} />
        <div>

         $$$ LoggedIn User :

           <UserContext.Consumer>
            {
            (data) =>   <h3>{data.loggedInUser}</h3>
            }
        </UserContext.Consumer>

        </div>
       
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User name={"Ritu"}/>
//       <UserClass name={"Ritu"}/>
//     </div>
//   );
// };

export default About;
