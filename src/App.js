import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MyHeader from './Header/Header';
import LoginForm from './login/login';
// import MyFooter from './Footer/myFooter';
import SignupForm from './signup/signup';
import { Row, Col, Layout } from 'antd';
import Agreement from './agreement';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from './Home';
import Forgot from './forgot'
const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Row>
          <Col span={24} >
            <MyHeader />
          </Col>
        </Row>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
          <Route path='/agreement' component={Agreement} />
          <Route path='/forgotPassword' component={Forgot} />


          <Row>
            <Col >
              <Content>
                <SignupForm />
              </Content>
            </Col>
          </Row>
        </Switch>
      </Layout>

    </BrowserRouter>
  )
}

export default App;
