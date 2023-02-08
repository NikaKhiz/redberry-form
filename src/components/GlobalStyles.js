import { createGlobalStyle } from "styled-components";
import HelveticaNeue from "../assets/fonts/HelveticaNeue.ttc";
export const GlobalStyles = createGlobalStyle`
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
    --clr-lighter-gray: #bcbcbc;
    --clr-veryLight-gray: #f8f8f8;
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
    font-size: 16px;
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
    .resumeCont {
      flex: 70%;
    }
  }
  .fieldsCont {
    display: flex;
    gap: 50px;
    padding: 50px 40px;
    background: var(--clr-veryLight-gray);
    .fields {
      width: 100%;
      padding: 0 60px;
      .fieldsHeading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--clr-off-black);
      }
      form {
        width: 100%;
        height: 100%;
        padding: 60px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap:30px;
        overflow-y: auto;
        .groupsCont {
          display: flex;
          flex-direction: column;
          gap: 30px;
          .formGroup {
            display: flex;
            justify-content: space-between;
            gap: 50px;
            > * {
              flex: 100%;
            }
            .formControl {
              display: flex;
              flex-direction: column;
              gap: 10px;
              label {
                font-size: 16px;
                color: var(--clr-primary-black);
                font-weight: var(--fw-neutral);
              }
              span {
                font-size: 14px;
                color: var(--clr-dark-gray);
                font-weight: 300;
              }
              input,
              textarea {
                font-size: 16px;
                width: 100%;
                padding: 10px;
                border: 1px solid var(--clr-lighter-gray);
                border-radius: 5px;
                color: var(--clr-primary-black);
                resize: none;
                &::placeholder {
                  font-weight: 400;
                  color: var(--clr-neutral-gray);
                }
                &:focus {
                  outline: none;
                }
              }
            }
          }
        }
        .formButtons {
          display: flex;
          align-items: center;
          justify-content: ${(props) =>
            props.page > 1 ? "space-between" : "flex-end"};
          button {
            background-color: var(--clr-primary-violet);
            border: none;
            padding: 15px 35px;
            border-radius: 5px;
            color: var(--clr-primary-white);
            cursor: pointer;
          }
        }
      }
    }
    .resetBtn {
      border: none;
      cursor: pointer;
      background: transparent;
    }
  }
`;
