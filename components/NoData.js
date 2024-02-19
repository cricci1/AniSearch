import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function NoData() {
    return (
      <>
      <Container className="justify-content-center text-center">
      <Image src="/nodata.png" width="500" height="400"></Image>
      <br/>
      <h1>No Data Found</h1>
      <h3>Are you sure the ID in the URL is correct?</h3>
      </Container>
      </>
    )
}