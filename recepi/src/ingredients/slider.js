import React from 'react'
import styled from 'styled-components'

const slider = () => {
  return (
    <Cover>
        <p>Your order</p>
        <div>
            <h3>plum</h3>
            <p>Mexico</p>
            <div>
              <p>LB</p>
              <button>-</button>
              <p>2</p>
              <button>+</button>
              <p>$9,98</p>
            </div>
        </div>
    </Cover>
  )
}

export default slider

const Cover = styled.div`
 
display: flex;
flex-direction:column;
a{
  
}
`