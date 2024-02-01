// import React, { Component, Fragment } from 'react';
// import styled from 'styled-components';
// import BootstrapTest from './BootstrapTest';

// import './App.css';

// const EmpItem = styled.div`
//     padding: 20px;
//     margin-bottom: 15px;
//     border-radius: 5px;
//     box-shadow: 5px 5px 10px rgba(0,0,0, .2);
//     a {
//         display: block;
//         margin: 10px 0 10px 0;
//         color: ${props => props.active ? 'orange' : 'black'};
//     }
//     input {
//         display: block;
//         margin-top: 10px;
//     }
// `;

// const Header = styled.h2`
//     font-size: 22px;
// `;

// export const Button = styled.button`
//     display: block;
//     padding: 5px 15px;
//     background-color: gold;
//     border: 1px solid rgba(0,0,0, .2);
//     box-shadow: 5px 5px 10px rgba(0,0,0, .2);
// `;

// class WhoAmI extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//       super(props);
//       this.state = {
//           years: 27,
//           text: '+++',
//           position: ''
//       }
//   }

//   nextYear = () => {
    
//     this.setState(state => ({
//       years: state.years + 1
//   }))
//   }

//   commitInputChanges = (e, color) => {
//       console.log(color);
//       this.setState({
//         position: e.target.value
//       })
//   }

//   render() {
//     const {name, surname, link} = this.props;
//     const {position, years} = this.state;
//     return (
//     <EmpItem active>
//         <Button onClick={this.nextYear} >{this.state.text}</Button>
//         <Header>My name is {name}, surname - {surname},
//         age - {years},
//         position - {position}</Header>
//         <a href={link}>My profile</a>
//         <form>
//             <span>Введите должность</span>
//             <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//         </form>
//     </EmpItem>
//     )
//   }
// }

// const Wrapper = styled.div`
//     width: 600px;
//     margin: 80px auto 0 auto;
// `;

// const DynamicGreating = (props) => {
//     return (
//         <div className={'mb-3 p-3 border border-' + props.color}>
//             {
//                 React.Children.map(props.children, child => {
//                     return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
//                 })
//             }

//         </div>
//     )
// } 

// const HelloGreating = () => {
//     return (
//         <div style={{'width': '600px', 'margin': '0 auto'}}>
//             <DynamicGreating color={'primary'}>
//                     <h2>Hello world!</h2>
//                 </DynamicGreating>
//         </div>
//     )
// }

// const Message = (props) => {
//     return (
//         <h2>The counter is {props.counter}</h2>
//     )
// }

// class Counter extends Component {
//     state = {
//         counter: 0
//     }

//     changeCounter = () => {
//         this.setState(({counter}) => ({
//             counter: counter + 1
//         }))
//     }

//     render() {
//         return (
//             <>
//                 <button
//                     className={'btn btn-primary'}
//                     onClick={this.changeCounter}>
//                     Click me
//                 </button>
//                 {this.props.render(this.state.counter)}
//             </>
//         )
//     }
// }

// function App() {
//   return (
//     <Wrapper>

//         <Counter render={counter => (
//             <Message counter={counter}/>
//         )}/>

//         <HelloGreating/>
//         <BootstrapTest
//             left = {
//                 <DynamicGreating color={'primary'}>
//                     <h2>This weel was hard</h2>
//                     <h2>Hello world!</h2>
//                 </DynamicGreating>
//             }
//             right = {
//                 <DynamicGreating color={'primary'}>
//                     <h2>Right!</h2>
                    
//                 </DynamicGreating>
//             }
//         />

//         <WhoAmI name={'John'} surname="Smith" link="facebook.com"/>
//         <WhoAmI name={'Valde'} surname="Serebryakov" link="insta.com"/>
//     </Wrapper>
//   );
// }

// export default App;


import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

class Form extends Component {
    // myRef = React.createRef();

    // componentDidMount() {
    //     this.myRef.current.focus();
    // }

    setInputRef = elem => {
        this.myRef = elem;
    }

    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                            ref={this.setInputRef}
                            type="email" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div
                    style={{'width': '500px',
                            'height': '150px',
                            'backgroundColor': 'red',
                            'position': 'absolute',
                            'right': '-50%',
                            'bottom': '-50%'}}>
                        Hello
                    </div>
                </form>
            </Container>
        )
    }
}

class TextInput extends Component {

    doSmth = () => {
        console.log('smth');
    }

    render() {
        return (
            <input 
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>

        )
    }
}
function App() {
    return (
        <Form/>
    );
}

export default App;
