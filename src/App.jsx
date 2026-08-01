import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImg from '../ChatGPT Image Jul 31, 2026, 01_42_37 PM.png';
import locImg from '../loc.png';

const categories = [
  {
    title: 'Premium Grains',
    description: 'Carefully sourced rice, wheat, and pulses with clean processing and consistent supply.',
  },
  {
    title: 'Spices & Masalas',
    description: 'Rich aroma, bold flavor, and dependable quality for domestic and bulk distribution.',
  },
  {
    title: 'Edible Oils',
    description: 'Refined and packaged oils designed for kitchens, wholesalers, and retailers.',
  },
  {
    title: 'Agro Supply Chain',
    description: 'Farm-to-market logistics and distribution support built for reliability.',
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(142,160,63,0.22),_transparent_38%),linear-gradient(180deg,#f8f6ef_0%,#f3f0e7_100%)] text-olive-900">
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
          <div className="grid h-[56vh] items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-extrabold leading-tight text-olive-900 md:text-6xl">
                Your <span className="text-amber-400">VISION</span>
                <br />
                Our <span className="text-amber-400">TECHNOLOGY</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-olive-700">
                Shahanawaz Food and Agro LLP presents grains, spices, oils, and agro products with a bold,
                modern presentation that emphasises trust and clarity.
              </p>
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
            </div>

            <div className="text-base leading-7 text-olive-700">
              <p className="mb-3"><strong>LLPIN:</strong> ACC-8528</p>
              <p className="mb-3"><strong>Last updated:</strong> 05-06-2026</p>
              <p className="mb-3">SHAHNAWAZ FOODS AND AGRO LLP having LLPIN <strong>ACC-8528</strong> is <strong>2 years, 10 months &amp; 26 days</strong> old, incorporated with MCA on <strong>5th September, 2023</strong>. The company is registered at Registrar of Companies (ROC), RoC-Mumbai I with a paid-up capital of <strong>₹1,00,000</strong>.</p>
              <p className="mb-3">The company has <strong>2</strong> partners/designated partners/key management personnel: <a className="text-sky-600 hover:underline" href="https://www.falconebiz.com/director/06627895/DILNAWAZ-ALI-JARRAR-SIDDIQUI" target="_blank" rel="noreferrer">DILNAWAZ ALI JARRAR SIDDIQUI</a>, <a className="text-sky-600 hover:underline" href="https://www.falconebiz.com/director/10307693/FARDEEN-ALI-JARRAR-SIDDIQUI" target="_blank" rel="noreferrer">FARDEEN ALI JARRAR SIDDIQUI</a>.</p>
              <p className="mb-3">Registered office address: <strong>1st Floor, D 1, Shree Nag, Khairani Rd, Saki Naka, Mumbai, Mumbai, Mumbai, Maharashtra, India</strong>, <a className="text-sky-600 hover:underline" href="https://www.falconebiz.com/company/400072.html" target="_blank" rel="noreferrer">400072</a>.</p>
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

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <article
                key={category.title}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                className="group overflow-hidden rounded-[1.75rem] border border-olive-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className={`h-44 bg-gradient-to-br ${index % 2 === 0 ? 'from-olive-600 via-olive-400 to-rust-200' : 'from-rust-600 via-rust-400 to-olive-200'}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-900">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-olive-700">{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div data-aos="fade-right" className="rounded-[2rem] border border-rust-200 bg-white p-8 shadow-sm">
              <div className="border-t-4 border-rust-500 pt-8">
                <div className="space-y-8 text-olive-700">
                  <div>
                    <p className="text-2xl font-semibold text-olive-800">Location:</p>
                    <p className="mt-2 leading-7">
                      1st Floor, D 1, Shree Nag, Khairani Rd, Saki Naka, Mumbai, Mumbai, Mumbai, Maharashtra, India, 400072
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold text-olive-800">Email:</p>
                    <a className="mt-2 block text-sky-600 hover:underline" href="mailto:vishwakarmapranav19@gmail.com">
                      vishwakarmapranav19@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold text-olive-800">Call:</p>
                    <a className="mt-2 block text-sky-600 hover:underline" href="tel:8692903905">
                      8692903905
                    </a>
                  </div>

                  <div>
                    <p className="text-2xl font-semibold text-olive-800">Map:</p>
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
                      className="mt-5 block overflow-hidden rounded-[1.5rem] border border-olive-200 bg-olive-50 transition hover:-translate-y-0.5 hover:shadow-md"
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

            <div data-aos="fade-left" className="rounded-[2rem] border border-rust-200 bg-white p-8 shadow-sm">
              <div className="border-t-4 border-rust-500 pt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rust-500">Contact Us</p>
                <h2 className="mt-4 text-3xl font-black text-olive-900">Send us a message</h2>

                <form
                  onSubmit={(e) => { e.preventDefault(); alert('Message sent — thank you!'); e.target.reset(); }}
                  className="mt-8 space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="Name"
                      className="rounded-lg border border-olive-200 px-4 py-3 text-sm w-full"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="rounded-lg border border-olive-200 px-4 py-3 text-sm w-full"
                    />
                  </div>

                  <input
                    name="subject"
                    placeholder="Subject"
                    className="rounded-lg border border-olive-200 px-4 py-3 text-sm w-full"
                  />

                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                    rows={5}
                    className="w-full rounded-lg border border-olive-200 px-4 py-3 text-sm"
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
        </section>
      </main>
    </div>
  );
}

export default App;
