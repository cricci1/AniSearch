import { Card } from 'react-bootstrap';

export default function EpisodeCard(props) {

    return (
        <>
        <Card>
            <Card.Header>
                <b>#{props.index + 1} - {props.episode.title}</b> 
                <br/> 
                <b>Romanji:</b> {props.episode.title_romanji} <b>Japanese:</b> {props.episode.title_japanese}
                <br/>
                <b>Score:</b> {props.episode.score}
                <br/> 
            </Card.Header>
        </Card>
        </>
    )
    
}