import { Card } from 'react-bootstrap';

export default function StaffCard(props) {

    return (
        <>
        <Card>
            <Card.Img variant="top" width="100px" height="250px" src={props.staffMember.person.images.jpg.image_url}/>
                <Card.Body>
                    <Card.Title>{props.staffMember.person.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.staffMember.positions.length > 0 ? <> {props.staffMember.positions.map((position) => position).join(', ')} </> : "Unknown"}</Card.Subtitle>
                    <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
    
}