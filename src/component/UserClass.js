import React, { use } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // can't avoid this..why?
    // It calls the parent class's constructor and makes
    // the passed props available within the child component's constructor.

    this.state = {
      count: 100,
      userInfo:{
      }
    };

    console.log("Child constructor ");
  }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/rituraj08");
    const res = await data.json();

    this.setState({
        userInfo: res
    })

   //console.log(res);


    console.log("Child componentDidMount ");
  }

  componentDidUpdate(){

    console.log("Child componentDidUpdate ");

  }

  componentWillUnmount(){

    console.log("Child componentWillUnmount ");

  }

  render() {
    const { login}  = this.state.userInfo;
   
    console.log("Child render ");
    return (
      <div className="user-card">
        <h1>count : {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click Me
        </button>
        <h2> Name : {login}</h2>
        <h3> Location : Bengaluru </h3>
        <h4> Email : @ritu</h4>
      </div>
    );
  }
}

export default UserClass;
