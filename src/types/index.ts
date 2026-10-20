export type Language = 'id' | 'en';

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
}

export interface ProfileData {
  name: string;
  roleId: string;
  roleEn: string;
  rolesListId: string[];
  rolesListEn: string[];
  bioId: string;
  bioEn: string;
  email: string;
  phone: string;
  locationId: string;
  locationEn: string;
  avatarUrl: string;
  experienceYears: number;
  completedProjects: number;
  clientSatisfaction: number;
  awardsCount: number;
  socials: SocialLinks;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'webapp' | 'uiux' | 'ecommerce' | 'mobile';
  tags: string[];
  summaryId: string;
  summaryEn: string;
  fullDescId: string;
  fullDescEn: string;
  client: string;
  year: string;
  roleId: string;
  roleEn: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlightsId: string[];
  highlightsEn: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  priceIdr: string;
  priceUsd: string;
  featuresId: string[];
  featuresEn: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  roleId: string;
  roleEn: string;
  company: string;
  avatar: string;
  rating: number;
  commentId: string;
  commentEn: string;
  date: string;
  projectTitle: string;
}

export interface PricingPlan {
  id: string;
  nameId: string;
  nameEn: string;
  taglineId: string;
  taglineEn: string;
  priceIdr: number;
  priceUsd: number;
  isPopular?: boolean;
  featuresId: string[];
  featuresEn: string[];
}

export interface BlogPost {
  id: string;
  titleId: string;
  titleEn: string;
  excerptId: string;
  excerptEn: string;
  contentId: string[];
  contentEn: string[];
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
}
