import './App.css';
import {suitekitchen} from './assets/index'

function App() {
  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='flex justify-between items-center border-y border-black py-5 px-4'>
        <div className='flex justify-around items-center'>
          <img className='h-20' src={suitekitchen} alt="logo suite kitchen"/>
          <h3 className='hidden md:inline-flex text-3xl font-serif'>Suite Kitchen</h3>
        </div>
        <div>
          <h3 className='text-2xl font-bold'>+22230411047 </h3>
        </div>

      </div>
      <h1 className='text-6xl font-serif text-center mt-4'>welcome home</h1>   
    </div>
  );
}

export default App;
