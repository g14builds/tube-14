import React from 'react';

class VideoDetail extends React.Component {

    render(){

        if(!this.props.video){
            return <div>Loading...</div>;
        }
        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} title='Video Details'></iframe>
                </div>
                <div className="details">
                    <h2>{this.props.video.snippet.title}</h2>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;