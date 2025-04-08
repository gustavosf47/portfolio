import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function SoftSkills() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t('softSkills')}</h3>
        
        <div className="mb-3">
          <strong>{t('teamwork')}</strong>: {t('teamworkDescription')}
        </div>
        <div className="mb-3">
          <strong>{t('communication')}</strong>: {t('communicationDescription')}
        </div>
        <div className="mb-3">
          <strong>{t('problemSolving')}</strong>: {t('problemSolvingDescription')}
        </div>
        <div className="mb-3">
          <strong>{t('agileMethodologies')}</strong>: {t('agileMethodologiesDescription')}
        </div>
      </Card.Body>
    </Card>
  );
}

export default SoftSkills;
