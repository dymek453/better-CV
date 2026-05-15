import React from 'react';
import './TemplateStyles.css';

export default function BoldImpact({ data }) {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="template-wrapper tpl-bold-impact">
      <div className="tpl-bold-impact-sidebar">
        <div className="avatar"></div>
        
        <div className="tpl-bold-impact-section">
          <h3>KONTAKT</h3>
          <ul>
            {personalInfo?.phone && <li>{personalInfo.phone}</li>}
            {personalInfo?.email && <li>{personalInfo.email}</li>}
            {personalInfo?.location && <li>{personalInfo.location}</li>}
          </ul>
        </div>

        {skills?.length > 0 && skills.some(s => s.name) && (
          <div className="tpl-bold-impact-section">
            <h3>UMIEJĘTNOŚCI</h3>
            <ul>
              {skills.map((skill, idx) => (
                skill.name && <li key={idx} className="skill-item">{skill.name}</li>
              ))}
            </ul>
          </div>
        )}

        {languages?.length > 0 && languages.some(l => l.language) && (
          <div className="tpl-bold-impact-section">
            <h3>JĘZYKI</h3>
            <ul>
              {languages.map((lang, idx) =>
                lang.language && (
                  <li key={idx} className="skill-item">
                    {lang.language}{lang.level ? ` — ${lang.level}` : ''}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="tpl-bold-impact-main">
        <div className="name">
          {personalInfo?.firstName || 'Imię'} {personalInfo?.lastName || 'Nazwisko'}
        </div>
        <div className="role">
          {experience?.[0]?.role || 'Stanowisko'}
        </div>

        {personalInfo?.summary && (
          <div className="tpl-bold-impact-section">
            <h4>PROFIL</h4>
            <div className="job-desc">{personalInfo.summary}</div>
          </div>
        )}

        {experience?.length > 0 && experience.some(e => e.company || e.role) && (
          <div className="tpl-bold-impact-section">
            <h4>DOŚWIADCZENIE</h4>
            {experience.map((exp, idx) => (
              (exp.company || exp.role) && (
                <div className="job-entry" key={idx}>
                  <div className="job-header">
                    <span className="job-title">{exp.role || 'Stanowisko'}</span>
                    <span className="job-date">{exp.period || 'Okres'}</span>
                  </div>
                  <div className="job-company">{exp.company || 'Firma'}</div>
                  {exp.description && (
                    <div className="job-desc">
                      {exp.description}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {education?.length > 0 && education.some(e => e.school || e.degree) && (
          <div className="tpl-bold-impact-section">
            <h4>WYKSZTAŁCENIE</h4>
            {education.map((edu, idx) => (
              (edu.school || edu.degree) && (
                <div className="job-entry" key={idx}>
                  <div className="job-header">
                    <span className="job-title">{edu.degree || 'Kierunek'}</span>
                    <span className="job-date">{edu.period || 'Okres'}</span>
                  </div>
                  <div className="job-company">{edu.school || 'Uczelnia'}</div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
