export const getStatus = (rate: number) => {
  if (rate >= 0.3) return { label: 'High', color: 'bg-green-500' }
  if (rate >= 0.15) return { label: 'Stable', color: 'bg-yellow-500' }
  return { label: 'At Risk', color: 'bg-red-500' }
}