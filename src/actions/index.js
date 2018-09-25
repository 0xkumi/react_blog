export const FETCH_POSTS = "fetch_posts";
import axios from "axios";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=as"

export default function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
