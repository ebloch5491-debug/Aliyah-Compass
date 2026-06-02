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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
              Aliyah Guidance for Families
            </p>

            <h2 className="max-w-xl text-6xl font-semibold leading-tight md:text-6xl">
              From First Questions to Building a Life in Israel
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4B5563]">
              Warm, practical guidance for families thinking through aliyah, community, schools, budgeting, and the many real-life questions that come with building a future in Israel.
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
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#D8CBB8]/40 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#D8CBB8] bg-[#EADDCB] shadow-2xl">
              <div className="h-72 bg-gradient-to-br from-[#CBB89D] via-[#E8DCC9] to-[#F7F2EA] p-8 md:h-96">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/50 bg-white/35 p-6 backdrop-blur-sm">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7C5A3A]">
                      Communities • Schools • Family Life
                    </p>

                    <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-[#1F2E3D]">
                      A calmer way to plan your future in Israel.
                    </h3>
                  </div>

                  <p className="max-w-sm text-base leading-7 text-[#4B5563]">
                    Thoughtful support for the practical, emotional, and family decisions that come with aliyah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Efrat */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 rounded-[2rem] border border-[#D8CBB8] bg-white/70 p-8 shadow-sm md:grid-cols-[1fr_2fr] md:p-12">
          <div className="flex items-center justify-center">
            <img
  src="/efrat-headshot.png"
  alt="Efrat Bloch, founder of Aliyah Compass"
  className="h-52 w-52 rounded-full border border-[#D8CBB8] object-cover shadow-md"
/>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A57C52]">
              Meet Your Guide
            </p>

            <h3 className="text-3xl font-semibold md:text-4xl">
              Meet Efrat Bloch
            </h3>

            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4B5563]">
              <p>
                I created Aliyah Compass to help families navigate one of the biggest decisions they will ever make. Aliyah is exciting, meaningful, and often overwhelming.
              </p>

              <p>
                Whether you are actively planning a move or simply exploring aliyah for the future, I provide warm, practical guidance to help you think through your options and move forward with greater clarity and confidence.
              </p>

              <p>
                For many families, aliyah is about more than logistics. Questions about community, schools, family life, and long-term goals are often just as important as budgets, paperwork, and timelines.
              </p>
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
              rows={5}
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
