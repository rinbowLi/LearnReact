import React, { Component } from "react";

//定义context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

function ProfileHeader(props) {
  return (
    <UserContext.Consumer>
      {(value) => {
        console.log(value)
        return (
          <div>
            <h2>用户昵称: {value.nickname}</h2>
            <h2>用户等级:{value.level} </h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}


function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    // const {nickname, level} = this.state;

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
