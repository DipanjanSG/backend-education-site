

import CourseRepo from "../repositories/CourseRepo.js";

class CourseController {

    async createCourse(req, res)
    {

         const { courseDetails } = req.body;
                 
         const courseRepo = new CourseRepo();
         courseRepo.createCourse(req.body);

        //validation

        //if validation successful then gog to repo layer
        res.json({ success: true, message: "Get all courses works!" });


    }

    async getCourse(req, res)
    {
        const courseId  = req.params.id;
        
        const courseRepo = new CourseRepo();
         
        const course = await courseRepo.getCourse(courseId);

        console.log(course);
        res.json({ success: true, message: "Get all courses works!" , data :course });
    }

    async updateCourse(req, res)
    {

    }


    async deleteCourse(req, res)
    {

    }

}

export default new CourseController();