import { Container, Nav, Navbar } from "react-bootstrap"
import Link from "next/link"

export default function Footer() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <h5 className="text-white">AniSearch - Powered by <Link href="https://jikan.moe/">Jikan API</Link></h5>
            <h5 className="text-white">View Source Code on <Link href="https://github.com/cricci1">GitHub</Link></h5>
            </Container>
        </Navbar>
        </>
    )
}