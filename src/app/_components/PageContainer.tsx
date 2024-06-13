import React, { ReactNode } from "react";

type PageContainerProps = {
  content: ReactNode; // content can be any valid ReactNode
};

const PageContainer: React.FC<PageContainerProps> = ({ content }) => {
  return <div className="mb-7 rounded-3xl bg-zinc-100 p-7">{content}</div>;
};

export default PageContainer;
