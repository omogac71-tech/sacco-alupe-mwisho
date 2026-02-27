import { 
  Users, 
  ShieldCheck, 
  Briefcase, 
  PiggyBank, 
  HandCoins, 
  HeartHandshake, 
  Newspaper, 
  Calendar, 
  Image as ImageIcon, 
  Download, 
  Gavel, 
  FileText,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Calculator,
  ExternalLink,
  Clock
} from 'lucide-react';

export const NAV_LINKS = [
  {
    title: 'Membership',
    items: [
      { label: 'Join Us', href: '#join' },
      { label: 'Member Rights', href: '#rights' },
      { label: 'Careers', href: '#careers' },
    ]
  },
  {
    title: 'Products',
    items: [
      { label: 'FOSA Savings', href: '#fosa' },
      { label: 'BOSA Loans', href: '#bosa' },
      { label: 'Welfare Fund', href: '#welfare' },
    ]
  },
  {
    title: 'Media',
    items: [
      { label: 'News', href: '#news' },
      { label: 'Events', href: '#events' },
      { label: 'Photo Gallery', href: '#gallery' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: 'Downloads', href: '#downloads' },
      { label: 'Tenders', href: '#tenders' },
      { label: 'Financial Reports', href: '#reports' },
    ]
  }
];

export const SERVICE_CHARTER = [
  { service: 'Emergency Loans', requirements: 'Fully filled form, 3 guarantors', turnaround: '12 Hours' },
  { service: 'Normal Loans', requirements: '3X Deposits, 5 guarantors', turnaround: '48 Hours' },
  { service: 'Membership Withdrawal', requirements: 'Written notice, 60 days notice', turnaround: '60 Days' },
  { service: 'FOSA Salary Processing', requirements: 'Salary through FOSA', turnaround: 'Instant' },
  { service: 'Benevolent Claim', requirements: 'Death certificate, ID copy', turnaround: '24 Hours' },
];

export const RESOURCES = [
  { title: 'Loan Application & Agreement Form', category: 'Loans', icon: HandCoins, downloadUrl: '/docs/loan_application_form.pdf' },
  { title: 'Package Application Form', category: 'Savings', icon: PiggyBank, downloadUrl: '/docs/package_application_form.pdf' },
  { title: 'Shares Increment/Reduction Form', category: 'Membership', icon: Users, downloadUrl: '/docs/shares_adjustment_form.pdf' },
  { title: 'Membership Application Form', category: 'Membership', icon: FileText, downloadUrl: '/docs/membership_application.pdf' },
  { title: 'Benevolent Fund Form', category: 'Welfare', icon: HeartHandshake, downloadUrl: '/docs/benevolent_fund.pdf' },
];

export const TENDERS = [
  { ref: 'AUS/T/001/2024', title: 'Provision of External Audit Services', closing: '2024-03-15', downloadUrl: '/docs/tender_audit_services.pdf' },
  { ref: 'AUS/T/002/2024', title: 'Supply of Office Stationery', closing: '2024-03-20', downloadUrl: '/docs/tender_stationery.pdf' },
  { ref: 'AUS/T/003/2024', title: 'IT Infrastructure Maintenance', closing: '2024-03-25', downloadUrl: '/docs/tender_it_maintenance.pdf' },
];

export const MANAGEMENT_BOARD = [
  { name: 'Dr. Hezekiah Othoo', role: 'Chairperson', image: 'https://picsum.photos/seed/mgt1/200/200' },
  { name: 'Dr. Boswell Owuor', role: 'Vice Chairperson', image: 'https://picsum.photos/seed/mgt2/200/200' },
  { name: 'Mr. Wycliffe Omondi', role: 'Treasurer', image: 'https://picsum.photos/seed/mgt3/200/200' },
  { name: 'Mr. Michael Ochieng', role: 'Credit Committee Chair', image: 'https://picsum.photos/seed/mgt4/200/200' },
  { name: 'Dr. Charles Omoga', role: 'Tender Committee Chair', image: 'https://picsum.photos/seed/mgt5/200/200' },
  { name: 'Mr. Selestine Oramisias', role: 'Credit Committee Member', image: 'https://picsum.photos/seed/mgt6/200/200' },
];

export const SUPERVISORY_COMMITTEE = [
  { name: 'Prof. Arnety Makokha', role: 'Chairperson', image: 'https://picsum.photos/seed/sup1/200/200' },
  { name: 'Mr. Collins Kidaga', role: 'Member', image: 'https://picsum.photos/seed/sup2/200/200' },
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/sacco1/800/600',
  'https://picsum.photos/seed/sacco2/800/600',
  'https://picsum.photos/seed/sacco3/800/600',
  'https://picsum.photos/seed/sacco4/800/600',
  'https://picsum.photos/seed/sacco5/800/600',
  'https://picsum.photos/seed/sacco6/800/600',
];
