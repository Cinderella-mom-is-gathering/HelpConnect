import React, {useState} from "react";
import styled from "styled-components";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const HeartBtn=styled.button`
  border: 0;
  background-color: transparent;
  width: 20px;
  margin-top:10px;
  z-index: 99;
`
const HeartNum=styled.div`
  margin-left:15px;
  font-size: 15px;
  display: inline-flex;
`
const HeartButton=({hearts})=>{
    const [Clicked, setClicked]=useState(false);
    const Click=(event)=>{
        setClicked(!Clicked);
    }
    return(
        <>
        <HeartBtn onClick={Click}>
            {Clicked?
                <AiFillHeart style={{"width":"25px","height":"25px","color":"#25CAEF"}}/>:
            <AiOutlineHeart style={{"width":"25px","height":"25px","color":"#25CAEF"}}/>
                }
        </HeartBtn>
        <HeartNum>
            {hearts}
        </HeartNum>
        </>
            );

}
export default HeartButton;