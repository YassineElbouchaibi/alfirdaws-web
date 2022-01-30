import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  shape: { borderRadius: 10 },
  typography: { fontFamily: "Source Sans Pro" },
  components: {
    MuiAppBar: {
      defaultProps: { color: "default" },
      styleOverrides: {
        colorInherit: { backgroundColor: "#689f38", color: "#fff" },
      },
    },
  },
  mixins: {},
  palette: {
    mode: "light",
    primary: { main: "#449d44" },
    secondary: { main: "#449d44" },
  },
  spacing: 8,
});

export default lightTheme;
