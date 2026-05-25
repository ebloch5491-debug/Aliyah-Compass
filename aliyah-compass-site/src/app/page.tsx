export default function AliyahCompassHomepage() {
  return (
    <div className="min-h-screen bg-[#F7F2EA] text-[#1F2E3D] font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#D8CBB8] bg-[#F7F2EA]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">Aliyah Compass</h1>
            <p className="text-sm text-[#6B7280]">Helping Families Navigate Aliyah With Confidence</p>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#services" className="transition hover:text-[#A57C52]">Services</a>
            <a href="#about" className="transition hover:text-[#A57C52]">About</a>
            <a href="#process" className="transition hover:text-[#A57C52]">Process</a>
            <a href="#contact" className="transition hover:text-[#A57C52]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D8CBB8] blur-3xl"></div>
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#E2D3BE] blur-3xl"></div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
              Personalized Aliyah Guidance
            </p>

            <h2 className="max-w-xl text-5xl font-semibold leading-tight md:text-6xl">
              From First Questions to Life in Israel
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4B5563]">
              Thoughtful, practical aliyah guidance for individuals and families planning their move to Israel — from long-term planning and community research to budgeting, pilot trips, schools, and next steps.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-[#A57C52] px-7 py-4 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
              >
                Book a Consultation
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-[#C7B299] px-7 py-4 text-sm font-medium transition hover:bg-[#EFE5D7]"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#D8CBB8] bg-white/70 p-8 shadow-2xl backdrop-blur">
              <div className="space-y-6">
                <div className="rounded-2xl bg-[#F7F2EA] p-5">
                  <h3 className="text-lg font-semibold">Aliyah Planning</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Organize your aliyah process into clear, manageable steps.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EA] p-5">
                  <h3 className="text-lg font-semibold">Community Guidance</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Explore communities that align with your family’s values, goals, and lifestyle.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F7F2EA] p-5">
                  <h3 className="text-lg font-semibold">Long-Term Planning</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Whether aliyah is months away or years down the road, start preparing thoughtfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[2rem] border border-[#D8CBB8] bg-white/60 p-10 shadow-sm">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
            Warm, Practical Guidance
          </p>

          <h3 className="text-4xl font-semibold leading-tight">
            You do not need to navigate aliyah alone.
          </h3>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#4B5563]">
            <p>
              Aliyah can feel exciting, emotional, overwhelming, and complicated all at once.
            </p>

            <p>
              Whether you are actively planning a move, exploring aliyah years down the road, or trying to understand what is realistic for your family, Aliyah Compass helps organize the process into manageable steps.
            </p>

            <p>
              I provide thoughtful guidance, practical planning support, and personalized direction for families navigating aliyah — without pressure and without pretending there is a one-size-fits-all path.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
            Services
          </p>

          <h3 className="text-4xl font-semibold">Support for Every Stage of the Journey</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Where to Start',
              text: 'Guidance for families unsure how to begin the aliyah process or what steps to prioritize first.',
            },
            {
              title: 'Personalized Aliyah Planning',
              text: 'Build a realistic roadmap based on your family’s timeline, goals, finances, and priorities.',
            },
            {
              title: 'Community Research',
              text: 'Explore communities based on religious fit, schools, budget, lifestyle, and family stage.',
            },
            {
              title: 'Budget Planning',
              text: 'Understand realistic costs and prepare thoughtfully for life in Israel.',
            },
            {
              title: 'Pilot Trip Planning',
              text: 'Create purposeful pilot trips focused on communities, schools, employment, and daily life.',
            },
            {
              title: 'School & Job Guidance',
              text: 'Organize school research, career planning, networking, and employment preparation.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-[#D8CBB8] bg-white/70 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h4 className="text-2xl font-semibold">{service.title}</h4>
              <p className="mt-4 leading-7 text-[#6B7280]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#EFE5D7] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
              How It Works
            </p>

            <h3 className="text-4xl font-semibold">A Thoughtful, Personalized Process</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                text: 'Discuss your goals, concerns, questions, timeline, and where you currently are in the aliyah process.',
              },
              {
                step: '02',
                title: 'Personalized Planning',
                text: 'Create a realistic and organized approach tailored to your family’s priorities and pace.',
              },
              {
                step: '03',
                title: 'Ongoing Support',
                text: 'Receive guidance, referrals, planning support, and accountability as you move forward.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#A57C52]">
                  {item.step}
                </p>

                <h4 className="mt-4 text-2xl font-semibold">{item.title}</h4>

                <p className="mt-4 leading-7 text-[#6B7280]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
        <div className="rounded-[2rem] border border-[#D8CBB8] bg-white/70 p-10 shadow-xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
              Start the Conversation
            </p>

            <h3 className="text-4xl font-semibold">
              Start Your Aliyah Journey With Confidence
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
              Whether aliyah is something you are actively pursuing or beginning to explore for the future, I would be happy to help you think through the process thoughtfully and realistically.
            </p>
          </div>

          <form className="mt-12 grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-[#D8CBB8] bg-white px-5 py-4 outline-none transition focus:border-[#A57C52]"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-[#D8CBB8] bg-white px-5 py-4 outline-none transition focus:border-[#A57C52]"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Tell me a little about where you are in the aliyah process..."
              className="rounded-2xl border border-[#D8CBB8] bg-white px-5 py-4 outline-none transition focus:border-[#A57C52]"
            ></textarea>

            <button
              type="submit"
              className="rounded-2xl bg-[#A57C52] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D8CBB8] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <h4 className="text-xl font-semibold">Aliyah Compass</h4>
            <p className="mt-2 text-sm text-[#6B7280]">
              Helping Families Navigate Aliyah With Confidence
            </p>
          </div>

          <div className="text-sm text-[#6B7280]">
            © 2026 Aliyah Compass
          </div>
        </div>
      </footer>
    </div>
  )
}
