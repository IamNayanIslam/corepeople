
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <main>
            <Header/>
        </main>
    </div>
  )
}

export default Dashboard