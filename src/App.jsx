import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImg from '../ChatGPT Image Jul 31, 2026, 01_42_37 PM.png';
import locImg from '../loc.png';
import companyImg from '../Gemini_Generated_Image_r73yrfr73yrfr73y.png';
import grainsImg from './202211EX05_0110_ret.avif';
import bottlesImg from './gg.avif';
import bottleRow from './bottle.webp';
import factoryImg from './es.jpg';
import dsdImg from './dsd.jpg';
import promoImg from './ChatGPT Image Aug 10, 2026, 03_37_14 PM.png';

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

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
  }, []);
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_38%),linear-gradient(180deg,#eaf6ff_0%,#e0f2ff_100%)] text-sky-900">
      <header data-aos="fade-down" className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="logo" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <p className="text-lg font-bold text-sky-600">Shahanawaz Food and Agro LLP</p>
            </div>
          </div>

          <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-6">
            <a href="#" className="text-sm font-medium text-sky-600 hover:text-sky-800">Home</a>
            <a href="#about" className="text-sm font-medium text-sky-600 hover:text-sky-800">About Us</a>
            <a href="#clients" className="text-sm font-medium text-sky-600 hover:text-sky-800">Clients</a>
            <a href="#contact" className="text-sm font-medium text-sky-600 hover:text-sky-800">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid min-h-[56vh] items-start gap-8 lg:grid-cols-2">
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
                  <h3 className="text-2xl font-bold">🛡️ <span className="align-middle">TRUSTED HYGIENE</span></h3>
                  <p className="mt-2">Hygienic handling and secure packaging.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">🚚 <span className="align-middle">WIDE REACH</span></h3>
                  <p className="mt-2">Reliable distribution from Mumbai across India.</p>
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

            <div data-aos="zoom-in" className="flex items-center justify-center">
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

        <section id="products" data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rust-500">Product range</p>
              <h2 className="mt-3 text-3xl font-black text-olive-900">A practical structure for images and product cards.</h2>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid gap-8 items-stretch md:grid-cols-2">
              <div className="flex items-stretch justify-center">
                <div className="w-full overflow-hidden rounded-[1.5rem] border border-olive-200 bg-white shadow-sm h-full">
                  <img src={promoImg} alt="Promotional" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="text-olive-800 flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold text-olive-900">Pure Water. Trusted Everywhere.</h2>
                <p className="mt-4 text-lg">
                  We believe that every drop should reflect purity, quality, and trust.
                </p>

                <p className="mt-4">
                  We are committed to delivering high-quality drinking water that meets the expectations of modern consumers and businesses. From careful purification and quality control to secure packaging and reliable distribution, we focus on maintaining excellence at every stage.
                </p>

                <p className="mt-4">
                  Our vision goes beyond producing water — <strong>we aim to make pure, safe and refreshing hydration accessible wherever it is needed.</strong>
                </p>

                <p className="mt-4 font-semibold">With a commitment to quality, consistency, and customer satisfaction, we continue to expand our reach from <strong>Mumbai to different parts of India</strong>, bringing trusted water closer to every customer.</p>

                <p className="mt-6 text-xl font-black">“From Source to Seal, Pure Quality.”</p>

                <p className="mt-2">Pure in every drop. Trusted in every bottle. Delivered with care.</p>
              </div>
            </div>
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
                      <a className="mt-2 block text-sky-200 hover:underline" href="mailto:vishwakarmapranav19@gmail.com">
                        vishwakarmapranav19@gmail.com
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
      
      <footer className="mt-12">
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
