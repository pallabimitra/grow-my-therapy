import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  Heart,
  MapPin,
  Menu,
  Sparkles,
} from "lucide-react";

import { profile } from "../data/profile";

const expertise = profile.specialties;

export default function HomePage() {
  return (
    <main className="overflow-hidden">

      {/* ================= HEADER ================= */}

      <header className="absolute inset-x-0 top-0 z-50">
        <div className="container-page flex items-center justify-between py-6">

          <a
            href="#"
            className="font-serif text-2xl tracking-tight text-white sm:text-3xl"
          >
            Maya Reynolds
            <span className="text-sand">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#office"
              className="transition hover:text-white"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="transition hover:text-white"
            >
              FAQs
            </a>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-3 text-ink transition hover:-translate-y-0.5"
            >
              Book a consultation
            </a>

          </nav>

          <button
            aria-label="Open navigation"
            className="rounded-full bg-white/15 p-3 text-white backdrop-blur md:hidden"
          >
            <Menu size={22} />
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="relative min-h-[720px] bg-ink">

        <img
          src={profile.images.hero}
          alt="Calm, welcoming therapy office"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />

        <div className="container-page relative flex min-h-[720px] items-center pb-20 pt-32">

          <div className="max-w-3xl text-white">

            <p className="eyebrow mb-6 !text-sand">
              {profile.practiceType} · {profile.location}
            </p>

            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.tagline}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sand px-7 py-4 font-semibold text-ink transition hover:-translate-y-1"
              >
                Start with a consultation
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Learn about my approach
              </a>

            </div>

          </div>

        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:flex"
        >
          Explore
          <ArrowDown size={15} />
        </a>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-cream py-24 sm:py-32"
      >

        <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-sage/20" />

            <img
              src={profile.images.portrait}
              alt="Therapist portrait placeholder"
              className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-soft"
            />

            <div className="absolute -bottom-7 -right-5 max-w-[230px] rounded-3xl bg-white p-5 shadow-soft">

              <div className="mb-3 flex items-center gap-2 text-sageDark">

                <Heart
                  size={17}
                  fill="currentColor"
                />

                <span className="text-xs font-semibold uppercase tracking-widest">
                  A space for you
                </span>

              </div>

              <p className="font-serif text-xl text-ink">
                You do not have to figure everything out alone.
              </p>

            </div>

          </div>


          <div className="lg:pl-10">

            <p className="eyebrow">
              About Dr. Maya Reynolds
            </p>

            <h2 className="section-title mt-4">
              Therapy that makes room for your whole story.
            </h2>

            <p className="body-copy mt-7">
              {profile.about}
            </p>

            <p className="body-copy mt-5">
              My role is not to tell you who to be.
              It is to help you understand what you need,
              recognize your strengths, and build a path
              forward that feels authentic to you.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">

              {profile.approach.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3"
                >

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mist text-sageDark">

                    <Check size={15} />

                  </span>

                  <span className="font-medium text-ink">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHO I SUPPORT ================= */}

      <section className="bg-white py-20 sm:py-28">

        <div className="container-page">

          <div className="mx-auto max-w-2xl text-center">

            <p className="eyebrow">
              Who I support
            </p>

            <h2 className="section-title mt-4">
              Support for where you are right now.
            </h2>

            <p className="body-copy mt-5">
              Therapy can help you slow down,
              understand patterns, and make meaningful
              changes with support that is tailored
              to your circumstances.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              [
                "Adults",
                "For anxiety, stress, self-esteem, life transitions, and the weight of trying to hold everything together.",
              ],

              [
                "Relationships",
                "For communication, boundaries, connection, and recurring patterns that are difficult to navigate alone.",
              ],

              [
                "Life transitions",
                "For seasons of change when the old way of doing things no longer feels like it fits.",
              ],
            ].map(([title, text]) => (

              <article
                key={title}
                className="soft-card p-8 transition hover:-translate-y-1"
              >

                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-sageDark">

                  <Sparkles size={21} />

                </div>

                <h3 className="font-serif text-2xl text-ink">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-ink/65">
                  {text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= AREAS OF FOCUS ================= */}

      <section className="bg-ink py-24 text-white sm:py-28">

        <div className="container-page">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

            <div>

              <p className="eyebrow !text-sand">
                Areas of focus
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                A thoughtful place to work through what feels heavy.
              </h2>

            </div>


            <div className="flex flex-wrap gap-3">

              {expertise.map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="bg-cream py-24 sm:py-32"
      >

        <div className="container-page">

          <div className="max-w-2xl">

            <p className="eyebrow">
              How I can help
            </p>

            <h2 className="section-title mt-4">
              Support shaped around your goals.
            </h2>

          </div>


          <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">

            {profile.services.map((service, index) => (

              <article
                key={service.title}
                className="grid gap-5 py-9 md:grid-cols-[100px_1fr_auto] md:items-center"
              >

                <span className="font-serif text-3xl text-sageDark">
                  0{index + 1}
                </span>

                <div>

                  <h3 className="font-serif text-3xl text-ink">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-ink/65">
                    {service.description}
                  </p>

                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-sageDark"
                >
                  Learn more
                  <ArrowRight size={17} />
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}

      <section className="bg-white py-24 sm:py-32">

        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="eyebrow">
              My approach
            </p>

            <h2 className="section-title mt-4">
              You bring the story. We build the next chapter together.
            </h2>

            <p className="body-copy mt-6">
              Therapy is most useful when it feels collaborative.
              We can explore difficult experiences while also
              paying attention to the strengths, values, and
              relationships that can support your growth.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sageDark"
            >
              See if we’re a good fit
              <ArrowRight size={18} />
            </a>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            <img
              src={profile.images.calm}
              alt="Calm natural setting"
              className="h-72 w-full rounded-[2rem] object-cover sm:mt-10"
            />

            <img
              src={profile.images.office}
              alt="Welcoming therapy office"
              className="h-72 w-full rounded-[2rem] object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= OUR OFFICE ================= */}

      <section
        id="office"
        className="bg-sageDark py-24 text-white sm:py-28"
      >

        <div className="container-page">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

            <div className="overflow-hidden rounded-[2.5rem]">

              <img
                src={profile.images.officeDetail}
                alt="Therapy office"
                className="aspect-[4/3] w-full object-cover"
              />

            </div>


            <div className="lg:pl-8">

              <p className="eyebrow !text-sand">
                New · Our Office
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                A calm space for honest conversations.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                {profile.office.description}
              </p>


              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">

                  <MapPin
                    className="mt-1 shrink-0 text-sand"
                    size={20}
                  />

                  <div>

                    <p className="font-semibold">
                      {profile.office.address}
                    </p>

                    <p className="text-sm text-white/65">
                      {profile.office.format}
                    </p>

                  </div>

                </div>

              </div>


              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-sand px-7 py-4 font-semibold text-ink"
              >
                Ask about availability
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section
        id="faq"
        className="bg-cream py-24 sm:py-32"
      >

        <div className="container-page max-w-4xl">

          <div className="text-center">

            <p className="eyebrow">
              FAQs
            </p>

            <h2 className="section-title mt-4">
              Questions before getting started?
            </h2>

          </div>


          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">

            {profile.faqs.map((faq) => (

              <details
                key={faq.q}
                className="group py-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-ink">

                  {faq.q}

                  <ChevronDown
                    className="shrink-0 transition group-open:rotate-180"
                    size={20}
                  />

                </summary>

                <p className="max-w-3xl pt-4 leading-7 text-ink/65">
                  {faq.a}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="bg-ink py-24 text-white sm:py-32"
      >

        <div className="container-page">

          <div className="mx-auto max-w-3xl text-center">

            <p className="eyebrow !text-sand">
              Take the first step
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
              You deserve a space where you can be heard.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              If you are ready to explore therapy, reach out
              to learn more about the process and whether we
              might be a good fit.
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-sand px-8 py-4 font-semibold text-ink transition hover:-translate-y-1"
            >
              Request a consultation
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#1B2420] py-10 text-white/65">

        <div className="container-page flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="font-serif text-xl text-white">
              Dr. Maya Reynolds
            </p>

            <p className="mt-1">
              Therapy in {profile.location}
            </p>

          </div>


          <div className="flex flex-wrap gap-5">

            <a
              href="#about"
              className="hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-white"
            >
              Services
            </a>

            <a
              href="#office"
              className="hover:text-white"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="hover:text-white"
            >
              FAQs
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}