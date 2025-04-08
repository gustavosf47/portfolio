import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function WorkExperience() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t('workExperience')}</h3>

        {/* Socratech (11/2024 - 01/2025) */}
        <div className="mb-3">
          <strong>
            <a href="https://www.socratech.es" target="_blank" rel="noopener noreferrer">
              Socratech
            </a>
          </strong> – {t('juniorDeveloper')} (11/2024 - 01/2025)
          <br />
          {t('ecoagrocorralProject')}
          <br />
          {t('technologiesUsed')}: Node.js, React
          <br />
          <a href="https://youtu.be/qkkCO6usVsU?si=80OkRNvBj07F9ekT" target="_blank" rel="noopener noreferrer">
            {t('watchProjectVideo')}
          </a>
        </div>
        <hr />
        {/* MIMACOM (03/2024 - 06/2024) */}
        <div className="mb-3">
          <strong>
            <a href="https://www.mimacom.com" target="_blank" rel="noopener noreferrer">
              MIMACOM
            </a>
          </strong> – {t('juniorDeveloper')} ({t('internship')} - 03/2024 - 06/2024)
          <br />
          {t('springAppDesign')}
          <br />
          {t('frontendLiferayBPM')}
          <br />
          {t('scrumMethodology')}
          <br />
          {t('microservicesDockerKubernetes')}
        </div>
        <hr />
        {/* Indra (09/2022 - 03/2023) */}
        <div className="mb-3">
          <strong>
            <a href="https://www.indracompany.com" target="_blank" rel="noopener noreferrer">
              Indra
            </a>
          </strong> – {t('juniorDeveloper')} (09/2022 - 03/2023)
          <br />
          {t('webDeveloperExperience')}
        </div>
      <hr />
        {/* iLabora (03/2022 - 06/2022) */}
        <div className="mb-3">
          <strong>
            <a href="https://www.ilabora.com" target="_blank" rel="noopener noreferrer">
              iLabora
            </a>
          </strong> – {t('juniorDeveloper')} ({t('internship')} - 03/2022 - 06/2022)
          <br />
          {t('webDevelopmentExperience')}
        </div>
      </Card.Body>
    </Card>
  );
}

export default WorkExperience;
