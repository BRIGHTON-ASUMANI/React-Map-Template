import React, { useContext, useState } from 'react';
import { Layout, Col, Row } from 'antd';
import Sidebar from './sideBar';
import Uploads from './collapse';
import GoogleMapComponent from '../maps';
import AppContext from '../../context/appContext';

const { Content } = Layout;

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { notificationsLength } = useContext(AppContext);

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
        className={collapsed ? 'layout-styling-collapsed' : 'layout-collapsed'}
      >
        <Content
          className="content-styling"
        >
          <Row>
            <Col flex="0 1 300px"><Uploads /></Col>
            <Col flex="1 1 200px"><GoogleMapComponent /></Col>
          </Row>

        </Content>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
