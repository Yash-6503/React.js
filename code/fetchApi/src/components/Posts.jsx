import React, { useEffect, useState } from 'react';
import {getPosts} from '../api'


function Posts() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getPosts().then((posts) => setData(posts));
    }, []);
  return (
    
    <div>
      
          <div className="p-6 bg-gray-100 min-h-screen">
              <h1 className="text-3xl font-bold mb-6 text-center">Posts Table</h1>
              <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded shadow-md">
                      <thead>
                          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                              <th className="py-3 px-3 sm:px-6 text-left">Id</th>
                              <th className="py-3 px-6 text-left">Title</th>
                              <th className="py-3 px-6 text-left">Body</th>
                          </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-light">
                          {data && data.length > 0 ? (
                              data.map((e, i) => (
                                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                                      <td className="py-3 px-3 sm:px-6 text-left">{e.id}</td>
                                      <td className="py-3 px-6 text-left">{e.title}</td>
                                      <td className="py-3 px-6 text-left">{e.body}</td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td className="py-3 px-6 text-center" colSpan={3}>
                                      No Data
                                  </td>
                              </tr>
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
    </div>
  )
}

export default Posts
