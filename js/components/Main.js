import React from "react";
import API from "../API";
import LinkStore from "../stores/LinkStore";
import PropTypes from "prop-types";

//Useful variable that will retrieve the current state for the links
let _getAppState = () => {
  return {links: LinkStore.getAll()};
};



class Main extends React.Component {

 //Static properties that need some babel configuration
  static propTypes = {
    limit: PropTypes.number.isRequired
  }

  static defaultProps = {
    limit:3
  }

  state=_getAppState();

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

  //onChange event can now be a preperty so now we don't need manual binding
  onChange=()=>{
    this.setState(_getAppState());
  }

  render() {

let content = this.state.links.slice(0, this.props.limit).map(link => {
  return  <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
          </li>;});

return (
    <div>
        <h3>Links</h3>
    <ul>
        {content}
    </ul></div>);

  }
}



export default Main;
