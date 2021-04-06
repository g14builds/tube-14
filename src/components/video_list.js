import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {
    
   

    render(){
        const videoItems = this.props.videos.map((video) => {
            return (
            <VideoListItem 
                onVideoSelect={this.props.onVideoSelect}
                video={video} 
                key={video.etag} />
            );
        });
        return (
            <div>
                <ul className="list-group">
                    {videoItems}
                </ul>
               
            </div>
        );
    }
   
}

export default VideoList;