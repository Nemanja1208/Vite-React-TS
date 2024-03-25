import viteLogo from '/vite.svg';

import './App.css';
import reactLogo from './assets/react.svg';
import { useCounterStore } from './store/counterStore';

function App() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <>
      <div className="flex justify-center space-x-4">
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <img src={viteLogo} className="logo w-32 h-32" alt="Vite logo" />
          <span className="text-xl font-bold">Vite</span>
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="flex items-center space-x-2"
        >
          <img
            src={reactLogo}
            className="logo react w-32 h-32"
            alt="React logo"
          />
          <span className="text-xl font-bold">React</span>
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center my-8">
        Vite + React - Count {count}
      </h1>
      <div className="card p-4 bg-white shadow-md rounded-lg">
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Decrement
        </button>
      </div>
      <p className="text-center text-gray-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
