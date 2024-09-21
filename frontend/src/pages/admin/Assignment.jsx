import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
	AssignmentsContainer,
	Content,
	AssignmentsContent,
	AssignmentsHeader,
	AssignmentList,
	AssignmentItem,
	AddAssignmentForm,
	AddAssignmentInput,
	AddAssignmentTextArea,
	AddAssignmentButton,
} from "../../styles/AssignmentsStyles";

const Assignments = () => {
	const [newAssignment, setNewAssignment] = useState({
		title: "",
		description: "",
		grade: "",
		deadline: "",
	});
	const [assignments, setAssignments] = useState([]);

	useEffect(() => {
		fetchAssignments();
	}, []);

	const fetchAssignments = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/v1/assignments/getall"
			);
			setAssignments(response.data.assignments);
		} catch (error) {
			console.error("Error fetching assignments:", error);
		}
	};

	const handleAddAssignment = async (e) => {
		e.preventDefault();
		if (
			newAssignment.title.trim() !== "" &&
			newAssignment.description.trim() !== "" &&
			newAssignment.grade.trim() !== "" &&
			newAssignment.deadline.trim() !== ""
		) {
			try {
				const response = await axios.post(
					"http://localhost:4000/api/v1/assignments",
					newAssignment
				);
				toast.success("Assignment added successfully");
				setAssignments([...assignments, response.data.assignment]);
				setNewAssignment({
					title: "",
					description: "",
					grade: "",
					deadline: "",
				});
			} catch (error) {
				console.error("Error adding assignment:", error);
				toast.error("Error adding assignment");
			}
		}
	};

	return (
		<AssignmentsContainer>
			<Sidebar />
			<Content>
				<AssignmentsContent>
					<AssignmentsHeader>Assignments</AssignmentsHeader>
					<AddAssignmentForm onSubmit={handleAddAssignment}>
						<AddAssignmentInput
							type="text"
							placeholder="Enter Assignment Title"
							value={newAssignment.title}
							onChange={(e) =>
								setNewAssignment({ ...newAssignment, title: e.target.value })
							}
						/>
						<AddAssignmentTextArea
							placeholder="Enter Assignment Description"
							value={newAssignment.description}
							onChange={(e) =>
								setNewAssignment({
									...newAssignment,
									description: e.target.value,
								})
							}
						/>

						<AddAssignmentInput
							type="text"
							placeholder="Enter Assignment Grade"
							value={newAssignment.grade}
							onChange={(e) =>
								setNewAssignment({ ...newAssignment, grade: e.target.value })
							}
						/>

						<AddAssignmentInput
							type="text"
							placeholder="Enter Assignment Deadline"
							value={newAssignment.deadline}
							onChange={(e) =>
								setNewAssignment({ ...newAssignment, deadline: e.target.value })
							}
						/>

						<AddAssignmentButton type="submit">
							Add Assignment
						</AddAssignmentButton>
					</AddAssignmentForm>

					<AssignmentList>
						{assignments.map((assignment) => (
							<AssignmentItem key={assignment.id}>
								<strong>{assignment.title}: </strong>
								{assignment.description}, {assignment.grade},{" "}
								{assignment.deadline}
							</AssignmentItem>
						))}
					</AssignmentList>
				</AssignmentsContent>
			</Content>
		</AssignmentsContainer>
	);
};

export default Assignments;
