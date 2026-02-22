import Header from '../Components/Header'
import SideBar from '../Components/SideBar'

const Profile = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <main>
            <Header/>
        </main>
    </div>
  )
}

export default Profile