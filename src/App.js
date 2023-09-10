import "./App.css";
import Form from "./form.js";
import Nav from "./navigation.js";
import "./nav.css";
import "./form.css";
import { useEffect, useState } from "react";
import "./body.css";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

function App() {
  const [theme, setTheme] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [style, setStyle] = useState(false);

  const change = () => {
    // setTheme((now) => (now === "dark" ? "light" : "dark"));
    setTheme(!theme);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  }, []);

  const style_btn = () => {
    setStyle(!style);
  };

  return (
    <div class="themes" id={theme ? "dark" : "light"}>
      {isLoader ? (
        <img
          src="https://usagif.com/wp-content/uploads/loading-73.gif"
          alt="load"
          class="load"
        ></img>
      ) : (
        <>
          <Nav onClickFunc={() => change()} newStyle={() => style_btn()} styles={style} />
          <br />
          <br />
          <Form />
        </>
      )}

      {/* <Nav onClickFunc = {() => change()}/>
    <br />
    <br />
    <Form /> */}
    </div>
  );
}

export default App;
