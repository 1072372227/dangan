
import React from 'react';
import { Table, Button, Space, Input, Modal, Select, DatePicker, Form, Upload, message, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import "../App.css";
import moment from 'moment';
import qs from 'qs'

const Option = Select.Option







class page2 extends React.Component {
    formRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {

            keyWord: '',
            addPj: {

            },
            list: [],
            madelName: '',
            toekn: '',
            fileUrl: '',
            //上传
            upload: {
                name: 'file',
                action: 'http://localhost:3000/upload',
                headers: {
                    authorization: "Bearer " + window.user
                },
                onChange: this.onChange.bind(this)
            }
        }
    }

    //得到input内容，判断是否上传成功，保存上传文件位置，便于编辑修改
    onChange(info) {
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
            this.setState({
                fileUrl: info.file.response.data
            })
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    //判断是否通过登录，将数据存储到list中，提交time和userid
    componentDidMount() {
        const userDetail = window.user
        console.log(window.user)
        if (userDetail == false) {
            this.props.history.push({
                pathname: '/login',

            })
        }
        this.setState({
            token: userDetail,
        })
        //fetch提交json格式的数据到服务器
        fetch("http://localhost:3000/file?time=" + new Date().getTime(), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                authorization: "Bearer " + userDetail,
                'Cache-Control': 'no-cache'
            },
        })
            .then((res) => {
                return res.json(); // 获取的数据转换为json
            })
            .then((res) => {
                if (res.code == 200) {
                    //成功
                    for (let i in res.data) {
                        res.data[i].key = i
                        //  moment().format();
                    }
                    this.setState({
                        list: res.data
                    })
                } else {
                    //失败
                    alert(res.msg)
                    //未登录
                    if (res.code == 401) {
                        this.props.history.push({
                            pathname: '/login',

                        })
                    }
                }
            });
    }

    //创建档案数据
    showModal = (name) => {

        this.setState({
            madelName: name,
            sModalVisible: true
        })
    };

    //处理确认
    handleOk = () => {
        this.setState({
            sModalVisible: false
        })
    };

    //取消
    handleCancel = () => {
        this.setState({
            sModalVisible: false
        })
    };
    modelChange = (e, name) => {

    }

    //改变档案名
    changeName = (e) => {
        this.setState({
            keyWord: e.target.value
        })
    }

    //查询返回数据
    search = () => {
        fetch("http://localhost:3000/file?time=" + new Date().getTime() + '&file_name=' + this.state.keyWord, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                authorization: "Bearer " + this.state.token,
                'Cache-Control': 'no-cache'
            },
        })
            .then((res) => {
                return res.json(); // 获取的数据转换为json
            })
            .then((res) => {
                if (res.code == 200) {
                    for (let i in res.data) {
                        res.data[i].key = i
                        //  moment().format();
                    }
                    this.setState({
                        list: res.data
                    })
                } else {
                    alert(res.msg)
                    if (res.code == 401) {
                        this.props.history.push({
                            pathname: '/login',
                        })
                    }
                }
            });
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
                title: '创建时间',
                dataIndex: 'create_time',
                key: 'create_time',
            },
            {
                title: '最后更新',
                dataIndex: 'update_time',
                key: 'update_time',
            },
            {
                title: '下载文件',
                key: 'downLoad',
                render: (txt, record, index) => (

                    <Space size="middle">

                        <a onClick={() => {

                            window.open('http://localhost:3000/image/' + record.file_url)


                        }}>下载文件</a>

                    </Space>
                ),
            },

            {
                title: '操作',
                key: 'change',
                render: (txt, record, index) => (

                    <Space size="middle">

                        <a onClick={() => {

                            const pj = record
                            this.setState({
                                addPj: record,
                                madelName: '编辑档案',
                                sModalVisible: true,
                                fileUrl: record.file_url
                            })

                        }}>编辑档案</a>
                        <a onClick={() => {
                            fetch('http://localhost:3000/file/delete', {
                                method: 'post',
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    authorization: "Bearer " + this.state.token
                                },

                                body: qs.stringify({
                                    id: record.id
                                })
                            })
                                .then((res) => {
                                    return res.json()
                                })
                                .then((result) => {

                                    if (result.code == 200) {
                                        this.setState({
                                            sModalVisible: false,
                                        })
                                        alert(result.msg)
                                        this.componentDidMount()
                                    } else {
                                        alert(result.msg)
                                        if (result.code == 401) {
                                            this.props.history.push({
                                                pathname: '/login',

                                            })
                                        }
                                    }

                                })

                        }}>删除档案</a>
                    </Space>
                ),
            },

        ];

        //表单提交成功
        const onFinish = (values) => {
            let parm = values
            let url
            if (this.state.madelName == '创建档案') {
                url = 'localtion:3000/file/add'
            } else {
               url = 'http://localhost:3000/file/update'
            }
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    authorization: "Bearer " + this.state.token
                },
                body: qs.stringify({
                    id: this.state.addPj.id,
                    name: parm.name,
                    file_url: this.state.fileUrl
                })
            })
                .then((res) => {
                    return res.json()
                })
                .then((result) => {
                    console.log(result)
                    if (result.code == 200) {
                        this.setState({
                            sModalVisible: false,
                            fileUrl: "",
                        })
                        //  alert(result.msg)
                        this.componentDidMount()
                    } else {
                        alert(result.message)
                        if (result.code == 401) {
                            this.props.history.push({
                                pathname: '/login',
                            })
                        }
                    }
                })
        };

        //表单提交失败
        const onFinishFailed = (errorInfo) => {

        };
        return (
            <div style={{height: '80vh',overflowY: 'scroll'}}>

                <div className='formLine'>
                    档案名称：<Input defaultValue={this.state.keyWord} onChange={this.changeName} style={{width: '60%'}} />
                    <Button type="primary" onClick={this.search} style={{marginRight: '2vw',marginLeft: '2vw'}}>查询档案</Button>
                    <Button type="primary" onClick={this.showModal.bind(this, '创建档案')} style={{}}>创建档案</Button>
                </div>

                {/* 表格头 */}
                <Table dataSource={this.state.list} columns={columns} style={{
                    marginTop: '2vh'
                }} />

                {/* modal确认框，返回结果 */}
                <Modal title={this.state.madelName} destroyOnClose={true} visible={this.state.sModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={
                    []
                }>
                    <Form className='formLine'
                        ref={this.formRef}
                        initialValues={{ remember: true }}
                        onFinish={onFinish.bind(this)}
                        onFinishFailed={onFinishFailed.bind(this)}>
                        <Form.Item name="name" label='档案名称：' initialValue={this.state.addPj.name} >
                            <Input className='inputStyle' />
                        </Form.Item>

                        <Form.Item label='档案：' name="file_url">
                            <Upload {...this.state.upload}>
                                <Button icon={<UploadOutlined />} initialValue={this.state.addPj.file_url}>上传文件</Button>
                            </Upload>
                        </Form.Item>
                        {
                            this.state.madelName == '创建档案' &&
                            <div style={{width: '100%'}}>
                                <Button type="primary" htmlType="submit">创建</Button>
                            </div>
                        }
                        {
                            this.state.madelName == '编辑档案' &&
                            <div style={{width: '100%'}}>
                                <Button type="primary" htmlType="submit">编辑</Button>
                            </div>
                        }
                    </Form>
                </Modal>
            </div >

        )
    }
}

export default page2;




