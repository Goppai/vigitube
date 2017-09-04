import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, selectVideo }) => {
  return (
    <ul className='col-md-4 list-group'>
      {videos.map(video => (
        <VideoListItem key={video.etag} video={video} selectVideo={selectVideo} />
      ))}
    </ul>
  );
};

export default VideoList;
