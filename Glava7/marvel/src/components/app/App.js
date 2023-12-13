import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../recources/img/vision.png";

class App extends Component{

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    // state = {
    //     showRandomChar: true
    // }

    // toggleRandomChar = () => {
    //     this.setState((state) => {
    //         return {
    //             showRandomChar: !state.showRandomChar
    //         }
    //     })
    // }

    render () {
        return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* {this.state.showRandomChar ? */}
                 <RandomChar/> 
                {/* //  : null} */}
                {/* <button onClick={this.toggleRandomChar}>Click me</button> */}
                <div className="char__content">
                    <CharList onCharSelected={this.onCharSelected}/>
                    <CharInfo charId={this.state.selectedChar}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
        )
    }
    }

export default App;
