import Link from "next/link"

export default function Home() {
  return (
    <main>
      <header className="text-center">
        <div className="container">
          <h1>React Components Playground</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="block-header">
            <h2>Components</h2>
          </div>
          <div className="list-holder">
            <ul className="components-list">
              <li>
                <Link href={'/react-pin'}>React Pin</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
