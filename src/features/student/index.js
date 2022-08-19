import { Route, Routes } from "react-router-dom";
import { AddEditPage, ListPage } from "./pages/index";

function StudentFeature() {
  return (
    <Routes>
      <Route path={"/"} element={<ListPage />} />
      <Route path={"/add"} element={<AddEditPage />} />
      <Route path={"/:id"} element={<AddEditPage />} />
    </Routes>
  );
}

export default StudentFeature;
