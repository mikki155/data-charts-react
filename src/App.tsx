import { DataChart } from "./components/DataChart";
import { MenuBar } from "./components/MenuBar";

function App() {
  const timePeriodInDays = 60;
  
  return (
    <>
      <MenuBar />
      <DataChart area timePeriod={timePeriodInDays} height={500} width={1000} />
    </>
  )
}

export default App
