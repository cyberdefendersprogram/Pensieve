import React, { Component } from 'react';
import './password.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const isValue = this.state.value;

    event.preventDefault();
  }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }



validatePW(e){
   if(this.state.value != "password1234"){
     return alert("Input Validation! Password Incorrect");
     
   } else {
    
   }
 }
 
 render(){
   return(
     <form onsubmit="return validatePW(password__input)">
       <label className="password">Password
       <input type="password" className="password__input"/>
       </label>
       <input type="submit" id="submit" value="Submit"/>
     </form>
   )
 }
}
export default NameForm

