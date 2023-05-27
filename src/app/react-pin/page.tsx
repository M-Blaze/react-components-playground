'use client'
import ReactPin from "./ReactPin"

export default function ReactPinPage() {
  return (
    <div>
      <div className="block-header text-center">
        <div className="container">
          <h1>React Pin</h1>
        </div>
      </div>
      <div className="component-wrapper text-center">
        <div className="container">
          <ReactPin />
        </div>
      </div>
    </div>
  )
}
