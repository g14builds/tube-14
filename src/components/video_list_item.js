import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
   
    return (
        <li onClick={() => onVideoSelect(video)} className="search-result">
            <img src={video.snippet.thumbnails.default.url} className="float-right" alt="Video thumbnail" />
            <p>{video.snippet.title}</p>
        </li>
    );
}

export default VideoListItem;