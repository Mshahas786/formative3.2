import { Container, Form, Button } from "react-bootstrap";

function InputWork() {
  return (
    <div className="mt-5">
      <Container className="align-middle">
        <Form className="col-md-5 float-right bg-warning rounded ">
          <div className="mt-2">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="ProjectName"
              placeholder="Project name"
            />
          </div>
          <div className="mt-2">
            <Form.Label>Project Cover Image</Form.Label>
            <Form.Control
              type="url"
              name="ProjectCoverUrl"
              placeholder="project Cover image url"
            />
          </div>

          {/* <Form.Text className="text-muted">
    </Form.Text> */}

          <div className="mt-2">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="AuthorName"
              placeholder="Author Name"
            />
          </div>

          <div className="mt-2">
            <Form.Label>Project link</Form.Label>
            <Form.Control
              type="link"
              name="ProjectLink"
              placeholder="Project link"
            />
          </div>

          <div className="float-right">
            <Button className="btn btn-success my-2">Post</Button>
          </div>
        </Form>

        {/* <Button className="float-right btn-success" type="submit">
    POST
    </Button>  */}
      </Container>
    </div>
  );
}

export default InputWork;
