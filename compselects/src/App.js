import Header from './components/header/header';
import NewReleases from './components/newReleases/index'
import TopSellers from './components/topSeallers';
import './styles/App.css'

function App() {
  return (
    <div className='background'>
      <div className='container'>
        <Header/>
        <NewReleases/>
        <TopSellers/>
      </div>
    </div>
  );
}

export default App;
