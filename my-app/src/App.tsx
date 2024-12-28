import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

function App() {
  console.log("render");

  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <CreatePage /> */}
      <Footer />
    </div>
  );
}

export default App;
