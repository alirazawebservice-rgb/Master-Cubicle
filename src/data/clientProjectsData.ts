export interface ClientProject {
  name: string;
  location: string;
  scope?: string;
}

export interface ClientProjectCategory {
  id: string;
  title: string;
  countLabel: string;
  projects: ClientProject[];
}

export const CLIENT_PROJECT_CATEGORIES: ClientProjectCategory[] = [
  {
    id: 'institutional',
    title: 'Institutional Project',
    countLabel: '7 Campuses & Educational Centers',
    projects: [
      { name: 'Goa Bits Pilani', location: 'Goa', scope: 'Campus Restroom Cubicles & Partitions' },
      { name: 'Shree Chandra Tutorials', location: 'Mumbai', scope: 'Educational Facility Restroom Partitions' },
      { name: 'South Indian Welfare Society School', location: 'Mumbai', scope: 'High-Traffic Student Toilet Cubicles' },
      { name: 'City Montessori School', location: 'Lucknow', scope: 'Campus Sanitary Partitions' },
      { name: 'Diamond Jubilee High School', location: 'Hyderabad', scope: 'Hygienic Phenolic Cubicle Systems' },
      { name: 'K. J. Somaiya College of Engineering', location: 'Mumbai', scope: 'Engineering Block Restroom Fitouts' },
      { name: 'Euro Kids', location: 'Mumbai', scope: 'Child-Safe Sanitary Partitions & Fittings' }
    ]
  },
  {
    id: 'hospitality',
    title: 'Hospitality Project',
    countLabel: 'Pharma & Corporate Hospitality',
    projects: [
      { name: 'Cipla Ltd.', location: 'Sikkim', scope: 'Cleanroom & Executive Restroom Phenolic Cubicles' }
    ]
  },
  {
    id: 'sports',
    title: 'Sports Project',
    countLabel: '4 Clubs & Gymkhanas',
    projects: [
      { name: 'Lodha Club House', location: 'Mumbai', scope: 'Luxury Clubhouse Wet-Area Changing & Cubicles' },
      { name: 'Khar Gymkhana', location: 'Mumbai', scope: 'Locker Room & Shower Partition Systems' },
      { name: 'Sonam Builder (New Golden Nest)', location: 'Mumbai', scope: 'Sports Amenities & Restroom Fitouts' },
      { name: 'PG Patki (CCI Club)', location: 'Mumbai', scope: 'Clubhouse Turnkey Phenolic Cubicles' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Project',
    countLabel: '11 Corporate & Transit Sites',
    projects: [
      { name: 'Godrej BKC', location: 'Mumbai', scope: 'Grade-A Commercial Tower Restroom Cubicles' },
      { name: 'Dheeraj Reality', location: 'Mumbai', scope: 'Corporate Headquarters Sanitary Systems' },
      { name: 'T.G. Group', location: 'Mumbai', scope: 'Commercial Facility Partitions' },
      { name: 'Dhar Project Consultants Pvt. Ltd.', location: 'Mumbai', scope: 'Architectural Office Restrooms' },
      { name: 'Jet Airways (International Airport)', location: 'Mumbai', scope: 'Airport Terminal Heavy-Duty Cubicles' },
      { name: 'Akshar Space Pvt. Ltd.', location: 'Mumbai', scope: 'Commercial Complex Phenolic Partitions' },
      { name: 'Glass Decor', location: 'Pune', scope: 'Commercial Washroom Installations' },
      { name: 'Ashish Interbuild (Visakhapatnam Airport)', location: 'Visakhapatnam', scope: 'Airport Terminal Public Restroom Pods' },
      { name: 'SKB Builders', location: 'Pune', scope: 'Multi-Tenant Commercial Partitions' },
      { name: 'Star Bazaar', location: 'Mumbai', scope: 'Retail Footfall Heavy-Duty Toilet Cubicles' },
      { name: 'Team ONE Architects (India) Pvt. Ltd.', location: 'Mumbai', scope: 'Flagship Architectural Restroom Installation' }
    ]
  }
];
