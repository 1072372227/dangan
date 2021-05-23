import React from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';
import qs from 'qs'

class login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div
                style={{
                    width: 330,
                    paddingTop: '20vh',
                    margin: 'auto',
                }}
            >
                <ProForm
                    onFinish={async (e) => {
                        console.log(e)
                        e.phone = 111
                        e.email = 111
                        fetch("http://localhost:3000/user/add", {
                            method: "POST",
                            body: qs.stringify(e),
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                        })
                            .then((res) => {
                                return res.json(); // 吧获取的数据转换为json
                            })
                            .then((res) => {
                                console.log(res);
                                if (res.code == 200) {
                                    alert('注册成功')
                                    this.props.history.push({
                                        pathname: '/login',

                                    })

                                } else {
                                    alert('注册失败')
                                }
                            });



                    }}
                    submitter={{
                        searchConfig: {
                            submitText: '注册',
                        },
                        render: (_, dom) => dom.pop(),
                        submitButtonProps: {
                            size: 'large',
                            style: {
                                width: '100%',
                            },
                        },
                    }}
                >
                    <h1
                        style={{
                            textAlign: 'center',
                        }}
                    >

                        注册
                </h1>

                    <ProFormText
                        fieldProps={{
                            size: 'large',

                        }}
                        name="username"
                        placeholder="请输入用户名"

                    />
                    <ProFormText
                        fieldProps={{
                            size: 'large',

                        }}
                        name="password"
                        placeholder="请输入密码"

                    />
                </ProForm>

            </div>
        )
    }

}

export default login;