import Content from "@components/Content";
import ContentHeader from "@components/ContentHeader";
import ContentWrapper from "@components/ContentWrapper";
import Layout from "@components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <ContentWrapper>
        <ContentHeader
          name="대시보드"
          pathname="dashboard"
          url="/admin/dashboard"
        />

        <Content>내용</Content>
      </ContentWrapper>
    </Layout>
  );
};

export default Dashboard;
