import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/index";
import PostWidget from "./PostWidget";

const [searchTerm, setSearchTerm] = useState("");

let allPosts = postsData;
if (isProfile) allPosts = posts;

// Filter posts based on the search term
if (searchTerm) {
  allPosts = allPosts.filter((post) => {
    const postDescription = post.description.toLowerCase();
    return postDescription.includes(searchTerm.toLowerCase());
  });
}
<input
  type="text"
  placeholder="Search posts"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
return (
    <div className="main-container">
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {home && posts.length === 0 && (
        <h1 style={{ textAlign: "center" }}>
          Follow other users to see their posts!!
        </h1>
      )}
      {allPosts.length ? (
        allPosts.map(({ _id, userId, firstName, lastName, description, location, postImage, userProfilePhoto, likes, comments, showLikes, showComments }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            user={user}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            postImage={postImage}
            userProfilePhoto={userProfilePhoto}
            likes={likes}
            comments={comments}
            showLikes={showLikes}
            showComments={showComments}
            reRender={reRender}
            setReRender={setReRender}
            setFlags={setFlags}
          />
        ))
      ) : (
        !home && <h1>{name} hasn't posted anything yet!</h1>
      )}
    </div>
  );