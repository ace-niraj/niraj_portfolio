import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "./Landing-page/Landing";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Landing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
