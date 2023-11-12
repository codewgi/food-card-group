import logo from './logo.svg';
import './css/style.css';
import data from './data/data';

function App() {
  const images = data;

  return (
    <div className="w-full min-h-screen grid place-content-center">
      <div className='flex flex-col items-center justify-center space-y-10'>
        <span className='text-6xl font-bold'>Our menu</span>
        <div className='flex space-x-8'>
          {
            images.map(data => (
              <div className='flex items-end w-80 h-[28rem] rounded-2xl relative overflow-hidden group'>
                <img src={`/assets/img/${data.src}`} className='absolute top-0 left-0 -z-10 brightness-[60%] group-hover:scale-125 group-hover:brightness-90 duration-200'/>
                <div className='p-5 flex flex-col'>
                  <span className='text-3xl font-bold text-white'>{data.name}</span>
                  <span className='text-justify text-neutral-100 text-sm'>{data.text}</span>
                  <button className='w-fit px-4 py-2 border-2 border-white mt-2 text-white hover:bg-white hover:text-black duration-200'>
                    See recipe
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
