import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { useState } from 'react';

export default function Home({ posts }) {
  const [search,setSearch] = useState("");
  posts = posts.filter((post) => {
    if(post.node.title){
    return (
      post.node.title.toLowerCase().includes(search.toLowerCase()) 
    );
    }
   });
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className='mb-8'>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Search by name" name="name" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getServerSideProps() {
  const posts = (await getPosts()).reverse() || [];
  return {
    props: { posts },
  };
}

