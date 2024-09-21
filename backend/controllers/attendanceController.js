import { Attendance } from "../models/attendanceSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const markAttendance = async (req, res, next) => {
	console.log(req.body);
	const { attendanceDate } = req.body;
	try {
		if (
			!attendanceDate ||
			!Array.isArray(attendanceDate) ||
			attendanceDate.length === 0
		) {
			handleValidationError("Attendance Data is Missing or invalid", 400);
		}
		const attendanceRecords = await Promise.all(
			attendanceDate.map(async (record) => {
				const { student, status } = record;
				return await Attendance.create({ student, status });
			})
		);
		res.status(200).json({
			success: true,
			message: "Attendance marked successfully!",
			attendanceRecords,
		});
	} catch (err) {
		next(err);
	}
};

export const getAllAttendance = async (req, res, next) => {
	try {
		const attendanceRecords = await Attendance.find().populate(
			"student",
			"name registrationNumber grade"
		);
		res.status(200).json({
			success: true,
			attendanceRecords,
		});
	} catch (err) {
		next(err);
	}
};
