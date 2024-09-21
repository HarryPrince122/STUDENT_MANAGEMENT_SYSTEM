import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
	ProfileContainer,
	SidebarContainer,
	Content,
	ProfileHeader,
	ProfileDetails,
	ProfileLabel,
	ProfileInfo,
	EditButton,
	ProfileDetail,
	Label,
	Value,
} from "../../styles/SettingsProfileStyles";

const SettingsProfiles = () => {
	const teacherInfo = {
		name: "Sanjay Kumar",
		email: "sanjay@gmail.com",
		phone: "987654321",
		address: "Kushinagr,U.P.",

		qualification: "Bachelor in technology",
	};

	return (
		<ProfileContainer>
			<SidebarContainer>
				<Sidebar />
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

						<ProfileLabel>Qualfication:</ProfileLabel>
						<ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
					</ProfileDetails>
					<EditButton>Edit Profile</EditButton>
				</Content>
			</SidebarContainer>
		</ProfileContainer>
	);
};

export default SettingsProfiles;
