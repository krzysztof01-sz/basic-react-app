import React from 'react';

const allUsers = ["Anna", "Krzysiek", "Tomek", "Kasia", "Kamil", "Rysiek"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allUsers: allUsers}
  }
  render() {
    return (
      <div>
        <h1>Wyszukiwarka w create-react-app</h1>
        <input onChange={this.filterNames.bind(this)} type="text" />
        <MakeHTML usersList={this.state.allUsers}/>
      </div>
    )
  }

  filterNames(e) {
    const baseText = e.currentTarget.value;
    const filteredList = allUsers.filter(user => user.startsWith(baseText));
    this.setState({allUsers: filteredList});
  }
}

const MakeHTML = ({usersList}) => {
  if (usersList.length > 0) {
    return (
      <ul>
        {usersList.map(user => <li key={user}>{user}</li>)}
      </ul>
    )
  }

  return (
    <p>No results!</p>
  )
  
}

export default App;
