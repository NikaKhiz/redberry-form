import { createGlobalStyle, css } from "styled-components";
const FinalResumeGlobal = createGlobalStyle`${css`
  .finalResumeCont {
    display: flex;
    justify-content: space-between;
    box-sizing: content-box;
    padding: 60px;
    .finalResume {
      border: 1px solid var(--clr-off-black);
      padding: 70px;
      max-width: 800px;
      min-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .resumeOutput {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .privateInfo {
          display: flex;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--clr-lighter-gray);
          max-width: 100%;
          .private {
            display: flex;
            flex-direction: column;
            gap: 20px;
            font-size: 16px;
            font-weight: var(--fw-primary);
            word-wrap: break-word;
            .contacts {
              display: flex;
              flex-direction: column;
              gap: 10px;
              color: var(--clr-off-black);
              & > * {
                display: flex;
                align-items: center;
                gap: 10px;
              }
            }
            h1 {
              font-size: 35px;
              font-weight: var(--fw-bold);
              color: var(--clr-primary-red);
            }
          }

          .privateImg > img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            display: block;
            object-fit: cover;
          }
        }
        .experience {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 16px;
          font-weight: var(--fw-primary);
          word-wrap: break-word;
        }
        .education {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-size: 16px;
          font-weight: var(--fw-primary);
          word-wrap: break-word;
        }
        .heading {
          color: var(--clr-primary-red);
          font-weight: var(--fw-bold);
          font-size: 18px;
        }
      }
    }
    .modalCont {
      .modal {
        max-width: 400px;
        display: ${(props) => (props.modal ? "bock" : "none")};
        border-radius: 10px;
        box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
        padding: 30px;
        position: relative;
        p {
          font-size: 30px;
          font-weight: var(--fw-neutral);
          color: var(--clr-off-black);
        }
        button {
          cursor: pointer;
          font-size: 20px;
          width: 20px;
          height: 20px;
          border: none;
          background-color: transparent;
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }
    .reset {
      height: 50px;
      width: 50px;
      padding: 5px;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      .resetBtn {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
`}

`;
export default FinalResumeGlobal;
