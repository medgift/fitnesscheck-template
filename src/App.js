import "./App.css";
import firebase from "firebase/compat/app";
import firebaseApp from "./initFirebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useEffect, useState } from "react";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {
  // Local signed-in state.
  const [isSignedIn, setIsSignedIn] = useState(null);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });

    // Make sure we un-register Firebase observers when the component unmounts.
    return () => unregisterAuthObserver();
  }, []);

  // Sign out
  const handleSignOutClick = async () => {
    await firebaseApp.auth().signOut();
  };

  // Not initialized yet - Render loading message
  if (isSignedIn === null) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    );
  }

  // Not signed in - Render auth screen
  if (!isSignedIn)
    return (
      <div className="App">
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebaseApp.auth()}
        />
      </div>
    );

  // Signed in - Render app
  return (
    <div className="App">
      <h1>Welcome to the Fitness Check!</h1>
      <button onClick={handleSignOutClick}>Sign Out</button>
    </div>
  );
}

export default App;
