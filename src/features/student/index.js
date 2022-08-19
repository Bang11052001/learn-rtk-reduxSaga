import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AddEditPage, ListPage } from "./pages/index";
import { studentActions } from "./studentSlice";

function StudentFeature() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentActions.fetchStudentList({ _page: 1, _limit: 15 }));
  }, [dispatch]);

  return (
    <Routes>
      <Route path={"/"} element={<ListPage />} />
      <Route path={"/add"} element={<AddEditPage />} />
      <Route path={"/:id"} element={<AddEditPage />} />
    </Routes>
  );
}

export default StudentFeature;
