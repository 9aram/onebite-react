import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Botton";

const Header2 = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  const buttonProps = {
    text: "mail",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Button text={"카페"} color={"red"} />
      <Button {...buttonProps} />
      <Button text={"메일"}>
        <div>자식요소 </div>
        <Header />
      </Button>
    </>
  );
}

export default App;
