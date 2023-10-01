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
    <>
      <h1>Patients</h1>

      <Search />

      <PatientsTable sortOrder={sortOrder} query={query} />
    </>
  )
}

export default Patients
