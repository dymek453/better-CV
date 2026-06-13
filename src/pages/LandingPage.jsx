import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Edit3, Download } from 'lucide-react';
import TemplateRenderer from '../components/templates/TemplateRenderer';
import { useCVStore } from '../store/cvStore';
import './LandingPage.css';

const DEMO_DATA = {
  personalInfo: {
    firstName: 'Anna',
    lastName: 'Kowalska',
    email: 'anna.kowalska@email.com',
    phone: '+48 500 123 456',
    location: 'Warszawa, Polska',
    summary: 'Doświadczony specjalista z pasją do tworzenia innowacyjnych rozwiązań. Skuteczny w pracy zespołowej i zarządzaniu projektami.',
  },
  experience: [
    { role: 'Senior Product Manager', company: 'TechCorp Sp. z o.o.', period: '2021 – teraz', description: 'Zarządzanie roadmapą produktu i zespołem 8 deweloperów.' },
    { role: 'Product Manager', company: 'StartupXYZ', period: '2019 – 2021', description: 'Wprowadzenie 3 nowych funkcji zwiększających retencję o 40%.' },
  ],
  education: [
    { degree: 'Mgr Zarządzania', school: 'Szkoła Główna Handlowa', period: '2017 – 2019' },
  ],
  skills: [
    { name: 'Product Strategy' }, { name: 'Agile / Scrum' }, { name: 'Data Analysis' }, { name: 'Figma' },
  ],
  languages: [
    { language: 'Polski', level: 'Natywny' }, { language: 'Angielski', level: 'C1' },
  ],
};

const TEMPLATES = [
  { id: 'bold-impact',    name: 'TERRA MODERN', label: 'Nowoczesny' },
  { id: 'elegant-serif',  name: 'ELEGANCE',     label: 'Elegancki' },
  { id: 'geometric-grid', name: 'BIO ORGANIC',  label: 'Kreatywny' },
  { id: 'modern-pro',     name: 'AKADEMIK',     label: 'Klasyczny' },
];

export default function LandingPage() {
  const { t } = useTranslation();
  const setTemplate = useCVStore(state => state.setTemplate);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  function handleSelectTemplate(id) {
    setTemplate(id);
    navigate('/builder');
  }

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero_title').replace('lepszy start.', '<span class="text-primary">lepszy start.</span>') }}></h1>
            <p className="hero-subtitle">{t('hero_subtitle')}</p>
            <Link to="/templates" className="btn-primary hero-btn">
              {t('create_cv_now')}
            </Link>
          </div>
          <div className="hero-image">
            <div className="hero-cv-showcase">
              <div className="hero-cv-scale-wrapper">
                <TemplateRenderer templateId="modern-pro" data={DEMO_DATA} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>{t('how_it_works')}</h2>
            <p>{t('how_it_works_subtitle')}</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon"><FileText /></div>
              <h3>{t('step_1')}</h3>
              <p>{t('step_1_desc')}</p>
            </div>
            <div className="step-card">
              <div className="step-icon icon-yellow"><Edit3 /></div>
              <h3>{t('step_2')}</h3>
              <p>{t('step_2_desc')}</p>
            </div>
            <div className="step-card">
              <div className="step-icon"><Download /></div>
              <h3>{t('step_3')}</h3>
              <p>{t('step_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-style">
        <div className="container">
          <div className="style-header">
            <div>
              <h2>{t('choose_style')}</h2>
              <p>{t('choose_style_desc')}</p>
            </div>
            <div className="style-filters">
              <button className="btn-secondary active">{t('all')}</button>
              <button className="btn-secondary">{t('creative')}</button>
              <button className="btn-secondary">{t('classic')}</button>
            </div>
          </div>

          <div className="landing-templates-grid">
            {TEMPLATES.map(tpl => (
              <div
                key={tpl.id}
                className={`landing-template-card${hoveredId === tpl.id ? ' hovered' : ''}`}
                onMouseEnter={() => setHoveredId(tpl.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="landing-template-scale-wrapper">
                  <TemplateRenderer templateId={tpl.id} data={DEMO_DATA} />
                </div>

                <div className="landing-template-overlay">
                  <div className="landing-template-overlay-content">
                    <div className="landing-template-overlay-name">{tpl.name}</div>
                    <div className="landing-template-overlay-label">{tpl.label}</div>
                    <button
                      className="btn-primary landing-template-cta"
                      onClick={() => handleSelectTemplate(tpl.id)}
                    >
                      Wybierz szablon
                    </button>
                  </div>
                </div>

                <div className="landing-template-footer">
                  <span className="landing-template-footer-name">{tpl.name}</span>
                  <span className="landing-template-footer-label">{tpl.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-logo">
            <span className="logo-accent">Better</span> CV
            <div className="copyright">{t('footer_copyright')}</div>
          </div>
          <div className="footer-links">
            <a href="#">{t('privacy')}</a>
            <a href="#">{t('terms')}</a>
            <a href="#">{t('contact')}</a>
            <a href="#">{t('career_advice')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
