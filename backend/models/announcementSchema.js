import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
	announcement: {
		type: String,
		required: true,
	},
});

export const Announcement = mongoose.model("Student", announcementSchema);
