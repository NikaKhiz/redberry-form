import { createGlobalStyle, css } from "styled-components";

export const Globals = createGlobalStyle`${css`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *,
  *::after,
  *::before {
    margin: inherit;
    padding: inherit;
    box-sizing: inherit;
  }
  .wrapper {
    width: max(375px, 90%);
    min-height: 100vh;
    margin-inline: auto;
    display: flex;
    justify-content: center;
  }
`}`;
