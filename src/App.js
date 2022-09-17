import Wrapper from "./components/Wrapper/Wrapper";
import "./App.scss";
import logo from "./assets/logo.svg"

function App() {
  return (
    <div className="App">

      <div className="fixed-stuff">
        <div className="header">
          <div className="header-left">
            <div className="menu-btn">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <img className="logo-zara" src={logo} alt="" />
          </div>
          <div className="header-right">
            <p className="hr-elem search-bar">RECHERCHER</p>
            <p className="hr-elem">SE CONNECTER</p>
            <p className="hr-elem">AIDE</p>
          </div>
        </div>
      </div>

      <Wrapper></Wrapper>
    </div>
  );
}

export default App;
