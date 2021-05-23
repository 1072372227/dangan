import React from 'react';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { Table, Button, Space, Input, Modal, Select, DatePicker, Form, Upload, message, } from 'antd';
import "../../App.css";
const Option = Select.Option

class Dangan extends React.Component {

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
        dataIndex: 'classify',
        key: 'classify',
      },
      {
        title: '档案所在地',
        dataIndex: 'dangan_add',
        key: 'dangan_add',
      },
      {
        title: '操作',
        dataIndex: 'dangan_do',
        key: 'dangan_do',
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
          档案名称：<Input style={{ width: '60%' }} />
          <Button type="primary" style={{ marginRight: '2vw', marginLeft: '2vw' }}>查询档案</Button>
          <Button type="primary" style={{}}>创建档案</Button>
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

export default Dangan;