"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const certificates = [
  { src: "/assets/images/specialist/certificate-gift-black-white.jpeg", alt: "Подарочный сертификат" },
  { src: "/assets/images/specialist/certificate-gift-gold.jpeg", alt: "Подарочный сертификат с золотой лентой" },
  { src: "/assets/images/specialist/certificate-training.png", alt: "Сертификат об обучении" },
] as const;

export function CertificateGallery() {
  const [active, setActive] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = () => setActive(null);
  const previous = () => setActive((index) => index === null ? null : (index + certificates.length - 1) % certificates.length);
  const next = () => setActive((index) => index === null ? null : (index + 1) % certificates.length);

  useEffect(() => {
    if (active === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((index) => index === null ? null : (index + certificates.length - 1) % certificates.length);
      if (event.key === "ArrowRight") setActive((index) => index === null ? null : (index + 1) % certificates.length);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return <>
    <div className="certificate-strip" aria-label="Сертификаты">
      <span className="certificate-caption">Сертификаты и повышение квалификации<small>Нажмите на документ, чтобы открыть галерею</small></span>
      <div className="certificate-gallery">
        {certificates.map((certificate, index) => <button className="certificate-trigger" type="button" onClick={() => setActive(index)} key={certificate.src} aria-label={`Открыть: ${certificate.alt}`}><Image src={certificate.src} alt={certificate.alt} width={589} height={400}/></button>)}
      </div>
    </div>
    {active !== null && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Галерея сертификатов" onMouseDown={close}>
      <div className="certificate-modal__content" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeButton} className="certificate-modal__close" type="button" onClick={close} aria-label="Закрыть галерею"><X size={25}/></button>
        <button className="certificate-modal__nav certificate-modal__nav--prev" type="button" onClick={previous} aria-label="Предыдущий сертификат"><ChevronLeft size={30}/></button>
        <div className="certificate-modal__image"><Image src={certificates[active].src} alt={certificates[active].alt} fill sizes="(max-width: 760px) 92vw, 72vw" priority/></div>
        <button className="certificate-modal__nav certificate-modal__nav--next" type="button" onClick={next} aria-label="Следующий сертификат"><ChevronRight size={30}/></button>
        <p>{active + 1} из {certificates.length}</p>
      </div>
    </div>}
  </>;
}
