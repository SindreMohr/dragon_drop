import { Inter } from 'next/font/google'
import Table from './components/Table'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Table columns={["A", "B", "C"]}/>
    </>
  )
}
