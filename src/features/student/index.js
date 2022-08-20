import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { cityActions } from "../city/citySlice";
import { AddEditPage, ListPage } from "./pages/index";

function StudentFeature() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityActions.fetchCityList());
  });

  return (
    <Routes>
      <Route path={"/"} element={<ListPage />} />
      <Route path={"/add"} element={<AddEditPage />} />
      <Route path={"/:id"} element={<AddEditPage />} />
    </Routes>
  );
}

export default StudentFeature;
