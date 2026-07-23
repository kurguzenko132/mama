"use client";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navigation } from "@/content/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand-wordmark"
          href="#top"
          aria-label="Podolog Kurguzenko — на главную"
        >
          <span>Podolog Kurguzenko</span>
          <small>Профессиональный уход за ногами</small>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone-box" href={brand.phoneHref}>
            <Phone size={19} />
            <span>
              {brand.phone}
              <small>{brand.hours}</small>
            </span>
          </a>
          <a className="button" href="#appointment">
            Оставить заявку
          </a>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Мобильное меню">
          {navigation.map(([label, id]) => (
            <a
              className="mobile-menu__link"
              key={id}
              onClick={close}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
          <a
            onClick={close}
            href="#appointment"
            className="button"
            style={{ marginTop: "22px" }}
          >
            Оставить заявку
          </a>
          <a
            href={brand.phoneHref}
            className="mobile-menu__phone"
          >
            {brand.phone}
          </a>
        </div>
      )}
    </header>
  );
}
