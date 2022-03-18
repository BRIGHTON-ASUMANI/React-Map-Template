import React from 'react';
import {
  LogoutOutlined, MessageOutlined, PlusCircleOutlined, QuestionCircleOutlined, SettingOutlined, SlidersFilled,
} from '@ant-design/icons';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Badge, Layout, Menu } from 'antd';
import { PropTypes } from 'prop-types';
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
    />

    <div className={!collapsed ? 'logo' : ''} />
    <hr />
    <Menu theme="dark" mode="inline">
      <Menu.Item key="0" icon={<SlidersFilled />}>
        Sites
      </Menu.Item>
      <Menu.Item key="1" icon={<PlusCircleOutlined />}>
        UPLOAD NEW DATA
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Request Flight
      </Menu.Item>
      <Menu.Item key="3" icon={<MessageOutlined className={collapsed ? 'notification-icon' : ''} />}>
        <Badge count={notificationsLength}>
          Notifications
        </Badge>

      </Menu.Item>
      <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
        Support
      </Menu.Item>
      <Menu.Item key="5" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  </Sider>
);

Sidebar.propTypes = {
  notificationsLength: PropTypes.number,
  collapsed: PropTypes.bool,
};

Sidebar.defaultProps = {
  collapsed: false,
  notificationsLength: 0,
};
export default Sidebar;
