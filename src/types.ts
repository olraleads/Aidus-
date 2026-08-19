export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  active?: boolean;
  avatarColor: string;
  avatarLetter: string;
  category: 'HVAC' | 'MedSpa' | 'RealEstate' | 'Staffing';
  body: string[];
  attachment?: string;
}

export interface Plan {
  id: string;
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  isPro?: boolean;
}
