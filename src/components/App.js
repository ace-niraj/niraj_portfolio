import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "./Landing-page/Landing";
import About from "./About/About";
import Service from "./Services/Services";
import Skills from "./Skills/Skill";
import Contact from "./Contact/Contact";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Landing />
      <About />
      <Service />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
