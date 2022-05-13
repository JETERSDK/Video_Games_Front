import {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayPlatformStats from '.components/DisplayPlatformStats';

function App() {

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    getVideoGames();

  }, []);

  async function getVideoGames(){
    try{
      debugger;
      const response = await axios.get('https://localhost:7260/api/games/');
      setVideoGames(response.data);
      } catch(ex){
        console.log('ERROR in getVideoGames EXCEPTION: ${ex}')
      }
  }
  return (
    <div>
      <DisplayPlatformStats videoGames = {videoGames}/>
    </div>
  );
}

export default App;
      
