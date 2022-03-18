import React, { useState } from 'react';
import { Layout, Col, Row } from 'antd';
import { PropTypes } from 'prop-types';
import Sidebar from './sideBar';
import Uploads from './collapse';
import GoogleMapComponent from '../maps';

const { Content } = Layout;

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

HomeLayout.propTypes = {
  notificationsLength: PropTypes.number,
};

HomeLayout.defaultProps = {
  notificationsLength: 0,
};
export default HomeLayout;
