"use client";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navigation } from "@/content/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand-wordmark" href="#top" aria-label="Podolog Kurguzenko — на главную"><span>Podolog Kurguzenko</span><small>Профессиональный уход за ногами</small></a>
    <nav className="nav" aria-label="Основная навигация">{navigation.map(([label,id])=><a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className="header-actions"><a className="phone-box" href={brand.phoneHref}><Phone size={19}/><span>{brand.phone}<small>{brand.hours}</small></span></a><a className="button" href="#appointment">Записаться на приём</a><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Открыть меню">{open?<X/>:<Menu/>}</button></div>
  </div>{open && <div style={{position:"fixed",inset:"64px 0 0",background:"rgba(251,250,248,.98)",padding:"30px 16px",display:"grid",alignContent:"start",gap:"4px"}}>
    {navigation.map(([label,id])=><a key={id} onClick={close} href={`#${id}`} style={{padding:"14px 0",fontSize:"18px",fontWeight:800,borderBottom:"1px solid var(--border)"}}>{label}</a>)}
    <a onClick={close} href="#appointment" className="button" style={{marginTop:"22px"}}>Записаться на приём</a><a href={brand.phoneHref} style={{textAlign:"center",padding:"16px",fontWeight:800,color:"var(--primary-dark)"}}>{brand.phone}</a>
  </div>}</header>;
}
