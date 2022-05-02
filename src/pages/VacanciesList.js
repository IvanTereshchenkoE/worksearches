import React, { useEffect, useState } from "react";

import { Layout, Breadcrumb, Row, Col, Input } from "antd";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchesVacancy } from "../redux/vacancyReducer";

import Mainheader from "../components/Mainheader";
import Mainfooter from "../components/Mainfooter";

import "../styles/vacancyList.css";

import { fetchVacancy } from "../api/Api";

function VacanciesList() {
  const { Search } = Input;
  const { Content } = Layout;
  const dispatch = useDispatch();
  const count = useSelector(state => state.vacancy.list);

  const listVacancyFromApi = useSelector(state => state.vacancy.list);
  const addedVacansiesFromApi = useSelector(
    state => state.vacancy.addedVacansies
  );

  const changeVacancyList = list => {
    dispatch(setSearchesVacancy(list));
  };

  const [value, setValue] = useState("");

  const [filter, setFilter] = React.useState({
    priceFrom: [],
    priceTO: [],
    value: "",
  });

  useEffect(() => {
    fetchVacancy(filter).then(res => changeVacancyList(res));
  }, [filter]);

  const handleChangePriceFrom = target => {
    setFilter({ ...filter, priceFrom: target.value });
  };

  const handleChangePriceTo = target => {
    setFilter({ ...filter, priceTO: target.value });
  };

  const onSearch = search => {
    setFilter({ ...filter, value: search });
    setValue("");
  };

  const itemClickHandler = e => {
    setFilter({ ...filter, value: e.target.textContent });
    setValue("");
  };

  const listVacancy = [...listVacancyFromApi, ...addedVacansiesFromApi];

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
            <Breadcrumb.Item>VacanciesList</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row>
              <Col span={24} className="searchesSetings">
                <form>
                  <Search
                    placeholder="search vacancy "
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    type="text"
                    className="Searches"
                    onChange={event => setValue(event.target.value)}
                    value={value}
                  />
                  <ul className="autocomplete">
                    {value
                      ? listVacancy.map(item => {
                          return (
                            <li
                              className="autocomplete-item"
                              onClick={itemClickHandler}
                            >
                              {item.title}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </form>
              </Col>
              <Col span={12} className="searchesSetings">
                <Col span={24} className="searches">
                  <input
                    type="number"
                    placeholder="priceFrom"
                    onChange={e => {
                      handleChangePriceFrom(e.target);
                    }}
                  />
                </Col>
                <Col span={24} className="searches">
                  <input
                    placeholder="priceTo"
                    onChange={e => {
                      handleChangePriceTo(e.target);
                    }}
                  />
                </Col>
              </Col>
              <Col span={12} className="searchesSetings">
                {listVacancy.map(item => {
                  return (
                    <div className="vacansivacancies-items" key={item.id}>
                      <Link to={item.repos}>
                        <div className="vacansivacancies-items-title">
                          {item.title} {item.price}$
                        </div>
                      </Link>
                      <div className="vacansivacancies-items-body">
                        {item.shordiscription}
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </div>
        </Content>
        <Mainfooter />
      </Layout>
    </div>
  );
}

export default VacanciesList;
