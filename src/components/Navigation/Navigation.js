import {Navbar, Nav, Container} from 'react-bootstrap';

const RecipeNav = (props) => {
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
                        {props.user ? (
                            <Nav.Link href = '/auth'> Log Out</Nav.Link>

                        ) : 
                        <Nav.Link href ='/auth'>Log In</Nav.Link>
                        }
                    </Nav>
            </Container>    
        </Navbar>
    </div>
    );
}

export default RecipeNav; 
