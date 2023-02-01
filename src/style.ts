import { createGlobalStyle}  from "styled-components";

export const GlobalTheme = createGlobalStyle`
  body {
      padding: 0;
      box-sizing: border-box;
      background: hsl(218, 23%, 16%);
      font-size: "Manrope";
      font-weight: 800;
      color: hsl(193, 38%, 86%);
  }
`