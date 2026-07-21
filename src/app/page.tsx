import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardList,
  HeartPulse,
  Microscope,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import {
  advantages,
  brand,
  prices,
  problems,
  reviews,
  services,
  steps,
} from "@/content/site-content";
const icons = {
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  Microscope,
  HeartPulse,
  CalendarDays,
  Search,
  ClipboardList,
  Stethoscope,
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">✦ Здоровье стоп — качество жизни</div>
              <h1>
                Профессиональная
                <br />
                помощь подолога
              </h1>
              <p className="hero-accent">для здоровья и красоты ваших ног</p>
              <p className="hero-description">
                Лечение вросшего ногтя, мозолей, трещин, грибка и других
                проблем. Медицинский подход, безопасность и забота о вас.
              </p>
              <div className="hero-buttons">
                <a className="button" href="#appointment">
                  Записаться на приём <CalendarDays size={16} />
                </a>
                <a className="button button--outline" href="#services">
                  Узнать услуги <ArrowRight size={16} />
                </a>
              </div>
              <div className="social-proof">
                <Image
                  className="avatars"
                  src="/assets/images/hero/social-proof-avatars.webp"
                  alt="Наши клиенты"
                  width={112}
                  height={30}
                />
                <span>
                  Более 200 довольных клиентов доверяют мне заботу о своих
                  ногах
                </span>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/assets/images/hero/hero-podologist-new.png"
                alt="Подолог проводит процедуру"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 56vw"
              />
            </div>
          </div>
        </section>
        <section className="advantages">
          <div className="container card advantages-grid">
            {advantages.map(([icon, title, text]) => {
              const Icon = icons[icon];
              return (
                <article className="advantage" key={title}>
                  <div className="icon-badge">
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Мои услуги</h2>
            <div className="services-grid">
              {services.map(([title, description, image]) => (
                <a
                  href="#appointment"
                  className="service-card card"
                  key={title}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={260}
                    height={210}
                    sizes="(max-width: 760px) 46vw, (max-width: 1100px) 25vw, 15vw"
                  />
                  <div className="service-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="text-link">
                      Подробнее{" "}
                      <ArrowRight
                        size={13}
                        style={{ verticalAlign: "middle" }}
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="problems">
          <div className="container">
            <div className="problems-wrap">
              <h2 className="section-title">Какие проблемы решаем</h2>
              <div className="problems-grid">
                {problems.map(([title, image]) => (
                  <article className="problem-card" key={title}>
                    <div className="problem-image">
                      <Image
                        src={image}
                        alt={`${title}: результат до и после`}
                        width={280}
                        height={130}
                        sizes="(max-width:760px) 190px, 22vw"
                      />
                      <span className="problem-label">До</span>
                      <span className="problem-label">После</span>
                    </div>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
              <p className="disclaimer">
                Результат зависит от индивидуальной ситуации и соблюдения
                рекомендаций специалиста.
              </p>
            </div>
          </div>
        </section>
        <section className="section" id="specialist">
          <div className="container">
            <div className="about-grid">
              <article className="specialist-card card">
                <Image
                  className="specialist-photo"
                  src="/assets/images/specialist/specialist-portrait.webp"
                  alt="Анна Иванова, подолог"
                  width={280}
                  height={350}
                />
                <div className="specialist-info">
                  <h3>О специалисте</h3>
                  <p className="role">
                    Анна Иванова — подолог с медицинским образованием и опытом
                    более 7 лет.
                  </p>
                  <p>
                    Помогаю решить проблемы стоп и ногтей бережно, эффективно и
                    надолго.
                  </p>
                  <ul className="check-list">
                    <li>
                      <Check size={13} color="#589f8c" /> Медицинское
                      образование
                    </li>
                    <li>
                      <Check size={13} color="#589f8c" /> Повышение квалификации
                      в России и Европе
                    </li>
                    <li>
                      <Check size={13} color="#589f8c" /> Член Ассоциации
                      подологов
                    </li>
                    <li>
                      <Check size={13} color="#589f8c" /> Более 1 000 успешных
                      приёмов
                    </li>
                  </ul>
                </div>
                <a
                  href="/assets/images/specialist/certificates-strip.webp"
                  className="certificate-strip"
                  aria-label="Открыть все сертификаты"
                >
                  <Image
                    src="/assets/images/specialist/certificates-strip.webp"
                    alt="Сертификаты специалиста"
                    width={550}
                    height={82}
                  />
                </a>
              </article>
              <article className="process-card card">
                <h2 className="section-title">Как проходит приём</h2>
                <div className="steps">
                  {steps.map(([number, icon, title, text]) => {
                    const Icon = icons[icon];
                    return (
                      <div className="step" key={number}>
                        <div className="step-icon">
                          <Icon size={22} />
                        </div>
                        <span className="step-number">{number}</span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section section-muted" id="reviews">
          <div className="container">
            <h2 className="section-title">Отзывы клиентов</h2>
            <div className="reviews-grid">
              {reviews.map(([name, text]) => (
                <article className="review card" key={name}>
                  <div className="review-head">
                    <span className="review-avatar">{name[0]}</span>
                    <div>
                      <h3>{name}</h3>
                      <div className="stars" aria-label="Рейтинг 5 из 5">
                        ★★★★★
                      </div>
                    </div>
                  </div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="prices">
          <div className="container">
            <h2 className="section-title">Цены</h2>
            <div className="prices-grid">
              {prices.map(([service, price, description]) => (
                <article className="price card" key={service}>
                  <h3>{service}</h3>
                  <strong>{price}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="price-note">
              *Точная стоимость определяется после диагностики.
            </p>
          </div>
        </section>
        <section className="section" id="appointment">
          <div className="container">
            <div className="appointment">
              <Image
                className="appointment-decor"
                src="/assets/images/decor/appointment-decor.webp"
                alt=""
                width={360}
                height={240}
              />
              <div className="appointment-copy">
                <h2>Запишитесь на приём</h2>
                <p>и сделайте шаг к здоровью ваших стоп</p>
              </div>
              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "PODOLOG",
            telephone: brand.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Минск",
              streetAddress: "ул. Примерная, 12, кабинет 203",
              addressCountry: "BY",
            },
            openingHours: "Mo-Su 09:00-21:00",
            image: "/assets/images/hero/hero-podologist-new.png",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          }),
        }}
      />
    </>
  );
}
