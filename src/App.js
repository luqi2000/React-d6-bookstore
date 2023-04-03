import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Container>
      <MyNav />
      <Welcome title="Welcome" subtitle="Epibooks" />

      {/* <AllTheBooks /> */}
      <BookList books={fantasy} />

      <MyFooter />
    </Container>
  );
}

export default App;
