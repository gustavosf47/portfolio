import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Availability() {
  const { t } = useTranslation();

  return (
    <Card className="mb-3">
      <Card.Body>
        <h3>{t('availability')}</h3>
        <Card.Text>{t('remote')}: España.</Card.Text>
        <Card.Text>{t('hybrid')}: Asturias y Madrid.</Card.Text>
        <Card.Text>{t('onSite')}: Asturias.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Availability;
