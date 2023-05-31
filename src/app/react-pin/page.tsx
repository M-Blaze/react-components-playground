import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'React Pin',
  description: 'React Pin Component by Moulik Rai',
}
import ReactPinPage from './ReactPinPage';

export default function Home() {
  return <ReactPinPage />
}
