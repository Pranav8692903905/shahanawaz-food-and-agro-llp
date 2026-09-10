import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImg from '../ChatGPT Image Jul 31, 2026, 01_42_37 PM.png';
import locImg from '../loc.png';
import companyImg from '../Gemini_Generated_Image_r73yrfr73yrfr73y.png';
import contactImg from '../contact.avif';
import grainsImg from './202211EX05_0110_ret.avif';
import bottlesImg from './gg.avif';
import bottleRow from './bottle.webp';
import factoryImg from './es.jpg';
import dsdImg from './dsd.jpg';
import promoImg from './ChatGPT Image Aug 10, 2026, 03_37_14 PM.png';
import heroVideo from '../b_give_me_water_produc.mp4';

const categories = [
  {
    title: 'Hydrological Cycle:',
    description: 'Hydrological Cycle: Solar energy drives evaporation and transpiration, continuously producing freshwater through natural atmospheric precipitation.',
    image: grainsImg,
  },
  {
    title: 'Surface & Ground Extraction',
    description: 'Lakes, rivers, and aquifers serve as primary sources, pumped into facilities for bulk processing.',
    image: bottlesImg,
  },
  {
    title: 'Advanced Desalination:',
    description: 'Advanced Desalination: Reverse osmosis turns seawater into potable water by removing dissolved salts under high pressure.',
    image: bottleRow,
  },
  {
    title: 'Treatment Processes',
    description: 'Treatment Processes: Raw water undergoes coagulation, filtration, and disinfection to eliminate contaminants and pathogens.',
    image: factoryImg,
  },
  {
    title: 'Atmospheric Generation:',
    description: 'Atmospheric Generation: Innovative harvesting units extract moisture directly from ambient air to supply arid regions.',
    image: dsdImg,
  },
  {
    title: 'Water Recycling',
    description: 'Water Recycling: Modern reclamation systems treat wastewater to advanced standards, creating high-quality recycled water.',
    image: bottleRow,
  },
];

const highlights = [
  'Farm-linked sourcing',
  'Modern packing standards',
  'Bulk and retail supply',
  'Fast order coordination',
];

const stats = [
  { value: '120+', label: 'Partner farms and suppliers' },
  { value: '25', label: 'Product categories handled' },
  { value: '8', label: 'States reached through distribution' },
];

const products = [
  'Basmati and non-basmati rice',
  'Whole spices and blends',
  'Atta, grains, and lentils',
  'Sunflower and mustard oil',
  'Organic produce and staples',
  'Custom wholesale packaging',
];

const clientTypes = [
  { number: '01', title: 'Retail partners', text: 'Reliable everyday supply for stores that care about quality and consistency.' },
  { number: '02', title: 'Hospitality & catering', text: 'Flexible volumes and dependable fulfilment for kitchens working at scale.' },
  { number: '03', title: 'Distributors', text: 'A responsive partner for regional distribution, private labels, and repeat orders.' },
  { number: '04', title: 'Institutional buyers', text: 'Clear coordination and practical packaging for large, recurring requirements.' },
];

