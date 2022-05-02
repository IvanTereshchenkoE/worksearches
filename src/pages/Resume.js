import React from "react";
import { Layout, Breadcrumb, Row, Col } from "antd";
import { Link } from "react-router-dom";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

import "../App.css";

function Main() {
  const { Content } = Layout;
  return (
    <div>
      <Layout>
        <Mainheader SelectedKeys="2" />

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Main</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Resume</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              <Col span={12} className="searchesSetings">
                <Link to={"/resumecreate"}>
                  <h3>Post Resume</h3>
                </Link>
                <p>On our site you can post your resume</p>
              </Col>
              <Col span={12}>
                <Link to={"/resumelist"}>
                  <h3>Find resume</h3>
                </Link>
                <p>On our site you can view the resume of other users</p>
              </Col>
            </Row>
          </div>
        </Content>
        <Mainfooter />
      </Layout>
    </div>
  );
}

export default Main;
