
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Store/Theme/themeSlice'
import { useEffect, useState } from 'react'
import { postProducts } from '../Store/products/product.thanks'

const Home = () => {
const dispatch = useDispatch()
const currentTheme = useSelector((state)=> state.theme.theme)

const [inputValue, setInputValue] = useState('')


const toggle = ()=>{
  dispatch(toggleTheme())
}


const submitProduct =(e)=>{
    e.preventDefault()
    dispatch(postProducts(inputValue))
}




  return (
    <div className={`mainDiv ${currentTheme ==='dark' ? 'dark-theme' : 'light-theme'}`}>
        <button className='themeBtn' onClick={toggle}>Theme</button>
         <h1>it's a homepage</h1>

         <form className='formDiv'>
            <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
            <button onClick={submitProduct}>Add product</button>
         </form>
      
    </div>
  )
}

export default Home