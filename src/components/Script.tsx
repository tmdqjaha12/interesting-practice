import Script from "next/Script";
import { useEffect } from "react";
// beforeInteractive: 페이지가 인터랙티브하기 전에 로드
// afterInteractive(default): 페이지가 대화형이 된 직후 로드
// lazyOnload: 유휴 시간 동안 부하
// worker: (실험적) 웹 작업자에 로드
// import $ from "jquery";

const ComScript = () => {
  console.log("ComScript");
  useEffect(() => {
    // console.log($);
  }, []);
  return (
    <>
      {/* src="/AdminLTE/js/jquery-3.6.0.min.js"
      src="/AdminLTE/js/jquery-ui.min.js" */}
      {/* <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"
        integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY="
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip --> */}
      {/* <Script strategy="lazyOnload">{`$.widget.bridge('uibutton', $.ui.button)`}</Script> */}
      {/* <Script
        dangerouslySetInnerHTML={{
          __html: `$.widget.bridge('uibutton', $.ui.button)`,
        }}
      /> */}
      {/* <!-- Bootstrap 4 --> */}
      {/* <Script
        src="/AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- ChartJS --> */}
      {/* <Script
        src="/AdminLTE/plugins/chart.js/Chart.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- Sparkline --> */}
      {/* <Script
        src="/AdminLTE/plugins/sparklines/sparkline.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- JQVMap --> */}
      {/* <Script
        src="/AdminLTE/plugins/jqvmap/jquery.vmap.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <Script
        src="/AdminLTE/plugins/jqvmap/maps/jquery.vmap.usa.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- jQuery Knob Chart --> */}
      {/* <Script
        src="/AdminLTE/plugins/jquery-knob/jquery.knob.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- daterangepicker --> */}
      {/* <Script
        src="/AdminLTE/plugins/moment/moment.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <Script
        src="/AdminLTE/plugins/daterangepicker/daterangepicker.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- Tempusdominus Bootstrap 4 --> */}
      {/* <Script
        src="/AdminLTE/js/moment.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script> */}
      {/* <Script
        src="/AdminLTE/js/tempusdominus-bootstrap-4.min.js"
        // src="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.39.0/js/tempusdominus-bootstrap-4.min.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- Summernote --> */}
      {/* <Script
        src="/AdminLTE/plugins/summernote/summernote-bs4.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- overlayScrollbars --> */}
      {/* <Script
        src="/AdminLTE/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- AdminLTE App --> */}
      {/* <Script
        src="/AdminLTE/dist/js/adminlte.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
      {/* <Script
        src="/AdminLTE/dist/js/pages/dashboard.js"
        strategy="lazyOnload"
      ></Script> */}
      {/* test */}
      {/* <Script src="/js/sidebar.active.js" strategy="lazyOnload"></Script> */}
      {/* <Script src="/js/utils/sidebar.active.js"></Script>
        <Script src="/js/utils/rs.list.js"></Script> */}
    </>
  );
};

export default ComScript;
