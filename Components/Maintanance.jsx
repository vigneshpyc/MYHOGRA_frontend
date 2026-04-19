import React from 'react'
import styled from 'styled-components'

function Maintanance() {
  return (
    <>
    <Style>
        <div className="mes">
            <h1>⚠️</h1><br />
        <h4>
            Developers currently working on this feature, this will availabe as soon as possible, for more Information contact developer <br/>
            <span>MR. Vignesh, 📞 : 8667236832</span>
        </h4><br />
        <h4>Thanks for Visiting🙏</h4>
    </div>
    </Style>
    
    </>
  )
}
const Style = styled.div`
    min-height: 100vh;
    background-color: #bdeae9;
    .mes{
        width: 90%;
        text-align: center;
        position: absolute;
        top: 40%;
        left: 5%;
        border-radius: 10px;
        padding: 5px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
export default Maintanance
