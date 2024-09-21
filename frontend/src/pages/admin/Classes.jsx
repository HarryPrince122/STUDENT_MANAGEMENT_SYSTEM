import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
	ClassesContainer,
	Content,
	ClassesContent,
	ClassHeader,
	ClassList,
	ClassItem,
	AddClassButton,
	AddClassForm,
	AddClassInput,
	ClassContainer,
} from "../../styles/ClassesStyles";

const Classes = () => {
	const [newClassName, setNewClassName] = useState("");
	const [classes, setClasses] = useState("");

	useEffect(() => {
		fetchClasses();
	}, []);

	const fetchClasses = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/api/v1/class/getall"
			);
			if (response.data && Array.isArray(response.data.classes)) {
				setClasses(response.data.classes);
			} else {
				console.log(
					"Error while fetching classes: Invalid data format",
					response.data
				);
			}
		} catch (error) {
			console.log("error fetching classes:", error);
		}
	};

	const handleAddClass = async (e) => {
		e.preventDefault();
		if (newClassName.trim() !== "") {
			try {
				const response = await axios.post(
					"http://localhost:4000/api/v1/class",
					{ grade: newClassName }
				);
				console.log("Response data:", response.data); //it will log the response data
				setClasses((prevClasses) => {
					if (Array.isArray(prevClasses)) {
						return [...prevClasses, response.data]; // use of  callback function to update state
					} else {
						console.log(
							"Error adding classe: Invalid state for classes:",
							prevClasses
						);
						return 0; // to reset classes state to an empty array
					}
				});

				setNewClassName(response.data.performance || []);
			} catch (error) {
				console.log("error adding classes:", error);
			}
		}
	};
	return (
		<ClassesContainer>
			<Sidebar />
			<Content>
				<ClassesContent>
					<ClassHeader>Classes</ClassHeader>
					<AddClassForm onSubmit={handleAddClass}>
						<AddClassInput
							type="text"
							placeholder="Enter Class Name"
							value={newClassName}
							onChange={(e) => setNewClassName(e.target.value)}
						/>
						<AddClassButton type="submit">Add Class</AddClassButton>
					</AddClassForm>

					<ClassList>
						{/* to  ensures the classes is an array before mapping over it */}

						{Array.isArray(classes) &&
							classes.map((classItem, index) => (
								<ClassItem key={index}>{classItem.grade}</ClassItem>
							))}
					</ClassList>
				</ClassesContent>
			</Content>
		</ClassesContainer>
	);
};

export default Classes;
