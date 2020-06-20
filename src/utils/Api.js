import axios from "axios";
const defaultURL = "https://randomuser.me/api/";

export default {
  search: (num) => {
    //set the url to initially only get 1 user
    let URL = defaultURL;
    //if a number is supplied, change the URL to get that many results
    if (num) {
      URL += '?results=' + num;
    }
    return axios.get(URL);
  },
};