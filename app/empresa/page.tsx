'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  WalletCards,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Applicant = {
  id: string
  name: string
  career: string
  institution: string
  scholarship: string
  code: string
}

type Contribution = {
  id: string
  date: string
  student: string
  amount: number
  status: string
}

// DATO SIMULADO: estudiantes ficticios para la demo.
const applicants: Applicant[] = [
  {
    id: 'a1',
    name: 'Julieta Martínez',
    career: 'Licenciatura en Diseño',
    institution: 'Instituto Superior del Sur',
    scholarship: 'Beca Impulso Universitario',
    code: 'REJOAR-2026-001',
  },
  {
    id: 'a2',
    name: 'Mateo Gómez',
    career: 'Tecnicatura en Programación',
    institution: 'Instituto Superior del Sur',
    scholarship: 'Beca Talento Digital',
    code: 'REJOAR-2026-002',
  },
  {
    id: 'a3',
    name: 'Camila Ibáñez',
    career: 'Profesorado de Biología',
    institution: 'Instituto Superior del Norte',
    scholarship: 'Beca Primer Paso',
    code: 'REJOAR-2026-003',
  },
]

// DATO SIMULADO: aportes de ejemplo.
const initialHistory: Contribution[] = [
  { id: 'h1', date: '02/10/2026', student: 'Mateo Gómez', amount: 150, status: 'Simulado' },
  { id: 'h2', date: '18/09/2026', student: 'Camila Ibáñez', amount: 200, status: 'Simulado' },
]

const MAX_AMOUNT = 100000

function formatAmount(value: number) {
  return `${value.toLocaleString('es-AR')} USDC`
}

