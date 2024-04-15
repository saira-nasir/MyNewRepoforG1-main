


import { useEffect, useState } from "react";
import axios from "axios";

export default function GETAPICustomHook(){
    const [mydata, setMydata] = useState();

    useEffect(() => {
        axios.get('https://reactnative.dev/movies.json').then((response)=>{
          console.log('GETAPICustomHook',response.data.movies[0]);
        setMydata(response.data.movies);
        })
      }, []);

      return {mydata}
}

