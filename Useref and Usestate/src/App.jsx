import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef=useRef(null);
  const [count,setCount]=useState(0);

  const handleClick =()=>{
    inputRef.current.focus();
    setCount(count+1)
  }

  return (<>
  <div>
  <input type="text" ref={inputRef} placeholder='Hi! Ashiwani' style={{height:"30px",width:"400px",fontSize:"20px",color:"red",backgroundColor:"yellow",padding:"20px"}}/>


<button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
          
        }}
      >
        Focus & Count
      </button>

       <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Button clicked <strong>{count}</strong> times.
      </p>
</div>
</>
    )
}

export default App;
