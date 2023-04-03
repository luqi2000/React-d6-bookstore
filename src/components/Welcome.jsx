import { Container } from "react-bootstrap";

const Welcome = props => (
  <Container className="text-center">
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
  </Container>
);

export default Welcome;
