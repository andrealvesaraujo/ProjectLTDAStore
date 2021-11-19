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
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </nav>
      </header>
      <div className="container-image">
        <img src={Fantasmas} alt="Fantasmas do Filme" />
      </div>
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
    </div>
  );
}

export default App;
