import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Clock,
  ArrowRight,
  Lock,
  User,
  Eye,
  EyeOff,
  UserPlus
} from 'lucide-react';
import { 
  NAV_LINKS, 
  SERVICE_CHARTER, 
  RESOURCES, 
  TENDERS, 
  MANAGEMENT_BOARD, 
  SUPERVISORY_COMMITTEE,
  GALLERY_IMAGES 
} from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Loan Calculator State
  const [deposits, setDeposits] = useState<number>(100000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(5000);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const maxLoan = deposits * 3;
  const interestRate = 0.012; // 1.2% reducing balance

  const calculateRepayment = (months: number) => {
    // Reducing balance formula approximation for display
    // P * r * (1+r)^n / ((1+r)^n - 1)
    const r = interestRate;
    const n = months;
    const p = maxLoan;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(monthly);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for authentication logic
    alert("Login functionality is currently a placeholder. In a production environment, this would connect to a secure authentication service.");
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sacco-emerald rounded-lg flex items-center justify-center text-sacco-gold font-bold text-xl">
              A
            </div>
            <div>
              <h1 className="text-sacco-emerald font-bold text-lg leading-tight">Alupe University</h1>
              <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Sacco Society Ltd</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((group) => (
              <div key={group.title} className="relative">
                <button 
                  onClick={() => toggleDropdown(group.title)}
                  className="flex items-center gap-1 font-medium text-slate-700 hover:text-sacco-emerald transition-colors"
                >
                  {group.title}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === group.title ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === group.title && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="dropdown-menu"
                    >
                      {group.items.map((item) => (
                        <a 
                          key={item.label} 
                          href={item.href}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-sacco-emerald transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="btn-primary text-sm py-2"
            >
              Member Portal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-sacco-emerald" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {NAV_LINKS.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <p className="font-bold text-sacco-emerald text-sm uppercase tracking-wider">{group.title}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {group.items.map((item) => (
                        <a key={item.label} href={item.href} className="text-slate-600 text-sm py-1">{item.label}</a>
                      ))}
                    </div>
                  </div>
                ))}
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="w-full btn-primary"
                >
                  Member Portal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/alupe-uni/1920/1080?blur=2" 
              alt="University Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sacco-emerald/90 to-sacco-emerald/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block px-4 py-1 bg-sacco-gold/20 text-sacco-gold border border-sacco-gold/30 rounded-full text-sm font-semibold mb-6">
                Empowering Alupe University Community
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Future, <br />
                <span className="text-sacco-gold">Our Commitment.</span>
              </h2>
              <p className="text-lg text-emerald-50 mb-8 leading-relaxed">
                Join Alupe University Sacco Society today and experience financial growth through 
                tailored savings products and affordable credit facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="btn-secondary flex items-center gap-2"
                >
                  Join Alupe Sacco <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Member Login
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Delivery Charter */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Service Delivery Charter</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We are committed to providing efficient and transparent services to all our members within the specified timelines.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-sacco-emerald text-white">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Service Type</th>
                      <th className="px-6 py-4 font-semibold">Requirements</th>
                      <th className="px-6 py-4 font-semibold">Turnaround Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SERVICE_CHARTER.map((item, idx) => (
                      <tr key={idx} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-sacco-emerald">{item.service}</td>
                        <td className="px-6 py-4 text-slate-600 text-sm">{item.requirements}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                            <Clock className="w-3 h-3" /> {item.turnaround}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Calculator */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Smart Loan Calculator</h2>
                <p className="text-slate-600 mb-8">
                  Plan your financial growth with our transparent loan calculator. 
                  Members can borrow up to 3 times their total deposits at a competitive 1.2% reducing balance interest rate.
                </p>
                
                <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Deposits (KES)</label>
                    <input 
                      type="number" 
                      value={deposits}
                      onChange={(e) => setDeposits(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sacco-emerald focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Contribution (KES)</label>
                    <input 
                      type="number" 
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-sacco-emerald focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 font-medium">Maximum Loan Eligibility:</span>
                      <span className="text-2xl font-bold text-sacco-emerald">KES {maxLoan.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">*Based on 3X multiplier of your current deposits.</p>
                  </div>
                </div>
              </div>

              <div className="bg-sacco-emerald p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calculator className="text-sacco-gold" /> Estimated Repayment Table
                </h3>
                <div className="space-y-4">
                  {[12, 24, 48].map((months) => (
                    <div key={months} className="bg-white/10 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                      <div>
                        <p className="text-emerald-200 text-sm">Duration</p>
                        <p className="font-bold text-lg">{months} Months</p>
                      </div>
                      <div className="text-right">
                        <p className="text-emerald-200 text-sm">Monthly Installment</p>
                        <p className="font-bold text-xl text-sacco-gold">KES {calculateRepayment(months).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-emerald-200/60 text-center">
                  Interest calculated at 1.2% per month on a reducing balance basis. 
                  Actual figures may vary slightly based on specific loan products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Vault */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Document Resource Vault</h2>
                <p className="text-slate-400">Access all necessary forms and reports in one place.</p>
              </div>
              <button className="flex items-center gap-2 text-sacco-gold hover:underline font-semibold">
                View All Resources <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCES.map((res, idx) => (
                <a 
                  key={idx} 
                  href={res.downloadUrl}
                  download
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-sacco-emerald/30 rounded-xl text-sacco-gold">
                      <res.icon className="w-6 h-6" />
                    </div>
                    <Download className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{res.title}</h4>
                  <p className="text-sm text-slate-400">{res.category}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Life at Alupe Sacco</h2>
              <p className="text-slate-600">Capturing moments of growth, community, and excellence.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${idx}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tenders */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-8">
                <Gavel className="text-sacco-emerald w-8 h-8" />
                <h2 className="text-3xl font-bold text-sacco-emerald">Procurement & Tenders</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-400 text-sm uppercase tracking-wider">
                      <th className="pb-4 px-4">Ref Number</th>
                      <th className="pb-4 px-4">Tender Description</th>
                      <th className="pb-4 px-4">Closing Date</th>
                      <th className="pb-4 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {TENDERS.map((tender, idx) => (
                      <tr key={idx} className="group">
                        <td className="py-4 px-4 font-mono text-sm text-slate-600">{tender.ref}</td>
                        <td className="py-4 px-4 font-bold text-sacco-emerald">{tender.title}</td>
                        <td className="py-4 px-4 text-slate-600">{new Date(tender.closing).toLocaleDateString()}</td>
                        <td className="py-4 px-4">
                          <a 
                            href={tender.downloadUrl}
                            download
                            className="text-sacco-emerald font-bold text-sm flex items-center gap-1 group-hover:underline"
                          >
                            Download <Download className="w-4 h-4" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Contact */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="section-title mb-8">Board of Management</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {MANAGEMENT_BOARD.map((dir, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <img 
                        src={dir.image} 
                        alt={dir.name} 
                        className="w-20 h-20 rounded-xl object-cover shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-sacco-emerald">{dir.name}</h4>
                        <p className="text-sm text-slate-500">{dir.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="section-title mb-8 mt-16">Supervisory Committee</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {SUPERVISORY_COMMITTEE.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-20 h-20 rounded-xl object-cover shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-sacco-emerald">{member.name}</h4>
                        <p className="text-sm text-slate-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-sacco-emerald mb-6">Find Us</h3>
                  <div className="h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                      <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-sacco-emerald mx-auto mb-4" />
                        <h4 className="font-bold text-slate-800">Alupe University Main Campus</h4>
                        <p className="text-slate-500 text-sm">Busia - Malaba Road, Busia, Kenya</p>
                        <button className="mt-4 btn-primary text-sm">Get Directions</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sacco-emerald text-white p-8 rounded-[2.5rem] shadow-2xl h-fit">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:bg-white/20 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full btn-secondary">Send Message</button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sacco-gold" />
                    <span>0728983065</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sacco-gold" />
                    <span>info@alupesacco.co.ke</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-sacco-emerald rounded-lg flex items-center justify-center text-sacco-gold font-bold text-xl">
                  A
                </div>
                <h1 className="font-bold text-xl">Alupe Sacco</h1>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering the Alupe University community through innovative financial solutions 
                and sustainable growth strategies since our inception.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sacco-emerald transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sacco-emerald transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sacco-emerald transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-sacco-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Our Products</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">News & Media</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Member Services</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Loan Calculator</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Download Forms</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Member Portal</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Tender Board</a></li>
                <li><a href="#" className="hover:text-sacco-gold transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Regulatory Compliance</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-sacco-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tighter">SASRA Regulated</p>
                    <p className="text-[10px] text-slate-500">License No: SAC/000/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Alupe University Sacco Society. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-sacco-gold transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Member Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-sacco-emerald/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsLoginOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-sacco-emerald p-8 text-white text-center relative">
                <button 
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="w-16 h-16 bg-sacco-gold rounded-2xl flex items-center justify-center text-sacco-emerald mx-auto mb-4 shadow-lg">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Member Login</h3>
                <p className="text-emerald-100 text-sm mt-2">Secure access to your Sacco account</p>
              </div>

              <div className="p-8">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Member ID / Username</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Enter your ID"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-sacco-emerald focus:border-transparent outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        required
                        type="password" 
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-sacco-emerald focus:border-transparent outline-none transition-all" 
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <input type="checkbox" className="rounded border-slate-300 text-sacco-emerald focus:ring-sacco-emerald" />
                      Remember me
                    </label>
                    <button type="button" className="text-sacco-emerald font-semibold hover:underline">
                      Forgot Password?
                    </button>
                  </div>

                  <button type="submit" className="w-full btn-primary py-4 text-lg shadow-lg shadow-emerald-900/20">
                    Sign In
                  </button>

                  <div className="relative flex items-center justify-center py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <span className="relative px-4 bg-white text-xs font-bold text-slate-400 uppercase tracking-widest">Or</span>
                  </div>

                  <button 
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      alert("Welcome! You are now viewing the site as a guest. Feel free to explore our products and services.");
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all border border-slate-200"
                  >
                    <UserPlus className="w-5 h-5" />
                    Continue as Guest
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <p className="text-slate-500 text-sm">
                    Not a member yet?{" "}
                    <button 
                      onClick={() => {
                        setIsLoginOpen(false);
                        // In a real app, this would scroll to join section or open join modal
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-sacco-emerald font-bold hover:underline"
                    >
                      Apply for Membership
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
