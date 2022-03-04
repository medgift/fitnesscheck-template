import firebaseApp from "../initFirebase";
import { Link } from "react-router-dom";

export default function Home() {
  // Sign out
  const handleSignOutClick = async () => {
    await firebaseApp.auth().signOut();
  };

  return (
    <div>
      <h1>Welcome to the Fitness Check!</h1>
      <p>
        <Link to="/questionnaire">Go To Questionnaire</Link>
      </p>
      <button onClick={handleSignOutClick}>Sign Out</button>
    </div>
  );
}
