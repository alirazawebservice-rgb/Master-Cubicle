export interface ProductSubcategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  specifications: {
    panelMaterial: string;
    thickness: string;
    hardware: string;
    standardHeight: string;
    standardDepth: string;
    groundClearance: string;
    fireRating: string;
    waterResistance: string;
  };
  features: string[];
  recommendedFor: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  subcategories?: ProductSubcategory[];
  keySpecs: string[];
  applications: string[];
}

export interface Advantage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface ApplicationSector {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  idealSeries: string;
  keyBenefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Corporate' | 'Hospitality' | 'Retail' | 'Education' | 'Commercial';
  location: string;
  cubiclesInstalled: string;
  systemUsed: string;
  imageUrl: string;
  additionalImages?: string[];
  year: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Toilet Cubicles' | 'Urinal Partitions' | 'Changing Rooms & Lockers' | 'Hardware Details';
  imageUrl: string;
  location?: string;
  caption: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  sector: string;
  initials: string;
}
