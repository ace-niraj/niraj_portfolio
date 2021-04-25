import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "./Landing-page/Landing";
import About from "./About/About";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Landing />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
