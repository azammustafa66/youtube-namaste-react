import axios from "axios";
import { BASE_URL, SUGGESTION_URL } from "./constants";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const RAPIDAPI_ENDPOINT = "https://youtube-v31.p.rapidapi.com";

export const fetchCommentReplies = async (endpoint) => {
  const url = `${RAPIDAPI_ENDPOINT}/${endpoint}`;

  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export const fetchSuggestions = async (searchQuery) => {
  const { data } = await axios.get(SUGGESTION_URL + searchQuery);
  return data;
};

export const fetchComments = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/${query}`, options);
  return data;
};
