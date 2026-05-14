import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  pl: {
    translation: {
      "app_name": "Better CV",
      "hero_title": "Twoja kariera zasługuje na lepszy start.",
      "hero_subtitle": "Stwórz profesjonalne CV w kilka minut dzięki naszym sprawdzonym szablonom i inteligentnym podpowiedziom. Z nami proces rekrutacji stanie się prostszy.",
      "create_cv_now": "Stwórz swoje CV teraz",
      "how_it_works": "Jak to działa?",
      "how_it_works_subtitle": "Trzy proste kroki do wymarzonej pracy.",
      "step_1": "1. Wybierz szablon",
      "step_1_desc": "Wybierz spośród dziesiątek profesjonalnych szablonów dostosowanych do Twojej branży.",
      "step_2": "2. Wprowadź dane",
      "step_2_desc": "Użyj naszego intuicyjnego edytora i gotowych zwrotów, aby wypełnić sekcje CV.",
      "step_3": "3. Pobierz i aplikuj",
      "step_3_desc": "Zapisz gotowe CV w formacie PDF i wyślij je bezpośrednio do pracodawcy.",
      "choose_style": "Wybierz swój styl",
      "choose_style_desc": "Nasze szablony są zoptymalizowane pod kątem systemów ATS i czytelności dla rekruterów.",
      "all": "Wszystkie",
      "creative": "Kreatywne",
      "classic": "Klasyczne",
      "footer_copyright": "© 2026 Better CV. Wspieramy Twój rozwój zawodowy.",
      "privacy": "Polityka prywatności",
      "terms": "Regulamin",
      "contact": "Kontakt",
      "career_advice": "Porady zawodowe",
      "templates_title": "Dostępne szablony",
      "templates_desc": "Podstawowe układy dokumentów.",
      "download_pdf": "Pobierz PDF"
    }
  },
  en: {
    translation: {
      "app_name": "Better CV",
      "hero_title": "Your career deserves a better start.",
      "hero_subtitle": "Create a professional CV in minutes with our proven templates and intelligent suggestions.",
      "create_cv_now": "Create your CV now",
      // Add english translations if necessary later
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
