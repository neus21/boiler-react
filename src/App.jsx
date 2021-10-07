import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen">
      <div >
          <h1 className='text-5xl font-bold'>
            Vite-React-Tailwind
          </h1>
      </div>
    </div>
  )
}

export default App
