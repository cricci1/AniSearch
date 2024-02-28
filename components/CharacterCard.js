import { Card } from 'react-bootstrap'

export default function CharacterCard(props) {

    return (
        <>
        <Card>
            <Card.Img variant="top" width="100px" height="250px" src={props.character.character.images.jpg.image_url}/>
                <Card.Body>
                    <Card.Title>{props.character.character.name}</Card.Title>
                    <Card.Text>{props.character.role}</Card.Text>
            </Card.Body>
        </Card>
        </>
    )

}