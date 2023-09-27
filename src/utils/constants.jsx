import { Home } from "@styled-icons/boxicons-solid/Home";
import { Subscriptions } from "@styled-icons/material-outlined/Subscriptions";
import { Youtubemusic } from "@styled-icons/simple-icons/Youtubemusic";
import { VideoLibrary } from "@styled-icons/material-outlined/VideoLibrary";
import { History } from "@styled-icons/remix-fill/History";
import { Video } from "@styled-icons/remix-fill/Video";
import { Clock } from "styled-icons/bootstrap";
import { ArrowDownload } from "@styled-icons/fluentui-system-regular/ArrowDownload";

import shorts from "../assets/youtube-shorts-logo-15252.png";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const SUGGESTION_URL =
  "https://suggestqueries.google.com/complete/search?client=chrome&q=";


export const sideBarCategories = [
  {
    name: "Home",
    icon: <Home size={30} />,
  },
  {
    name: "Shorts",
    icon: <img src={shorts} width={30} />,
  },
  {
    name: "Subscriptions",
    icon: <Subscriptions size={30} />,
  },
  {
    name: "YouTube Music",
    icon: <Youtubemusic size={30} />,
  },
  {
    name: "Library",
    icon: <VideoLibrary size={30} />,
  },
  {
    name: "History",
    icon: <History size={30} />,
  },
  {
    name: "Your Videos",
    icon: <Video size={30} />,
  },
  {
    name: "Watch Later",
    icon: <Clock size={30} />,
  },
  {
    name: "Downloads",
    icon: <ArrowDownload size={30} />,
  },
];

export const buttonCategories = [
  { name: "Popular" },
  { name: "Trending" },
  { name: "Islamic Reminders" },
  { name: "Akshay Saini" },
  { name: "Cricket" },
  { name: "Youth Club" },
  { name: "Education" },
  { name: "11th Hour" },
  { name: "Movie" },
  { name: "Dramas" },
  { name: "Live" },
  { name: "Sports" },
  { name: "Comedy" },
  { name: "Gym" },
  { name: "Bollywood" },
  { name: "Motivation" },
];
