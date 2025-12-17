import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        // courseId: {
        //     type: Number
        // },
        // courseCategory: {
        //     type: String
        // },
        courseName: {
            type: String
        },
        courseDetails: {
            type: String
        }
    },
    
);

export default mongoose.model("course2" , courseSchema);



