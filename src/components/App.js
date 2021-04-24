import Header from "./Header/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
