import React from 'react';
// import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header style={{
                "backgroundColor": "#1890ff",
                "height": "70px",
                "textAlign": "center",
                "fontSize": "30px",
                "marginBottom": "20px",
                "color": "white"
            }}>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ "marginLeft": "0px" }} offset={0}>
                        <Link to="/">
                            <h3>
                                Home
                            </h3>
                        </Link>
                    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ "color": "white", "textAlign": "left" }}>
                        <h3>
                            Practice
                        </h3>
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <Link to="/login">
                            <h3>
                                Login
                            </h3>
                        </Link>
                    </Col>
                </Row>
            </header>
        )
    }
}


// <BrowserRouter>
//         <Layout>
//           <Row>
//             <Col >
//               <Content>
//                 <SignupForm />
//                 <LoginForm />
//               </Content>
//             </Col>
//           </Row>
//         </Layout>

//       </BrowserRouter>