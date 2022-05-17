import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";





const DisplayPlatformStats = ({videoGames}) => {


    function generateDataFormChart() {

      console.log(videoGames);

      let filteredGames = videoGames.filter(game => game.year > 2013);

      console.log('Filtered Games', filteredGames);

      let platforms = filteredGames.map(game => {
        return game.platform
      });

      console.log('Platforms', platforms);

      let distinctPlatforms = [...new Set(platforms)]

      console.log('Distinct Platforms', distinctPlatforms);

      let platformArrays = distinctPlatforms.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);

        // now we need to loop through allGamesForPlatform and sum each games global sales

        // once we have the sum of all those games global sales 
        return [platform, 10, "silver"]
      });

      console.log('Platform Arrays', platformArrays);
      const data = [
        ["Platform", "Sales", { role: "style" }],
        ["PS3", 10, "silver"], 
        ["X360", 10, "silver"], 
        ["PS4", 10, "silver"],
        ["3DS", 10, "silver"],
        ["XOne", 10, "silver"],
        ["WiiU", 10, "silver"],
        ["Wii", 10, "silver"],
        ["PC", 10, "silver"],
        ["PSV", 10, "silver"],
        ["DS", 10, "silver"],
        ["PSP", 10, "silver"],
      ];

      console.log('Data', data);

      return data;
    }

    return (

      <div>
        <h1>Platform By Global Sales in Millions</h1>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
      </div>
    );

        
}

export default DisplayPlatformStats;
        
        
        
        
        
        





    

