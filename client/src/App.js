import React from "react";
import Welcome from "./pages/welcome";
<<<<<<< HEAD
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
=======
>>>>>>> bf4dea79176fc8dd2337505da11b82236ef245a6

const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <Welcome />
    </div>
  );
};

export default App;
