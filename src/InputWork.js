import {Container, Form, Button} from 'react-bootstrap';

function InputWork() {
  return (
    <div className="">
    <Container className="bg-light p-3 rounded rounded">
    

  <Form.Row >
    <div class="col-md-5">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="text" placeholder="Project name" />
    </div>
    <div class="col-md-6">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="text" placeholder="Project name" />
    </div>

    {/* <Form.Text className="text-muted">
    </Form.Text> */}

<div class="col-md-6">
    <Form.Label>Project Name</Form.Label>
    <Form.Control type="text" placeholder="Project name" />
    </div>


    

  </Form.Row>

  <Button className="float-right btn-success" type="submit">
    POST
    </Button> 

    </Container>
    </div>
  );
}

export default InputWork;