import {Container, Card, CardColumns } from 'react-bootstrap';
function WorkContainer() {
  return (

    <div className="">
    <Container>
    <CardColumns>
  <Card>
    <Card.Img variant="top" src="" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  
</CardColumns>
</Container>
    </div>

  );
}

export default WorkContainer;
