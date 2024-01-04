import { AddTaskOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments';
import Card from '../components/Card';

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

const Recc=styled.div`
  flex: 2;
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
  border: 0.5px solid color ${({theme})=>theme.text};
`

const ChannelName=styled.span`
  font-weight: 500;
`

const ChannelCounter=styled.span`
  margin-bottom: 20px;
  margin-top: 5px;
  border: 0.5px solid color ${({theme})=>theme.textSoft};
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

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='Youtube Video Player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test</Title>
        <Details>
          <Info>788,987,899 views • Jan 4, 2023</Info>
          <Buttons>
            <Button><ThumbUpOutlined/>123</Button>
            <Button><ThumbDownOutlined/>Dislike</Button>
            <Button><ReplyOutlined/>Share</Button>
            <Button><AddTaskOutlined/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AIf8zZQjMbV3-9TaCwDvPAcpnLZpBottwufJjkYb2GAr=s88-c-k-c0x00ffffff-no-rj"/>
            <ChannelDetail>
              <ChannelName>OnlyDev</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>
                Excepteur elit occaecat cillum laboris qui consequat adipisicing.
                Excepteur elit occaecat cillum laboris qui consequat adipisicing.
                Excepteur elit occaecat cillum laboris qui consequat adipisicing.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recc>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recc>
    </Container>
  )
}

export default Video