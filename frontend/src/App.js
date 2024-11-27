
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Home} from './components/Home.js'
import {Item} from './components/Item.js'
import {ItemForm} from './components/ItemForm.js'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/itemlist" element={<Item/>}/>
          <Route exact path="/additem" element={<ItemForm/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
