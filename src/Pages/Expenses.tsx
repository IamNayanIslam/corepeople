import Header from "../Components/Header"
import SideBar from "../Components/SideBar"


const Expenses = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <main>
            <Header/>
        </main>
    </div>
  )
}

export default Expenses