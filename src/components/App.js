import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
      <Footer />
    </ThemeProvider>
  );
}

export default App;
