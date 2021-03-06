import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectionOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
	MoneyCollectOutlined,
} from "@ant-design/icons";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src="/images/cryptocurrency.png" size="large" />
				<Typography.Title level={2} className="logo">
					<Link to="/">Cryptoverse</Link>
				</Typography.Title>

				{/* <Button className="menu-control-container"></Button> */}
			</div>

			<Menu theme="dark">
				<Menu.Item key={Math.random()} icon={<HomeOutlined />}>
					<Link to="/">Home</Link>
				</Menu.Item>
				<Menu.Item key={Math.random()} icon={<FundOutlined />}>
					<Link to="/cryptocurrencies">Cryptocurrencies</Link>
				</Menu.Item>
				<Menu.Item key={Math.random()} icon={<MoneyCollectOutlined />}>
					<Link to="/exchanges">Exchanges</Link>
				</Menu.Item>
				<Menu.Item key={Math.random()} icon={<BulbOutlined />}>
					<Link to="/news">News</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
