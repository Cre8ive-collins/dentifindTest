import { useState } from "react"

type TrendChartProps = {
  data: number[]
}

const TrendChart = ({ data }: TrendChartProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div>
      <div className="flex items-end gap-1 mb-2 h-40">
        {data.map((value, idx) => (
          <div
            key={idx}
            className="flex-1 relative cursor-pointer"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === idx && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-1 rounded">
                {value}
              </div>
            )}

            <div
              className="w-full bg-blue-500 rounded"
              style={{ height: `${value}px` }}
            />
          </div>
        ))}
      </div>
      <span className="text-sm text-gray-500">Past 6 months</span>
    </div>
  )
}

export default TrendChart
