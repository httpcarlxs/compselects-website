import Header from './components/header/header';
import NewReleases from './components/newReleases/index'
import TopSellers from './components/topSeallers';
import Reports from './components/reports'
import Footer from './components/footer'
import EventsSection from './components/event'
import './styles/App.css'

function App() {
  return (
    <div className='background'>
      <div className='container'>
        <Header/>
        <NewReleases/>
        <TopSellers/>
        <Reports/>
        <EventsSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
