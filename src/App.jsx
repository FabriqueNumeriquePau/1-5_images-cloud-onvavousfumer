import Logo from "./components/header/Logo.jsx";
import "./assets/styles.css";
import UploadFile from "./components/header/UploadFile.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState({ mail: null, pwd: null });
  const [authenticaded, setAuthenticaded] = useState(false);

  const connexion = () => {
    if (authenticaded === false) {
      var mail = prompt("Enter your mail adress !");
      var pwd = prompt("Enter your password !");
      if ((mail.length >= 10) & (pwd.length >= 8)) {
        setUser({ mail: mail, pwd: pwd });
        setAuthenticaded(true);
      } else {
        alert("Merci de saisir des identifiants valides !");
      }
    }
  };

  useEffect(() => {
    connexion();
  }, []);

  return (
    <main>
      {authenticaded ? (
        <>
          <Logo />
          <UploadFile />
          <Gallery />
        </>
      ) : (
        <button className="delete-button" onClick={() => connexion()}>
          Please connect to your account now !
        </button>
      )}
    </main>
  );
}
