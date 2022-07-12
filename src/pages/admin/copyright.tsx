import Layout from "@components/Layout";

const Admin = () => {
  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Copyright</h1>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              <strong>
                Copyright &copy; 2014-2021{" "}
                <a href="https://adminlte.io">AdminLTE.io</a>.
              </strong>
              All rights reserved.
              <div className="">
                <b>Version</b> 3.2.0
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
