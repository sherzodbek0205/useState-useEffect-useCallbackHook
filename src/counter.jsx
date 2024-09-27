
import {useState, useEffect} from 'react'
 function  Counter({counterGenerate}) {
  const [item,setItem] = useState([]);

  useEffect(()=>{
    const newItem = counterGenerate();
    setItem(newItem);
    console.log('render');
  },[counterGenerate])
  console.log(item);
  return (
   <>
  <ul>
    {item.map(item =>(
      <li>{item}</li>
    ))}
  </ul>
   </>

  )
}
export default Counter;

