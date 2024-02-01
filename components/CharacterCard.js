import { Card, Row, Col } from 'react-bootstrap'

export default function CharacterCard() {
    return (
        <>
        <Row>
            <Col>Image</Col>
            <Col className="justify-content-start">Character Name <br/>Voice Cast</Col>
            <Col>Image</Col>
        </Row>
        </>
    )
}