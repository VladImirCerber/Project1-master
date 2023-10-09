import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
      super(props);
  }
  render() {
    const {name, surname, link} = this.props;
    return (
    <div>
        <h1>My name is {name}, surname - {surname}</h1>
        <a href={link}>My profile</a>
    </div>
    )
  }
}
function App() {
  return (
    <div className="App">
        <WhoAmI name={'John'} surname="Smith" link="facebook.com"/>
        <WhoAmI name={'Alex'} surname="Serebryakov" link="vk.com"/>
        <WhoAmI name={'Valde'} surname="Serebryakov" link="insta.com"/>
    </div>
  );
}

export default App;
