import UserProfile from './Components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    uniqueNo: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },

  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },

  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },

  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      <UserProfile userDetails={userDetails[0]} />
      <UserProfile userDetails={userDetails[1]} />
      <UserProfile userDetails={userDetails[2]} />
      <UserProfile userDetails={userDetails[3]} />
    </ul>
  </div>
)
export default App
