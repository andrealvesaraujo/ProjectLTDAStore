import React from "react"
import ReactDOM from 'react-dom'
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
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isWatchNow: false,
      isWatchTrailer: false
    }
  }

  handleWatchNow = (value) => {
    this.setState({isWatchNow: value})
  }
  
  handleWatchTrailer = (value) => {
    this.setState({isWatchTrailer: value})
  }

  render() {
    return (
      <div className="content">
        <header>
          <img src={Logo} alt="Logo" />
          <nav>
            <a href="https://www.facebook.com/Nolojinhaltda" alt="Facebook" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/nolojinhaltda/" alt="Instagram" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
            <a href="/" alt="Twitter" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
            <a href="https://www.youtube.com/channel/UCm5cgfZlVsyjE4SeUnAqF4w" alt="Youtube" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="icon" icon={faYoutube} /></a>
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
              <button className="container-primary" onClick={()=> this.handleWatchNow(true)}><FontAwesomeIcon className="icon-button" icon={faPlay} /> Assistir agora</button>
              <button className="container-outline" onClick={()=> this.handleWatchTrailer(true)}>Assista o trailer</button>
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchNow} videoId="-C-TkiHR59U" onClose={() => this.handleWatchNow(false)} />
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchTrailer} videoId="Ccb_zZ430Eo" onClose={() => this.handleWatchTrailer(false)} />
            </div>
          </main>
          <div className="image-desktop">
            <img src={Fantasmas} alt="Fantasmas do Filme" />
          </div>
        </div>
      </div>
    );
  }
}