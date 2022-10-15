import './App.css';
import NavBar from '../../components/NavBar';
import Newsletter from '../../components/SignNewsletter';
import HighlightCard from '../../components/HighlightCard';
import OfferSection from '../../components/OfferSection';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Newsletter />
      <HighlightCard />
      <OfferSection />
    </div>
  )
}

export default App
