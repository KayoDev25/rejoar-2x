'use client'

import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Share2,
  WalletCards,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const scholarships = [
  {
    name: 'Beca Impulso Universitario',
    entity: 'Fundación Horizonte',
    deadline: '30 de noviembre de 2026',
  },
  {
    name: 'Beca Primer Paso',
    entity: 'Red de Educación Abierta',
    deadline: '15 de diciembre de 2026',
  },
  {
    name: 'Beca Talento Digital',
    entity: 'Comunidad Código Sur',
    deadline: '20 de enero de 2027',
  },
]

export default function EstudiantePage() {
  return (
    <main className="min-h-screen bg-[#f4fbf9] text-slate-950">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="REJOAR, inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#164e63] text-white shadow-sm">
            <GraduationCap aria-hidden="true" className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-[-0.04em] text-[#164e63]">REJOAR</span>
        </a>
        <span className="rounded-full bg-[#dff6ec] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#147d61]">Panel estudiante</span>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-8 lg:pt-14">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b9a72]">Tu espacio REJOAR</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#123047] sm:text-5xl">Todo listo para postular</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Usá tu credencial verificable para encontrar y postularte a nuevas becas.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1.95fr]">
          <section aria-labelledby="credential-title" className="rounded-[2rem] border border-[#b8e8d1] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b9a72]">Mi credencial</p>
                <h2 id="credential-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#123047]">Credencial estudiantil</h2>
              </div>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf9f1] text-[#16805f]">
                <BadgeCheck aria-hidden="true" className="size-6" />
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-[#164e63] p-5 text-white">
              <div className="flex items-center justify-between gap-3">
                <GraduationCap aria-hidden="true" className="size-8 text-[#9be4c1]" />
                <span className="rounded-full bg-[#d0f4df] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#147d61]">Dato simulado</span>
              </div>
              <p className="mt-8 text-xl font-semibold">Julieta Martínez</p>
              <p className="mt-1 text-sm text-[#cce9e8]">Licenciatura en Diseño</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[#cce9e8]"><CheckCircle2 aria-hidden="true" className="size-4 text-[#9be4c1]" /> Alumno regular</div>
            </div>

            <dl className="mt-6 grid gap-4 text-sm">
              <div className="flex items-start gap-3"><Landmark aria-hidden="true" className="mt-0.5 size-4 text-[#147d61]" /><div><dt className="text-slate-500">Institución emisora</dt><dd className="mt-1 font-semibold text-[#123047]">Instituto Superior del Sur</dd></div></div>
              <div className="flex items-start gap-3"><BadgeCheck aria-hidden="true" className="mt-0.5 size-4 text-[#147d61]" /><div><dt className="text-slate-500">Estado</dt><dd className="mt-1 font-semibold text-[#16805f]">Verificada</dd></div></div>
            </dl>
            <Button type="button" className="mt-7 h-12 w-full rounded-xl bg-[#147d61] font-semibold text-white hover:bg-[#0f604b]"><Share2 data-icon="inline-start" />Compartir credencial</Button>
          </section>

          <section aria-labelledby="scholarships-title" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b9a72]">Oportunidades</p>
                <h2 id="scholarships-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#123047]">Becas para vos</h2>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fff6dc] px-3 py-1.5 text-xs font-semibold text-[#8b6500]"><BellRing aria-hidden="true" className="size-3.5" /> Plazos próximos</span>
            </div>

            <div className="mt-7 flex flex-col gap-4">
              {scholarships.map((scholarship) => (
                <article key={scholarship.name} className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#9edec3]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold text-[#123047]">{scholarship.name}</h3><span className="rounded-full bg-[#eaf9f1] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#147d61]">Dato simulado</span></div>
                      <p className="mt-2 text-sm text-slate-600">{scholarship.entity}</p>
                      <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[#8b6500]"><CalendarDays aria-hidden="true" className="size-4" /> Cierra el {scholarship.deadline}</p>
                    </div>
                    <Button type="button" variant="outline" className="h-10 shrink-0 rounded-xl border-[#a9e1c9] font-semibold text-[#147d61] hover:bg-[#eaf9f1]">Postular con mi credencial <ArrowRight data-icon="inline-end" /></Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#b8e8d1] bg-[#eaf9f1] p-5 text-[#123047] sm:p-6">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#147d61] shadow-sm"><WalletCards aria-hidden="true" className="size-5" /></div>
          <div><p className="font-semibold">Tu credencial está lista para usar</p><p className="mt-1 text-sm text-slate-600">Postulate sin volver a cargar tus datos.</p></div>
        </div>
      </section>
    </main>
  )
}
