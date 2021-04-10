import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

const App = () => {
  const getUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
  };

  return (
    <div>
      <AmplifySignOut />
      <button onClick={getUser}> Make Api Call Test</button>
    </div>
  );
};
export default withAuthenticator(App);
