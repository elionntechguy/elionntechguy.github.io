import { Home, About, Contact, Work } from "./views";

import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
