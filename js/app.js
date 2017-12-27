import React from "react";
import ReactDOM from "react-dom";
// import Relay from "react-relay";
import {graphql} from 'react-relay';


import Main from "./components/Main";



ReactDOM.render(<Main  limit={4} />, document.getElementById('react'));

console.log(
  // Relay.QL`{links{title}}`
  graphql`query s{links{title}}`
);
