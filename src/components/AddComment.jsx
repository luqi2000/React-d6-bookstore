import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddComments() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="recensione">
        <Form.Label>Recensione:</Form.Label>
        <Form.Control type="text" placeholder="Write your comment" />

        <Form.Label>Valutazione:</Form.Label>
        <Form.Control type="number" min={1} max={5} placeholder="select from 1 to 5" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddComments;
