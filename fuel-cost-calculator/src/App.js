
import { useState } from 'react';
import './App.css';

function App() {
  const [tripDistance, setTripDistance] = useState()
  const [fuelConsumption, setFuelConsumption] = useState()
  const [costPerLitre, setCostPerLitre] = useState()
  const [totalFuelCost, setTotalFuelCost] = useState()

  // Formula
  // totalLitreConsumed = distance / consumption
  // totalCost of litre = totalLitreConsumed * cost of litre 
  const calculate = () => {
    const totalLitreConsumed = tripDistance / fuelConsumption
    const totalCost = totalLitreConsumed * costPerLitre
    setTotalFuelCost(totalCost)
  }

  const reset = () => {
    setTripDistance("")
    setFuelConsumption("")
    setCostPerLitre("")
    setTotalFuelCost(undefined)
  }

  return (
    <div className='h-screen bg-indigo-500 p-10'>
      <div className='bg-white p-5 rounded-lg max-w-lg mx-auto'>
        <div>
          <h1 className='text-xl font-semibold'>Fuel Cost Calculator</h1>
          <p className='text-gray-600'>Know your expense</p>
        </div>
        <div className='mt-5 space-y-3'>
          <div className='flex justify-between items-center'>
            <p>Trip Distance (KM)</p>
            <input type="number" placeholder='Trip Distance' className='border  px-4 py-2 rounded' value={tripDistance} onChange={(e) => { setTripDistance(e.target.value) }} />
          </div>
          <div className='flex justify-between items-center'>
            <p>Fuel Consumption</p>
            <input type="number" placeholder='Fuel Consumption' className='border  px-4 py-2 rounded' value={fuelConsumption} onChange={(e) => { setFuelConsumption(e.target.value) }} />
          </div>
          <div className='flex justify-between items-center'>
            <p>Cost Per Litre (L)</p>
            <input type="number" placeholder='Cost Per Litre' className='border  px-4 py-2 rounded' value={costPerLitre} onChange={(e) => { setCostPerLitre(e.target.value) }} />
          </div>
          <div className='text-center'>
            <button className='px-4 py-2 rounded' onClick={reset}>Reset</button>
            <button className='bg-indigo-600 px-4 py-2 rounded text-white' onClick={calculate}>Calculate</button>
          </div>
          {totalFuelCost === undefined || <p className='font-semibold text-xl border-t pt-3'>Total Fuel cost is: ₹{totalFuelCost}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
