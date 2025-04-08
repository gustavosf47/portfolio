import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Languages() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t('languages')}</h3>
        <Card.Text>{t('spanish')}: {t('native')}</Card.Text>
        <Card.Text>{t('english')}: {t('advanced')}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Languages;
