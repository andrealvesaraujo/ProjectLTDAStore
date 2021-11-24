import React from "react"
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Black.ttf';
import './fonts/Poppins-SemiBold.ttf';
import './fonts/Poppins-Bold.ttf';
import './App.scss';
import Logo from "./img/logoLojinha.png"
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
        <div className="container" >
          <main>
            <h2>Melhor Canal</h2>
            <h1>No Lojinha LTDA</h1>
            <p>Falando sobre tudo que a gente curte, sem conhecimento técnico <br />
              e muito pautado no achismo que nossas vidas são... <br />
              Bora cara que eu tenho que acordar cedo amanha.
            </p>
            <div>
              <button className="container-primary" onClick={()=> this.handleWatchNow(true)}><FontAwesomeIcon className="icon-button" icon={faPlay} /> Marvel vs DC</button>
              <button className="container-outline" onClick={()=> this.handleWatchTrailer(true)}><FontAwesomeIcon className="icon-button" icon={faPlay} /> Vilões da Disney</button>
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchNow} videoId="-C-TkiHR59U" onClose={() => this.handleWatchNow(false)} />
              <ModalVideo channel='youtube' autoplay isOpen={this.state.isWatchTrailer} videoId="Ccb_zZ430Eo" onClose={() => this.handleWatchTrailer(false)} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}