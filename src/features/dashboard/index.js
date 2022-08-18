import { PeopleAlt } from "@mui/icons-material";
import { Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatisticItem from "./components/StatisticItem";
import { dashboardActions } from "./dashboardSlice";

function DashBoard() {
  const dispatch = useDispatch();
  const {
    isLoading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  } = useSelector((state) => state.dashboard);

  const statisticsLabel = {
    maleCount: {
      label: "male",
      icon: "<MaleIcon />",
    },
    femaleCount: { label: "female", icon: "<FemaleIcon />" },
    highMarkCount: { label: "Mark > 8", icon: "<FemaleIcon />" },
    LowMarkCount: { label: "Mark < 5", icon: "<FemaleIcon />" },
  };

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ position: "relative" }}>
      {isLoading && (
        <LinearProgress
          sx={{ position: "absolute", top: "4px", width: "100%" }}
        />
      )}

      {Object.keys(statistics).map((curr, index) => {
        return (
          <Grid key={index} item xs={12} sm={12} md={4} lg={3} xl={3}>
            <StatisticItem
              icon={<PeopleAlt color="primary" fontSize="large" />}
              value={statistics[curr]}
              label={statisticsLabel[curr].label}
            ></StatisticItem>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DashBoard;
