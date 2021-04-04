import _ from 'lodash';
import './App.css';
import youtubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { Component } from 'react';
import env from "react-dotenv";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('pizza');
  }

  videoSearch(term){
   
    youtubeApiSearch({
      key: env.YOUTUBE_API_KEY,
      term: term
    },
    (videos) => { 
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render () {

    const videoSeach = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div className="App">
      <header className="App-header">
        <p> Tube14! </p>
      </header>
    
      
      <div class="container">
      <SearchBar 
        searchTerm={this.state.searchTerm}
        onSearchUpdate={videoSeach} />
        <div className="row">
          <div className="col-sm-4">
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
            <div className="card card-body">
              <p>I made this app while learning React, following Stephen Grider's tutorial on Udemy</p>
            </div>
          </div>
          <div className="col-sm">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
      </div>
    </div>
    );
  };
}


export default App;
