import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuAdmin from "../components/MenuAdmin";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const LayoutAdmin = () => {
    return (
        <Layout style={{ height: "125vh" }}>
            <Header className="header flex">
                <Link to={"/"}> <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/94036243_2899534036805595_1800758643365249024_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7rSsNzjF8wkAX_AL98w&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBOd8de0L6tUQNviOjCIQ6FgRGcm7hNW6S_C98KPo582g&oe=63B2747F" className="ml-4 h-12 sm:h-16" alt="Flowbite Logo" /></Link>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white font-serif ml-4">Hoàng Trường Shop</span>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <MenuAdmin />
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>
                        <Breadcrumb.Item></Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutAdmin;
