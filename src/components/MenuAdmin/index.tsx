import { LaptopOutlined, UnorderedListOutlined, UserOutlined, WomanOutlined, PlusOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import { Link } from "react-router-dom";
const MenuAdmin = () => {
    return (
        <Menu style={{ height: "100%" }}>
            <Menu.Item>
                <Link to="/admin">
                    <LaptopOutlined /> Thống kê
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/admin/products">
                    <WomanOutlined />  Sản phẩm
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/admin/categories">
                    <UnorderedListOutlined />
                    Danh mục
                </Link>
            </Menu.Item>
            <Menu.SubMenu title="Create">

                <Menu.Item>
                    <Link to="/admin/products/add">
                        <UserOutlined /> Thêm sản phẩm
                    </Link>
                </Menu.Item>
                <Menu.Item>

                    <Link to="/admin/categories/add">
                        Thêm danh mục
                    </Link>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    );
};

export default MenuAdmin;
