import { DataChart } from "./components/DataChart";
import { MenuBar } from "./components/MenuBar";

function App() {
  
  return (
    <>
      <MenuBar />
      <DataChart area height={500} width={1000} />
    </>
  )
}

export default App
