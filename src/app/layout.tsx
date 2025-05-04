import './styles.css'
import Link from 'next/link'

export const metadata = {
  title: 'Life Worth Living',
  description: 'A personal reflection on what makes life worth living through the lens of agency, gratitude, curiosity, and connection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="A personal reflection on what makes life worth living through the lens of agency, gratitude, curiosity, and connection."
        />
        <meta property="og:title" content="Life Worth Living" />
        <meta
          property="og:description"
          content="A personal reflection on what makes life worth living through the lens of agency, gratitude, curiosity, and connection."
        />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-brand">
            <h1>Life Worth Living</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/">My Compass</Link>
            </li>
            <li>
              <Link href="/moments">Moments That Made Me Pause</Link>
            </li>
            <li>
              <Link href="/people">People Who've Shaped Me</Link>
            </li>
            <li>
              <Link href="/questions">Questions I'm Still Holding</Link>
            </li>
          </ul>
          <div className="nav-footer">
            This site is not an answer — it's a beginning. A work in progress.
          </div>
        </nav>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  )
}
