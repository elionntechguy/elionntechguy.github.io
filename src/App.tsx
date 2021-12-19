import { lazy, Suspense } from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import { GlobalStyle } from "./styles/global";

import LoadingPage from "./components/LoadingPage";

import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";

import pMinDelay from "p-min-delay";

const Home = lazy(() => pMinDelay(import("./views/Home"), 2000));
const About = lazy(() => import("./views/About"));
const Work = lazy(() => import("./views/Work"));
const Contact = lazy(() => import("./views/Contact"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <GlobalStyle />
        <NavigationBar />
        <Home />
        <About />
        <Work />
        <Contact />
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
