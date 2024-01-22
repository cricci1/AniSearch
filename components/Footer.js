import { Container, Navbar } from "react-bootstrap"
import Image from 'next/image'
import Link from "next/link"

export default function Footer() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <h5 className="text-white">AniSearch - Powered by <Image src="/jikan-logo.png" width="25" height="25"/>  <Link href="https://jikan.moe/">Jikan API</Link></h5>
            <h5 className="text-white">View Source Code: <Image src="/github-mark-white.png" width="25" height="25"/>  <Link href="https://github.com/cricci1">GitHub</Link></h5>
            </Container>
        </Navbar>
        </>
    )
}