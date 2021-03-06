import { createGlobalStyle } from "styled-components";

export const AppReset = createGlobalStyle`
  :root {
    --root-size: 3vh;
    --root-min: 16px;
    --root-max: 20px;
  }

  @media (orientation: portrait) {
    --root-size: 3vw;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #root,
  main {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family: Arial, sans-serif;
    font-weight: normal;
    line-height: 1em;
    background-color: #1e1e1e;
    color: #fefefe;
  }
`;
