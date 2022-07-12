interface ReactNode {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ReactNode) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
