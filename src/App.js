import './App.css';

function App() {
  return (
    <div className="home">
      <div className="navbar">
        <img src={require("./images/logo.png")} alt="logo" />
        <button className="btn">Register</button>
      </div>
      <div className="title">
        <div style={{ fontSize: "30px", margin: "20px 0" }}>Welcome To Our</div>
        <h1 style={{ fontSize: "60px", margin: "20px 0" }}>Creative Studio</h1>
        <button className="btn">Take a Tour</button>
      </div>
      <div className="side-bar">
        <div className="menu">
          <img src={require("./images/menu.png")} alt="bars" />
        </div>
      </div>
      <div class="bubbles">
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
        <img src={require("./images/bubble.png")} />
      </div>
    </div>
  );
}

export default App;
