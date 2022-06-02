import { useEffect } from 'react'
import { useState } from 'react'
import paginate from './utils'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'


export const useFetch = () => {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState([])

  const getP = async () =>{
      const res = await fetch(url)
      const data = await res.json()
      setData(paginate(data))
      setLoading(false)
  }

  useEffect(()=>{
      getP()
  },[])
  return {loading,data}
}
