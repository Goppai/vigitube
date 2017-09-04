import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) return <div className='loading'>Loading...</div>
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>

      <div className='details'>
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
};

export default VideoDetails;
