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

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data } = useSWR(id ? `https://api.jikan.moe/v4/anime/${id}/full` : null, fetcher);

    async function getAdditionalAPIData(section) {

        console.log(staffData)

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

    if (data && data.error) {
        return (
            <>
                <h1>No Data Found!</h1>
                <h4>Are you sure the ID you entered was correct?</h4>
            </>
        );
    }

    if (!data) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const { data: animeData } = data;
    console.log(animeData)

    return (
        <>
        <Container>
            <Row className="gy-4">
                <Col lg={3}>
                    <img src={data.data.images.jpg.large_image_url} width="300px" height="466px"/>
                    <br/>
                    <br/>
                    <h4><u>Information</u></h4>
                    {animeData.type ? <><p><b>Type:</b> {animeData.type}</p></> : <></>}
                    {animeData.episodes ? <><p><b>Episodes:</b> {animeData.episodes}</p></> : <></>}
                    {animeData.status ? <><p><b>Status:</b> {animeData.status}</p></> : <></>}
                    {animeData.aired.string ? <><p><b>Aired:</b> {animeData.aired.string}</p></> : <></>}
                    {animeData.season ? <><p><b>Premiered:</b> {animeData.season} {animeData.year}</p></> : <></>}
                    {animeData.broadcast.string ? <><p><b>Broadcast:</b> {animeData.broadcast.string}</p></> : <></>}
                    {animeData.producers && animeData.producers.length > 0 ? <p><b>Producers:</b> {animeData.producers.map((producer) => producer.name).join(', ')}</p> : <></>}
                    {animeData.licensors && animeData.licensors.length > 0 ? <p><b>Licensors:</b> {animeData.licensors.map((licensors) => licensors.name).join(', ')}</p> : <></>}
                    {animeData.studios && animeData.studios.length > 0 ? <p><b>Studios:</b> {animeData.studios.map((studios) => studios.name).join(', ')}</p> : <></>}
                    {animeData.source ? <><p><b>Source:</b> {animeData.source}</p></> : <></>}
                    {animeData.genres && animeData.genres.length > 0 ? <p><b>Genres:</b> {animeData.genres.map((genres) => genres.name).join(', ')}</p> : <></>}
                    {animeData.themes && animeData.themes.length > 0 ? <p><b>Themes:</b> {animeData.themes.map((themes) => themes.name).join(', ')}</p> : <></>}
                    {animeData.duration ? <><p><b>Duration:</b> {animeData.duration}</p></> : <></>}
                    {animeData.rating ? <><p><b>Rating:</b> {animeData.rating}</p></> : <></>}
                    <h5><u>Statistics</u></h5>
                    {animeData.score ? <><p><b>Score:</b> {animeData.score} (scored by {animeData.scored_by} MAL users)</p></> : <></>}
                    {animeData.rank ? <><p><b>Ranked:</b> #{animeData.rank}</p></> : <></>}
                    {animeData.popularity ? <><p><b>Popularity:</b> #{animeData.popularity}</p></> : <></>}
                    {animeData.members ? <><p><b>Members:</b> {animeData.members}</p></> : <></>}
                    {animeData.favorites ? <><p><b>Favorites:</b> {animeData.favorites}</p></> : <></>}
                </Col>
                <Col lg={8}>
                {animeData.title ? <><h1>{animeData.title}</h1></> : <></>}
                {animeData.title_english && animeData.title_japanese && (
                    <p><b>English:</b> {animeData.title_english}, <b>Japanese:</b> {animeData.title_japanese}</p>
                )}
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
                    <p>WORK IN PROGRESS ✍️(◔◡◔)</p>
                    <Row className="gy-4">
                        <Col lg={6}>
                        <h4><u>Opening Theme</u></h4>
                        {animeData.theme.openings ? <p>{animeData.theme.openings}</p> : <></>}
                        </Col>
                        <Col lg={6}>
                        <h4><u>Ending Theme</u></h4>
                        {animeData.theme.endings ? <p>{animeData.theme.endings}</p> : <></>}
                        </Col>
                    </Row>
                    </>
                )}

                {activeSection === 'characters' && (
                    <>
                    <h1>Characters</h1>
                    <h3>Work in Progress</h3>
                    </>
                )}

                {activeSection === 'staff' && (
                    <>
                    <h1>Staff</h1>
                    <h3>Work in Progress</h3>
                    </>
                )}

                {activeSection === 'episodes' && (
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
