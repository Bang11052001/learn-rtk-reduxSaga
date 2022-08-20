import { ArrowBackIos } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import studentsApi from "../../../api/studentsApi";

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
    </Box>
  );
}

export default AddEditPage;
