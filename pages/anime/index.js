import { Container } from 'react-bootstrap'
import Image from 'next/image'

export default function Anime() {

    return (
        <>
        <Container className="justify-content-center text-center">
            <Image src="/wip-gif.webp" width="500" height="300"></Image>
            <br/><br/>
            <h1>This page is still being worked on!</h1>
            <h4>While your here, why don't you check <a href="/anime/1">this</a> out?</h4>
        </Container>
        </>
    );
}
