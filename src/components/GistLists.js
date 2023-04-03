import React from "react";
import { Alert } from "antd";
import { Cards } from "./Cards";

export const GistLists = (data, username) => {
  const userdata = data.data; // extract data from the props
  return (
    <>
      {username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${data.username}'s Gists`} // display the username in the success message
            description={`${userdata.length} Gists found`}
            type="success"
            showIcon
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <ul className="paddingData">
            {userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};
