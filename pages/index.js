import { Container, Row, Col, Button, Card } from "react-bootstrap"
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Container className="justify-content-center text-center">
    <Image src="/logo.png" width="400" height="400"></Image>
    <br />
    <br />
    <h1>AniSearch</h1>
    <h3>Your one stop shop for everything Anime and Manga related!</h3>
    <p>**Site is still being worked on. Everything is subject to change.**</p>
    </Container>
    <br />
    <Container>
    <Row className="justify-content-center">
      <Col lg={3}>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <Card.Body>
          <Card.Title>Anime</Card.Title>
          <Card.Text>
          Write Something Here
          </Card.Text>
          <Button href="/anime" variant="primary">View Anime</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={3}>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <Card.Body>
          <Card.Title>Manga</Card.Title>
          <Card.Text>
            Write Something Here
          </Card.Text>
          <Button href="/manga" variant="primary">View Manga</Button>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={3}>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <Card.Body>
          <Card.Title>Characters</Card.Title>
          <Card.Text>
          Write Something Here
          </Card.Text>
          <Button href="/characters" variant="primary">View Characters</Button>
        </Card.Body>
      </Card>
      </Col>
            <Col lg={3}>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/100" />
        <Card.Body>
          <Card.Title>People</Card.Title>
          <Card.Text>
          Write Something Here
          </Card.Text>
          <Button href="/people" variant="primary">View People</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
    </>
  )
}
