/*
 * @Description: 
 * @Version: 
 * @Autor: LeiHao
 * @Date: 2020-09-10 14:51:00
 * @LastEditors: LeiHao
 * @LastEditTime: 2020-09-16 11:35:22
 */
import React, { useEffect } from 'react'
import { reqDetail } from '../../api/index'
import { useState } from 'react'
import Detail from '../detail/index'
import Header from '../../components/layout/index'
function Index(props) {
  const [detail, setDetail] = useState({})
  const [listArray, setList] = useState([{ name: 'rose', say: 'i am ok' }, { name: 'lindy', say: 'it is ok' }])
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)
  const countClick = () => {
    setCount(count + 2);
    if (count == 3) {
      setList([{ name: 'xiaom', say: 'bad' }, { name: 'xiaoh', say: 'funddy' }])
      setIndex(index +1);
    };
  }
  useEffect(() => {
    console.log(props)
    console.log(listArray)
    console.time()
    reqDetail().then(res => {
      console.log(res)
      setDetail(res.data)
    })
    console.timeEnd()
  }, [])
  useEffect(()=> {
    console.log(index)
    console.log(321)
  },[index])
  return (
    <div className="index">
      <p>{detail.name}</p>
      <Header count={count} handlerOnClick={()=> {countClick()}} />
      <Detail handlerOnClick={()=> {countClick()}} />
      <ul>
        {
          listArray.map((item, index) => (
            < li key={index} > {item.name} : {item.say}</li>
          ))
        }
      </ul>
      <p>count :{count}</p>
      <p>index :{index}</p>
      <button onClick={() => { countClick() }}>增加</button>
    </div >
  )
}

export default Index;