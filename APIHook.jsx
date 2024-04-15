import { useEffect, useState } from "react";
import axios from "axios";

export default function APIHook(url){

    const [mydata, setMydata] = useState();

    useEffect(() => {
        axios.get(url).then((response)=>{
          // console.log('GETAPICustomHook',response.data.movies[0]);
        setMydata(response.data.movies);
        })
      }, []);


      return {mydata}
}