export default function EmpresaPage() {
  const [verified, setVerified] = useState<Record<string, boolean>>({})
  const [history, setHistory] = useState<Contribution[]>(initialHistory)
  const [modalOpen, setModalOpen] = useState(false)
  const [studentId, setStudentId] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')
  const amountRef = useRef<HTMLInputElement>(null)

  const verifiedApplicants = applicants.filter((applicant) => verified[applicant.id])

  function openModal(preselectedId?: string) {
    setStudentId(preselectedId ?? verifiedApplicants[0]?.id ?? '')
    setAmount('')
    setError('')
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  function handleConfirm() {
    const value = Number(amount)
    const student = applicants.find((applicant) => applicant.id === studentId)

    if (!student) {
      setError('Elegí un estudiante con credencial verificada.')
      return
    }
    if (!Number.isFinite(value) || value <= 0) {
      setError('Ingresá un monto mayor a cero.')
      return
    }
    if (value > MAX_AMOUNT) {
      setError(`El monto máximo de la demo es ${MAX_AMOUNT.toLocaleString('es-AR')} USDC.`)
      return
    }

    setHistory((current) => [
      {
        id: `h${Date.now()}`,
        date: new Date().toLocaleDateString('es-AR'),
        student: student.name,
        amount: value,
        status: 'Simulado',
      },
      ...current,
    ])
    closeModal()
  }

  // Cierra el modal con Escape y lleva el foco al campo de monto al abrir.
  useEffect(() => {
    if (!modalOpen) return
    amountRef.current?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modalOpen])

  return (
    <main className="min-h-screen bg-[#f4fbf9] text-slate-950">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="REJOAR, inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#164e63] text-white shadow-sm">
            <Building2 aria-hidden="true" className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-[-0.04em] text-[#164e63]">REJOAR</span>
        </a>
        <span className="rounded-full bg-[#dff6ec] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#147d61]">Panel empresa u ONG</span>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-8 lg:pt-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b9a72]">Tu espacio REJOAR</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#123047] sm:text-5xl">Verificá y financiá becas</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">Primero comprobá que la credencial es auténtica. Después financiá la beca con trazabilidad.</p>
          </div>
          <Button type="button" onClick={() => openModal()} className="h-12 shrink-0 rounded-xl bg-[#164e63] px-6 text-base font-semibold text-white hover:bg-[#0f3d50]">
            <WalletCards data-icon="inline-start" />Financiar beca
          </Button>
        </div>

        <section aria-labelledby="applications-title" className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b9a72]">Postulaciones</p>
              <h2 id="applications-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#123047]">Estudiantes que postularon</h2>
            </div>
            <span className="rounded-full bg-[#eaf9f1] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#147d61]">Dato simulado</span>
          </div>

          <div className="mt-7 flex flex-col gap-4">
            {applicants.map((applicant) => {
              const isVerified = Boolean(verified[applicant.id])
              return (
                <article key={applicant.id} className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#9edec3]">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf9f1] text-[#147d61]"><GraduationCap aria-hidden="true" className="size-5" /></div>
                      <div>
                        <h3 className="font-semibold text-[#123047]">{applicant.name}</h3>
                        <p className="mt-1 text-sm text-slate-600">{applicant.career} · {applicant.institution}</p>
                        <p className="mt-2 text-sm text-slate-500">Postula a: <span className="font-medium text-[#123047]">{applicant.scholarship}</span></p>
                        <p className="mt-1 text-xs text-slate-400">Código de credencial: {applicant.code}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {isVerified ? (
                        <>
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf9f1] px-3 py-1.5 text-xs font-semibold text-[#16805f]"><CheckCircle2 aria-hidden="true" className="size-3.5" /> Credencial verificada</span>
                          <Button type="button" variant="outline" onClick={() => openModal(applicant.id)} className="h-10 rounded-xl border-[#a9e1c9] font-semibold text-[#147d61] hover:bg-[#eaf9f1]">Financiar</Button>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#fff6dc] px-3 py-1.5 text-xs font-semibold text-[#8b6500]"><Clock aria-hidden="true" className="size-3.5" /> Sin verificar</span>
                          <Button type="button" onClick={() => setVerified((current) => ({ ...current, [applicant.id]: true }))} className="h-10 rounded-xl bg-[#147d61] font-semibold text-white hover:bg-[#0f604b]"><BadgeCheck data-icon="inline-start" />Verificar</Button>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="mt-5 text-xs text-slate-500">En esta demo la verificación es simulada. En la versión conectada se consulta el registro en la blockchain.</p>
        </section>

        <section aria-labelledby="history-title" className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b9a72]">Historial</p>
              <h2 id="history-title" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#123047]">Aportes realizados</h2>
            </div>
            <span className="rounded-full bg-[#eaf9f1] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#147d61]">Dato simulado</span>
          </div>

          <div className="mt-7 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.1em] text-slate-500">
                  <th scope="col" className="pb-3 font-semibold">Fecha</th>
                  <th scope="col" className="pb-3 font-semibold">Estudiante</th>
                  <th scope="col" className="pb-3 font-semibold">Monto</th>
                  <th scope="col" className="pb-3 font-semibold">Estado</th>
                  <th scope="col" className="pb-3 font-semibold">Transacción</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 text-slate-600">{item.date}</td>
                    <td className="py-4 font-medium text-[#123047]">{item.student}</td>
                    <td className="py-4 text-[#123047]">{formatAmount(item.amount)}</td>
                    <td className="py-4"><span className="rounded-full bg-[#eaf9f1] px-2.5 py-1 text-xs font-semibold text-[#147d61]">{item.status}</span></td>
                    <td className="py-4"><a href="#" className="inline-flex items-center gap-1.5 font-semibold text-[#147d61] underline underline-offset-4 hover:text-[#0f604b]">Ver transacción <ExternalLink aria-hidden="true" className="size-3.5" /></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4" onClick={closeModal}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="fund-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="fund-title" className="text-2xl font-semibold tracking-[-0.04em] text-[#123047]">Financiar beca</h2>
                <span className="mt-2 inline-block rounded-full bg-[#eaf9f1] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#147d61]">Dato simulado</span>
              </div>
              <button type="button" onClick={closeModal} aria-label="Cerrar" className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100"><X aria-hidden="true" className="size-5" /></button>
            </div>

            {verifiedApplicants.length === 0 ? (
              <p className="mt-6 rounded-2xl bg-[#fff6dc] p-4 text-sm leading-6 text-[#8b6500]">Todavía no verificaste ninguna credencial. Verificá al menos una postulación para poder financiarla.</p>
            ) : (
              <div className="mt-6 flex flex-col gap-5">
                <div>
                  <label htmlFor="fund-student" className="text-sm font-semibold text-[#123047]">Estudiante</label>
                  <select
                    id="fund-student"
                    value={studentId}
                    onChange={(event) => { setStudentId(event.target.value); setError('') }}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#123047] outline-none focus:border-[#58b992] focus:ring-4 focus:ring-[#dff6ec]"
                  >
                    {verifiedApplicants.map((applicant) => <option key={applicant.id} value={applicant.id}>{applicant.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="fund-amount" className="text-sm font-semibold text-[#123047]">Monto (USDC)</label>
                  <input
                    id="fund-amount"
                    ref={amountRef}
                    type="number"
                    inputMode="decimal"
                    min="0"
                    value={amount}
                    onChange={(event) => { setAmount(event.target.value); setError('') }}
                    onKeyDown={(event) => { if (event.key === 'Enter') handleConfirm() }}
                    placeholder="Ej: 150"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#123047] outline-none placeholder:text-slate-400 focus:border-[#58b992] focus:ring-4 focus:ring-[#dff6ec]"
                  />
                </div>
                {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                <p className="text-xs leading-5 text-slate-500">Esta confirmación es una simulación: todavía no se envía ninguna transacción real.</p>
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={closeModal} className="h-11 rounded-xl px-5 font-semibold">Cancelar</Button>
              {verifiedApplicants.length > 0 && (
                <Button type="button" onClick={handleConfirm} className="h-11 rounded-xl bg-[#164e63] px-5 font-semibold text-white hover:bg-[#0f3d50]">Confirmar aporte</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
