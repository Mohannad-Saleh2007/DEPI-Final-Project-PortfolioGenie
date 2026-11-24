import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-top py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="fw-bold">PortfolioGenie</span>

        <div className="d-flex gap-3">
          <a href="#features" className="text-decoration-none">
            Features
          </a>
          <a href="#templates" className="text-decoration-none">
            Templates
          </a>
          <Link to="/builder" className="text-decoration-none">
            Builder
          </Link>
        </div>

        <small className="text-muted">DEPI Final Project — 2026</small>
      </Container>
    </div>
  )
}

export default Footer
