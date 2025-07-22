export async function GET() {
  const securityTxt = `Contact: security@apostasdesportivapt.com
Expires: 2025-12-31T23:59:59.000Z
Encryption: https://apostasdesportivapt.com/pgp-key.txt
Preferred-Languages: pt, en
Canonical: https://apostasdesportivapt.com/.well-known/security.txt
Policy: https://apostasdesportivapt.com/security-policy
Hiring: https://apostasdesportivapt.com/careers

# Reportar vulnerabilidades de segurança
# Report security vulnerabilities to: security@apostasdesportivapt.com
# Resposta garantida em 48 horas / Response guaranteed within 48 hours
`

  return new Response(securityTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
