import { Container } from 'react-bootstrap'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import MainNav from './MainNav'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <Analytics />
      <br />
      <Container>
        {props.children}
        <SpeedInsights/>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  )
}