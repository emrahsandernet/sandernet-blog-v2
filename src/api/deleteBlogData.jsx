import React from 'react'

export const DeleteBlogData = async (id) => {
    const res = await fetch(`http://188.119.41.56:7072/api/blog/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem("access_token")} `,              },
              
            });
    const data = await res.json();
    return data;

}
    