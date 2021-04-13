import MainContent from "./components/MainContent";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import GettingConnected from "./components/GettingConnected";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import resume from "./assets/resume.pdf";
// import { ResponsiveEmbed } from "react-bootstrap";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/resume">
            <embed
              src={resume}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "100vh",
                width: "100%",
                display: "flex",
              }}
              type="application/pdf"
            />
          </Route>
          <Route path="/">
            <MainContent />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
