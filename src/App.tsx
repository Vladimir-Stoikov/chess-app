import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChessPage from './pages/ChessPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChessPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
