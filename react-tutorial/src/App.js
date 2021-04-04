import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // используем привязку контекста
   this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick () {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    
    return (
      <button onClick={this.handlerClick}>
        На меня нажила {this.state.counter} раз
      </button>
    );
  }
}

// class App extends React.Component {
//   // осуществляется монтирование
//   constructor(props) {
//     super(props);

//     this.intervalFlag = null;

//     this.state = {
//       title: "Текущее время",
//       date: new Date(),
//       counter: 0,
//     };
//   }
//   // происходит состояние монтирования
//   componentDidMount() {
//     this.intervalFlag = setInterval(() => {
//       this.setState((state, props) => ({
//         date: new Date(),
//         counter: state.counter + 1,
//       }));
//     }, 1000);
//   }
//   // происходит состояние обнавления
//   componentDidUpdate() {
//     console.log("componentDidUpdate called");
//   }
//   // происходит состояние размонтирования
//   componentWillUnmount() {
//     clearInterval(this.intervalFlag);
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.title}</p>
//         <p>{this.state.counter}</p>
//         <p>{this.state.date.toLocaleTimeString()}</p>
//       </div>
//     );
//   }
// }

export default App;
