import Link from 'next/link'
import PatientsTable from './PatientsTable'
import Search from './Search'

interface Props {
  searchParams: {
    sortOrder: string
    query: string
  }
}

const Patients = async ({ searchParams: { sortOrder, query } }: Props) => {
  return (
    <main>
      <h1 className="head-text text-center mb-5">Search</h1>

      <Search />

      <PatientsTable sortOrder={sortOrder} query={query} />
    </main>
  )
}

export default Patients
