import "../styles/navbar.scss";
import RavenImg from "../assets/RavenEmblem.png";

const Navbar = () => {
  return (
    <header className="navbarWrapper">
      <img className="navbarEmblem" src={RavenImg}></img>
      <h1 className="title">Wordle</h1>
    </header>
  );
};

export default Navbar;
