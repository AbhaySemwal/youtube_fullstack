import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import styled from 'styled-components';

const Container=styled.div`
  flex: 2;
`;

const Reccomendation = ({tags}) => {

    const [videos,setVideos]=useState([])
    useEffect(()=>{
        const fetchVideo=async()=>{
            const res= await axios.get(`/videos/tags?tags=${tags}`)
            setVideos(res.data)
        }
        fetchVideo();
    },[tags])

  return (
    <Container>
        {videos.map((video)=>(
            <Card type="sm" key={video._id} video={video}/>
        ))}
    </Container>
  )
}

export default Reccomendation