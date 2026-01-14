
import './App.css'
import PracticeSummaryCard from './component/PracticeSummaryCard'
import { practices } from './data'

function App() {


  return (
    <div className=' grid md:grid-cols-3 grid-cols-1 gap-5 p-5'>
      {
        practices.map((practice) => (
          <PracticeSummaryCard
            key={practice.id}
            id={practice.id}
            name={practice.name}
            city={practice.city}
            country={practice.country}
            newPatientsThisMonth={practice.newPatientsThisMonth}
            appointmentRequest={practice.appointmentRequest}
            conversionRate={practice.conversionRate}
            monthlyTrend={practice.monthlyTrend}
            spend={practice.spend}
          />
        ))
      }
    </div>
  )
}

export default App
