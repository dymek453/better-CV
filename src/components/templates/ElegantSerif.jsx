import React from 'react';
import './TemplateStyles.css';

export default function ElegantSerif({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="template-wrapper tpl-elegant-serif">
      <div className="tpl-elegant-serif-header">
        <div className="name">
          {personalInfo?.firstName || 'Imię'} {personalInfo?.lastName || 'Nazwisko'}
        </div>
        <div className="role">
          {experience?.[0]?.role || 'STANOWISKO'}
        </div>
      </div>

      <div className="tpl-elegant-serif-body">
        <div className="tpl-elegant-serif-left">
          {personalInfo?.summary && (
            <div className="tpl-elegant-serif-section">
              <h4>PROFIL</h4>
              <p>{personalInfo.summary}</p>
            </div>
          )}

          <div className="tpl-elegant-serif-section">
            <h4>KONTAKT</h4>
            {personalInfo?.email && <div className="contact-item">{personalInfo.email}</div>}
            {personalInfo?.phone && <div className="contact-item">{personalInfo.phone}</div>}
            {personalInfo?.location && <div className="contact-item">{personalInfo.location}</div>}
          </div>

          {skills?.length > 0 && skills.some(s => s.name) && (
            <div className="tpl-elegant-serif-section">
              <h4>UMIEJĘTNOŚCI</h4>
              <ul>
                {skills.map((skill, idx) => (
                  skill.name && <li key={idx}>{skill.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="tpl-elegant-serif-right">
          {experience?.length > 0 && experience.some(e => e.company || e.role) && (
            <div className="tpl-elegant-serif-section">
              <h4>DOŚWIADCZENIE ZAWODOWE</h4>
              {experience.map((exp, idx) => (
                (exp.company || exp.role) && (
                  <div className="job-entry" key={idx}>
                    <div className="job-header">
                      <span className="job-title">{exp.role || 'Stanowisko'}</span>
                      <span className="job-date" style={{fontSize: '0.8rem', color: '#a0aec0'}}>{exp.period || 'Okres'}</span>
                    </div>
                    <div className="job-company">{exp.company || 'Firma'}</div>
                    {exp.description && (
                      <p>{exp.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          )}

          {education?.length > 0 && education.some(e => e.school || e.degree) && (
            <div className="tpl-elegant-serif-section">
              <h4>WYKSZTAŁCENIE</h4>
              {education.map((edu, idx) => (
                (edu.school || edu.degree) && (
                  <div className="job-entry" key={idx}>
                    <div className="job-header">
                      <span className="job-title">{edu.degree || 'Kierunek'}</span>
                      <span className="job-date" style={{fontSize: '0.8rem', color: '#a0aec0'}}>{edu.period || 'Okres'}</span>
                    </div>
                    <div className="job-company">{edu.school || 'Uczelnia'}</div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
