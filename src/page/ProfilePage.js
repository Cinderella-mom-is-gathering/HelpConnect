import React from 'react';
import BottomNavigationBar from '../component/BottomNavigationBar';
import styled from 'styled-components';
import PostCard from '../component/postCard/PostCard';
import Profile from '../component/postCard/Profile';
import TextBox from '../component/postCard/TextBox';
import ImgBox from '../component/postCard/ImgBox';
import SubmitButton from '../component/SubmitButton';
import Header from "../component/header/Header";
import PostPIC from "../assets/postPIC.png" //이미지 불러오기
import profilePIC from "../assets/profilePIC.png"

const MainWrapper = styled.div`
  margin: 15px;
  position: relative;


  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled.div`
    margin-right: 20px;
    margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  td {
    padding: 5px;
  }
  /* table 요소에 패딩 추가 */
  padding: 10px;
`;

const LabelCell = styled.td`
  font-weight: bold;
  width: 40%;
`;

const ValueCell = styled.td`
  /* value 셀에 별도 스타일이 필요 없으므로 아무 스타일도 지정하지 않음 */
`;

const BackImg = styled.img`
  width: 100%;
  height: 200px;
  background-size: 50% 100%;

  object-fit: cover;
  object-position: initial;
  margin-right: 20px;
`
const ProImg = styled.img`
  border-radius: 100px;
  width: 80px;
  height: 80px;
  display: inline-block;
  margin-left: 20px;
  margin-right: 10px;
  position: absolute;
  top: 220px;
  left: 20px;
`

const ProBox = styled.div`
  height: 240px;
`

const ProBox2 = styled.div`
  margin-top: 15px;
  margin-left: 40px;
  margin-right: 40px;
  height: 50px;
`

const ProBox3 = styled.div`
  margin-top: 15px;
  height: 50px;
`

const TableRow = ({ label, value }) => (
  <tr>
    <LabelCell>{label}</LabelCell>
    <ValueCell>{value}</ValueCell>
  </tr>
);

const ProfilePage = () => {
  const repeatedSections = [1, 2, 3];

  return (
    <div>
      <Header
        title="내 정보"
        renderBackArrowButton={true}
        renderWritingPostButton={false}
      />
      <ProBox>
        <BackImg src={PostPIC} />
        <ProImg src={profilePIC} />
      </ProBox>
      <ProBox2>
        <b>Agust D</b>
        <ProBox3>안녕 나는 어거스트D슈가</ProBox3>
      </ProBox2>
      <MainWrapper>
        {repeatedSections.map((index) => (
          <PostCard approvebtn={false} coinvaluebtn={false} />
        ))}
      </MainWrapper>

      <BottomNavigationBar />
    </div>
  );
};

export default ProfilePage;