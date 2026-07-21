create extension if not exists pgcrypto;

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 80),
  phone text not null check (char_length(phone) between 7 and 20),
  preferred_date date,
  comment text check (comment is null or char_length(comment) <= 1000),
  source text not null default 'landing',
  status text not null default 'new' check (status in ('new','contacted','confirmed','cancelled')),
  user_agent text,
  created_at timestamptz not null default now()
);
alter table public.appointments enable row level security;
