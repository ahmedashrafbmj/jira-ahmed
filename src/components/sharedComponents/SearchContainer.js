import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import { Layout } from "antd";
import "../../components/style.css";
import "../../components/card.css";
import { useSelector, useDispatch } from "react-redux";
import SearchCard from "./SearchCard.js";
// import HeaderComponenet from "../dashboard/Header/header.js";
// import SidebarComponenet from "../dashboard/Sidebar/sidebar.js";
// import FilterCard from "../filterComponents/filterCards.js";
import AssigneeCard from "../assigneeComponents/assigneeCards.js";
const { Sider, Content } = Layout;

function SearchBox({ collapsed, project }) {
  const mainRoom = `mainRoom ${collapsed ? "collapsed" : ""}`;
  const AssigneSearch = useSelector(
    (state) => state?.searchedText.AssigneSearch
  );
  const serachLoader = useSelector(
    (state) => state?.searchedText?.serachLoader
  );
  const assigneeLoader = useSelector(
    (state) => state?.searchedText?.assigneeLoader
  );
  // const filterLoader = useSelector(
  //   (state) => state?.searchedText?.filterLoader
  // );
  // const groupbyData = useSelector((state) => state?.searchedText?.groupbyData);
  // console.log(groupbyData, "groupbyDatagroupbyData");
  //const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "120px",
          // left: "270px",
        }}
      >
        <div
          //style={{ display: "flex", marginLeft: "431px" }}
          className={`mainRoom ${collapsed ? "collapsed" : ""}`}
        >
          <div style={{ display: "flex" }} className="scrollable">
            <>
              {assigneeLoader ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "170vh",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
              AssigneSearch?.map((project, index) => (
                  <Grid item key={index}>
                    {project?.name !== undefined ? (
                      <div
                        style={{
                          padding: "24px 2px",
                          width: "300px",
                          margin: "2px 4px",
                        }}
                        className="custom-card"
                      >
                        <p className="projectName">{project?.name}</p>
                        {project?.assignees.map((item, index) => (
                          <AssigneeCard project={item} />
                        ))}
                      </div>
                    ) : (
                      <p>No Assignee filter found</p>
                    )}
                  </Grid>
                ))
              )}{" "}
            </>
            {/* )} */}
          </div>
        </div>
      </Box>
    </>
  );
}

export default SearchBox;
