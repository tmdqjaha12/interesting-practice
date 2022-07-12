// head태그 내부에 들어갈 부분 - 한 번만 실행
// 특정 페이지에서만 실행할 스크립트는 해당 컴포넌트에서
// 공통으로 실행할 스크립트는 레이아웃에서

const Header = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Drone-2</title>

      {/* <!-- Google Font: Source Sans Pro --> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      {/* <!-- Font Awesome --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/fontawesome-free/css/all.min.css"
      />
      {/* <!-- Ionicons --> */}
      <link
        rel="stylesheet"
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      />
      {/* <!-- Tempusdominus Bootstrap 4 --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
      />
      {/* <!-- iCheck --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
      />
      {/* <!-- JQVMap --> */}
      <link rel="stylesheet" href="/AdminLTE/plugins/jqvmap/jqvmap.min.css" />
      {/* <!-- Theme style --> */}
      <link rel="stylesheet" href="/AdminLTE/dist/css/adminlte.min.css" />
      {/* <!-- overlayScrollbars --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
      />
      {/* <!-- Daterange picker --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/daterangepicker/daterangepicker.css"
      />
      {/* <!-- summernote --> */}
      <link
        rel="stylesheet"
        href="/AdminLTE/plugins/summernote/summernote-bs4.min.css"
      />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.38.0/css/tempusdominus-bootstrap-4.min.css"
        crossOrigin="anonymous"
      /> */}
    </>
  );
};

export default Header;
