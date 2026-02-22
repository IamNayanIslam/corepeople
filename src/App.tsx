import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Today from "./Pages/Today"
import Presence from "./Pages/Presence"
import Leaves from "./Pages/Leaves"
import Accesses from "./Pages/Accesses"
import Expenses from "./Pages/Expenses"
import YearInReview from "./Pages/YearInReview"
import NotFound404 from "./Pages/NotFound404"



function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/today" element={<Today/>}/>
          <Route path="/presence" element={<Presence/>}/>
          <Route path="/leaves" element={<Leaves/>}/>
          <Route path="/accesses" element={<Accesses/>}/>
          <Route path="/expenses" element={<Expenses/>}/>
          <Route path="/yearinreview" element={<YearInReview/>}/>
          <Route path="/account/profile" element={<YearInReview/>}/>
          <Route path="*" element={<NotFound404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

