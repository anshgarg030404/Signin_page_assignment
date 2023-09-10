import * as React from "react";
import Switch from "@mui/material/Switch";

function Nav(props) {
  const { onClickFunc,newStyle,styles } = props;
  

  return (
    <nav class="ele">
      <div class="elements">
        <ul class="el">
          <li>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e1032523533081.563248d9c852b.png"></img>
          </li>
          <li ><button class={styles ? "styles btn_style" :"btn_style"} onClick={newStyle} >Style Me</button></li>
          <div class="check">
          <li class="space">Dark&emsp;&emsp;&nbsp;light</li>
          <li ><Switch onClick={onClickFunc} ></Switch></li>
          </div>

        </ul>
      </div>
    </nav>
  );
}
export default Nav;


