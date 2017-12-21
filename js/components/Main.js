import React from "react";
import API from "../API";
import LinkStore from "../stores/LinkStore";

export default class Hello extends React.Component {

    //before the UI renders
    // componentWillMount(){
    //     debugger;
    // }

    //after the ui is displayed
  componentDidMount(){
    API.fetchLinks();
  }

  render() {
return (
    <div>
        <h3>Links</h3>
    <ul>
        <li>Link...</li>
        <li>Link...</li>
    </ul>
</div>);

  }
}
