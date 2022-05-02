import React from "react";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { Link } from "react-router-dom";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

import "../App.css";

function CardOfVacancy({ props }) {
  const { Content } = Layout;
  console.log(props);
  return (
    <div>
      <Layout>
        <Mainheader SelectedKeys="4" />

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Main</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/vacancies">Vacancies</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/vacancieslist">Vacancies</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{props.repos}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              <Col span={24}>{props.title}</Col>
              <Col span={24}>{props.Description}</Col>
              <Col span={24}>
                {props.priceFrom} - {props.priceTO}
              </Col>
            </Row>
          </div>
        </Content>
        <Mainfooter />
      </Layout>
    </div>
  );
}

export default CardOfVacancy;
