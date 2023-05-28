import React from 'react'

import { copyToClipboard } from '../helpers/app.helpers'

const CopyToClipboard = ({ text }:{ text: string }) => {
  const handleCopy = async () => {
    await copyToClipboard(text)
  }

  return (
    <strong className="text-to-copy" onClick={handleCopy}>{text}</strong>
  )
}

export default CopyToClipboard