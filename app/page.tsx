import { ArrowUpRight, Check, FileText, Layers3, MailWarning, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const problems = [
  {
    icon: Layers3,
    title: 'Becas dispersas',
    description: 'Encontrar oportunidades implica buscar en muchas webs distintas.',
  },
  {
    icon: MailWarning,
    title: 'Plazos que se pasan',
    description: 'Las fechas importantes se pierden entre correos y mensajes.',
  },
  {
    icon: FileText,
    title: 'Papeles repetidos',
    description: 'La misma documentación se sube una y otra vez.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <div className="relative isolate">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] overflow-hidden bg-[#f4fbf9]">
          <div className="absolute -right-24 -top-36 size-[420px] rounded-full bg-[#d7f4e8] blur-3xl" />
          <div className="absolute -left-32 top-48 size-[360px] rounded-full bg-[#dfe9ff] blur-3xl" />
        </div>

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label="REJOAR, inicio">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#164e63] text-white shadow-sm">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </span>
            <span className="text-lg font-bold tracking-[-0.04em] text-[#164e63]">REJOAR</span>
          </a>
          <span className="hidden text-sm font-medium text-slate-500 sm:block">Becas que abren caminos</span>
        </header>

        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-36 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9e6d5] bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#147d61] shadow-sm">
              <span className="size-1.5 rounded-full bg-[#29b57f]" />
              Tu futuro, más cerca
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#123047] sm:text-6xl lg:text-[5.4rem]">
              Una sola identidad para todas tus becas
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600 sm:text-xl">
              Encontrá oportunidades, postulá sin repetir papeles y construí una identidad académica verificable. Todo en un solo lugar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full bg-[#164e63] px-6 text-base font-semibold text-white hover:bg-[#0f3d50]">
                <a href="#estudiantes">Soy estudiante <ArrowUpRight data-icon="inline-end" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-[#9bd8c1] bg-white/70 px-6 text-base font-semibold text-[#147d61] hover:bg-[#eaf8f2]">
                <a href="#organizaciones">Soy empresa u ONG <ArrowUpRight data-icon="inline-end" /></a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
              <Check className="size-4 text-[#1aa875]" aria-hidden="true" /> Credenciales verificables y seguras
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end">
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] border border-[#ccefe1]" />
            <div className="relative rounded-[2rem] bg-[#164e63] p-3 shadow-2xl shadow-[#164e63]/20">
              <div className="rounded-[1.5rem] bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <span className="text-sm font-semibold text-slate-500">Mi perfil REJOAR</span>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#e9f9f1] px-2.5 py-1 text-xs font-semibold text-[#16805f]"><Check className="size-3.5" /> Verificado</span>
                </div>
                <div className="flex items-center gap-4 py-7">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#dff6ec] text-xl font-bold text-[#147d61]">JM</div>
                  <div><p className="font-semibold text-[#123047]">Tu identidad académica</p><p className="mt-1 text-sm text-slate-500">Lista para postular</p></div>
                </div>
                <div className="rounded-2xl bg-[#f4fbf9] p-4"><p className="text-xs font-semibold uppercase tracking-wider text-[#147d61]">Documentación</p><div className="mt-3 flex items-center justify-between text-sm text-slate-600"><span>Perfil completo</span><span className="font-semibold text-[#147d61]">100%</span></div><div className="mt-2 h-2 rounded-full bg-[#d7eee5]"><div className="h-2 w-full rounded-full bg-[#29b57f]" /></div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b9a72]">El problema</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#123047] sm:text-5xl">Buscar una beca no debería ser otra carrera.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Hoy, acceder a una oportunidad requiere tiempo, orden y mucha paciencia.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }, index) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className={`mb-12 flex size-12 items-center justify-center rounded-2xl ${index === 1 ? 'bg-[#fff3d9] text-[#b97813]' : 'bg-[#e6f7ef] text-[#178060]'}`}><Icon className="size-5" aria-hidden="true" /></div><h3 className="text-xl font-semibold tracking-tight text-[#123047]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p></article>)}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-[#f8fbfc]"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="text-sm font-bold tracking-[-0.03em] text-[#164e63]">REJOAR</span><p className="text-sm text-slate-500">Una identidad que abre oportunidades.</p><p className="text-sm text-slate-400">© 2026 REJOAR</p></div></footer>
    </main>
  )
}
