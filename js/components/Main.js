import React from "react";

export default class Hello extends React.Component {

    //before the UI renders
    componentWillMount(){
        debugger;
    }

    //after the ui is displayed
  componentDidMount(){
    debugger;
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
