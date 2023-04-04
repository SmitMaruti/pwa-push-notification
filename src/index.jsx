import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { firebaseApp } from "./utils/initFirebase";

const FirebaseAppContext = React.createContext();
FirebaseAppContext.displayName = "FirebaseAppContext";

render(
    <FirebaseAppContext.Provider value={firebaseApp}>
        <App />
    </FirebaseAppContext.Provider>,
    document.getElementById("home")
);
