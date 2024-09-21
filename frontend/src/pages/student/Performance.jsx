import React from "react";
import Sidebar from "./Sidebar";
import {
	PerformanceContainer,
	SidebarContainer,
	Content,
	PerformanceHeader,
	PerformanceInfo,
	PerformanceGraphContainer,
	TotalMarks,
} from "../../styles/PerformanceStyles";

const PerformanceSection = () => {
	const performanceData = {
		months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		marks: [80, 85, 90, 88, 92, 85],
		totalMarks: 600,
	};

	const lineChartData = {
		labels: performanceData.months,
		datasets: [
			{
				label: "Performance Trends",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "#007bff",
				borderColor: "#007bff",
				data: performanceData.marks,
			},
		],
	};

	return (
		<PerformanceContainer>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>
			<Content>
				<PerformanceHeader>Performance</PerformanceHeader>
				<PerformanceInfo>
					<PerformanceGraphContainer>
						<Line
							data={lineChartData}
							options={{
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true,
											},
										},
									],
								},
							}}
						/>
					</PerformanceGraphContainer>
					<TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
				</PerformanceInfo>
			</Content>
		</PerformanceContainer>
	);
};

export default PerformanceSection;
