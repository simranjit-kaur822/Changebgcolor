import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor: color}} ></div>

     <div className='flex flex-wrap fixed bottom-12 px-2 justify-center inset-x-0'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button onClick={()=>setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={()=>setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}>Green</button>
        <button onClick={()=>setcolor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "olive"}}>Olive</button>
        <button onClick={()=>setcolor("gray")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "gray"}}>Gray</button>
        <button onClick={()=>setcolor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={()=>setcolor("pink")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "pink"}}>Pink</button>
        <button onClick={()=>setcolor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "purple"}}>Purple</button>
        <button onClick={()=>setcolor("lavender")} className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "lavender"}}>Lavender</button>
        <button onClick={()=>setcolor("white")} className='outline-none px-4 py-1 rounded-full text-black border shadow-sm' style={{backgroundColor: "white"}}>White</button>
        <button onClick={()=>setcolor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "black"}}>Black</button>
      </div>
     </div>
    </>
  )
}

export default App
