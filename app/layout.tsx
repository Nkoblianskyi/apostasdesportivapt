import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "ApostasDesportivaPT - Comparador Informativo Sites Apostas Portugal 2025",
  description:
    "Guia informativo e educativo sobre sites de apostas desportivas licenciados SRIJ em Portugal. Apenas para maiores de 18 anos. Jogo responsável obrigatório. Conteúdo educativo, não promocional.",
  keywords:
    "informação apostas desportivas, educação jogo responsável, licença SRIJ, comparação educativa, 18+, Portugal",
  authors: [{ name: "ApostasDesportivaPT - Conteúdo Educativo" }],
  creator: "ApostasDesportivaPT",
  publisher: "ApostasDesportivaPT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://apostasdesportivapt.com",
    title: "ApostasDesportivaPT - Informação Educativa Apostas Responsáveis",
    description:
      "Conteúdo educativo sobre apostas desportivas licenciadas SRIJ. Apenas informação, não promoção. 18+ Jogo responsável.",
    siteName: "ApostasDesportivaPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "ApostasDesportivaPT - Educação Jogo Responsável Portugal",
    description: "Informação educativa apostas desportivas licenciadas SRIJ. Conteúdo não promocional. 18+.",
  },
  other: {
    "content-purpose": "educational-informational-only",
    "not-promotional": "true",
    "age-restriction": "18+",
    "geographic-restriction": "Portugal-only",
    "responsible-gambling": "mandatory",
    "licensed-operators-only": "SRIJ-Portugal-verified",
    "gambling-addiction-help": "Linha Vida: 213 544 545 - www.sicad.min-saude.pt",
    "content-warning": "Conteúdo educativo sobre apostas - Riscos financeiros e de saúde",
    "target-audience": "Adultos portugueses 18+ apenas para fins educativos",
    "regulatory-compliance": "Conforme SRIJ e legislação portuguesa",
    disclaimer: "Site educativo - NÃO constitui aconselhamento ou promoção",
    "harm-prevention": "Prevenção ativa de jogo problemático e dependência",
    "financial-warning": "AVISO: Apostas causam perdas financeiras - Aposte responsavelmente",
    "addiction-resources": "Recursos ajuda: SICAD, Linha Vida, APAJO",
    "legal-status": "Informação legal sobre operadores licenciados apenas",
    "content-classification": "Educativo-informativo, não comercial ou promocional",
    "risk-disclosure": "Divulgação completa de todos os riscos associados",
    "verification-required": "Verificação idade e residência obrigatória",
    "no-minors": "Estritamente proibido menores 18 anos",
    "problem-gambling-support": "Suporte ativo para jogo problemático disponível",
    transparency: "Transparência total sobre riscos e consequências",
    "educational-purpose": "Finalidade exclusivamente educativa e informativa",
    "non-commercial": "Conteúdo não comercial, sem fins lucrativos diretos",
    "health-warning": "Aviso saúde: Apostas podem causar dependência e problemas mentais",
    "social-responsibility": "Compromisso com responsabilidade social e proteção consumidor",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'