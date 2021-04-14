import React from "react";
import Welcome from "./pages/welcome";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <Welcome />
    </div>
  );
};

export default App;
