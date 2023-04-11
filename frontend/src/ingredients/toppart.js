import React from 'react'
import ingri from '../Images/Ingri.png'
import styled from 'styled-components'

const toppart = () => {
  return (
    <Cover>
        <p>Hey,Yash</p>
        <Search>
        <button><img src={ingri} alt="" /></button>
        <button><img src={ingri} alt="" /></button>
        <button><img src={ingri} alt="" /></button>
        </Search>
    </Cover>
  )
}

export default toppart

const Cover = styled.div`
    display: flex;
    height: 3rem;
    width:100%;
    background-color: #303135;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
`
const Search = styled.div`
  margin-right:2rem;
  display: flex;
  gap: 1rem;
`
