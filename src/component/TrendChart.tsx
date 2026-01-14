type TrendChartProps = {
    data: number[]
}

const TrendChart = ({ data }: TrendChartProps) => {
    return (
        <div>
            <div className="flex items-end gap-1 mb- h-40 w-20">
                {data.map((value, idx) => (
                    <div
                        key={idx}
                        className="flex-1 bg-blue-500 rounded "
                        style={{ height: `${value}px` }}
                    />
                ))}
            </div>
            <span className=" text-sm">Last 6 months</span>
        </div>
    )
}

export default TrendChart
