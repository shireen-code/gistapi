import { style } from "@mui/system";
import React from "react";
import { FileTextOutlined } from "@ant-design/icons";
export const FileBox = (filelist) => {
  const files = filelist.filelist;
  return (
    <div className="fileBox">
      <FileTextOutlined />
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
