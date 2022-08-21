import { ArrowBackIos } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import studentsApi from "../../../api/studentsApi";
import { StudentForm } from "../components";

function AddEditPage() {
  const params = useParams();
  const [student, setStudent] = useState();
  const studentId = params.id;

  useEffect(() => {
    if (!studentId) return;

    (async () => {
      try {
        const resStudent = await studentsApi.getById(studentId);
        setStudent(resStudent);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [studentId]);

  const initialValues = {
    name: "",
    age: "",
    mark: "",
    city: "",
    gender: "male",
    ...student,
  };

  const handleStudentFormSubmit = async (data) => {
    if (studentId) {
      await studentsApi.update(data);
    } else {
      await studentsApi.add(data);
    }
  };

  return (
    <Box>
      <Link to="/admin/students" style={{ textDecoration: "none" }}>
        <Typography variant="caption">
          <ArrowBackIos />
          Back to students
        </Typography>
      </Link>
      <Typography variant="h4">
        {studentId ? "edit page" : "add page"}
      </Typography>

      {(!studentId || student) && (
        <Box mt={3}>
          <StudentForm
            initialValues={initialValues}
            onSubmit={handleStudentFormSubmit}
          />
        </Box>
      )}
    </Box>
  );
}

export default AddEditPage;
