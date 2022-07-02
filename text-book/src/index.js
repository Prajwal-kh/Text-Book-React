// React is best when we are implementing single page application means when navigating to other
// components page do not get refreshed & only required section is updated & rest is unchanged
// Now we don't need to call server each time for response which is controlled by JS.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// run the app by >npm run build(To deployment) then, >npm start(Development)
// don't put any sensitive file inside public folder.
