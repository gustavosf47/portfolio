import React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

function PersonalInfo() {
  const { t } = useTranslation()

  return (
    <Card className="mb-3">
    <Card.Body>
      <h3>{t('personalInfo')}</h3>
      <Card.Text><strong>{t('email')}</strong>: gsanchezfernandez01@gmail.com</Card.Text>
      <Card.Text>
        <strong>{t('linkedin')}</strong>: <a href="https://www.linkedin.com/in/g-sanchez-fernandez/">g-sanchez-fernandez</a>
      </Card.Text>
      <Card.Text><strong>{t('location')}</strong>: Gijón, Asturias</Card.Text>
    </Card.Body>
  </Card>
  
  )
}

export default PersonalInfo
