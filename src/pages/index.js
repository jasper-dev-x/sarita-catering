import React from "react";
import { XSizeFactor } from '../components/const';
import LOGO from "../icons/blackTxt.png";

export default function HomePage() {
  const fontSize = XSizeFactor() * .1;
  const height = XSizeFactor() * .25;
  const margin = 40;

  return (
    <div className="d-flex flex-fill justify-content-center align-items-center pe-none">
      <div className="lead logoTxt d-flex flex-fill flex-column align-items-center justify-content-center loadFade user-select-none" style={ { fontSize } }>
        <p style={ { marginRight: `${margin}px` } }>We're Not Just Better...</p>
        <p style={ { marginLeft: `${margin * 2}px` } }>We're <img src={ LOGO } alt="Sarita Catering" style={ { height } } /></p>
      </div>
    </div>
  );
}
