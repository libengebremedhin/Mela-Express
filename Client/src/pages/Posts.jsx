import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Box, TextField } from "@mui/material";
import { LocationSelector } from "../components/LocationSelector";
import { Search } from "../components/Search";
import { PostCard } from "../components/cards/PostCard";
import { AuthContext } from "../context/AuthContext";

const Posts = () => {
  const { services } = useContext(AuthContext);
  const [posts, setPosts] = useState([
    { name: "Ayele", origin: "Addis Ababa", destination: "Adu Genet" },
    { name: "Fikru", origin: "Addis Ababa", destination: "Bahir Dar" },
    { name: "Yonas", origin: "Addis Ababa", destination: "Hawassa" }
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts.filter(post => 
      post.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.destination.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [searchQuery, posts]);

  return (
    <Container className="sm:w-auto">
      <div className="mt-28 text-[#bc2525]">
        <div className="flex space-x-8 space-y-8">
          <Typography variant="h3">Today's Posts</Typography>
          <TextField
            label="Search Origin/Destination"
            variant="outlined"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {/* <LocationSelector /> */}
        </div>
      </div>
      <div className="w-65% h-0.5 bg-[#08415C]"></div>
      <div className="w-full flex flex-wrap">
        {filteredPosts.map((post, index) => (
          <Box
            key={index}
            component="span"
            sx={{ mr: 25, transform: "scale(0.8)", boxShadow: 3 }}
          >
            <PostCard service={post} />
          </Box>
        ))}
      </div>
    </Container>
  );
};

export default Posts;
