import { Course } from "./course";

export class CourseCategory {

    name : string;
    courseList: Course[];

    constructor(name: string, courseList: Course[]) {
        this.name = name;
        this.courseList = courseList;
    }

}