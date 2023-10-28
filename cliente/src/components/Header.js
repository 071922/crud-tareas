import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { ColorModeToggler } from './ColorModeToggler';

function Header() {

    const bg = useColorModeValue('blue.500', 'blue.200')

    return (
        <Box bg={bg}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand text-light" to="/">Gestor de tareas</Link>
              <ColorModeToggler />
              <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <Link to="/"><Button colorScheme='purple'>Lista tareas</Button></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/agregartarea"><Button colorScheme='purple'>Agregar tareas</Button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Box>
    );
}

export default Header;