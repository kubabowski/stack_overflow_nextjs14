import React from "react";

const page = ({ params }: { params: { _id: string } }) => {
  return <div className="mt-20">{params._id}</div>;
};

export default page;
