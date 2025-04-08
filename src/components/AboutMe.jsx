import React from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t("aboutMe")}</h3>
        <Card.Text>{t("aboutMeText")}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
