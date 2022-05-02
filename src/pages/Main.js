import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

import "../App.css";

function Main() {
  const { SubMenu } = Menu;
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Mainheader SelectedKeys="1" />

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Main</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              <Col span={12} className="searchesSetings">
                <h3>All about resume</h3>
                <p>
                  On our site you can post your resume or view the resumes of
                  other users
                </p>
                <p>Resumes of other users</p>
                <p>Post your resume</p>
              </Col>
              <Col span={12}>
                <h3>All about the vacancy</h3>
                <p>
                  On our site you can post your vacancy or view the vacancies of
                  other users
                </p>
                <p>Vacancies of other users</p>
                <p>Post your vacancy</p>
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
