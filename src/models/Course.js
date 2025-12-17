import mongoose from 'mongoose';



const syllabusSubModuleSchema = new mongoose.Schema(
{
        name:
        {
            type: String
        },
        details:
        {
            type: String
        }
});

const syllabusModuleSchema = new mongoose.Schema(
{
        name:
        {
            type: String
        },
        subModules:
        {
            type: [syllabusSubModuleSchema]
        }
});

const courseSchema = new mongoose.Schema(
    {
        // courseId: {
        //     type: Number
        // },
        // courseCategory: {
        //     type: String
        // },
        name: {
            type: String
        },
        details: {
            type: String
        },
        duration: {
            type: Number
        },
        durationMetric: {
            type: String
        },
        fees: {
            type: Number
        },
        eligibility: {
            type: String
        },
        faqs: {
            type: String
        },
        nextEnrollmentDate: {
            type: Date
        },
        careerOpportunities: {
            type: String
        },
        syllabusModules:
        {
            type: [syllabusModuleSchema]
        }
    },
    
);

export default mongoose.model("course" , courseSchema);



