import Link from "next/link"

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'React Component Playground',
  description: 'React Components by Moulik Rai',
};
 
export default function Home() {
  return (
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
  )
}
