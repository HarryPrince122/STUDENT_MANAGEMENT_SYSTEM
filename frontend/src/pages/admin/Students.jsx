import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
	StudentsContainer,
	Content,
	StudentsContent,
	StudentsHeader,
	StudentList,
	StudentItem,
	AddStudentForm,
	AddStudentButton,
	AddStudentInput,
} from "../../styles/StudentsStyles";

const Students = () => {
	const [newStudent, setNewStudent] = useState({
		name: "",
		registrationNumber: "",
		grade: "",
	});
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetchStudents();
	}, []);

	const fetchStudents = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/v1/students/getall"
			);
			setStudents(response.data.students);
		} catch (error) {
			console.log("error adding students:", error);
		}
	};

	const handleAddStudent = async (e) => {
		e.preventDefault();
		if (
			newStudent.name.trim() !== "" &&
			newStudent.registrationNumber.length.trim() !== "" &&
			newStudent.grade.trim() !== ""
		) {
			try {
				const response = await axios.post(
					"http://localhost:4000/api/v1/students",
					{ grade: newClassName }
				);
				console.log("Response data:", response.data); //it will log the response data
				setStudents([...students, response.data.student]);
				setNewStudent({ name: "", registrationNumber: "", grade: "" });
			} catch (error) {
				console.log("error adding classes:", error);
			}
		}
	};

	return (
		<StudentsContainer>
			<Content>
				<StudentsContent>
					<StudentsHeader>
						<AddStudentForm onSubmit={handleAddStudent}>
							<AddStudentInput
								type="text"
								placeholder="Enter Student Name"
								value={newStudent.name}
								onChange={(e) =>
									setNewStudent({ ...newStudent, name: e.target.value })
								}
							/>
							<AddStudentInput
								type="text"
								placeholder="Enter Registration Number"
								value={newStudent.registrationNumber}
								onChange={(e) =>
									setNewStudent({
										...newStudent,
										registrationNumber: e.target.value,
									})
								}
							/>
							<AddStudentInput
								type="text"
								placeholder="Enter Grade"
								value={newStudent.grade}
								onChange={(e) =>
									setNewStudent({ ...newStudent, grade: e.target.value })
								}
							/>

							<AddStudentInput type="text" placeholder="Enter Grade" />
							<AddStudentButton type="submit">Add Student</AddStudentButton>
						</AddStudentForm>

						<StudentList>
							{students.map((student) => (
								<StudentItem key={student.id}>
									{student.name}-{student.registrationNumber}-{student.grade}
								</StudentItem>
							))}
						</StudentList>
					</StudentsHeader>
				</StudentsContent>
			</Content>
		</StudentsContainer>
	);
};

export default Students;
