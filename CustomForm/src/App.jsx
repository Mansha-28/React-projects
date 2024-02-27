import { useState } from 'react'
import './App.css'

function App() {

  const [label, setLabel] = useState('')

  const [form, setForm] = useState(['mansha']);

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
  }

  const handleSave = (e) => {
    e.preventDefault()
   console.log(values)
   setFinal(true)
  }

  return (
    <div>
        <h1 className='text-3xl font-bold'>Custom Form</h1>

        <div>
          <form className="" action="" method="">

            <div className="flex flex-row items-center justify-center">
              <div className="w-[100px]">
                <label className="">Label Input</label>
              </div>
              <div className="">
                <input type="text" value={label} onChange={clickHandler} name='label' className="border-black text-black border-2 m-2 p-2 rounded outline-none "/>
              </div>
            </div>
            <button  onClick={clickButton} disabled={!label.trim()} className={label.trim() ? 'border bg-green-700 p-2 rounded' : 'border bg-slate-400 p-2 rounded'}>Add Input</button>


            {
              form.map((item) => (
                <div className='flex flex-row items-center justify-center'>
                  <div className="w-[100px]">
                    <label htmlFor="" className='text-center items-start justify-start'> {item}</label>
                  </div>
                  <div className="">
                    <input type="text" name={item} onChange={handleValue} className="border-black text-black border-2 m-2 p-2 rounded outline-none"/>
                  </div>
                </div>
              ))
            }

            <button className='bg-slate-400 rounded p-2 px-4' onClick={handleSave} >Save</button>

            <hr />

            {
              final &&
              values.map((item,index)=>(
                <div className="">
                  {item[index].key}
                </div>
              ))
            }
          </form>
        </div>
    </div>
  )
}

export default App
