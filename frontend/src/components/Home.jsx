import React from "react";
import {
	Navbar,
	Logo,
	NavigationLinks,
	NavLink,
	ButtonsContainer,
	LoginButton,
	GuestButton,
	HomeContainer,
	SInfo,
	SImage,
	Title,
	LoremTextContainer,
	AdminRegisterLink,
} from "../styles/styles";
import { LoremIpsum } from "lorem-ipsum";
import sf5 from "../assets/sf5.jpg";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from "react-router-dom";

const lorem = new LoremIpsum();

const Home = () => {
	const navigate = useNavigate();
	const loremText = lorem.generateParagraphs(1);

	const handleLoginClick = () => {
		navigate("/choose-user");
	};

	return (
		<>
			<Navbar>
				<Logo src={bg1} alt="Logo" />
				<NavigationLinks>
					<NavLink href="#">About Us</NavLink>
					<NavLink href="#">Contact Us </NavLink>
					<NavLink href="#">More Info</NavLink>
				</NavigationLinks>
				<ButtonsContainer>
					<LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
					<GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
				</ButtonsContainer>
			</Navbar>
			<HomeContainer>
				<SInfo>
					<Title>Student Management System</Title>
					<LoremTextContainer>
						<p>{loremText}</p>
					</LoremTextContainer>
					<AdminRegisterLink to="/admin/register">
						Admin Register
					</AdminRegisterLink>
				</SInfo>
				<SImage src={sf5} alt="pupils" />
			</HomeContainer>
		</>
	);
};

export default Home;
