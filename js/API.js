import {post} from "jquery";
import ServerActions from "./actions/ServerActions";

let API={
  fetchLinks(){
    console.log('1. In API');

    //Read teh data with an Ajax call
    //Ajax request to read /data/Links
    post("/graphql", {
      query:`{links{_id,title,url}}`
    }).done(resp => {
      console.log(resp);
        ServerActions.receiveLinks(resp.data.links);
    });

  }
};
export default API;
