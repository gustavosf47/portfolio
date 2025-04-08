import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t('education')}</h3>

        {/* Formación Académica */}
        <div className="mb-3">
          <strong>{t('bootcamp')}</strong> – 2024 – 2025 <br />{t('socratech')} 
        </div>
        <div className="mb-3">
          <strong>{t('degree1')}</strong> – 2023 – 2024 <br />{t('cfgs')} 
        </div>
        <div className="mb-3">
          <strong>{t('degree2')}</strong> – 2020– 2022 <br />{t('cfgs')} 
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default Education;
