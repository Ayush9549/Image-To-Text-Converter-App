import './App.css';
import ImageToText from './components/ImageToText';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4 text-center">
        <ImageToText />
      </div>
    </>
  );
}

export default App;
