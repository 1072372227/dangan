import React from 'react';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { Table, Button, Space, Input, Modal, Select, DatePicker, Form, Upload, message, } from 'antd';
import { Link } from 'react-router-dom'
import "../../App.css";
import moment from 'moment';
import qs from 'qs'


const Option = Select.Option

class classify extends React.Component {

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


  //选择器

  render() {
 
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '档案名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '档案分类',
        dataIndex: 'create_time',
        key: 'create_time',
      },
      {
        title: '操作',
        dataIndex: 'update_time',
        key: 'update_time',
      },
    ];

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
  

    //表单提交成功
    const onFinish = (values) => {

    };

    //表单提交失败
    const onFinishFailed = (errorInfo) => {

    };
    return (
      <div style={{ height: '80vh', overflowY: 'scroll' }}>
     
                  
        <div className='formLine'>
          档案分类：
          <Select defaultValue="1" style={{ width: 120 }} onChange={handleChange}>
            <Option value="1">文书档案</Option>
            <Option value="2">科技档案</Option>
            <Option value="3">财务档案</Option>
            <Option value="4">人事档案</Option>
            <Option value="5">声像档案</Option>
          </Select>
        </div>

        {/* 表格头 */}
        <Table columns={columns} style={{ marginTop: '2vh' }} />

        {/* modal确认框，返回结果 */}
        <Modal >
          <Form className='formLine' onFinish={onFinish.bind(this)} onFinishFailed={onFinishFailed.bind(this)}>
            <Form.Item name="name" label='档案名称：'>
              <Input className='inputStyle' />
            </Form.Item>

            <Form.Item label='档案：' name="file_url">
              <Upload {...this.state.upload}>
                <Button icon={<UploadOutlined />}>修改</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div >

    )
  }

}

export default classify;