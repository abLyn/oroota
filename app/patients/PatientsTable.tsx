import Link from 'next/link'
import { sort } from 'fast-sort'
import prisma from '@/prisma/PrismaClient'

interface Patient {
  id: string
  firstname: string
  lastname: string
}

interface Props {
  sortOrder: string
  query: string
}

const PatientsTable = async ({ sortOrder, query }: Props) => {
  const patients = await prisma.patient.findMany({
    where: {
      firstname: { startsWith: query },
    },
  })

  const sortedPatients = sort(patients).asc(
    sortOrder === 'firstname'
      ? (patient) => patient.firstname
      : (patient) => patient.lastname
  )
  return (
    <table className="table table-bordred">
      <thead>
        <tr>
          <th className="text-xl">
            <Link href="/patients?sortOrder=firstname">Firstname</Link>
          </th>
          <th className="text-xl">
            <Link href="/patients?sortOrder=lastname">Lastname</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedPatients.map((patient) => (
          <tr key={patient.id} className="hover">
            <td>{patient.firstname}</td>
            <td>{patient.lastname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PatientsTable
