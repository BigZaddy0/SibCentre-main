import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../store/index";
import FlexBetween from "../UI/FlexBetween";
import {
    IconButton,
    InputBase,
    useTheme,
  } from "@mui/material";
import { Search } from "@mui/icons-material";
import PostWidget from "./PostWidget";

const TrendingPost = ({
  userId,
  user,
  isProfile = false,
  name,
  reRender,
  setReRender,
  home,
  state,
  setFlags,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const posts = useSelector((state) => state.posts);
  const [postsData, setPostsData] = useState([]);
  const [flag, setFlag] = useState(false);
  const neutralLight = theme.palette.neutral.light;
  const [searchTerm, setSearchTerm] = useState("");
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const getMorePosts = async () => {
      let arr = [...postsData];
      for (
        let i = postsData.length;
        i < postsData.length + 1 && i < posts.length;
        i++
      ) {
        arr.push(posts[i]);
      }
      setPostsData(arr);
    };
    getMorePosts(); // eslint-disable-next-line
  }, [state, reRender, flag]);

  useEffect(() => {
     {
      const getAllPosts = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/posts/`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
      };
      getAllPosts();
    } 
  }, [dispatch, token, userId, isProfile, reRender]);


  const filteredPosts = posts.filter((post) => {
    const postDescription = post.description.toLowerCase();
    return postDescription.includes(searchTerm.toLowerCase());
  });


  return (
    <div className="main-container">
            <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..." />
            <IconButton>
              <Search />
      
            </IconButton>
          </FlexBetween>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(({ _id, userId, firstName, lastName, description, location, postImage, userProfilePhoto, likes, comments, showLikes, showComments }) => (
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
        <h1>No matching posts found.</h1>
      )}
      {home && posts.length === 0 && (
        <h1 style={{ textAlign: "center" }}>
          Follow other users to see their posts!
        </h1>
      )}
      {!home && posts.length === 0 && (
        <h1>{name} hasn't posted anything yet!</h1>
      )}
    </div>
  );
};

export default React.memo(TrendingPost);
