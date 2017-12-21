import {get} from "jquery";
import ServerActions from "./actions/ServerActions";

let API={
  fetchLinks(){
    console.log('1. In API');

    //Read teh data with an Ajax call
    //Ajax request to read /data/Links
    get("/links/links").done(resp => {
      console.log(resp);
        ServerActions.receiveLinks(resp);
    });

  }
};
export default API;
