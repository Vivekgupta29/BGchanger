import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const colors = ["green", "blue", "white", "orange", "violet", "yellow", "red", "gray"]

  useEffect(() => {
    document.addEventListener('click', (e) => {
      console.log(e.target)
    })
  }, [])  
  return (
    <>
      <div className='bg-slate-900 h-screen w-full'>
        <div className='h-10 ml-10 mr-10 w-[-webkit-fill-available] p-7 pt-8 pb-7 bg-white rounded-xl fixed bottom-[15%] flex items-center justify-around' id="buttons">
          {
            colors.map((item, index) => 
              (
                <button key={index} className={`bg-${item}-400 p-1 rounded-xl ring-2 hover:ring-${item}-800 min-w-[7em]`}>{item}</button>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
