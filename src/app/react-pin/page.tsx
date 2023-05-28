'use client'
import CopyToClipboard from "../components/CopyToClipboard"
import ReactPin from "./ReactPin"

export default function ReactPinPage() {
  return (
    <div>
      <div className="block-header text-center">
        <div className="container">
          <h1>React Pin</h1>
          <p>Use <CopyToClipboard text='npm -i react-pin-widget'/> or <CopyToClipboard text='yarn add react-pin-widget'/> to add this component in your project</p>
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
