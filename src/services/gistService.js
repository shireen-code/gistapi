import { Octokit } from "@octokit/rest";
const octokit = new Octokit();


export const getPublicGists = async (username) => {
  const response = await octokit.request(`GET /users/${username}/gists`);
  return response;
};




export const getGistForUser = (username) =>
  octokit.gists.listForUser({ username });
const BASE_URL = "https://api.github.com";

const getAllGistUrl = (username) => {
  return `${BASE_URL}/users/${username}/gists`;
};

const getSingleGistUrl = (gistId) => {
  return `${BASE_URL}/gists${gistId}`;
};

export { getAllGistUrl, getSingleGistUrl };
