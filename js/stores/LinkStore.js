import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";

let _links=[];

class LinkStore extends EventEmitter
{
  //we need to gegister with teh AppDispatcher

  constructor(props){
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
        console.log("3.In Store");
         // do someting with the data
        _links = action.links;
        //we emit a chaneg event
        this.emit("change");
          break;
        default:

      }
    });
  }


}

//Stores are singletons
export default new LinkStore();
