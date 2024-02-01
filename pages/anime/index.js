import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export default function Anime() {

    return (
        <>
        <Container className="justify-content-center text-center">
            <Image src="/wip-gif.webp" width="500" height="300"></Image>
            <br/><br/>
            <h1>This page is still being worked on!</h1>
            <h4>While your here, why don&apos;t you check <Link href="/anime/1">this</Link> out?</h4>
        </Container>
        </>
    );
}