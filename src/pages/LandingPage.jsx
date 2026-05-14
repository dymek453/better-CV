import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileText, Edit3, Download } from 'lucide-react';
import './LandingPage.css';

export default function LandingPage() {
  const { t } = useTranslation();

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
            {/* Placeholder for the tablet image from the design */}
            <div className="image-placeholder">
              <div className="mock-tablet">
                <div className="mock-resume"></div>
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

          <div className="templates-grid">
            {/* Template placeholders mimicking the screenshot */}
            <div className="template-card template-dark">
              <div className="template-preview"></div>
              <div className="template-name">The Minimalist</div>
            </div>
            <div className="template-card template-darker">
              <div className="template-preview"></div>
              <div className="template-name">Executive Pro</div>
            </div>
            <div className="template-card template-dark">
              <div className="template-preview"></div>
              <div className="template-name">Modern Creative</div>
            </div>
            <div className="template-card template-light">
              <div className="template-preview"></div>
              <div className="template-name">Classic Corporate</div>
            </div>
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
