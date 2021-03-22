import { Container, Card, CardColumns } from "react-bootstrap";
function WorkContainer() {
  return (
    <div className="mt-5">
      <Container>
        <CardColumns>
          <Card className="mt-2">
            <Card.Img
              variant="top"
              src="https://www.biography.com/.image/t_share/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
            />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
    </div>
  );
}

export default WorkContainer;
