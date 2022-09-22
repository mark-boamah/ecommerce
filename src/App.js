import { Routes, Route} from 'react-router-dom';

import './categories.styles.scss'
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return <div>I am the shop page</div>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
