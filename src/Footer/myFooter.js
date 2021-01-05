import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default function MyFooter() {
    return (
        <Layout>
            <Layout>
                <Footer style={{"contentAlign": "auto"}}>This is Footer</Footer>
            </Layout>
        </Layout>
    )
}