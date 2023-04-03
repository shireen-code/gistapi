import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { getPublicGists } from "../services/gistService";
import { GistLists } from "./GistLists";
import { Input, Alert, Spin } from "antd";

const { Search } = Input;
export const SearchBar = () => {
  // Initialize state variables
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //Search func to search the username
  const onSearch = async (username) => {
    const usersname = username?.trim(); // Trim the username to remove any leading or trailing white spaces
    setUsername(usersname);
    setLoading(true);
    if (usersname && usersname !== "") {
      //Check if the username is not null or an empty string
      try {
        const response = await getPublicGists(usersname);
        const URL = response.url;
        const res = await fetch(URL); // Fetch the data from the URL
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    } else if (usersname === "") {
      setLoading(false);
      setError(true);
    }
    setLoading(false); // Set the loading state variable to false
  };
  return (
    <Main>
      <Wrapper>
        <Octicon name="mark-github" mega />
        <InputBox>
          <Search
            placeholder="Search Gists for the username"
            allowClear
            style={{ width: 350, marginLeft: 15 }}
            onSearch={onSearch}
          />
          {loading ? <Spin tip="Loading..." style={{ margin: 10 }} /> : null}
        </InputBox>
      </Wrapper>
      {username !== "" && data && !error ? (
        <div>
          <GistLists data={data} username={username} />
        </div>
      ) : null}
      <div>
        {username && data?.length === 0 ? ( // Render the GistLists component if the username is not an empty string, data exists and there are no errors
          <Alert
            message="Error"
            description="No data for this User"
            type="error"
            showIcon
            style={{ marginTop: 10 }}
          />
        ) : null}

        {username === "" ? ( // Render an error message if there are no gists found for the user
          <Alert
            message="Error"
            description="Please Enter Valid UserName"
            type="error"
            showIcon
            style={{ marginTop: 10 }}
          />
        ) : null}
      </div>
    </Main>
  );
};

const Wrapper = styled.div`
  background-color: #000;
  font-size: 14px;
  line-height: 1.5;
  padding: 10px;
  width: 100%;
  display: flex;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  // width: 400px;
`;

const Main = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

export default SearchBar;
