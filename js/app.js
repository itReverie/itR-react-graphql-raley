import React from "react";
import ReactDOM from "react-dom";
// import Relay from "react-relay";
import Relay from 'react-relay';


import Main from "./components/Main";



ReactDOM.render(<Main />, document.getElementById('react'));

// let query='query s{links{title}}';
//
console.log(Relay.QL`query s{links{title}}`);
