interface ReactNode {
  children: React.ReactNode;
}
const Content = ({ children }: ReactNode) => {
  return (
    <section className="content">
      <div className="container-fluid">{children}</div>
    </section>
  );
};

export default Content;
