import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import API from "../utils/API";

var _id;
// save as state in global variable

function Welcome() {
  // useEffect(() => {
  //   checkUser();
  // }, []);

  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    _id = user.attributes.sub;
    const username = user.username;
    const results = await API.checkUser2(_id, username);
    console.log(results);
  };

  return <div>{<button onClick={checkUser}> Check Function </button>}</div>;
}

export default withAuthenticator(Welcome);
