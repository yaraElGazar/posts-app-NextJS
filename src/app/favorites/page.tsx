"use client"
import React from 'react';
import { useState, useEffect } from 'react';

import Posts from '@/Components/Posts';
import { posts } from '@/data/posts';
import NoFav from '@/Components/NoFav';

// Post interface
import { Post } from '@/data/posts';

const favorites = () => {

    // States
  const[favoritePosts, setFavoritePosts] = useState<Post[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const liked = localStorage.getItem("liked");

    // Check if there are liked posts stored in the local storage
    if (liked) {
      const likedIDs = JSON.parse(liked).map((likedPost:Post) => likedPost.id);
      // update the current posts to reflect the liked posts
      const updatedPosts = posts.map((post)=>{
        if(likedIDs.includes(post.id)) {
          post.liked = true;
          return post;
        } else {
          return post;
        }
      });
      // update the posts with the liked posts
      setFavoritePosts(updatedPosts.filter((post) => post.liked === true));
    }else{
      // set the current posts to empty array if there are no liked posts in the local storage
    setFavoritePosts([]);  
    }

    
  }, []);

    return (
        <div className="container">
          <NoFav />
          {favoritePosts.length !== 0 ? <Posts posts={favoritePosts} type="favorite" /> : <NoFav />}
        </div>
    );
};

export default favorites;