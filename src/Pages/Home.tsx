
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Store/Theme/themeSlice.ts'
import { useState, type FormEvent } from 'react'
import { postProducts } from '../Store/products/product.thanks.ts'
import { type AppDispatch, type RootState} from '../Store/index.ts'



const Home: React.FC = () => {
const dispatch = useDispatch<AppDispatch>()
const currentTheme = useSelector((state:RootState)=> state.theme.theme)

const [inputValue, setInputValue] = useState('')


const toggle = ()=>{
  dispatch(toggleTheme())
}


const submitProduct =(e: FormEvent<HTMLElement>)=>{
    e.preventDefault()
    dispatch(postProducts({name:inputValue}))
    setInputValue('')
}




  return (
    <div className={`mainDiv ${currentTheme ==='dark' ? 'dark-theme' : 'light-theme'}`}>
        <button className='themeBtn' onClick={toggle}>Theme</button>
        <div style={{display:'flex', flexDirection: 'row', alignItems:'center', gap: '24px'}}>
          <h1>it's a homepage</h1>
        </div>
       
         <form className='formDiv'>
            <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
            <button onClick={submitProduct}>Add product</button>
         </form>
      
    </div>
  )
}

export default Home