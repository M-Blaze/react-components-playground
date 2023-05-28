'use client'

import React from 'react'

const CopyToClipboard = ({ text }:{ text: string }) => {
  const handleCopy = async () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <strong className="text-to-copy" onClick={handleCopy}>{text}</strong>
  )
}

export default CopyToClipboard