import Canvas from './canvas/index';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <>
       <main className='app transition ease-in select-none'>
        <Home/>
        <Canvas/>
        <Customizer/>
        </main>
    </>
  )
}
export default App