function InteriorHeader({ activePage, onNavigate }) {
  const links = [['home', 'Home'], ['about', 'About'], ['clients', 'Clients'], ['contact', 'Contact']];
  return (
    <header className="border-b border-[#d9e1d1] bg-[#f8f8f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <button type="button" onClick={() => onNavigate('home')} className="flex items-center gap-3 text-left">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#d9e1d1] bg-white p-1"><img src={logoImg} alt="Shahanawaz Food and Agro LLP logo" className="h-full w-full object-contain" /></span>
          <span className="hidden text-sm font-bold tracking-[0.08em] text-[#173d35] sm:block">SHAHNAWAZ FOODS</span>
        </button>
        <nav aria-label="Page navigation" className="flex items-center gap-1 sm:gap-3">
          {links.map(([key, label]) => <button key={key} type="button" onClick={() => onNavigate(key)} className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition sm:px-4 ${activePage === key ? 'bg-[#173d35] text-white' : 'text-[#5c6c5a] hover:bg-[#e8eee2] hover:text-[#173d35]'}`}>{label}</button>)}
        </nav>
      </div>
    </header>
  );
}

function InteriorPage({ page, onNavigate }) {
  const shared = `${page === 'contact' ? 'contact-page' : page === 'clients' ? 'client-page' : page === 'about' ? 'about-page' : 'bg-[#f8f8f3]'} min-h-screen text-[#173d35]`;
  if (page === 'about') {
    return (
      <div className={shared}><InteriorHeader activePage={page} onNavigate={onNavigate} /><main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8622c]">Our foundation</p><h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.04em] text-[#173d35] sm:text-7xl">Good food starts with good relationships.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#687565]">Shahanawaz Food and Agro LLP brings food, agro products, packaging, and production support together under one dependable partner.</p><div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#d9e1d1] py-5">{stats.map((stat) => <div key={stat.label} className="pr-3"><p className="text-3xl font-black text-[#c8622c]">{stat.value}</p><p className="mt-1 text-xs leading-5 text-[#687565]">{stat.label}</p></div>)}</div></div>
          <div className="relative"><div className="absolute -bottom-5 -left-5 h-32 w-32 border-b border-l border-[#c8622c]" /><img src={companyImg} alt="Shahanawaz Food and Agro LLP premises" className="relative h-[430px] w-full object-cover grayscale-[15%]" /><div className="absolute bottom-5 left-5 bg-[#173d35] px-5 py-4 text-white"><p className="text-xs uppercase tracking-[0.25em] text-[#d2e1c3]">Established</p><p className="mt-1 text-2xl font-black">05.10.2023</p></div></div>
        </section>
        <section className="bg-[#173d35] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2e1c3]">How we work</p><h2 className="mt-4 text-3xl font-black leading-tight">Built for steady, useful growth.</h2></div>{highlights.slice(0, 3).map((highlight, index) => <div key={highlight} className="border-t border-white/25 pt-5"><p className="text-4xl font-black text-[#c8622c]">0{index + 1}</p><p className="mt-4 text-lg font-bold">{highlight}</p><p className="mt-2 text-sm leading-6 text-[#d2e1c3]">Practical systems and people-first coordination at every step.</p></div>)}</div></section>
      </main></div>
    );
  }
  if (page === 'clients') {
    return (
      <div className={shared}><InteriorHeader activePage={page} onNavigate={onNavigate} /><main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8622c]">Who we serve</p><h1 className="mt-5 text-5xl font-black leading-none tracking-[-0.04em] sm:text-7xl">Partners who keep things moving.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#687565]">From growing retailers to established distribution networks, we make sourcing feel straightforward and human.</p></div><div className="mt-16 grid gap-px border border-[#d9e1d1] bg-[#d9e1d1] md:grid-cols-2">{clientTypes.map((client) => <article key={client.number} className="bg-[#f8f8f3] p-8 transition hover:bg-[#e9f0e2] sm:p-10"><p className="text-sm font-black text-[#c8622c]">{client.number}</p><h2 className="mt-12 text-2xl font-black">{client.title}</h2><p className="mt-3 max-w-sm leading-7 text-[#687565]">{client.text}</p><button type="button" onClick={() => onNavigate('contact')} className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#173d35] underline decoration-[#c8622c] underline-offset-8">Start a conversation</button></article>)}</div><section className="mt-16 grid gap-8 bg-[#c8622c] p-8 text-white sm:p-12 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffe0c9]">A better supply relationship</p><h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-5xl">Your requirements deserve a partner who listens.</h2></div><button type="button" onClick={() => onNavigate('contact')} className="w-fit border border-white px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#c8622c]">Talk to us</button></section></main></div>
    );
  }
  if (page === 'contact') {
    return (
      <div className="contact-page min-h-screen text-[#173d35]"><InteriorHeader activePage="contact" onNavigate={onNavigate} /><main className="mx-auto grid max-w-7xl gap-14 bg-transparent px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8622c]">Let&apos;s connect</p><h1 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.04em] sm:text-7xl">Tell us what you need.</h1><p className="mt-7 max-w-md text-lg leading-8 text-[#687565]">Share a requirement, ask about our services, or simply say hello. We&apos;ll get back to you with a clear next step.</p><div className="mt-12 space-y-6 border-t border-[#d9e1d1] pt-7 text-sm"><div><p className="font-bold uppercase tracking-[0.15em] text-[#c8622c]">Visit</p><p className="mt-2 leading-6 text-[#687565]">1st Floor, D 1, Shree Nag, Khairani Rd,<br />Saki Naka, Mumbai 400072</p></div><div><p className="font-bold uppercase tracking-[0.15em] text-[#c8622c]">Reach us</p><a href="mailto:shahanazawfoodandagro@gmail.com" className="mt-2 block text-[#173d35] underline underline-offset-4">shahanazawfoodandagro@gmail.com</a><a href="https://www.instagram.com/flipsip_water" target="_blank" rel="noreferrer" className="mt-1 block text-[#173d35] underline underline-offset-4">Instagram: @flipsip_water</a><a href="tel:8692903905" className="mt-1 block text-[#173d35] underline underline-offset-4">8692903905</a></div></div></div><form onSubmit={(event) => { event.preventDefault(); alert('Message sent - thank you!'); event.target.reset(); }} className="border-t-4 border-[#c8622c] bg-white/95 p-6 shadow-[0_20px_60px_rgba(23,61,53,0.08)] sm:p-10"><div className="grid gap-6 sm:grid-cols-2"><label className="text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Name<input name="name" required className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="Your name" /></label><label className="text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Email<input name="email" type="email" required className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="you@company.com" /></label></div><label className="mt-7 block text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Subject<input name="subject" className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="How can we help?" /></label><label className="mt-7 block text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Message<textarea name="message" required rows={5} className="mt-3 w-full resize-none border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="Tell us a little about your requirement" /></label><button type="submit" className="mt-8 w-full bg-[#173d35] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#c8622c]">Send message</button></form></main></div>
    );
  }
  return (
    <div className={shared} style={{ backgroundImage: `linear-gradient(rgba(248,248,243,0.78), rgba(248,248,243,0.88)), url(${contactImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}><InteriorHeader activePage="contact" onNavigate={onNavigate} /><main className="mx-auto grid max-w-7xl gap-14 bg-[#f8f8f3]/35 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8622c]">Let&apos;s connect</p><h1 className="mt-5 text-5xl font-black leading-[0.96] tracking-[-0.04em] sm:text-7xl">Tell us what you need.</h1><p className="mt-7 max-w-md text-lg leading-8 text-[#687565]">Share a requirement, ask about our services, or simply say hello. We&apos;ll get back to you with a clear next step.</p><div className="mt-12 space-y-6 border-t border-[#d9e1d1] pt-7 text-sm"><div><p className="font-bold uppercase tracking-[0.15em] text-[#c8622c]">Visit</p><p className="mt-2 leading-6 text-[#687565]">1st Floor, D 1, Shree Nag, Khairani Rd,<br />Saki Naka, Mumbai 400072</p></div><div><p className="font-bold uppercase tracking-[0.15em] text-[#c8622c]">Reach us</p><a href="mailto:vishwakarmapranav19@gmail.com" className="mt-2 block text-[#173d35] underline underline-offset-4">vishwakarmapranav19@gmail.com</a><a href="tel:8692903905" className="mt-1 block text-[#173d35] underline underline-offset-4">8692903905</a></div></div></div><form onSubmit={(event) => { event.preventDefault(); alert('Message sent - thank you!'); event.target.reset(); }} className="border-t-4 border-[#c8622c] bg-white/95 p-6 shadow-[0_20px_60px_rgba(23,61,53,0.08)] sm:p-10"><div className="grid gap-6 sm:grid-cols-2"><label className="text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Name<input name="name" required className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="Your name" /></label><label className="text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Email<input name="email" type="email" required className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="you@company.com" /></label></div><label className="mt-7 block text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Subject<input name="subject" className="mt-3 w-full border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="How can we help?" /></label><label className="mt-7 block text-xs font-bold uppercase tracking-[0.15em] text-[#687565]">Message<textarea name="message" required rows={5} className="mt-3 w-full resize-none border-b border-[#bfcbbb] bg-transparent px-0 py-3 text-base font-normal text-[#173d35] outline-none focus:border-[#c8622c]" placeholder="Tell us a little about your requirement" /></label><button type="submit" className="mt-8 w-full bg-[#173d35] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#c8622c]">Send message</button></form></main></div>
  );
}

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [page, setPage] = useState('home');

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
  }, []);

  useEffect(() => {
    const syncPage = () => {
      const nextPage = window.location.hash.replace('#', '');
      setPage(['about', 'clients', 'contact'].includes(nextPage) ? nextPage : 'home');
    };
    syncPage();
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  const navigate = (nextPage) => {
    window.location.hash = nextPage === 'home' ? '' : nextPage;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showWebsite) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#061a3a] px-5 py-12 text-white sm:px-8">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(147,197,253,0.35)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <section className="relative z-10 w-full max-w-4xl text-center" data-aos="fade-up">
          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-blue-200/30 bg-white p-2 shadow-2xl shadow-blue-950/50 sm:h-28 sm:w-28">
            <img src={logoImg} alt="Shahanawaz Food and Agro LLP logo" className="h-full w-full object-contain" />
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200 sm:text-sm">Quality • Trust • Growth</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Welcome to<br />
            <span className="text-blue-200">Shahanawaz Food and Agro LLP</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg">
            Connecting quality food and agro products with the people and businesses who value them.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setShowDetails((current) => !current)}
              className="w-full rounded-full border border-blue-200/50 px-8 py-3.5 text-sm font-bold text-blue-100 transition hover:border-white hover:bg-white/10 sm:w-auto"
            >
              {showDetails ? 'Hide Details' : 'Learn More'}
            </button>
            <button
              type="button"
              onClick={() => setShowWebsite(true)}
              className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#061a3a] shadow-xl shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-100 sm:w-auto"
            >
              Main Website
            </button>
          </div>

          {showDetails && (
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-blue-200/20 bg-white/10 px-6 py-5 text-sm leading-6 text-blue-50 backdrop-blur-sm">
              We work across food, agro products, packaging, and water production services with a focus on dependable quality and long-term partnerships.
            </div>
          )}
        </section>
      </main>
    );
  }

  if (page !== 'home') {
    return <InteriorPage page={page} onNavigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#eaf6ff_0%,#e0f2ff_100%)] text-sky-900">
      <header data-aos="fade-down" className="relative z-10 overflow-hidden border-b border-blue-400/30 bg-[#061a3a]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <p className="text-lg font-bold text-blue-100">Shahanawaz Food and Agro LLP</p>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-6">
            <button type="button" onClick={() => navigate('home')} className="text-sm font-medium text-blue-100 hover:text-white">Home</button>
            <button type="button" onClick={() => navigate('about')} className="text-sm font-medium text-blue-100 hover:text-white">About Us</button>
            <button type="button" onClick={() => navigate('clients')} className="text-sm font-medium text-blue-100 hover:text-white">Clients</button>
            <button type="button" onClick={() => navigate('contact')} className="text-sm font-medium text-blue-100 hover:text-white">Contact</button>
            <button
              type="button"
              onClick={() => setShowWebsite(false)}
              className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-400 hover:bg-sky-50"
            >
              Back
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 overflow-hidden">
        <video
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 w-full object-cover opacity-45"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <section data-aos="fade-up" className="relative mx-auto max-w-7xl overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative z-10 grid min-h-[56vh] items-start gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-extrabold leading-tight text-olive-900 md:text-6xl">
                Your <span className="text-amber-400">TRUST</span>
                <br />
                Our <span className="text-amber-400">PRODUCT</span>
              </h1>
              <div className="mt-6 max-w-xl text-lg text-olive-700 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">💧 <span className="align-middle">PURE QUALITY</span></h3>
                  <p className="mt-2">Advanced purification &amp; strict quality checks.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">🤝 <span className="align-middle">CUSTOMER FIRST</span></h3>
                  <p className="mt-2">Quality and satisfaction at every step.</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block rounded bg-rust-500 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-rust-600"
              >
                Get Started
              </a>
            </div>

            <div data-aos="zoom-in" className="flex min-h-[360px] items-center justify-center">
              <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
                <img src={logoImg} alt="Company logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </section>
        <section id="about" data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-olive-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rust-500">About the company</p>
              <h2 className="mt-4 text-3xl font-black text-olive-900">SHAHNAWAZ FOODS AND AGRO LLP</h2>
              <div className="mt-4 flex items-center justify-start">
                <img
                  src={companyImg}
                  alt="Shahanawaz Food and Agro LLP - premises"
                  className="max-w-full w-[520px] rounded-lg border border-olive-100 object-cover shadow-md"
                />
              </div>
            </div>

            <div className="text-base leading-7 text-olive-700 space-y-3 break-words">
              <p className="mb-0"><strong>It was established in :</strong> 05-10-2023</p>

              <p className="mb-0">
                <strong>SHAHNAWAZ FOODS AND AGRO LLP</strong>  <strong></strong> is <strong>2 years, 10 months &amp; 26 days</strong> old, incorporated with MCA on <strong>5th September, 2023</strong>.
              </p>

              <p className="mb-0">
                Registered office address: <strong>1st Floor, D 1, Shree Nag, Khairani Rd, Saki Naka, Mumbai, Mumbai, Mumbai, Maharashtra, India</strong>,
                <a className="ml-1 text-sky-600 hover:underline" href="https://www.falconebiz.com/company/400072.html" target="_blank" rel="noreferrer">400072</a>.
              </p>

              <p className="mb-0"><strong>Current status:</strong> Active.</p>
            </div>
          </div>
        </section>

        <section id="products" data-aos="fade-up" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-light tracking-wide text-[#b9b0a8] md:text-4xl">Our Services</p>
            <div className="mx-auto mt-2 h-[3px] w-24 bg-[#e76b39]" />
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-5xl font-black leading-none tracking-tight text-[#0f2d73] md:text-[8rem]">WATER</h2>
            <h3 className="mt-1 text-4xl font-black leading-none tracking-tight text-[#e76b39] md:text-[6rem]">PRODUCTION</h3>
            <h4 className="mt-2 text-4xl font-black leading-none tracking-tight text-[#0f2d73] md:text-[5rem]">SERVICES</h4>
            <p className="mt-6 text-xl font-light italic text-[#0f2d73] md:text-[2.2rem]">
              RO Water, Mineral Water &amp; Packaged Drinking Water
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              'End to End Water Plant Set Up',
              'New Product and Formulation Development',
              'Plant Laboratory Set-Up',
              'Assistance for legal compliances',
              'Detailed Technical Evaluation of Vendors',
              'Assistance in Contract Manufacturing',
              'Water Safety Certification &amp; Approvals',
              'Chemical Distribution',
              'On-Site and Off-Site Support',
            ].map((service, index) => (
              <div
                key={service}
                className={`flex min-h-[84px] items-center justify-center px-5 py-4 text-center text-base font-semibold leading-tight shadow-sm md:text-lg ${
                  index % 3 === 0 || index % 3 === 2 ? 'bg-[#0f2d73] text-white' : 'bg-[#e76b39] text-white'
                }`}
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div data-aos="fade-right" className="relative rounded-[2rem] overflow-hidden border border-rust-200 shadow-sm">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${companyImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="relative p-8">
                <div className="border-t-4 border-rust-500 pt-8">
                  <div className="space-y-8 text-white">
                    <div>
                      <p className="text-2xl font-semibold">Location:</p>
                      <p className="mt-2 leading-7">
                        1st Floor, D 1, Shree Nag, Khairani Rd, Saki Naka, Mumbai, Mumbai, Mumbai, Maharashtra, India, 400072
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-semibold">Email:</p>
                      <a className="mt-2 block text-sky-200 hover:underline" href="mailto:shahanazawfoodandagro@gmail.com">
                        shahanazawfoodandagro@gmail.com
                      </a>
                    </div>

                    <div>
                      <p className="text-2xl font-semibold">Call:</p>
                      <a className="mt-2 block text-sky-200 hover:underline" href="tel:8692903905">
                        8692903905
                      </a>
                    </div>

                    <div>
                      <p className="text-2xl font-semibold">Map:</p>
                      <a
                        className="mt-2 inline-flex items-center rounded-full bg-rust-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rust-600"
                        href="https://www.google.com/maps/search/1st+Floor,+D+1,+Shree+Nag,+Khairani+Rd,+Saki+Naka,+Mumbai,+Mumbai,+Mumbai,+Maharashtra,+India,+400072/@19.0988618,72.8826526,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in Maps
                      </a>

                      <a
                        href="https://www.google.com/maps/search/1st+Floor,+D+1,+Shree+Nag,+Khairani+Rd,+Saki+Naka,+Mumbai,+Mumbai,+Mumbai,+Maharashtra,+India,+400072/@19.0988618,72.8826526,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 block overflow-hidden rounded-[1.5rem] border border-olive-200 bg-white/20 transition hover:-translate-y-0.5 hover:shadow-md"
                        aria-label="Open map location in Google Maps"
                      >
                        <img
                          src={locImg}
                          alt="Google map location preview"
                          className="h-[340px] w-full object-cover"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="relative rounded-[2rem] overflow-hidden border border-rust-200 shadow-sm">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${companyImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="relative p-8">
                <div className="border-t-4 border-rust-500 pt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">Contact Us</p>
                  <h2 className="mt-4 text-3xl font-black text-white">Send us a message</h2>

                  <form
                    onSubmit={(e) => { e.preventDefault(); alert('Message sent — thank you!'); e.target.reset(); }}
                    className="mt-8 space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="name"
                        required
                        placeholder="Name"
                        className="rounded-lg border border-olive-200 bg-white/95 px-4 py-3 text-sm w-full text-black"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email"
                        className="rounded-lg border border-olive-200 bg-white/95 px-4 py-3 text-sm w-full text-black"
                      />
                    </div>

                    <input
                      name="subject"
                      placeholder="Subject"
                      className="rounded-lg border border-olive-200 bg-white/95 px-4 py-3 text-sm w-full text-black"
                    />

                    <textarea
                      name="message"
                      required
                      placeholder="Your message"
                      rows={5}
                      className="w-full rounded-lg border border-olive-200 bg-white/95 px-4 py-3 text-sm text-black"
                    />

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="rounded bg-rust-500 px-6 py-3 text-sm font-semibold text-white hover:bg-rust-600"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="relative z-20 mt-12">
        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${companyImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-wider">Shahanawaz Food and Agro LLP</p>
            <p className="mt-2 text-base">Processing • Packaging • Export | Quality Agro Products</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
