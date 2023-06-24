import { useState,useEffect} from "react";

export const GetBlogData =  () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const res = await fetch("http://188.119.41.56:7072/api/blog/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });



        return data;
        

    



    }

    return {data };
}