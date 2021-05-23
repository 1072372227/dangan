import React from 'react';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined, UploadOutlined } from '@ant-design/icons';
import { Table, Button, Space, Input, Modal, Select, Form, Upload, message, DatePicker} from 'antd';
import "../../App.css";
const Option = Select.Option;
const RangePicker=DatePicker.RangePicker;

class file_borrow extends React.Component {

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
        title: '文件名',
        dataIndex: 'file_name',
        key: 'file_name',
      },
      {
        title: '借阅人',
        dataIndex: 'bor_user',
        key: 'bor_user',
      },
      {
        title: '借阅时间',
        dataIndex: 'bor_time',
        key: 'bor_time',
      },
      {
        title: '身份证号',
        dataIndex: 'user_sfz',
        key: 'user_sfz',
      },
      {
        title: '电话号',
        dataIndex: 'user_phone',
        key: 'user_phone',
      },
      {
        title: '邮箱',
        dataIndex: 'user_email',
        key: 'user_email',
      },
    ];

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    //日期选择
    function onChange(value, dateString) {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
      console.log('onOk: ', value);
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
          <Space direction="vertical" size={12}>
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
          </Space>
          <Button type="primary" style={{marginRight: '2vw',marginLeft: '2vw'}}>查询借阅文件</Button>
                    
        </div>

        {/* 表格头 */}
        <Table columns={columns} style={{ marginTop: '2vh' }} />

        {/* modal确认框，返回结果 */}
        <Modal >
          <Form className='formLine' onFinish={onFinish.bind(this)} onFinishFailed={onFinishFailed.bind(this)}>
            <Form.Item name="name" label='文件名称：'>
              <Input className='inputStyle' />
            </Form.Item>

            <Form.Item label='文件：' name="file_url">

            </Form.Item>
          </Form>
        </Modal>
      </div >

    )
  }

}

export default file_borrow;