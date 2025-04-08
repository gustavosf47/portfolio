import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function TechSkills() {
  const { t } = useTranslation()
  const base = "";

  const frontEnd = [
    { name: 'HTML5', image: `${base}assets/images/html5.png` },
    { name: 'CSS3', image: `${base}assets/images/css3.png` },
    { name: 'Bootstrap', image: `${base}assets/images/bootstrap.png` },
    { name: 'JavaScript ES6', image: `${base}assets/images/javascript.png` },
    { name: 'React', image: `${base}assets/images/react.png` },
  ]

  const backEnd = [
    { name: 'Spring Boot', image: `${base}assets/images/springboot.png` },
    { name: 'Node.js', image: `${base}assets/images/nodejs.png` },
    { name: 'Java', image: `${base}assets/images/java.png` },
  ]

  const versionControl = [
    { name: 'Git', image: `${base}assets/images/git.png` }
  ]

  const otherTech = [
    { name: 'Kotlin', image: `${base}assets/images/kotlin.png` },
    { name: 'Android', image: `${base}assets/images/android.png` },
    { name: 'JavaFX', image: `${base}assets/images/javafx.png` },
    { name: '.NET', image: `${base}assets/images/dotnet.png` },
    { name: 'C++', image: `${base}assets/images/c++.png` },
    { name: 'C#', image: `${base}assets/images/csharp.png` }
  ]

  const devOps = [
    { name: 'Kubernetes', image: `${base}assets/images/kubernetes.png` },
    { name: 'Linux', image: `${base}assets/images/linux.png` }
  ]

  const ideTools = [
    { name: 'VSCode', image: `${base}assets/images/vscode.png` },
    { name: 'IntelliJ IDEA', image: `${base}assets/images/intellij.png` },
    { name: 'Eclipse', image: `${base}assets/images/eclipse.png` }
  ]

  const renderSkills = (skills) => {
    return skills.map((tech, index) => (
      <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
        <Card className="text-center">
          <Card.Img
            variant="top"
            src={tech.image}
            alt={tech.name}
            style={{ width: '80px', height: '80px', margin: '20px auto' }}
          />
          <Card.Body>
            <Card.Title>{tech.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Container>
          <h3 className="text-center py-3">{t('titleT')}</h3>

          {/* Front-end */}
          <div className="section">
            <h4 className="text-center py-3">{t('frontEnd')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(frontEnd)}</Row>
          </div>

          {/* Back-end */}
          <div className="section">
            <h4 className="text-center py-3">{t('backEnd')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(backEnd)}</Row>
          </div>

          {/* Control de Versiones */}
          <div className="section">
            <h4 className="text-center py-3">{t('versionControl')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(versionControl)}</Row>
          </div>

          {/* Otros Lenguajes y Tecnologías */}
          <div className="section">
            <h4 className="text-center py-3">{t('otherTech')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(otherTech)}</Row>
          </div>

          {/* DevOps y Plataformas */}
          <div className="section">
            <h4 className="text-center py-3">{t('devOps')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(devOps)}</Row>
          </div>

          {/* IDEs y Herramientas de Desarrollo */}
          <div className="section">
            <h4 className="text-center py-3">{t('ideTools')}</h4>
            <Row className="d-flex justify-content-center">{renderSkills(ideTools)}</Row>
          </div>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default TechSkills
