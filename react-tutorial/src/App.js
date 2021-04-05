import React from "react";
// import { useState } from "react";
import { useState } from "react";
import Content from "./Content";
import RecursiveButton from "./RecursiveButton";

function App(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          />
          Какое-то значениe
      </label>
    </div>
  );
}
// 09-31
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "AText",
//     };
//   }
//   hadlerChange(event) {
//     this.setState({
//       value: event.target.event,
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <br />
//         <input
//           value={this.state.value}
//           onChange={(e) => this.hadlerChange(e)}
//         />
//       </div>
//     );
//   }
// }
export default App;
