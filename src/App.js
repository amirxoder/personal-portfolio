import "./App.css";
import { Header, Home, About, Skills, Services } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App;
