import React from 'react'
let routes = {
  route: {
    path: '/home/index',

    routes: [


      {
        key:1,
        path: '/home/index',
        name: '档案文件管理',
        children: [
          {
            key:1-1,
            path: '/home/index',
            name: '文件录入修改',
          },
          {
            key:1-2,
            path: '/home/file_borrow',
            name: '档案文件借阅',
          },
        ]
      },
      {
        key:2,
        path: '/home/dangan',
        name: '档案案卷管理',
      },
      {
        key:3,
        path: '/home/classify',
        name: '档案分类管理',
      },
      {
        key:4,
        path: '/home/echart',
        name: '信息统计',
      },
      {
        key:5,
        path: '/home/system',
        name: '系统管理',
        children: [
          {
            key:5-1,
            path: '/home/system/id=5-1',
            name: '用户管理',
          },
        ]
      },

    ],
  },
};
class LayoutDefault extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {


  }
}
export default routes