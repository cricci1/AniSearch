import { Button, Container, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from 'swr';

export default function AnimeByID() {
    
    const [activeSection, setActiveSection] = useState('overview');
    const [characterData, setCharacterData] = useState([]);
    const [staffData, setStaffData] = useState([]);
    const [episodeData, setEpisodeData] = useState([]);

    const handleSectionClick = (section) => {

        setActiveSection(section);

    };
    
    const router = useRouter();
    const { id } = router.query;

    // Fetches overview data from the Jikan API
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR(id ? `https://api.jikan.moe/v4/anime/${id}/full` : null, fetcher);

    // Checks if the section is set to either Characters, Staff, or Episodes and if the data is already loaded. If not, it loads the data.
    async function getAdditionalAPIData(section) {

        if (section === "Characters" && characterData.length === 0) {

            const { data: characterData } = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`).then((res) => res.json());
            setCharacterData(characterData)

        } else if (section === "Staff" && staffData.length === 0) {

            const { data: staffData } = await fetch(`https://api.jikan.moe/v4/anime/${id}/staff`).then((res) => res.json());
            setStaffData(staffData)

        } else if (section === "Episodes" && episodeData.length === 0) {

            const { data: episodesData } = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`).then((res) => res.json());
            setEpisodeData(episodesData)

        }
    }

    // If the data is not found, returns a 404 page.
    if (data && data.error) {
        return (
            <>
                <h1>No Data Found!</h1>
                <h4>Are you sure the ID you entered was correct?</h4>
            </>
        );
    }

    // While the data is still being fetched, returns a loading spinner.
    if (!data) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const { data: animeData } = data;

    console.log(animeData)
    console.log(characterData)
    console.log(staffData)
    console.log(episodeData)

    return (
        <>
        <Container>
            <Row className="gy-4">
                <Col lg={3}>
                    <img src={animeData.images.jpg.large_image_url} width="300px" height="466px"/>
                    <br/><br/>
                    <h4><u>Information</u></h4>
                    <p><b>Type: </b>{animeData.type ? <>{animeData.type}</> : <>Unknown</>}</p>
                    <p><b>Episodes: </b>{animeData.episodes ? <>{animeData.episodes}</> : <>Unknown</>}</p>
                    <p><b>Status: </b>{animeData.status ? <>{animeData.status}</> : <>Unknown</>}</p>
                    <p><b>Aired: </b>{animeData.aired.string ? <>{animeData.aired.string}</> : <>Unknown</>}</p>
                    <p><b>Premiered: </b>{animeData.season ? <>{animeData.season} {animeData.year}</> : <>Unknown</>}</p>
                    <p><b>Broadcast: </b>{animeData.broadcast.string ? <>{animeData.broadcast.string}</> : <>Unknown</>}</p>
                    <p><b>Producers: </b>{animeData.producers.length > 0 ? <>{animeData.producers.map((producer) => producer.name).join(', ')}</> : <>Unknown</>}</p>
                    <p><b>Licensors: </b>{animeData.licensors && animeData.licensors.length > 0 ? <>{animeData.licensors.map((licensors) => licensors.name).join(', ')}</> : <>Unknown</>}</p>
                    <p><b>Studios: </b>{animeData.studios.length > 0 ? <>{animeData.studios.map((studios) => studios.name).join(', ')}</> : <>Unknown</>}</p>
                    <p><b>Source: </b>{animeData.source ? <>{animeData.source}</> : <>Unknown</>}</p>
                    <p><b>Genres: </b>{animeData.genres.length > 0 ? <>{animeData.genres.map((genres) => genres.name).join(', ')}</> : <>Unknown</>}</p>
                    <p><b>Themes: </b>{animeData.themes.length > 0 ? <>{animeData.themes.map((themes) => themes.name).join(', ')}</> : <>Unknown</>}</p>
                    <p><b>Duration: </b>{animeData.duration ? <>{animeData.duration}</> : <>Unknown</>}</p>
                    <p><b>Rating: </b>{animeData.rating ? <>{animeData.rating}</> : <>Unknown</>}</p>
                    <h5><u>Statistics</u></h5>
                    <p><b>Score: </b>{animeData.score ? <>{animeData.score} (scored by {animeData.scored_by} MAL users)</> : <>N/A</>}</p>
                    <p><b>Ranked: </b>{animeData.rank ? <>#{animeData.rank}</> : <>N/A</>}</p>
                    <p><b>Popularity: </b>{animeData.popularity ? <>#{animeData.popularity}</> : <>N/A</>}</p>
                    <p><b>Members: </b>{animeData.members ? <>{animeData.members}</> : <>N/A</>}</p>
                    <p><b>Favorites: </b>{animeData.favorites ? <>{animeData.favorites}</> : <>N/A</>}</p>
                </Col>
                <Col lg={8}>
                {animeData.title ? <><h1>{animeData.title}</h1></> : <></>}
                {animeData.title_english && animeData.title_japanese && (<p><b>English:</b> {animeData.title_english}, <b>Japanese:</b> {animeData.title_japanese}</p>)}
                <Button onClick={() => {handleSectionClick('overview')}}>Overview</Button>
                &nbsp;
                <Button onClick={() => {handleSectionClick('characters'); getAdditionalAPIData("Characters");}}>Characters</Button>
                &nbsp;
                <Button onClick={() => {handleSectionClick('staff'); getAdditionalAPIData("Staff");}}>Staff</Button>
                &nbsp;
                <Button onClick={() => {handleSectionClick('episodes'); getAdditionalAPIData("Episodes");}}>Episodes</Button>
                <br />
                <br />
                {activeSection === 'overview' && (
                    <>
                    <h4><u>Synopsis</u></h4>
                    {animeData.synopsis ? <><p>{animeData.synopsis}</p></> : <><p>No synopsis information has been added to this title.</p></>}
                    <h4><u>Background</u></h4>
                    {animeData.background ? <><p>{animeData.background}</p></> : <><p>No background information has been added to this title.</p></>}
                    <h4><u>Related Anime</u></h4>
                    {animeData.relations ? <>{animeData.relations.map((relation, relationIndex) => (
                        <>
                        <b>{relation.relation}: </b>
                        {relation.entry.map((entry) => entry.name).join(', ')} 
                        <br />
                        </> 
                    ))}</> : <><p>No related anime has been added to this title.</p></>}
                    
                    <br/>
                    <Row className="gy-4">
                        <Col lg={6}>
                        {animeData.theme.openings ? (
                            <>
                            <h4><u>Opening Theme</u></h4>
                            <p>{animeData.theme.openings.map((opening) => (<span key={opening}>{opening}<br /></span>))}</p>
                            </>
                            ) : 
                            <>
                            <h4><u>Opening Theme</u></h4>
                            <p>No Information Found.</p>
                            </>
                        }
                        </Col>
                        <Col lg={6}>
                        {animeData.theme.endings ? (
                            <>
                            <h4><u>Ending Theme</u></h4>
                            <p>{animeData.theme.endings.map((ending) => (<span key={ending}>{ending}<br /></span>))}</p>
                            </>
                            ) : 
                            <>
                            <h4><u>Ending Theme</u></h4>
                            <p>No Information Found.</p>
                            </>
                        }
                        </Col>
                    </Row>
                    </>
                )}

                {activeSection == 'characters' && (
                    <>
                    <h1>Characters</h1>
                    <h3>Work in Progress</h3>
                    </>
                )}

                {activeSection == 'staff' && (
                    <>
                    <h1>Staff</h1>
                    <h3>Work in Progress</h3>
                    </>
                )}

                {activeSection == 'episodes' && (
                    <>
                    <h1>Episodes</h1>
                    <h3>Work in Progress</h3>
                    </>
                )}
                </Col>
            </Row>
        </Container>
      </>
    )};
