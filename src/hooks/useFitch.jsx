import { useState, useEffect } from 'react'
import axios from '../api/axios'

const useFitch = (url) => {


       const [data, setData] = useState([])
         useEffect(() => {
            async function loadData() {
                try{
    const response = await axios(url)
    setData(response.data.recipes || response.data)
                }
                catch(error){
                    alert(error)
            }
         }
         loadData()
         }, [url])
    
         return data
    }
    
    export {useFitch}