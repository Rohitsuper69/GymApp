import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesCard from "./ExercisesCard";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExercisesCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
