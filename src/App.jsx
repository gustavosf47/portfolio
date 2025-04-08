import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from "./components/PersonalInfo";
import AboutMe from "./components/AboutMe";
import Languages from "./components/Languages";
import Availability from "./components/Availability";
import SoftSkills from "./components/SoftSkills";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import TechSkills from "./components/TechSkills";

function App() {
  const { t, i18n } = useTranslation();

  // Lee dark mode desde localStorage o usa true por defecto
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === null ? true : JSON.parse(saved);
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{t("title")}</h1>
        <div className="language-buttons d-flex gap-2">
          <button
            className={`language-btn ${darkMode ? "light-mode" : "dark-mode"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <img
              src={
                darkMode ? "/assets/images/sun.png" : "/assets/images/moon.png"
              }
              alt={darkMode ? "Light Mode" : "Dark Mode"}
              style={{ width: "25px", margin:"0"}}
            />
           
          </button>

          <div className="button-group">
            <button
              className={`language-btn ${
                i18n.language === "es" ? "selected-lang" : ""
              }`}
              onClick={() => toggleLanguage("es")}
              
            >
              <img src="/assets/images/spain.png" alt="Español" />
              {t("switchToSpanish")}
            </button>
            <button
              className= {`language-btn ${
                i18n.language === "en" ? "selected-lang" : ""
              }`}
              onClick={() => toggleLanguage("en")}
            >
              <img src="/assets/images/uk.png" alt="English" />
              {t("switchToEnglish")}
            </button>
          </div>
        </div>
      </div>

      <Row>
        <Col md={6}>
          <PersonalInfo />
          <Education />
          <Languages />
          <Availability />
        </Col>
        <Col md={6}>
          <AboutMe />
          <WorkExperience />
          <SoftSkills />
        </Col>
        <Col>
          <TechSkills />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
