import React from "react";

import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Button,
} from "antd";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAddVacancy } from "../redux/vacancyReducer";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function VacancyCreate() {
  const { Content } = Layout;
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(setAddVacancy(values.user));
  };

  return (
    <div>
      <Layout>
        <Mainheader SelectedKeys="3" />

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
            <Breadcrumb.Item>VacancyCreate</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              <Form
                {...layout}
                name="create-vacancy"
                onFinish={onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "title"]}
                  label="Title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "shordiscription"]}
                  label="shordiscription"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "price"]}
                  label="price"
                  rules={[
                    {
                      type: "number",
                      required: true,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item
                  name={["user", "repos"]}
                  label="repos"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "id"]}
                  label="id"
                  rules={[
                    {
                      type: "number",
                      required: true,
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item
                  name={["user", "Description"]}
                  label="Description"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Row>
          </div>
        </Content>
        <Mainfooter />
      </Layout>
    </div>
  );
}

export default VacancyCreate;
