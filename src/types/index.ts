export interface IPracticeSummary {
    id: string
    name: string
    city: string
    country: string
    newPatientsThisMonth: number
    appointmentRequest: number
    conversionRate: number
    monthlyTrend: number[]
    spend: number
}