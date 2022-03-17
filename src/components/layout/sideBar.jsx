import React from 'react';

import {
  HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,
} from '@ant-design/icons';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Layout, Menu } from 'antd';
import './layout.scss';

const { Sider } = Layout;

const fixedSidebar = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

const Sidebar = ({ collapsed, notificationsLength, toggle }) => (
  <Sider
    trigger={null}
    collapsible
    collapsed={collapsed}
    style={{ ...fixedSidebar }}
    width={210}
  >
    <LegacyIcon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={toggle}
      style={{ float: 'right', margin: 'auto' }}
    />
    <div className={!collapsed && 'logo'} />

    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<UserOutlined />}>
        nav 1
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
    </Menu>
  </Sider>
);

export default Sidebar;
