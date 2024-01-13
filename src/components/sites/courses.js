import React from 'react';
import CourseCards from "./course-cards";
import './center-content.css'

/**
 * Komponent odpowiedzialny za wyświetlanie dostępnych kursów oraz umożliwienie zapisu na nie
 * @returns {Element} - Element do renderowania
 * @constructor
 */
function Courses() {
    return (
        <div className="center-content">
                <CourseCards />
        </div>

    );
}

export default Courses;
