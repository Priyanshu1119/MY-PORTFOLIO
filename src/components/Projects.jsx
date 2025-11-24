// src/components/Projects.jsx
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { projects } from "../projects.data.js";
import "./Projects.cards.css";

const Pill = ({ children }) => (
  <Badge
    bg="secondary"
    className="me-2 mb-2 rounded-pill pill-neutral tag-colored"
    pill
    data-label={String(children)}
  >
    {children}
  </Badge>
);

const TechChip = ({ children }) => (
  <span className="badge chip-neutral rounded-pill me-2 mb-2">{children}</span>
);

const ProjectItem = ({
  title,
  date,
  summary,
  tags = [],
  stack = [],
  code,
  live = undefined,
}) => (
  <Card className="h-100 shadow-sm border-0 project-card">
    <Card.Body>
      <div className="d-flex align-items-center gap-2 text-muted mb-2">
        <i className="bi bi-calendar3" />
        <small>{date}</small>
      </div>

      <div className="mb-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>

      <Card.Title className="h5 fw-semibold">{title}</Card.Title>
      <Card.Text className="text-body-secondary">{summary}</Card.Text>

      <div className="d-flex flex-wrap my-2">
        {stack.map((s) => (
          <TechChip key={s}>{s}</TechChip>
        ))}
      </div>
    </Card.Body>

    <Card.Footer className="bg-transparent border-0 pt-0 d-flex gap-2">
      <Button
        variant="outline-light"
        size="sm"
        className="rounded-pill px-3"
        href={code}
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-code-slash me-2" />
        Code
      </Button>
      {Boolean(live) && (
        <Button
          variant="outline-success"
          size="sm"
          className="rounded-pill px-3"
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-box-arrow-up-right me-2" />
          Live
        </Button>
      )}
    </Card.Footer>
  </Card>
);

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-5">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              {/* Featured block inside panel (less rounded) */}
              <div className="projects-panel panel-tight mb-5">
                <header className="text-center mb-3">
                  <h2 className="projects-heading">Featured Projects</h2>
                  <p className="projects-subheading">
                    A curated selection of recent personal projects.
                  </p>
                </header>
                <Row xs={1} md={2} className="g-4">
                  {featured.map((p) => (
                    <Col key={p.title}>
                      <ProjectItem {...p} />
                    </Col>
                  ))}
                </Row>
              </div>

              {/* More block inside same panel style */}
              {/* <div className="projects-panel panel-tight">
                <header className="text-center mb-3">
                  <h2 className="projects-heading">More Projects</h2>
                </header>
                <Row xs={1} md={3} className="g-4">
                  {more.map((p) => (
                    <Col key={p.title}>
                      <ProjectItem {...p} />
                    </Col>
                  ))}
                </Row>
              </div> */}

              {/* Compact CTA bar (no Collaborate) */}
              <div className="cta-bar">
                <span className="cta-bar-text">
                  Want to see all of my projects?
                </span>
                <a
                  className="cta-outline cta-lg"
                  href="https://github.com/Priyanshu1119"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-grid-3x3-gap me-2" />
                  All Projects
                </a>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

export default Projects;
