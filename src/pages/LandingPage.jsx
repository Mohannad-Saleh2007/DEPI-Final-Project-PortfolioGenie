import {Container , Row , Col , Card} from 'react-bootstrap'
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex-grow-1">
      <section id="hero" className="py-5 text-center">
        <Container>
            <h1 className="fw-bold mb-3">
            Turn Your GitHub Into a Standout Developer Portfolio
          </h1>

          <p className="text-muted mb-4">
            Analyze your GitHub activity, generate a clean About Me and project
            descriptions with AI, and export your portfolio in minutes.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/builder" className="btn btn-primary">
              Start Building
            </Link>
            <a href="#templates" className="btn btn-outline-secondary">
              Explore Templates
            </a>
          </div>
        </Container>
      </section>

      <section id="features" className="py-5">
        <Container>
            <h2 className="fw-bold text-center mb-4">Key Features</h2>

            <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body>
                  <Card.Title>GitHub Activity Analyzer</Card.Title>
                  <Card.Text className="text-muted">
                    Pulls your repositories, top languages, and coding activity
                    automatically.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body>
                  <Card.Title>AI About Me & Projects</Card.Title>
                  <Card.Text className="text-muted">
                    Generates clean developer bios and project summaries tailored
                    to your work.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body>
                  <Card.Title>Live Preview & Export</Card.Title>
                  <Card.Text className="text-muted">
                    Preview your portfolio in real time and export clean code
                    ready to use.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="templates"className='py-5'>
        <Container>
            <h2 className="fw-bold text-center mb-4">Templates</h2>

            <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Minimal Clean</Card.Title>
                  <Card.Text className="text-muted">
                    Simple, focused layout that puts your projects and skills
                    front and center.
                  </Card.Text>
                  <Link
                    to="/builder"
                    className="btn btn-outline-primary btn-sm mt-auto"
                  >
                    Use Template
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Dark Terminal</Card.Title>
                  <Card.Text className="text-muted">
                    Developer-inspired dark styling with crisp contrast and code
                    vibes.
                  </Card.Text>
                  <Link
                    to="/builder"
                    className="btn btn-outline-primary btn-sm mt-auto"
                  >
                    Use Template
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 p-3">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Modern Grid</Card.Title>
                  <Card.Text className="text-muted">
                    Structured card layout ideal for showcasing multiple apps and
                    experiments.
                  </Card.Text>
                  <Link
                    to="/builder"
                    className="btn btn-outline-primary btn-sm mt-auto"
                  >
                    Use Template
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default LandingPage
