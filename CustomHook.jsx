import { useEffect, useState } from "react";
import axios from "axios";

export default function CustomHook(url){

    const [dataClone, setDataClone] = useState();

    const getMoviesClone = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          console.log('Kia ham yahaan hain ?');
          console.log(json.movies);
        //   setData(json.movies);
          // console.log(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          // setLoading(false);
        }
      };

    // useEffect(() => {

    //     // const movies=[{id:1, name:'Hello'},{id:1, name:'Hello'}]
    //     // AsyncStorage.setItem('moviesdata',JSON.stringify(movies))
        
    //     // AsyncStorage.getItem('moviesdata').then((data)=>{
    //     //   let originalform=JSON.parse(data);
    //     //   console.log(data);
    //     //   console.log(data[0]);
    //     // })
    //     // getMovies();
    //     // posAPITesting();
    //     // const url = 'https://reactnative.dev/movies.json';
    //     axios.get(url).then((response)=>{
    //       console.log('Custom Hooks',response.data.movies[0]);
    //       setDataClone(response.data.movies);
    //     })
    //   }, []);

      return {dataClone, getMoviesClone};

}