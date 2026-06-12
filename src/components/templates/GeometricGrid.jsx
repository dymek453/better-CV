import React from 'react';
import './TemplateStyles.css';

export default function GeometricGrid({ data }) {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="template-wrapper tpl-geometric-grid">
      <div className="tpl-geometric-grid-header">
        <div className="tpl-geometric-grid-header-content">
          <div className="name-box">
            <div className="name">
              {personalInfo?.firstName || 'Imię'} {personalInfo?.lastName || 'Nazwisko'}
            </div>
            <div className="role">
              {experience?.[0]?.role || 'STANOWISKO'}
            </div>
          </div>
          <div className="contact-info">
            {personalInfo?.email && <div>{personalInfo.email}</div>}
            {personalInfo?.phone && <div>{personalInfo.phone}</div>}
            {personalInfo?.location && <div>{personalInfo.location}</div>}
          </div>
        </div>
      </div>

      <div className="tpl-geometric-grid-body">
        <div className="tpl-geometric-grid-left">
          {personalInfo?.summary && (
            <div style={{marginBottom: '40px'}}>
              <h4>PROFIL</h4>
              <p style={{fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.6}}>{personalInfo.summary}</p>
            </div>
          )}

          {skills?.length > 0 && skills.some(s => s.name) && (
            <div style={{marginBottom: '40px'}}>
              <h4>UMIEJĘTNOŚCI</h4>
              <div className="skill-tags">
                {skills.map((skill, idx) => (
                  skill.name && <span key={idx} className="skill-tag">{skill.name}</span>
                ))}
              </div>
            </div>
          )}

          {languages?.length > 0 && languages.some(l => l.language) && (
            <div style={{marginBottom: '40px'}}>
              <h4>JĘZYKI</h4>
              <div className="skill-tags">
                {languages.map((lang, idx) =>
                  lang.language && (
                    <span key={idx} className="skill-tag">
                      {lang.language}{lang.level ? ` ${lang.level}` : ''}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        <div className="tpl-geometric-grid-right">
          {experience?.length > 0 && experience.some(e => e.company || e.role) && (
            <div style={{marginBottom: '40px'}}>
              <h4>DOŚWIADCZENIE ZAWODOWE</h4>
              <div className="timeline">
                {experience.map((exp, idx) => (
                  (exp.company || exp.role) && (
                    <div className="job-entry" key={idx}>
                      <div className="job-title">{exp.role || 'Stanowisko'}</div>
                      <div className="job-meta">
                        {exp.company || 'Firma'} | {exp.period || 'Okres'}
                      </div>
                      {exp.description && (
                        <p style={{fontSize: '0.85rem', color: '#4a5568', lineHeight: 1.6}}>{exp.description}</p>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {education?.length > 0 && education.some(e => e.school || e.degree) && (
            <div style={{marginBottom: '40px'}}>
              <h4>EDUKACJA</h4>
              <div className="timeline">
                {education.map((edu, idx) => (
                  (edu.school || edu.degree) && (
                    <div className="job-entry" key={idx}>
                      <div className="job-title">{edu.degree || 'Kierunek'}</div>
                      <div className="job-meta">
                        {edu.school || 'Uczelnia'} | {edu.period || 'Okres'}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
