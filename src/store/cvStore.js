import { create } from 'zustand';

export const useCVStore = create((set) => ({
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  selectedTemplate: 'bold-impact', // default
  
  setTemplate: (templateId) => set({ selectedTemplate: templateId }),

  updatePersonalInfo: (field, value) => set((state) => ({
    personalInfo: { ...state.personalInfo, [field]: value }
  })),

  addExperience: (exp) => set((state) => ({
    experience: [...state.experience, exp]
  })),

  addEducation: (edu) => set((state) => ({
    education: [...state.education, edu]
  })),

  setCVData: (data) => set(() => ({ ...data })),
  
  // Future actions like removeExperience, updateExperience, etc.
}));
