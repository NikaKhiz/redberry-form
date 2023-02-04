import { createGlobalStyle, css } from "styled-components";
import HelveticaNeue from "../assets/fonts/HelveticaNeue.ttc";
export const GlobalStyles = createGlobalStyle`${css`
  :root {
    // colors
    --clr-primary-blue: #0e80bf;
    --clr-primary-violet: #6b40e3;
    --clr-primary-red: #e52f2f;
    --clr-primary-black: #000000;
    --clr-off-black: #1a1a1a;
    --clr-primary-white: #ffffff;
    --clr-neutral-gray: #00000099;
    --clr-dark-gray: #2e2e2e;
    --clr-light-gray: #909090;
    // fonts
    --fw-primary: 400;
    --fw-bold: 700;
    --fw-neutral: 500;
  }
  @font-face {
    font-family: HelveticaNeue;
    src: url(${HelveticaNeue}) format("truetype");
  }
  body {
    font-family: HelveticaNeue;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
  .wrapper {
    width: max(375px, 90%);
    height: 100vh;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    > * {
      flex: 100%;
    }
  }
`}`;
