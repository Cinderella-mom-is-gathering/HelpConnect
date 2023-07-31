import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";

const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #D5D5D5;
  border-radius: 5px;
`
const PostCard = () => {
    return (
        <CardBox>
            <Profile nickname='Agust D'/>
            <TextBox></TextBox>
            <ImgBox></ImgBox>
        </CardBox>
    )
}

export default PostCard;