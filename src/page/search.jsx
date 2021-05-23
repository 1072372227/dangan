import React from 'react';
import { message, Button } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';
import qs from 'qs'

class search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  sign() {
    this.props.history.push({
      pathname: '/sign',

    })
  }
  render() {
    return (
      <div
     
      >
   暂未开放
      </div >
    )
  }

}

export default search;