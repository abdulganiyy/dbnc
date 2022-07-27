import React from 'react'
import axios from 'axios'
import { useDebounce } from 'usehooks-ts'
import './quiz5.css'

const Quiz5 = () => {
  const [search, setsearch] = React.useState('')
  const [rhymes, setRhymes] = React.useState<{numSyllables: number
  score: number
  word: string}[] | null>(null)
  const debouncedValue = useDebounce<string>(search, 500)

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
       setsearch(e.target.value)
  }

  React.useEffect(() => {
    
       axios.get(`https://api.datamuse.com/words?rel_rhy=${debouncedValue}`).then((res)=>{

       setRhymes(res.data)
       }).catch((err) => {

       })
   
  }, [debouncedValue])
  

  return (
    <>
    <div className='search-container'><input type={'text'} placeholder='Enter a word to find its rhymes' value={search} onChange={onChangeHandler} /></div>
    <div>{rhymes && rhymes.map((rhyme,i) => <p>{rhyme.word}</p>)}</div>
    </>
  )
}

export default Quiz5