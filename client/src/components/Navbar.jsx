import { AccountCircleOutlined, SearchOutlined, VideoCallOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Upload from './Upload';

const Container=styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme})=>theme.bgLighter};
  height: 56px;
`;
const Wrapper=styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search=styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({theme})=>theme.textSoft};
`;
const Input=styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: ${({theme})=>theme.textSoft};
`;
const Button=styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius:3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const User=styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
  color:${({theme})=>theme.text};
`;

const Avatar=styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;
const Navbar = () => {

  const {currentUser}=useSelector(state=>state.user);
  const [q,setQ]=useState("")
  const [open,setOpen]=useState(false);
  const navigate=useNavigate();
  return (
    <>
      
      <Container>
        <Wrapper>
            <Search>
              <Input placeholder='Search' onChange={e=>setQ(e.target.value)}/>
              <SearchOutlined onClick={()=>{navigate(`/search?q=${q}`)}}/>
            </Search>
            {
              currentUser?(
                <User>
                  <VideoCallOutlined onClick={()=>{setOpen(true)}}/>
                  <Avatar src={currentUser.img}/>
                  {currentUser.name}
                </User>
              ):
              (
                <Link to="/signin" style={{textDecoration:"none"}}>
                  <Button><AccountCircleOutlined/> SIGN IN</Button>
                </Link>
              )
            }
        </Wrapper>
      </Container>
      {open&&<Upload setOpen={setOpen}/>}
    </>
  )
}

export default Navbar