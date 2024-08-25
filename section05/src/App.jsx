import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Botton";
import { useState } from "react";
import Register from "./components/Register";
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
      <div>
        <Register></Register>
        <Main />
        <Footer />
        <Button text={"카페"} color={"red"} />
        <Button {...buttonProps} />
        <Button text={"메일"}>
          <div>자식요소 </div>
          <Header />
        </Button>
      </div>
    </>
  );
}

export default App;
