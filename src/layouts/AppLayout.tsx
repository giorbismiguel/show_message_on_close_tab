import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const navigation = [ 
    {
        key: '/',
        label: 'Home'
    },
    {
        key: '/one',
        label: 'Page One'
    },
    {
        key: '/two',
        label: 'Page Two'
    }
    
];
const AppLayout: React.FC = () => {
    const navigate  = useNavigate();

    const handleMenuClick = ({ key } : {key: string}) => {
        if (key) {
            navigate(key);
        }
    };

    return (
        <Layout className="layout">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultActiveFirst
                    items={navigation}
                    onClick={handleMenuClick}
                />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Page One</Breadcrumb.Item>
                    <Breadcrumb.Item>Page Two</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Show prompt on close tab, refresh and navigate to another page</Footer>
        </Layout>
    );
};

export default AppLayout;