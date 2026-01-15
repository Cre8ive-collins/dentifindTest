import type { IPracticeSummary } from "../types"
import { getStatus } from "../utils"
import TrendChart from "./TrendChart"

const PracticeSummaryCard = ({
    name,
    city,
    country,
    newPatientsThisMonth,
    appointmentRequest,
    conversionRate,
    monthlyTrend,
    spend
}: IPracticeSummary) => {
    const status = getStatus(conversionRate)
    
    return (
        <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-xl transition hover:border-blue-500">


            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <div>

                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500">{city}, {country}</p>
                </div>
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-4">
                    <span className={`h-3 w-3 rounded-full ${status.color}`} />
                    <span className="text-xs text-gray-600">{status.label}</span>
                </div>
            </div>



            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                    <p className="text-gray-500">New Patients</p>
                    <p className="font-semibold">{newPatientsThisMonth}</p>
                </div>
                <div>
                    <p className="text-gray-500">Appointments</p>
                    <p className="font-semibold">{appointmentRequest}</p>
                </div>
                <div>
                    <p className="text-gray-500">Conversion</p>
                    <p className="font-semibold">{conversionRate}%</p>
                </div>
                <div>
                    <p className="text-gray-500">Marketing Spend</p>
                    <p className="font-semibold">${spend}</p>
                </div>
            </div>


            {/* Recommendation */}
            <div>
                <p className="text-sm font-semibold mb-1">Recommendation</p>
                <ul className=" list-disc list-inside">
                    <li className="text-xs text-gray-600 mb-1">
                        {conversionRate < 0.15
                            ? 'Focus on marketing to increase conversions'
                            : 'Keep up the good work!'}
                    </li>
                    <li className="text-xs text-gray-600 mb-1">
                        Optimize mobile landing page layout
                    </li>
                </ul>
            </div>

            {/* TrendChart */}
            <TrendChart data={monthlyTrend} />

        </div >

    )
}

export default PracticeSummaryCard