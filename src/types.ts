export interface EnrollmentFormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  gradeLevel: string;
  preferredShift: string;
  scheduledVisitDate: string;
  notes?: string;
}

export type GradeLevelKey = 'infantil' | 'fundamental1' | 'fundamental2' | 'medio' | 'integral';

export interface GradePlan {
  id: GradeLevelKey;
  name: string;
  tagline: string;
  ageRange: string;
  originalPrice: number;
  promoPrice: number;
  discountPercentage: number;
  features: string[];
  spotsRemaining: number;
}
