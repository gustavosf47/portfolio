import React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function PersonalInfo() {
  const { t } = useTranslation()

  return (
    <Card className="mb-3">
    <Card.Body>
      <h3>{t('personalInfo')}</h3>
      <Card.Text>{t('email')}: gsanchezfernandez01@gmail.com</Card.Text>
      <Card.Text>
        {t('linkedin')}: <a href="https://www.linkedin.com/in/g-sanchez-fernandez/">g-sanchez-fernandez</a>
      </Card.Text>
      <Card.Text>{t('location')}: Gijón, Asturias</Card.Text>
    </Card.Body>
  </Card>
  
  )
}

export default PersonalInfo
