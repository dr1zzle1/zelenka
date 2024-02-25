import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Helmet title="Not Found" />
      <span>404 NOT FOUND</span>
    </div>
  );
};

export default NotFoundPage;
