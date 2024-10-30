import Menu from './Components/Menu';
import Cart from './Components/Cart';
import MenuList from './Components/MenuList';
import ConfirmationModal from './Components/ConfirmationModal';

import './App.css'


function App() {
 
  return (
    <>
      <main className='container'>
        <Menu>
          <MenuList />
          <Cart />
          <ConfirmationModal />
        </Menu>
      </main>
    </>
  )
}

export default App
