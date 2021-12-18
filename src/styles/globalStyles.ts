import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
 .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;
