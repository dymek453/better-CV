import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { User, Download } from 'lucide-react';
import { useCVStore } from '../store/cvStore';
import TemplateRenderer from '../components/templates/TemplateRenderer';
import './TemplateSelector.css';

export default function TemplateSelector() {
  const { t } = useTranslation();
  const selectedTemplate = useCVStore(state => state.selectedTemplate);
  const setTemplate = useCVStore(state => state.setTemplate);
  const storeData = useCVStore();

  const templates = [
    { id: 'bold-impact', name: 'TERRA MODERN', color: '#B69A6D' },
    { id: 'elegant-serif', name: 'ELEGANCE', color: '#E2E2E2' },
    { id: 'geometric-grid', name: 'BIO ORGANIC', color: '#A88B7D' },
    { id: 'modern-pro', name: 'AKADEMIK', color: '#E2E2E2' }
  ];

  return (
    <div className="template-selector-page">
      <nav className="editor-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Better CV</Link>
            <div className="nav-tabs">
              <Link to="/builder" className="nav-tab">Edytor</Link>
              <Link to="/templates" className="nav-tab active">Moje dokumenty</Link>
            </div>
          </div>
          <div className="nav-right">
            <button className="btn btn-icon"><User size={20} /></button>
          </div>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <aside className="builder-sidebar" style={{ width: '320px', borderRight: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div className="sidebar-tabs">
            <Link to="/builder" className="sidebar-tab" style={{textDecoration: 'none', color: 'inherit'}}>Formularz</Link>
            <button className="sidebar-tab active">Szablony</button>
          </div>

          <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
            <h2 style={{ color: '#315740', fontFamily: 'Literata, serif', marginBottom: '8px' }}>Dostępne szablony</h2>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '32px' }}>Podstawowe układy dokumentów.</p>
            
            <div className="templates-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {templates.map(tpl => (
                <div key={tpl.id} className="template-card-wrapper">
                  <div 
                    className={`template-card-preview ${selectedTemplate === tpl.id ? 'active' : ''}`}
                    onClick={() => setTemplate(tpl.id)}
                    style={{ 
                      aspectRatio: '1 / 1.4', 
                      border: selectedTemplate === tpl.id ? `4px solid ${tpl.color}` : '4px solid transparent',
                      borderRadius: '8px',
                      backgroundColor: selectedTemplate === tpl.id ? '#F9F8F4' : '#F5F5F5',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: selectedTemplate === tpl.id ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    <div style={{ width: '80%', height: '90%', margin: '5% auto', backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}></div>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.75rem', fontWeight: 700, color: '#315740', letterSpacing: '0.5px' }}>
                    {tpl.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="builder-preview" style={{ flex: 1, backgroundColor: '#EFECE1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '60px', overflowY: 'auto' }}>
          <div className="cv-mock" style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
             <TemplateRenderer templateId={selectedTemplate} data={storeData} />
          </div>
        </main>
      </div>
    </div>
  );
}
