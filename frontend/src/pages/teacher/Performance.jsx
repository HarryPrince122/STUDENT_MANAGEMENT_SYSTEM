import React from "react";
import Sidebar from "./Sidebar";
import {
	PerformanceContainer,
	Content,
	PerformanceContent,
	PerformanceHeader,
	SchoolPerformance,
	IndividualPerformance,
} from "../../styles/PerformanceStyles";

const CheckPerformanceSection = () => {
	const schoolPerformanceData = {
		averageScore: 78,
		totalStudents: 500,
	};

	const individualPerformanceData = [
		{ id: 1, name: "Keshav Kumar", score: 95 },
		{ id: 2, name: "Ankit Chaurasiya", score: 65 },
		{ id: 3, name: "Hanish Prasad", score: 78 },
	];

	return (
		<PerformanceContainer>
			<Sidebar />
			<Content>
				<PerformanceContent>
					<PerformanceHeader>School Performance</PerformanceHeader>
					<SchoolPerformance>
						<p>Average Score: {schoolPerformanceData.averageScore}</p>
						<p>Total Students: {schoolPerformanceData.totalStudents}</p>
					</SchoolPerformance>
					<PerformanceHeader>Individual Performance</PerformanceHeader>
					<IndividualPerformance>
						{individualPerformanceData.map((student) => (
							<p key={student.id}>
								{student.name}: {student.score}
							</p>
						))}
					</IndividualPerformance>
				</PerformanceContent>
			</Content>
		</PerformanceContainer>
	);
};

export default CheckPerformanceSection;
