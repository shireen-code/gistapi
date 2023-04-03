import React, { useState } from "react";
import { getGistForUser } from "../services/gistService";
import { Card, Button, Tag, Divider, Space, Col, Row, Avatar } from "antd";
import styled from "styled-components";
import { FileBox } from "./FileBox";
import { Forks } from "./Forks";
import {
  FileTextOutlined,
  BranchesOutlined,
  CommentOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Moment from "react-moment";

export const Cards = (gistData) => {
  const unidata = gistData.gistData;
  // Get an array of unique file types
  const files = unidata.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    //remove duplicate file types
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  const noOfFiles = Object.keys(files).length;

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const moreOpen = async (value) => {
    if (value !== "") {
      try {
        const URL = getGistForUser(value);
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data, "user");
        setData(data);
        setShow(true);
      } catch (e) {
        console.log(e);
        setShow(false);
      }
    }
  };

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={6}></Col>
        <Col span={16}>
          <CardContainer
            title={unidata.description || "No Description"}
            extra={
              <Button type="primary" onClick={() => moreOpen(`/${unidata.id}`)}>
                More
              </Button>
            }
          >
            <div className="userDetails">
              <Space>
                <Avatar
                  src={<img src={`${unidata.owner.avatar_url}`} alt="avatar" />}
                />{" "}
                <Text className="numberFiles">{unidata.owner.login}</Text>
              </Space>
              <List>
                <ListItem>
                  {" "}
                  <FileTextOutlined /> {noOfFiles}{" "}
                  {noOfFiles > 1 ? "Files" : "File"}{" "}
                </ListItem>
                <ListItem>
                  <BranchesOutlined />{" "}
                  {show && data !== [] ? <Forks forks={data} /> : null}
                </ListItem>
                <ListItem>
                  {" "}
                  <CommentOutlined /> {unidata.comments}{" "}
                  {unidata.comments > 1 ? "Comments" : "Comment"}
                </ListItem>
                <ListItem>
                  {" "}
                  <StarOutlined /> Stars
                </ListItem>
              </List>
            </div>
            <div className="updatedFiles">
              <List>
                <ListItem>
                  {" "}
                  Created At:{" "}
                  <Moment format="D MMM YYYY">
                    {unidata.updated_at}{" "}
                  </Moment>{" "}
                </ListItem>
                <ListItem>Last Update at: {unidata.updated_at}</ListItem>
              </List>
            </div>
            <div>
              {fileArr.map((language, index) => {
                return (
                  <Tag color="geekblue" key={index}>
                    {language}
                  </Tag>
                );
              })}
            </div>
            <FileBox filelist={files} />
          </CardContainer>
          <Divider type="vertical" />
        </Col>
      </Row>
      <Divider dashed />
    </div>
  );
};

const CardContainer = styled.div`
  border-bottom: 1px solid #d5dce2;
  background-color: #ffffff;
  font-size: 14px;
  margin: 0 16px;
`;
const Text = styled.p`
  color: #000;
  font-size: 14px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const ListItem = styled.li`
  color: #0056d1;
  display: inline-block;
  margin-right: 20px;
  font-weight: 600;
`;
