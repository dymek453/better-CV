import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="main-header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-accent">Better</span> CV
        </Link>
        
        <div className="header-actions">
          <Link to="/templates" className="btn-primary">
            {t('create_cv_now')}
          </Link>
          <button className="icon-btn" aria-label="Settings">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
