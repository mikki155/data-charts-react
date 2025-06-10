import { DataChart } from "./components/DataChart";
import { MenuBar } from "./components/MenuBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GaugeBar } from "./components/GaugeBar";

function App() {
  const timePeriodInDays = 60;
  
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<DataChart area timePeriod={timePeriodInDays} height={500} width={1000} />} />
          <Route path="/watertemperature" element={<GaugeBar regionId="NO-42-4202" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
