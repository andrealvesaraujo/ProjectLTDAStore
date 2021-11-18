import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Black.ttf';
import './fonts/Poppins-SemiBold.ttf';
import './fonts/Poppins-Bold.ttf';
import './App.scss';
import React from "react"
import logo from "./img/logo.svg"

function App() {
  return (
    <div className="content">
      <header>
        <img src={logo} alt="Logo"></img>
        <nav>
        </nav>
      </header>
      <main>
        <h2>HAYAO MIYAZAKI</h2>
        <h1>A VIAGEM DE CHIHIRO</h1>
        <p>Chihiro chega a um mundo mágico dominado por uma bruxa. 
          Aqueles que a desobedecem são transformados em animais.
        </p>
        <div>
          <button>Assistir agora</button>
          <button>Assista o trailer</button>
        </div>
      </main>
    </div>
  );
}

export default App;
