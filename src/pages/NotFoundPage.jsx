import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Strona nie została znaleziona</h1>
        <p className="not-found-desc">
          Ups! Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
        </p>
        <Link to="/" className="btn btn-primary not-found-btn">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
