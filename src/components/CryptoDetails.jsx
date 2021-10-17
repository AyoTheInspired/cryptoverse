import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import {
	MoneyCollectOutlined,
	DollarCircleOutlined,
	FundOutlined,
	ExclamationCircleOutlined,
	StopOutlined,
	NumberOutlined,
	ThunderboltOutlined,
	TrophyOutlined,
	CheckOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
	const [timePeriod, setTimePeriod] = useState("7d");
	const { coinId } = useParams();
	const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
	const cryptoDetails = data?.data?.coin;

	console.log(cryptoDetails);

	const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
	const stats = [
		{
			title: "Price to USD",
			value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
			icon: <DollarCircleOutlined />,
		},
		{ title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
		{
			title: "24h Volume",
			value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
			icon: <ThunderboltOutlined />,
		},
		{
			title: "Market Cap",
			value: `$ ${
				cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
			}`,
			icon: <DollarCircleOutlined />,
		},
		{
			title: "All-time-high(daily avg.)",
			value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
			icon: <TrophyOutlined />,
		},
	];

	const genericStats = [
		{
			title: "Number Of Markets",
			value: cryptoDetails?.numberOfMarkets,
			icon: <FundOutlined />,
		},
		{
			title: "Number Of Exchanges",
			value: cryptoDetails?.numberOfExchanges,
			icon: <MoneyCollectOutlined />,
		},
		{
			title: "Aprroved Supply",
			value: cryptoDetails?.approvedSupply ? (
				<CheckOutlined />
			) : (
				<StopOutlined />
			),
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Total Supply",
			value: `$ ${millify(cryptoDetails?.totalSupply)}`,
			icon: <ExclamationCircleOutlined />,
		},
		{
			title: "Circulating Supply",
			value: `$ ${millify(cryptoDetails?.circulatingSupply)}`,
			icon: <ExclamationCircleOutlined />,
		},
	];

	return !cryptoDetails ? (
		<p>Loading...</p>
	) : (
		<Col className="coin-detail-container">
			<Col className="coin-heading-container">
				<Title level={2} className="coin-name">
					{cryptoDetails.name} ({cryptoDetails.slug}) Price
				</Title>
				<p>
					{cryptoDetails.name} live price in USD. View value statistics, market
					cap, and supply.
				</p>
			</Col>
			<Select
				defaultValue="7d"
				className="select-timeperiod"
				placeholder="Select time period"
				onChange={(value) => setTimePeriod(value)}>
				{time.map((date) => (
					<Option key={date}>{date}</Option>
				))}
			</Select>
			// Line Chart
			<Col className="stats-containeer">
				<Col className="coin-value-statistics">
					<Col className="coin-value-statistics-heading">
						<Title level={3} className="coin-details-heading">
							{cryptoDetails.name} Value Statistics
						</Title>

						<p>An overview showing the stats of {cryptoDetails.name} </p>
					</Col>

					{stats.map(({ icon, title, value }) => (
						<Col key={title} className="coin-stats">
							<Col className="coin-stats-name">
								<Text>{icon}</Text>
								<Text>{title}</Text>
							</Col>

							<Text className="stats">{value}</Text>
						</Col>
					))}
				</Col>
			</Col>
		</Col>
	);
};

export default CryptoDetails;
