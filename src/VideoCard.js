import React from 'react'
import './VideoCard.css'


const VideoCard = () => {
    return (
        <div className='videoCard'>
          <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/uY0uf7VFQ4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen/>
        </div>
    )
}

export default VideoCard
