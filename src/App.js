import _ from 'lodash';
import './App.css';
import youtubeApiSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { Component } from 'react';
import env from "react-dotenv";
import githubLogo from "./images/github.png";


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
        <p className="rotate"> Tube 14 </p>
      </header>
    
      
      <div class="container main-container">
        <SearchBar 
          searchTerm={this.state.searchTerm}
          onSearchUpdate={videoSeach} />
        <div className="row">
          <div className="col-sm-4">
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />        
            
          </div>
          <div className="col-sm">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
      </div> 
      <div class="text-center text-sm gh-link-area text-muted">
        
        <a href="//github.com/g14builds/tube-14">
          <img src={githubLogo} alt="Github logo"
            height="28" width="28" />
        </a>
        &nbsp; &nbsp; &nbsp; &nbsp; 
        by <a href="https://g14.pub/">g14</a> 
        
        
      </div>
    </div>
    );
  };
}


export default App;
