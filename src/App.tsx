import { ThemeProvider } from "styled-components";
import lightTheme from "./assets/style/lightTheme";
import darkTheme from "./assets/style/darkTheme";
import { useAppSelector } from "./redux/hooks";
import { GeneralStyle } from "./assets/style/general";
import { NormalizeStyle } from "./assets/style/normalize";
import { Container } from "./components/Container/Container";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { themeToggle } from "./redux/slice/themeSlice";
import { useDispatch } from "react-redux";
import { langToggle } from "./redux/slice/langSlice";
import { AboutSection } from "./components/AboutSection/AboutSection";

function App() {
  const theme = useAppSelector(state => state.theme)
  
  const dispatch = useDispatch()
  
  return (
    <ThemeProvider  theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <div style={{width: "max-content", paddingBottom: "20px", marginLeft: "auto"}}>
          <button onClick={() => dispatch(themeToggle({}))}>theme</button>
          <button onClick={() => dispatch(langToggle("eng"))}>eng</button>        
          <button onClick={() => dispatch(langToggle("rus"))}>rus</button>        
          <button onClick={() => dispatch(langToggle("uzb"))}>uzb</button>        
        </div>
        <HeroSection />
        <AboutSection />
      </Container>
      <GeneralStyle />
      <NormalizeStyle />
    </ThemeProvider>
  );
}

export default App;
