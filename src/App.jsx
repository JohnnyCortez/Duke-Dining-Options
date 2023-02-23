import "./App.css";
import Grid from "./components/grid";
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <div class="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKJ2cX34JUzRlrqaqBmfNtvCucWyAettDTbteFa1qrHeH0RNbG85hkxF-fddAnV55gq0&usqp=CAU"/>      
        <h1>Duke University Broadhead Dining Options</h1>
      </div>
      <div className="body">
        <Grid />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App