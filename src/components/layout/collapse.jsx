import React from 'react';
import {
  Button, Card, Collapse, message, Space, Upload,
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './layout.scss';

const { Panel } = Collapse;

const Uploads = () => {
  const callback = (key) => {
    console.log(key);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Card title="UPLOAD NEW DATA">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Step 1 - Choose Photo or a ZIP file to upload" key="1">
          <p className="ant-upload-drag-icon">
            <InboxOutlined height={100} />
          </p>
          <Space>
            <Upload {...props}>
              <Button size="small" shape="round" type="danger">UPLOAD PHOTOS</Button>
            </Upload>
            <Upload {...props}>
              <Button size="small" shape="round" type="danger">UPLOAD ZIP</Button>
            </Upload>

          </Space>
          <hr />
          <p>Once you choose the data to upload, WRS Data Portal will automatically start uploading it.</p>
          <hr />
          <p>Once the data starts uploading, you can continue with the next step below.</p>
        </Panel>
        <Panel header="Step 2 - Job Details" key="2">
          <div />
        </Panel>
        <Panel header="Step 3 - Verify and Submit" key="3">
          <div />
        </Panel>
      </Collapse>
    </Card>

  );
};
export default Uploads;
