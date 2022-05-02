import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col, Input } from "antd";
import { Link } from "react-router-dom";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

import "../App.css";

function Searches() {
  const { SubMenu } = Menu;
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Mainheader SelectedKeys="4"/>

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item><Link to="/">Main</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Searches</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              Here you can search some information!
            </Row>
          </div>
        </Content>
        <Mainfooter />
      </Layout>
    </div>
  );
}

export default Searches;
