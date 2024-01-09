import { AddTaskOutlined, ReplyOutlined, ThumbDownAlt, ThumbDownOutlined, ThumbUpAlt, ThumbUpOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchSuccess, like } from '../redux/videoSlice';
import { format } from 'timeago.js';
import { subscription } from '../redux/userSlice';
import Reccomendation from '../components/Reccomendation';

const Container=styled.div`
  display: flex;
  gap: 24px;
`;

const Content=styled.div`
  flex: 5;
`;

const VideoWrapper=styled.div`
  flex: 5;
`;

const Title=styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};
`;

const Details=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info=styled.div`
  color: ${({theme})=>theme.textSoft};
`;

const Buttons=styled.span`
  display: flex;
  gap: 20px;
  `;

const Button=styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: ${({theme})=>theme.text};
`;

const Hr=styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`;

const Channel=styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo=styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme})=>theme.text};
`;

const Image=styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail=styled.div`
  display: flex;
  flex-direction: column;
  /* border: 0.5px solid ${({theme})=>theme.text}; */
`

const ChannelName=styled.span`
  font-weight: 500;
`

const ChannelCounter=styled.span`
  margin-bottom: 20px;
  margin-top: 5px;
  /* border: 0.5px solid ${({theme})=>theme.textSoft}; */
  font-size: 12px;
`

const Description=styled.p`
  font-size: 14px;
`

const Subscribe=styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame=styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const {currentUser}=useSelector((state)=>state.user);
  const {currentVideo}=useSelector((state)=>state.video);
  const dispatch=useDispatch();
  const path=useLocation().pathname.split("/")[2];
  const [channel,setChannel]=useState({});
  const [subs,setSubs]=useState();
  
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        const videoRes=await axios.get(`/videos/find/${path}`)
        dispatch(fetchSuccess(videoRes.data));
        const channelRes=await axios.get(`/users/find/${videoRes.data.userId}`);
        setChannel(channelRes.data);
        setSubs(channelRes.data.subscribers);
      } catch (err) {
        
      }
    }
    fetchData();
  },[path]);
  
  const handleLike=async()=>{
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  }
  const handleDisLike=async()=>{
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id))
  }
  const handleSubscribe=async()=>{
    if(currentUser.subscribedUsers.includes(channel._id))
    {
      setSubs(subs-1);
      await axios.put(`/users/unsub/${channel._id}`);
    }
    else
    {
      await axios.put(`/users/sub/${channel._id}`);
      setSubs(subs+1);
    }
    dispatch(subscription(channel._id));
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="720"
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='Youtube Video Player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe> */}
          <VideoFrame src={currentVideo.videoUrl} controls/>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo?.views} views • {format(currentVideo?.createdAt)}</Info>
          <Buttons>
            <Button onClick={handleLike}>{currentVideo.likes?.includes(currentUser._id)?(<ThumbUpAlt/>):(<ThumbUpOutlined/>)}{currentVideo?.likes?.length}</Button>
            <Button onClick={handleDisLike}>{currentVideo.dislikes?.includes(currentUser._id)?(<ThumbDownAlt/>):(<ThumbDownOutlined/>)} Dislike</Button>
            <Button><ReplyOutlined/>Share</Button>
            <Button><AddTaskOutlined/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img}/>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{subs} subscribers</ChannelCounter>
              <Description>
                {currentVideo?.desc}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSubscribe}>{currentUser.subscribedUsers?.includes(channel._id)?"SUBSCRIBED":"SUBSCRIBE"}</Subscribe>
        </Channel>
        <Hr/>
        <Comments videoId={currentVideo._id}/>
      </Content>
      <Reccomendation tags={currentVideo.tags}/>
    </Container>
  )
}

export default Video