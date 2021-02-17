import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <PageContent></PageContent>
      <FooterComponent/>

      </div>
  );
}

export default App;
