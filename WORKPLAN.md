# 📌 CV Builder - Projekt i Architektura

## 🛠️ Stos Technologiczny
* **Frontend:** React + Vite (JavaScript / JSX)
* **Routing:** `react-router-dom`
* **Zarządzanie Stanem (Global Store):** `zustand`
* **Zarządzanie Formularzami:** `react-hook-form`
* **Tłumaczenia (i18n):** `react-i18next`
* **Styling:** CSS Modules lub Tailwind CSS (w zależności od preferencji AI)

## 🗺️ Architektura Ścieżek (Routing)
1. **`/`** - Landing Page (Nagłówek, przyciski akcji).
2. **`/templates`** - Wybór szablonu (Klasyczny / Nowoczesny).
3. **`/builder`** - Edytor (Lewa kolumna: formularze, Prawa kolumna: podgląd live i eksport PDF).

## ⚠️ Wytyczne dla Asystenta AI
Pisz nowoczesny, modularny i czysty kod oparty na rynkowych standardach Reacta. Wykorzystaj wymienione biblioteki, by zapewnić wydajność i skalowalność. Kod ma być wysokiej jakości, zgodny z załączonymi projektami UI. Struktura plików powinna być logicznie podzielona na komponenty, strony (pages) i store (dla zustanda).

## 🏗️ Proponowana struktura plików

src/
├── components/          # Główne widoki
│   ├── LandingPage.jsx
│   ├── TemplateSelector.jsx
│   └── builder/         # Pod-komponenty dla samego kreatora
│       ├── FormColumn.jsx
│       └── PreviewColumn.jsx
├── context/
│   └── AppContext.jsx   # Tu trzymamy wpisane dane i wybrany język
├── utils/
│   └── dictionary.js    # Nasz prosty słownik tłumaczeń
├── App.jsx              # Tu zarządzamy przełączaniem ekranów
└── main.jsx


