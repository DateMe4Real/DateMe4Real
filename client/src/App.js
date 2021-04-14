import React from "react";
import Welcome from "./pages/welcome";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <Welcome />
    </div>
  );
};

export default App;
