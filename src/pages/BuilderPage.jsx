import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, PlusCircle, Trash2, Download } from 'lucide-react';
import { useForm, useFieldArray } from 'react-hook-form';
import html2pdf from 'html2pdf.js';
import { useCVStore } from '../store/cvStore';
import TemplateRenderer from '../components/templates/TemplateRenderer';
import './BuilderPage.css';

const TEMPLATES = [
  { id: 'bold-impact', name: 'TERRA MODERN', color: '#B69A6D', thumb: '/templates/terra-modern.png' },
  { id: 'elegant-serif', name: 'ELEGANCE', color: '#E2E2E2', thumb: '/templates/elegance.png' },
  { id: 'geometric-grid', name: 'BIO ORGANIC', color: '#A88B7D', thumb: '/templates/bio-organic.svg' },
  { id: 'modern-pro', name: 'AKADEMIK', color: '#E2E2E2', thumb: '/templates/akademik.svg' },
];

export default function BuilderPage() {
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'templates'

  const personalInfo = useCVStore((s) => s.personalInfo);
  const experience = useCVStore((s) => s.experience);
  const education = useCVStore((s) => s.education);
  const skills = useCVStore((s) => s.skills);
  const languages = useCVStore((s) => s.languages);
  const selectedTemplate = useCVStore((s) => s.selectedTemplate);
  const setCVData = useCVStore((s) => s.setCVData);
  const setTemplate = useCVStore((s) => s.setTemplate);

  const previewData = { personalInfo, experience, education, skills, languages };

  const componentRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = componentRef.current;
    if (!element) return;

    const firstName = personalInfo?.firstName || 'Moje';
    const lastName = personalInfo?.lastName || 'CV';
    const filename = `${firstName}_${lastName}_CV.pdf`;

    const opt = {
      margin: 0,
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  const { register, control, watch } = useForm({
    defaultValues: {
      personalInfo,
      experience: experience.length ? experience : [{}],
      education: education.length ? education : [{}],
      skills: skills.length ? skills : [{ name: '' }],
      languages: languages.length ? languages : [],
    },
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control, name: 'experience' });
  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({ control, name: 'education' });
  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control, name: 'skills' });
  const { fields: langFields, append: appendLang, remove: removeLang } = useFieldArray({ control, name: 'languages' });

  const formData = watch();

  useEffect(() => {
    const { personalInfo: pi, experience: ex, education: ed, skills: sk, languages: la } = formData;
    setCVData({ personalInfo: pi, experience: ex, education: ed, skills: sk, languages: la });
  }, [formData, setCVData]);

  return (
    <div className="builder-page">
      {/* ── Top Navigation ── */}
      <nav className="editor-nav">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Better CV</Link>
            <div className="nav-tabs">
              <Link to="/builder" className="nav-tab active">Edytor</Link>
              <Link to="/" className="nav-tab">Moje dokumenty</Link>
            </div>
          </div>
          <div className="nav-right">
            <button className="btn btn-primary btn-download" onClick={handleDownloadPDF}>
              <Download size={16} />
              <span>Pobierz PDF</span>
            </button>
            <button className="btn btn-icon"><User size={20} /></button>
          </div>
        </div>
      </nav>

      <div className="builder-body">
        {/* ── Sidebar ── */}
        <aside className="builder-sidebar">
          <div className="sidebar-tabs">
            <button
              className={`sidebar-tab ${activeTab === 'form' ? 'active' : ''}`}
              onClick={() => setActiveTab('form')}
            >
              Formularz
            </button>
            <button
              className={`sidebar-tab ${activeTab === 'templates' ? 'active' : ''}`}
              onClick={() => setActiveTab('templates')}
            >
              Szablony
            </button>
          </div>

          <div className="sidebar-content">
            {activeTab === 'form' ? (
              /* ── FORMULARZ TAB ── */
              <div className="builder-form">
                <form>
                  {/* Dane Osobowe */}
                  <div className="form-section">
                    <div className="section-header">
                      <h3>Dane Osobowe</h3>
                      <p>Podstawowe informacje o Tobie.</p>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Imię</label>
                        <input type="text" {...register('personalInfo.firstName')} placeholder="Adam" />
                      </div>
                      <div className="form-group">
                        <label>Nazwisko</label>
                        <input type="text" {...register('personalInfo.lastName')} placeholder="Kowalski" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" {...register('personalInfo.email')} placeholder="adam@example.com" />
                      </div>
                      <div className="form-group">
                        <label>Telefon</label>
                        <input type="tel" {...register('personalInfo.phone')} placeholder="+48 123 456 789" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Lokalizacja</label>
                      <input type="text" {...register('personalInfo.location')} placeholder="Warszawa, Polska" />
                    </div>
                    <div className="form-group">
                      <label>Podsumowanie zawodowe</label>
                      <textarea rows="4" {...register('personalInfo.summary')} placeholder="Krótki opis Twojego doświadczenia..."></textarea>
                    </div>
                  </div>

                  {/* Doświadczenie */}
                  <div className="form-section">
                    <div className="section-header-flex">
                      <div>
                        <h3>Doświadczenie</h3>
                        <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>Dodaj historię zatrudnienia.</p>
                      </div>
                      <button type="button" className="btn btn-icon add-btn" onClick={() => appendExp({})}>
                        <PlusCircle size={20} />
                      </button>
                    </div>
                    {expFields.map((item, index) => (
                      <div className="form-card" key={item.id}>
                        <div className="form-card-header">
                          <h4>Pozycja {index + 1}</h4>
                          <button type="button" className="btn-icon-danger" onClick={() => removeExp(index)}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Firma</label>
                            <input type="text" {...register(`experience.${index}.company`)} placeholder="Nazwa firmy" />
                          </div>
                          <div className="form-group">
                            <label>Okres</label>
                            <input type="text" {...register(`experience.${index}.period`)} placeholder="np. 2020 - Obecnie" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Stanowisko</label>
                          <input type="text" {...register(`experience.${index}.role`)} placeholder="Nazwa stanowiska" />
                        </div>
                        <div className="form-group">
                          <label>Obowiązki (opcjonalnie)</label>
                          <textarea rows="3" {...register(`experience.${index}.description`)} placeholder="Opisz swoje zadania i osiągnięcia..."></textarea>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Wykształcenie */}
                  <div className="form-section">
                    <div className="section-header-flex">
                      <div><h3>Wykształcenie</h3></div>
                      <button type="button" className="btn btn-icon add-btn" onClick={() => appendEdu({})}>
                        <PlusCircle size={20} />
                      </button>
                    </div>
                    {eduFields.map((item, index) => (
                      <div className="form-card" key={item.id}>
                        <div className="form-card-header">
                          <h4>Szkoła {index + 1}</h4>
                          <button type="button" className="btn-icon-danger" onClick={() => removeEdu(index)}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="form-group">
                          <label>Uczelnia / Szkoła</label>
                          <input type="text" {...register(`education.${index}.school`)} placeholder="Nazwa uczelni" />
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Kierunek</label>
                            <input type="text" {...register(`education.${index}.degree`)} placeholder="Kierunek i tytuł" />
                          </div>
                          <div className="form-group">
                            <label>Okres</label>
                            <input type="text" {...register(`education.${index}.period`)} placeholder="np. 2015 - 2020" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Umiejętności */}
                  <div className="form-section">
                    <div className="section-header-flex">
                      <div><h3>Umiejętności</h3></div>
                      <button type="button" className="btn btn-icon add-btn" onClick={() => appendSkill({ name: '' })}>
                        <PlusCircle size={20} />
                      </button>
                    </div>
                    <div className="skills-grid">
                      {skillFields.map((item, index) => (
                        <div className="skill-input-group" key={item.id}>
                          <input type="text" {...register(`skills.${index}.name`)} placeholder="np. React.js" />
                          <button type="button" className="btn-icon-danger" onClick={() => removeSkill(index)}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Języki */}
                  <div className="form-section">
                    <div className="section-header-flex">
                      <div><h3>Języki</h3></div>
                      <button type="button" className="btn btn-icon add-btn" onClick={() => appendLang({ language: '', level: 'B2' })}>
                        <PlusCircle size={20} />
                      </button>
                    </div>
                    <div className="languages-list">
                      {langFields.map((item, index) => (
                        <div className="language-entry" key={item.id}>
                          <select className="lang-select" {...register(`languages.${index}.language`)}>
                            <option value="">— wybierz język —</option>
                            <option value="Angielski">Angielski</option>
                            <option value="Niemiecki">Niemiecki</option>
                            <option value="Francuski">Francuski</option>
                            <option value="Hiszpański">Hiszpański</option>
                            <option value="Włoski">Włoski</option>
                            <option value="Rosyjski">Rosyjski</option>
                            <option value="Chiński">Chiński</option>
                            <option value="Japoński">Japoński</option>
                            <option value="Arabski">Arabski</option>
                            <option value="Portugalski">Portugalski</option>
                            <option value="Niderlandzki">Niderlandzki</option>
                            <option value="Szwedzki">Szwedzki</option>
                            <option value="Norweski">Norweski</option>
                            <option value="Duński">Duński</option>
                            <option value="Ukraiński">Ukraiński</option>
                          </select>
                          <select className="lang-select" {...register(`languages.${index}.level`)}>
                            <option value="">— poziom —</option>
                            <option value="A1">A1 — Podstawowy</option>
                            <option value="A2">A2 — Podstawowy+</option>
                            <option value="B1">B1 — Średniozaawansowany</option>
                            <option value="B2">B2 — Średniozaawansowany+</option>
                            <option value="C1">C1 — Zaawansowany</option>
                            <option value="C2">C2 — Biegły</option>
                            <option value="Native">Ojczysty / Native</option>
                          </select>
                          <button type="button" className="btn-icon-danger" onClick={() => removeLang(index)}>
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              /* ── SZABLONY TAB ── */
              <div className="templates-panel">
                <h2 className="templates-title">Dostępne szablony</h2>
                <p className="templates-subtitle">Podstawowe układy dokumentów.</p>

                <div className="templates-grid">
                  {TEMPLATES.map((tpl) => (
                    <div key={tpl.id} className="template-card-wrapper" onClick={() => setTemplate(tpl.id)}>
                      <div
                        className={`template-card-preview ${selectedTemplate === tpl.id ? 'active' : ''}`}
                        style={{
                          borderColor: selectedTemplate === tpl.id ? tpl.color : 'transparent',
                        }}
                      >
                        <img src={tpl.thumb} alt={tpl.name} className="template-card-thumb" />
                      </div>
                      <div className="template-card-name">{tpl.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ── Preview ── */}
        <main className="builder-preview">
          <div className="preview-toolbar">
            <div className="zoom-controls">
              <button className="btn-icon">−</button>
              <span>100%</span>
              <button className="btn-icon">+</button>
            </div>
          </div>

          <div className="live-preview">
            <div className="cv-mock" ref={componentRef}>
              <TemplateRenderer templateId={selectedTemplate} data={previewData} />
            </div>
          </div>
        </main>
      </div>

      <div className="auto-save-indicator">
        <span className="dot"></span>
        Wszystkie zmiany są zapisywane na bieżąco
      </div>
    </div>
  );
}
