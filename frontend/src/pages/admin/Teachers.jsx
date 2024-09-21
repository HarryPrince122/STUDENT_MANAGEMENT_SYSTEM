import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
	TeachersContainer,
	Content,
	TeachersContent,
	TeachersHeader,
	TeacherList,
	TeacherItem,
	AddTeacherForm,
	AddTeacherInput,
	AddTeacherButton,
} from "../../styles/TeachersStyles";

const Teachers = () => {
	const [newTeacher, setNewTeacher] = useState({
		name: "",
		email: "",
		subject: "",
	});
	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		fetchTeachers();
	}, []);

	const fetchTeachers = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/v1/teachers/getall"
			);
			setTeachers(response.data.teachers);
		} catch (error) {
			console.error("Error fetching teachers:", error);
		}
	};

	const handleAddTeacher = async (e) => {
		e.preventDefault();
		if (
			newTeacher.name.trim() !== "" &&
			newTeacher.email.trim() !== "" &&
			newTeacher.subject.trim() !== ""
		) {
			try {
				const response = await axios.post(
					"http://localhost:4000/api/v1/teachers",
					newTeacher
				);
				const createdTeacher = response.data.teacher;
				setTeachers([...teachers, createdTeacher]);
				setNewTeacher({ name: "", email: "", subject: "" });
			} catch (error) {
				console.error("Error adding teacher:", error);
			}
		}
	};
	return (
		<TeachersContainer>
			<Content>
				<TeachersContent>
					<TeachersHeader>
						<AddTeacherForm onSubmit={handleAddTeacher}>
							<AddTeacherInput
								type="text"
								placeholder="Enter Teacher Name"
								value={newTeacher.name}
								onChange={(e) =>
									setNewTeacher({ ...newTeacher, name: e.target.value })
								}
							/>

							<AddTeacherInput
								type="text"
								placeholder="Enter Teacher Email"
								value={newTeacher.email}
								onChange={(e) =>
									setNewTeacher({ ...newTeacher, email: e.target.value })
								}
							/>

							<AddTeacherInput
								type="text"
								placeholder="Enter the Teacher Subject"
								value={newTeacher.subject}
								onChange={(e) =>
									setNewTeacher({ ...newTeacher, subject: e.target.value })
								}
							/>
							<AddTeacherButton type="button">Add Teacher</AddTeacherButton>
						</AddTeacherForm>

						<TeacherList>
							{teachers.map((teacher) => (
								<TeacherItem key={teacher.id}>
									{teacher.name} - {teacher.email} - {teacher.subject}
								</TeacherItem>
							))}
						</TeacherList>
					</TeachersHeader>
				</TeachersContent>
			</Content>
		</TeachersContainer>
	);
};

export default Teachers;
