import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar />
        <MainDash />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
