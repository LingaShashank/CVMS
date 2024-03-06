import { useState, useEffect } from "react";
import axios from "axios";

const API = () => {
    const  [data, setData] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
  return (
    <div>

    </div>
  )
}

export default API