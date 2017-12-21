import React from "react";
import API from "../API";
import LinkStore from "../stores/LinkStore";

//Useful variable that will retrieve the current state for the links
let _getAppState = () => {
  return {links: LinkStore.getAll()};
};


//
export default class Main extends React.Component {

 constructor (props){
   super(props);
   this.state=_getAppState();
   this.onChange= this.onChange.bind(this);
 }


  //after the UI is rendered
  componentDidMount(){
    API.fetchLinks();
    //register a listener to teh store emmiter
    LinkStore.on("change", this.onChange);
  }

  //before the UI is rendered
  componentWillMount(){
    LinkStore.removeListener("change", this.onChange);
  }

  //onChange event
  onChange(){
    console.log("4. In the View");
    this.setState(_getAppState());
  }

  render() {

let content = this.state.links.map(link => {
  return  <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
          </li>;});

return (
    <div>
        <h3>Links</h3>
    <ul>
        {content}
    </ul>
</div>);

  }
}
