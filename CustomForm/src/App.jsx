import { useState } from 'react'
import './App.css'

function App() {

  const [label, setLabel] = useState('')

  const [form, setForm] = useState([]);

  const [storedValues, setStoredValues] = useState([]);

  const values = []
  const [final, setFinal] = useState(false)

  const clickHandler = (e) => {
    setLabel(e.target.value)
  }

  const handleValue = (e) => {
    e.preventDefault()
    const key = e.target.name;
    const val = e.target.value;

    const obj = {
      key,
      val
    }
    values.push(obj)

    
  }

  const clickButton = (e) => {
    e.preventDefault()
    console.log(label)
    setForm((prev)=>{return [...prev, label]})
    setLabel('')
    setFinal(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log(values)
    const val = values.map((prev) => `${prev.key}: ${prev.val}`);
    setStoredValues(val);
  }

  return (
    <div className='bg-gray-200 w-[50%] rounded shadow-md shadow-slate-400 items-center justify-center m-auto'>
        <h1 className='text-3xl font-bold my-5 pt-5'>Custom Form</h1>

        <div>
          <form className="" action="" method="">

            <div className="flex flex-row items-center justify-center">
              <div className="w-[200px]">
                <label className="">Label Input</label>
              </div>
              <div className="">
                <input type="text" value={label} onChange={clickHandler} name='label' className="border-black min-w-60 text-black border-2 m-2 p-2 rounded outline-none "/>
              </div>
            </div>
            <button  onClick={clickButton} disabled={!label.trim()} className={label.trim() ? 'border bg-green-700 p-2 my-4 rounded' : 'border bg-slate-400 my-4 p-2 rounded'}>Add Input</button>


            {
              form.map((item) => (
                <div className='flex flex-row items-center justify-center'>
                  <div className="w-[200px] bg-gray-100 p-2 rounded">
                    <label htmlFor="" className='text-center  items-start justify-start'> {item}</label>
                  </div>
                  <div className="">
                    <input type="text" name={item} onChange={handleValue} className="border-black min-w-60 text-black border-2 m-2 p-2 rounded outline-none"/>
                  </div>
                </div>
              ))
            }

           {
             final && <button className='bg-slate-400 rounded p-2 px-4 my-4' onClick={handleSave} >Save</button>
           }

            <hr />

            <div>
              <h2>{final ? 'Stored Values:' : ''}</h2>
              <ul>
                {storedValues.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
