import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class myMenu extends Component {

	render() {
		return (
				<ul className="menuku">
					<li><a href="#">Home</a></li>
					<li><a href="#">Secure</a></li>
					<li><a href="#">Features</a></li>
					<li><a href="#">Exit</a></li>
				</ul>
			);
	}
}

ReactDOM.render(<myMenu />, document.getElementById('root'));