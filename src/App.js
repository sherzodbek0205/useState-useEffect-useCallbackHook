import {Card} from 'antd';
import './App.css';
import Counter from './counter';
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'antd';


function App() {
  const [counter,setCounter] = useState(0);


  const counterGenerate = useCallback(() => {
   return new Array(counter).fill('').map((_,idx)=>`Counter number ${idx+1}`);
  },[counter])



 const onIncrement = () => setCounter(counter+1);
 const onToggle = () => setCounter(0)

  return (
    <>

    <div className="flex justify-center  w-[100%] h-[100vh] bg-[#2c2828] items-center flex-col gap-[20px]">
    <h1 className='text-[25px] text-green-600'>User Activated {counter}</h1>
     <div className="flex justify-center gap-2">

<Button type='primary' onClick={onIncrement}>Increase</Button>
<Button type='warning' onClick={onToggle} className=" bg-yellow-500 text-black">Toggle</Button>

   </div>
    <Card title="Card title" bordered={false} style={{ width: 500}}>
    <Counter counterGenerate={counterGenerate}/>
  </Card>
    </div>

    </>
  );
}

export default App;
