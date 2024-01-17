import { Container, Nav, Navbar } from "react-bootstrap"

export default function MainNav() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <img alt="" src="logo.png" width="35" height="35" className="d-inline-block align-top"/>&nbsp;&nbsp;&nbsp;
                <Navbar.Brand href="/">AniSearch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link href="/anime">Anime</Nav.Link>
                            <Nav.Link href="manga">Manga</Nav.Link>
                            <Nav.Link href="characters">Characters</Nav.Link>
                            <Nav.Link href="people">People</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}