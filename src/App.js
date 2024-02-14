import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import OrdersPage from './Components/OrdersPage';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Orders' element={<OrdersPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
cschjs;iucslgyci;slcuxjk.cbjasd;uil
export default App;
