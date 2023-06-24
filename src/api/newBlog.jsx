import { useState, useEffect } from "react";


export const newBlog = async ({title,content}) => {
    const res = await fetch("http://188.119.41.56:7072/api/blog/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        title,
        content,
        author: localStorage.getItem("user"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return 'data';
}

     

