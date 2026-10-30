export type SummaryCardProps = {
  title: string;
  value: number;
}

export function SummaryCard({title, value}: SummaryCardProps){
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  )
}