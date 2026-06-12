import React from 'react';
import './TemplateStyles.css';

export default function ModernPro({ data }) {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="template-wrapper tpl-modern-pro">
      <div className="tpl-modern-pro-sidebar">
        <div className="avatar">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        
        <div style={{marginBottom: '40px'}}>
          <h4>KONTAKT</h4>
          {personalInfo?.phone && <div className="contact-item">{personalInfo.phone}</div>}
          {personalInfo?.email && <div className="contact-item">{personalInfo.email}</div>}
          {personalInfo?.location && <div className="contact-item">{personalInfo.location}</div>}
        </div>

        {skills?.length > 0 && skills.some(s => s.name) && (
          <div style={{marginBottom: '40px'}}>
            <h4>UMIEJĘTNOŚCI</h4>
            {skills.map((skill, idx) => (
              skill.name && (
                <div key={idx} className="skill-item">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: `${Math.max(40, 100 - idx * 15)}%`}}></div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {languages?.length > 0 && languages.some(l => l.language) && (
          <div style={{marginBottom: '40px'}}>
            <h4>JĘZYKI</h4>
            {languages.map((lang, idx) =>
              lang.language && (
                <div key={idx} className="contact-item">
                  {lang.language}{lang.level ? ` — ${lang.level}` : ''}
                </div>
              )
            )}
          </div>
        )}
      </div>

      <div className="tpl-modern-pro-main">
        <div className="name">
          {personalInfo?.firstName || 'Imię'} {personalInfo?.lastName || 'Nazwisko'}
        </div>
        <div className="role">
          {experience?.[0]?.role || 'STANOWISKO'}
        </div>

        {personalInfo?.summary && (
          <div style={{marginBottom: '40px'}}>
            <h4>PROFIL</h4>
            <p style={{fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.6}}>{personalInfo.summary}</p>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.company || e.role) && (
          <div style={{marginBottom: '40px'}}>
            <h4>DOŚWIADCZENIE ZAWODOWE</h4>
            {experience.map((exp, idx) => (
              (exp.company || exp.role) && (
                <div className="job-entry" key={idx}>
                  <div className="job-title">{exp.role || 'Stanowisko'}</div>
                  <div className="job-meta">
                    <span className="job-company">{exp.company || 'Firma'}</span> | {exp.period || 'Okres'}
                  </div>
                  {exp.description && (
                    <p style={{fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.6}}>{exp.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {education?.length > 0 && education.some(e => e.school || e.degree) && (
          <div style={{marginBottom: '40px'}}>
            <h4>WYKSZTAŁCENIE</h4>
            {education.map((edu, idx) => (
              (edu.school || edu.degree) && (
                <div className="job-entry" key={idx}>
                  <div className="job-title">{edu.degree || 'Kierunek'}</div>
                  <div className="job-meta">
                    <span className="job-company">{edu.school || 'Uczelnia'}</span> | {edu.period || 'Okres'}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
