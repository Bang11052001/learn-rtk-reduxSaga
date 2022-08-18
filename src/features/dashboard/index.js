import { PeopleAlt } from "@mui/icons-material";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentsRankingList, Widget } from "./components";
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
    <Box>
      {/* Loading */}
      {isLoading && (
        <LinearProgress
          sx={{ position: "absolute", top: "4px", width: "100%" }}
        />
      )}

      {/* Statistic  */}
      <Grid container spacing={2} sx={{ position: "relative" }}>
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
      {/* Students Ranking List  */}
      <Box mt={5}>
        <Typography variant="h5" align="left">
          All Students
        </Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Widget title="Highest Students List">
                <StudentsRankingList data={highestStudentList} />
              </Widget>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Widget title="Lowest Students List">
                <StudentsRankingList data={lowestStudentList} />
              </Widget>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Ranking by City  */}
      <Box mt={5}>
        <Typography variant="h5" align="left">
          Ranking By City
        </Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            {rankingByCityList.map((curr, index) => {
              return (
                <Grid key={curr.id} item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Widget title={`TP. ${curr.cityName}`}>
                    <StudentsRankingList data={curr.rankingList} />
                  </Widget>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default DashBoard;
