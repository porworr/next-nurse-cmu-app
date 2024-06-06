'use client';

import { createTheme} from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import { Kanit} from "next/font/google";
import { K2D} from "next/font/google";

export const kanit = Kanit({
    weight: ["200", "300", "400", "500", "600"],
    subsets: ["thai"],
  });
// export const k2d = K2D({
//   weight: ["200", "300", "400", "500", "600"],
//   subsets: ["thai"],
// });

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: kanit.style.fontFamily,
        fontSize: 16,
        h1: {
          fontSize: 40,
        },
        h2: {
          fontSize: 32,
        },
        h3: {
          fontSize: 24,
        },
        h4: {
          fontSize: 20,
        },
        h5: {
          fontSize: 18,
        },
        h6: {
          fontSize: 16,
        },
    },
    palette: {
      primary: {
        main: '#ab47bc',
      },
      secondary: {
        main: '#fbc02d',
      },
    },
  };

const theme = createTheme(themeOptions);

export default theme;