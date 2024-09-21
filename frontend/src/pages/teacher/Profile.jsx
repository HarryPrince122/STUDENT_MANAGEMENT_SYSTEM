import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
	ProfileContainer,
	SidebarContainer,
	Content,
	ProfileHeader,
	ProfileDetails,
	ProfileLabel,
	ProfileInfo,
	EditButton,
} from "../../styles/SettingsProfileStyles";

const TeacherProfileSection = () => {
	const [teacherInfo, setTeacherInfo] = useState({
		name: "Sanjay Kumar",
		email: "sanjay@gmail.com",
		phone: "987654321",
		address: "Kushinagr,U.P.",
		qualification: "Bachelor in technology",
	});

	return (
		<ProfileContainer>
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>
			<Content>
				<ProfileHeader>Profile Details</ProfileHeader>
				<ProfileDetails>
					<ProfileLabel>Name:</ProfileLabel>
					<ProfileInfo>{teacherInfo.name}</ProfileInfo>
					<ProfileLabel>Email:</ProfileLabel>
					<ProfileInfo>{teacherInfo.email}</ProfileInfo>
					<ProfileLabel>Phone:</ProfileLabel>
					<ProfileInfo>{teacherInfo.phone}</ProfileInfo>
					<ProfileLabel>Address:</ProfileLabel>
					<ProfileInfo>{teacherInfo.address}</ProfileInfo>
					<ProfileLabel>Qualification:</ProfileLabel>
					<ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
				</ProfileDetails>
				<EditButton>Edit Profile</EditButton>
			</Content>
		</ProfileContainer>
	);
};

export default TeacherProfileSection;
