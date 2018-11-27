import React from 'react'
import NumberButton from './NumberButton.jsx'
import EqualButton from './EqualButton.jsx'
import '../style/calcStyle.scss'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      display: "",
      previousCalc: 0,
      previouslyOperated: 0,
      prevOp: ""
    }

    this.handleNumberButtonPress = this.handleNumberButtonPress.bind(this)
    this.handleOperatorButtonPress = this.handleOperatorButtonPress.bind(this)
  }

  handleNumberButtonPress(value){
    let tempDisplay = this.state.display
    if (this.state.previouslyOperated > 0) {
      tempDisplay = ""
    }
    if (tempDisplay.length === 9) {
      this.setState({
        display: tempDisplay,
        previouslyOperated : 0
      })
    } else if (tempDisplay.length < 9 ) {
      tempDisplay = tempDisplay + value
      this.setState({
        display: tempDisplay,
        previouslyOperated : 0
      })
    } else {
      this.setState({
        display: "TWILIGHT ZONE",
        previouslyOperated : 0
      })
    }

  }
  sum(previousDisplay, tempDisplay) {
    if (previousDisplay === 0) {
      this.setState({
        previousCalc : tempDisplay + previousDisplay,
        display : "",
        previouslyOperated : 1,
        prevOp: "+"
      })
    } else {
        if (previousDisplay + tempDisplay > 999999999 ) {
        this.setState({
          display: "ERROR",
          previousCalc: 0,
          previouslyOperated : 1
          
        })
      } else {
        this.setState({
        previousCalc : tempDisplay + previousDisplay,
        display : (tempDisplay + previousDisplay).toString(10),
        previouslyOperated : 1,
        prevOp: "+"
        })
      }
    }
  }

  mult(previousDisplay, tempDisplay) {
    if (previousDisplay === 0) {
      this.setState({
        previousCalc : tempDisplay,
        display : "",
        previouslyOperated : 1,
        prevOp: "*"
      })
    } else {
        if (previousDisplay * tempDisplay > 999999999 ) {
        this.setState({
          display: "ERROR",
          previousCalc: 0,
          previouslyOperated : 1
          
        })
      } else {
        this.setState({
          previousCalc : tempDisplay * previousDisplay,
          display : (tempDisplay * previousDisplay).toString(10),
          previouslyOperated : 1,
          prevOp: "*"
        })
      }
    }
  }

  division(previousDisplay, tempDisplay) {
    if (previousDisplay === 0) {
      this.setState({
        previousCalc : tempDisplay,
        display : "",
        previouslyOperated : 1,
        prevOp: "/"
      })
    } else {
        if (previousDisplay / tempDisplay < 0 || previousDisplay / tempDisplay === Infinity) {
        this.setState({
          display: "ERROR",
          previousCalc: 0,
          previouslyOperated : 1
        })
      } else {
          this.setState({
            previousCalc : previousDisplay / tempDisplay,
            display : (previousDisplay / tempDisplay).toFixed(2).toString(10),
            previouslyOperated : 1,
            prevOp: "/"
        })
      }
    }
  }
  resta(previousDisplay, tempDisplay){
    if (previousDisplay === 0) {
      this.setState({
        previousCalc : tempDisplay,
        display : "",
        previouslyOperated : 1,
        prevOp: "-"
      })
    } else {
        if (previousDisplay - tempDisplay < 0) {
        this.setState({
          display: "ERROR",
          previousCalc: 0,
          previouslyOperated : 1
        })
      } else {
        this.setState({
        previousCalc : previousDisplay - tempDisplay,
        display : (previousDisplay - tempDisplay).toString(10),
        previouslyOperated : 1,
        prevOp: "-"
      })
      }
    }
  }

  modulo(previousDisplay, tempDisplay){
    if (previousDisplay === 0) {
      this.setState({
        previousCalc : tempDisplay,
        display : "",
        previouslyOperated : 1,
        prevOp: "%"
      })
    } else {
        console.log("am i in here?")
        if (previousDisplay % tempDisplay < 0) {
        this.setState({
          display: "ERROR",
          previousCalc: 0,
          previouslyOperated : 1
        })
      } else {
        this.setState({
        previousCalc : previousDisplay % tempDisplay,
        display : (previousDisplay % tempDisplay).toString(10),
        previouslyOperated : 1,
        prevOp: "%"
      })
      }
    }
  }

  handleOperatorButtonPress(value){
    let previousDisplay = this.state.previousCalc
    let tempDisplay = parseInt(this.state.display, 10)
    if (value === '+') {
      this.sum(previousDisplay, tempDisplay)
     }
    if (value === '*') {
      this.mult(previousDisplay, tempDisplay)
    }
    
    if (value === '/' ) {
      this.division(previousDisplay, tempDisplay)
    }
    if (value === '-' ) {
      this.resta(previousDisplay, tempDisplay)
    }
    if (value === '%' ) {
      this.modulo(previousDisplay, tempDisplay)
    }
    if (value === 'C' ) {
        this.setState({
        previousCalc : 0,
        display : "",
        previouslyOperated : 0,
        prevOp: ""
      })
    }
    if (value === '=') {
      if(this.state.prevOp === "+") {
        this.sum(previousDisplay, tempDisplay)
      } 
      if(this.state.prevOp === "*") {
        this.mult(previousDisplay, tempDisplay)
      } 
      if(this.state.prevOp === "/") {
        this.division(previousDisplay, tempDisplay)
      } 
      if(this.state.prevOp === "-") {
        this.resta(previousDisplay, tempDisplay)
      } 
      if(this.state.prevOp === "%") {
        this.modulo(previousDisplay, tempDisplay)
      } 
    }
  }

  render() {
  return(
    <div className="calculator">
    <div className="input" id="input">{this.state.display}</div>
    <div className="buttons">
      <div className="operators">
      <NumberButton value={"+"} pressButton={this.handleOperatorButtonPress} />
      <NumberButton value={"-"} pressButton={this.handleOperatorButtonPress} />
      <NumberButton value={"*"} pressButton={this.handleOperatorButtonPress} />
      <NumberButton value={"/"} pressButton={this.handleOperatorButtonPress} />
      </div>
      <div className="leftPanel">
        <div className="numbers">
          <NumberButton value={7} pressButton={this.handleNumberButtonPress} />
          <NumberButton value={8} pressButton={this.handleNumberButtonPress} />
          <NumberButton value={9} pressButton={this.handleNumberButtonPress} />
        </div>
        <div className="numbers">
        <NumberButton value={4} pressButton={this.handleNumberButtonPress} />
        <NumberButton value={5} pressButton={this.handleNumberButtonPress} />
        <NumberButton value={6} pressButton={this.handleNumberButtonPress} />
        </div>
        <div className="numbers">
        <NumberButton value={1} pressButton={this.handleNumberButtonPress} />
        <NumberButton value={2} pressButton={this.handleNumberButtonPress} />
        <NumberButton value={3} pressButton={this.handleNumberButtonPress} />
        </div>
        <div className="numbers">
        <NumberButton value={0} pressButton={this.handleNumberButtonPress} />
        <NumberButton value={"%"} pressButton={this.handleOperatorButtonPress} />
        <NumberButton value={"C"} pressButton={this.handleOperatorButtonPress} />
        </div>
      </div>
      <EqualButton value={"="} pressButton={this.handleOperatorButtonPress} />
      
    </div>
  </div>)
  }
}

export default App