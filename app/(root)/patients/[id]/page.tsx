import { notFound } from 'next/navigation'

interface Props {
  params: { id: number }
}

const PatientDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) {
    notFound()
  }
  return <div>PatientDetailPage {id}</div>
}

export default PatientDetailPage
