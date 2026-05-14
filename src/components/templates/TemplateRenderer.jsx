import React from 'react';
import BoldImpact from './BoldImpact';
import ElegantSerif from './ElegantSerif';
import GeometricGrid from './GeometricGrid';
import ModernPro from './ModernPro';

export default function TemplateRenderer({ templateId, data }) {
  switch (templateId) {
    case 'elegant-serif':
      return <ElegantSerif data={data} />;
    case 'geometric-grid':
      return <GeometricGrid data={data} />;
    case 'modern-pro':
      return <ModernPro data={data} />;
    case 'bold-impact':
    default:
      return <BoldImpact data={data} />;
  }
}
