import { Link } from "react-router-dom";
import {Navbar,Container,Button} from 'react-bootstrap'

const CustomNavbar = ({ theme, onToggle }) => {
  return (
    <div>
      <Navbar className="pg-navbar">
        <Container className="d-flex align-items-center flex-wrap gap-3">
          <Link to="/" className="text-decoration-none fw-bold fs-4">PortfolioGenie</Link>

          <div className="d-flex align-items-center gap-3">
            <a href="/#features" className="text-decoration-none">Features</a>
            <a href="/#templates" className="text-decoration-none">Templates</a>
          </div>

          <Button variant={"outline-secondary"} size="sm" onClick={onToggle}>
            {theme === "light" ? "Dark" : "Light"}
          </Button>

          <Link to="/builder" className="btn btn-primary btn-sm pg-nav-cta">Start building</Link>

        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
