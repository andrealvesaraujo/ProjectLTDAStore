import React from "react"
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Black.ttf';
import './fonts/Poppins-SemiBold.ttf';
import './fonts/Poppins-Bold.ttf';
import './App.scss';
import Logo from "./img/logo.svg"
import Fantasmas from "./img/fantasmas.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram , faTwitter} from "@fortawesome/free-brands-svg-icons"

function App() {
  return (
    <div className="content">
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <a href="/" alt="Facebook" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
          <a href="/" alt="Instagram" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
          <a href="/" alt="Twitter" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
          <a href="/" alt="Youtube" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
        </nav>
      </header>
      <div className="image-mobile">
        <img src={Fantasmas} alt="Fantasmas do Filme" />
      </div>
      <div className="container" >
        <main>
          <h2>HAYAO MIYAZAKI</h2>
          <h1>A VIAGEM DE <br /> CHIHIRO</h1>
          <p>Chihiro chega a um mundo mágico dominado por <br />
            uma bruxa. Aqueles que a desobedecem são <br />
            transformados em animais.
          </p>
          <div>
            <button className="container-primary">Assistir agora</button>
            <button className="container-outline">Assista o trailer</button>
          </div>
        </main>
        <div className="image-desktop">
          <img src={Fantasmas} alt="Fantasmas do Filme" />
        </div>
      </div>
    </div>
  );
}

export default App;
