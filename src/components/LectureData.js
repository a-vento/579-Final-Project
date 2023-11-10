import React from 'react';

function LectureData({ lectureIndex }) {
    const lectureMap = new Map();
    lectureMap.set(1, "THIS IS LECTURE 1 MATERIAL");
    lectureMap.set(2, "THIS IS LECTURE 2 MATERIAL");
    lectureMap.set(3, "THIS IS LECTURE 3 MATERIAL");
    lectureMap.set(4, "THIS IS LECTURE 4 MATERIAL");
    lectureMap.set(5, "THIS IS LECTURE 5 MATERIAL");
    lectureMap.set(6, "THIS IS LECTURE 6 MATERIAL");
    lectureMap.set(7, "THIS IS LECTURE 7 MATERIAL");
    lectureMap.set(8, "THIS IS LECTURE 8 MATERIAL");
    lectureMap.set(9, "THIS IS LECTURE 9 MATERIAL");
    lectureMap.set(10, "THIS IS LECTURE 10 MATERIAL");

    console.log(lectureIndex + 1)
    return (
    <div>
        <h2>{lectureIndex + 1}: {lectureMap.get(lectureIndex+1)}</h2>
    </div>
    );
}

export default LectureData;
