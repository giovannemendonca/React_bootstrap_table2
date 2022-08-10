import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap-Table2</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default  NavBar;