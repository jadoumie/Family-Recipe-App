import {Navbar, Nav, Container} from 'react-bootstrap';

const RecipeNav = () => {
    return (
    <div>
        <Navbar collapseOnSelect fixed ='top' expand='sm' bg ='dark' variant ='dark'>
            <Container>
                <Navbar.Toggle aria-controls ='responsive-navbar-nav'/>
                <Navbar.Collapse id = 'responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href ='/'>Home</Nav.Link>
                        <Nav.Link href ='/myrecipes'>My Recipes</Nav.Link>
                        <Nav.Link href ='/new'>Add New Recipe</Nav.Link>
                    </Nav>
            </Container>    
        </Navbar>
    </div>
    );
}

export default RecipeNav; 
