import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';

ReactDOM.render(
  <ConfigProvider locale={viVN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
