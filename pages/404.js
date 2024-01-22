import { Container, Button } from 'react-bootstrap'
import Image from 'next/image'

export default function Custom404() {
    return (
        <>
        <Container className="justify-content-center text-center">
            <Image src="/404-gif.webp" width="500" height="300"></Image>
            <br/><br/>
            <h1>ERROR 404</h1>
            <h3>The page you were looking for does not exist!</h3>
            <br/>
            <Button href="/">Return Home</Button>
        </Container>
        </>
    )
}