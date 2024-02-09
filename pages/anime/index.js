import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export default function Anime() {
    
    return (
        <>
        <Container className="justify-content-center text-center">
            <Image src="/wip-gif.webp" width="500" height="300"></Image>
            <br/><br/>
            <h1>Work in Progress!</h1>
            <h4>The plan is to have this page showcase the current seasonal anime as well as allow for you to search for a specific anime. While I finalize all the details, you can use any valid MyAnimeList id in the URL to view a specific anime. (Example: /anime/1)</h4>
            <br/>
            <h4>If you need some help, check out some of my favourites: </h4>
            <h4><Link href="/anime/9253">Steins;Gate</Link> <Link href="/anime/31240">Re:Zero</Link> <Link href="/anime/17895">Golden Time</Link></h4>
        </Container>
        </>
    );

}