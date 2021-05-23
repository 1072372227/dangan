import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps.jsx';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { Switch, Route ,Redirect} from 'react-router-dom'


import index from "../page/index.jsx";
import system from "../page/system.jsx";
import dangan from "../page/dangan/dangan";
import search from "../page/search.jsx";
import echart from "../page/echart/echart";
import classify from "../page/classify/classify";
import fileBorrow from "../page/file/file_borrow";




export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoute: '/home/index',
      userDetail: '',
      route: []
    }
  }

  componentDidMount() {
    console.log(window.user)
    const userDetail = window.user
  
    this.setState({
      userDetail: userDetail,
      route: defaultProps
    })
  }
  render() {
    return (
      <ProLayout
        {...this.state.route}
        style={{
          height: '100vh',

        }}
        location={{
          pathname: this.state.currentRoute,
        }}
        title='数字档案管理'
        selectedKeys={['']}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              this.setState({
                currentRoute: item.path
              })
              this.props.history.push(item.path);
            }}
          >
            {dom}
          </a>
        )}


      >

        <PageContainer>
          <Switch>
            <Route path='/home/index' component={index} />
            <Route path='/home/system' component={system} />
            <Route path='/home/dangan' component={dangan} />
            <Route path='/home/echart' component={echart} />
            <Route path='/home/classify' component={classify} />
            <Route path='/home/file_borrow' component={fileBorrow}/>
            <Redirect from="/home" to="/home/index" />
          </Switch>
        </PageContainer>
      </ProLayout>
    )
  }
}





