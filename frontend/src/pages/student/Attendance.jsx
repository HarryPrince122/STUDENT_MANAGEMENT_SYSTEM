import React from "react";
import Sidebar from "./Sidebar";
import {
	AttendanceContainer,
	SidebarContainer,
	Content,
	AttendanceHeader,
	AttendanceList,
	AttendanceItem,
	AttendanceDate,
	AttendanceStatus,
} from "../../styles/AttendanceStyles";

const AttendanceSection = () => {
	const attendance = [
		{ id: 1, date: "2024-09-11", present: true },
		{ id: 2, date: "2024-09-12", present: false },
		{ id: 3, date: "2024-09-13", present: true },
		{ id: 4, date: "2024-09-14", present: true },
		{ id: 5, date: "2024-09-15", present: true },
	];

	return (
		<AttendanceContainer>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>
			<Content>
				<AttendanceHeader>Attendance</AttendanceHeader>
				<AttendanceList>
					{attendance.map(({ id, date, present }) => (
						<AttendanceItem key={id}>
							<AttendanceDate>{date}</AttendanceDate>
							<AttendanceStatus present={present}>
								{present ? "Present" : "Absent"}
							</AttendanceStatus>
						</AttendanceItem>
					))}
				</AttendanceList>
			</Content>
		</AttendanceContainer>
	);
};

export default AttendanceSection;
