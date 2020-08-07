import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader />
    </div>
  );
};

export default TeacherList;
