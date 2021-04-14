import React from "react";
import Welcome from "./pages/welcome";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";


const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <Welcome />
    </div>
  );
};

export default App;
