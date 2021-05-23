import React from 'react';
import { message, Button } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { MobileOutlined, MailOutlined } from '@ant-design/icons';
import qs from 'qs'

class login extends React.Component {

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
        style={{
          width: 330,
          paddingTop: '20vh',
          margin: 'auto',
        }}
      >
        <ProForm
          onFinish={async (e) => {
            console.log(e)

            fetch("http://localhost:3000/user/login", {
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
                if (res.code == 200) {
                  alert('登录成功=============zhazahzhazahzhzhazhzazhahzahzazhzah')
                  window.user = res.data.token
                  this.props.history.push({
                    pathname: '/home',

                  })

                } else {
                  alert('登录失败')
                }
              });


          }}
          submitter={{
            searchConfig: {
              submitText: '登录',
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

            登录
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
        <Button type="primary" onClick={this.sign.bind(this)} style={{
          width: '100%',
          height: '5vh',
          marginTop: '2vh'
        }}>注册</Button>
      </div >
    )
  }

}

export default login;