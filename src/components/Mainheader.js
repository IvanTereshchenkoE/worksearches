import React from "react";
import { Layout, Menu, Input } from "antd";

import { Link } from "react-router-dom";

import "../App.css";

function Mainheader(props) {
  const SelectedKeys = props.SelectedKeys;
  const { Header } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[SelectedKeys]}
        >
          <Menu.Item key="1">
            <Link to={"/"}>Main</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/resume"}>Resume</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/vacancies"}>Vacancies</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={"/searches"}>Searches</Link>
          </Menu.Item>
          <Menu.Item key="5" className="exit">
            entrance
          </Menu.Item>
          <Input placeholder="Searches" className="logo" />
        </Menu>
      </Header>
    </Layout>
  );
}

export default Mainheader;
