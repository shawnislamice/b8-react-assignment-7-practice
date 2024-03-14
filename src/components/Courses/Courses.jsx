import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";


const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:w-[80%]">
      <div className="flex flex-wrap gap-2">
        {courses.map((course, index) => (
          <Course course={course} key={index} handleAddToCart={handleAddToCart}></Course>
        ))}
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
};

export default Courses;