import { Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import CharacterCard from '@/components/CharacterCard';

export default function Anime() {

    return (
        <>
        <Container className="justify-content-center text-center">
            <Row>
            <Col>
            <CharacterCard></CharacterCard>
            </Col>
            </Row>
        </Container>
        </>
    );
}
