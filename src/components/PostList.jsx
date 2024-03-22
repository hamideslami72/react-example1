import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

function PostList() {
    const posts = useContext(PostContext);
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((posts) => (
              <article key={posts.id} className="flex flex-col items-start bg-gray-900 p-6 rounded-xl">
                <div className="relative w-full">
                  <img
                    src={posts.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={posts.datetime} className="text-gray-50">
                      {posts.date}
                    </time>
                    <a
                      href={posts.category.href}
                      className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-50 hover:bg-gray-700"
                    >
                      {posts.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-50 group-hover:text-blue-400">
                    <Link to={`/posts/`+posts.id} className="font-semibold leading-6">
                        {posts.title}    
                    </Link> 
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-50">{posts.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
  )
}

export default PostList