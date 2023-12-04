import React from 'react';
function LectureData({ lectureIndex }) {
    const lectureMap = new Map();
    lectureMap.set(1,  "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 1 on Canvas");
    lectureMap.set(2, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 2 on Canvas");
    lectureMap.set(3, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 3 on Canvas");
    lectureMap.set(4, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 4 on Canvas");
    lectureMap.set(5, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 5 on Canvas");
    lectureMap.set(6, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 6 on Canvas");
    lectureMap.set(7, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 7 on Canvas");
    lectureMap.set(8, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 8 on Canvas");
    lectureMap.set(9, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 9 on Canvas");
    lectureMap.set(10, "\nCovered in class: \n Basic Vanilla JS \n\n Assigned for homework: \n Module 10 on Canvas");

    return (
        <span style={{ whiteSpace: 'pre-line' }}>{`Lecture ${lectureIndex + 1} \n ${lectureMap.get(lectureIndex+1)}`}</span>
    );
}

export default LectureData;
