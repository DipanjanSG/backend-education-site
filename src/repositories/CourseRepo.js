import Course from '../models/Course.js'

class CourseRepo
{

    async createCourse(courseDetails)
    {
               
        const course = new Course(courseDetails);
        const createdUser = await course.save();
        return true;
    }

    async getCourse(courseId)
    {
        return await Course.findById(courseId);
    }



}

export default CourseRepo;