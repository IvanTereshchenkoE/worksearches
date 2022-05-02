import React from "react";
import { Layout, Menu } from "antd";

import "../App.css";

function Mainfooter() {
  const { Footer } = Layout;
  return (
    <Layout>
      <Footer>
        <div className="Footer">
          <div>
            <h3>About us</h3>
            <ul>
              <li>we good</li>
              <li>we good</li>
              <li>we good</li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Contacts</h3>
              <li>vk</li>
              <li>ok</li>
              <li>fb</li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Must</h3>
              <li>some</li>
              <li>some</li>
              <li>some</li>
            </ul>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default Mainfooter;
