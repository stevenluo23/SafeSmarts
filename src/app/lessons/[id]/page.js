"use client";
import React, { useEffect, useState } from "react";

const LessonModule = ({ params }) => {
  const [lessonModule, setLessonModule] = useState(null);
  const id = params.id;
  // href="/lessons/1" => id = 1

  useEffect(() => {
    // Define the function that fetches data
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:8080/lessons/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLessonModule(data);
      } catch (error) {
        console.error("Failed to fetch lesson module:", error);
        // Handle error here, e.g., set error state, show error message, etc.
      }
    };

    // Call the fetch function
    fetchData();
  }, [id]); // Dependency array, ensures useEffect runs once or when `id` changes

  // Conditional rendering based on the state of `lessonModule`
  if (!lessonModule) {
    return <div>Loading...</div>; // Show a loading state or similar
  }

  // Render out your lesson module using the fetched data
  return (
    <div>
      <h1>{lessonModule.title}</h1>
      <p>{lessonModule.description}</p>
      {/* Render other parts of lessonModule as needed */}
    </div>
  );
};

export default LessonModule;
