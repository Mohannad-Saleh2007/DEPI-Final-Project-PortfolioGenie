import { Link } from "react-router-dom";
import {Navbar,Container,Button} from 'react-bootstrap'

const CustomNavbar = ({ theme, onToggle }) => {
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/" className="text-decoration-none fw-bold fs-4">PortfolioGenie</Link>

          <div className="d-flex align-items-center gap-3">
            <a href="#features" className="text-decoration-none">Features</a>
            <a href="#templates" className="text-decoration-none">Templates</a>
          </div>

          <Button variant={theme === 'light' ? 'dark' : 'light'} size="sm" onClick={onToggle}>
            {theme === "light" ? "Dark" : "Light"}
          </Button>

          <Link to="/builder" className="btn btn-primary btn-sm">Start building</Link>

        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
