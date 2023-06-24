import React from 'react'
import { GetBlogData } from "../../api/getBlogData";
import {DeleteBlogData} from "../../api/deleteBlogData";
const BlogList = () => {
   const { data } = GetBlogData();
   const [blogId, setBlogId] = React.useState(0);
   const [menu, setMenu] = React.useState(false);
   const deleteBlog = async (id) => {

         const res = await DeleteBlogData(blogId);
            console.log(res);   
    }

   console.log(data, "home ");


   

   return (
     <div className="flex flex-row p-2 m-2 justify-between gap-2 ">
       {data.map((item) => (
         // tailwindcss blog card
         // add delete button
         <div
           class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
           keys={item.id}
         >
           <div class="flex justify-end px-4 pt-4">
             <button
               id="dropdownButton"
               onClick={() => {
                 setMenu(!menu);
                 setBlogId(item.id);
               }}
               class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
               type="button"
             >
               <span class="sr-only">Open dropdown</span>
               <svg
                 class="w-6 h-6"
                 aria-hidden="true"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
               </svg>
             </button>

             <div
               id="dropdown"
               className={
                 
                 (menu ? "z-10  text-base list-none  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" :
                   "z-10  text-base list-none  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden")
               }
             >
               <ul className="py-2" aria-labelledby="dropdownButton">
                 <li>
                   <a
                     href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                   >
                     Edit
                   </a>
                 </li>
                 <li>
                   <a
                     href="#"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                   >
                     Export Data
                   </a>
                 </li>
                 <li>
                   <a
                     href="#"
                     class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                     onClick={() => {
                       deleteBlog(blogId);
                     }}
                   >
                     Delete
                   </a>
                 </li>
               </ul>
             </div>
           </div>
           <div class="flex flex-col items-center pb-10">
             <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
               {item.title}
             </h5>
             <span class="text-sm text-gray-500 dark:text-gray-400">
               {item.content}
             </span>
           </div>
         </div>
       ))}
     </div>
   );
}

export default BlogList;