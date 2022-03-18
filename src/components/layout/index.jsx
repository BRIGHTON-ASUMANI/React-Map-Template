import React, { useState } from 'react';
import {
  Layout, Avatar, Col, Card, Row,
} from 'antd';

import { Icon as LegacyIcon } from '@ant-design/compatible';
import Sidebar from './sideBar';
import Uploads from './collapse';

const { Header, Content } = Layout;

const HomeLayout = ({ notificationsLength }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (

    <Layout>
      <Sidebar
        collapsed={collapsed}
        notificationsLength={notificationsLength}
        toggle={toggle}
      />
      <Layout
        className="main-layout"
        style={
        collapsed
          ? { marginLeft: '80px', paddingTop: '10px', backgroundColor: '#1a1a1d' }
          : { marginLeft: '200px', paddingTop: '10px', backgroundColor: '#1a1a1d' }
      }
      >
        <Content
          style={{
            paddingTop: 0,
            paddingLeft: 24,
            minHeight: 780,
            backgroundColor: '#1a1a1d',
          }}
        >
          <Row>
            <Col flex="0 1 300px"><Uploads /></Col>
            <Col flex="1 1 200px"><Uploads /></Col>
          </Row>

        </Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
