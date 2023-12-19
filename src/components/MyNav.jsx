import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function createNav() {
  return (
    <Container fluid className='bg-dark'>
        <Nav defaultActiveKey="/home" as="ul" className='justify-content-center justify-content-around'>
          <Nav.Item as="li">
            <Nav.Link href="/home" className='text-white'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" className='text-white'>About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#" className='text-white'>Browse</Nav.Link>
          </Nav.Item>
        </Nav>
    </Container>
  );
}

export default createNav;