import {
  LegacyRef,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";
import Nav from "./Nav";
import NavItem from "./NavItem";
import Link from "next/link";

interface ReactNode {
  children: React.ReactNode;
}

// interface AsideType {

// }

const Layout = ({ children }: ReactNode) => {
  useEffect(() => {
    // preloader
    setTimeout(function () {
      var preloader = $(".preloader");

      if (preloader) {
        preloader.css("height", 0);
        setTimeout(function () {
          preloader.children().hide();
        }, 200);
      }
    }, 200);
  }, []);

  const [fullScreen, setFullScreen] = useState<boolean>(false); // 전체화면 state
  const [sideMenu, setSideMenu] = useState<boolean>(true); // 전체화면 state

  // 전체화면 버튼 control
  const onClickFullScreenBtn = useCallback(() => {
    if (fullScreen) {
      document.exitFullscreen(); // close
      setFullScreen(!fullScreen);
    } else {
      document.documentElement.requestFullscreen(); // open
      setFullScreen(!fullScreen);
    }
  }, [fullScreen]);

  // 좌측 사이드바 버튼 control
  const onClickSideBarBtn = useCallback(() => {
    // sidebar-mini layout-fixed => sidebar-mini layout-fixed sidebar-collapse
    const body = document.getElementById("body");
    if (!body) return;
    if (sideMenu) {
      body.className = "sidebar-mini layout-fixed sidebar-collapse"; // close
      setSideMenu(!sideMenu);
    } else {
      body.className = "sidebar-mini layout-fixed"; // open
      setSideMenu(!sideMenu);
    }
  }, [sideMenu]);

  return (
    <div className="wrapper">
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/AdminLTE/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
              onClick={onClickSideBarBtn}
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-toggle="dropdown"
              href="#"
              title="알림"
            >
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
              title="전체화면"
              onClick={onClickFullScreenBtn}
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" role="button" title="로그아웃">
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </nav>

      <aside className="main-sidebar sidebar-light-purple elevation-4">
        <a href="https://www.rs-team.com/" className="brand-link">
          <img
            src="/AdminLTE/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: "0.8" }}
          />
          <span className="brand-text font-weight-light">RsAdmin</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/AdminLTE/dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                관리자
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column h-100"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <Nav
                name="대시보드"
                path="/admin/dashboard"
                icon="fas fa-tachometer-alt"
                angle={false}
              ></Nav>

              <Nav name="보안관리" path="#" icon="fas fas fa-copy" angle={true}>
                <NavItem
                  name="아이피 관리"
                  path="/admin/security/ip?type=1"
                  icon="far fa-circle"
                />
              </Nav>

              <Nav
                name="홈페이지관리"
                path="#"
                icon="fas fas fa-home"
                angle={true}
              >
                <NavItem
                  name="사이트 정보"
                  path="/admin/homepage/config"
                  icon="far fa-circle"
                />
                <NavItem
                  name="배너"
                  path="/admin/homepage/banner"
                  icon="far fa-circle"
                />
                <NavItem
                  name="팝업"
                  path="/admin/homepage/popup"
                  icon="far fa-circle"
                />
                <NavItem
                  name="알림"
                  path="/admin/homepage/alrim"
                  icon="far fa-circle"
                />
                <NavItem
                  name="아이프레임"
                  path="/admin/homepage/iframe"
                  icon="far fa-circle"
                />
              </Nav>

              <Nav
                name="회원관리"
                path="#"
                icon="fas fas fa-user-alt"
                angle={true}
              >
                <NavItem
                  name="사용자"
                  path="/admin/user/public"
                  icon="far fa-circle"
                />
                <NavItem
                  name="관리자"
                  path="/admin/user/admin"
                  icon="far fa-circle"
                />
                <NavItem
                  name="그룹"
                  path="/admin/user/group"
                  icon="far fa-circle"
                />
                <NavItem
                  name="설정"
                  path="/admin/user/config"
                  icon="far fa-circle"
                />
                <NavItem
                  name="권한"
                  path="/admin/user/auth"
                  icon="far fa-circle"
                />
                <NavItem
                  name="밴"
                  path="/admin/homepage/ban"
                  icon="far fa-circle"
                />
                <NavItem
                  name="출석"
                  path="/admin/homepage/attend"
                  icon="far fa-circle"
                />
              </Nav>

              <Nav
                name="게시판관리"
                path="#"
                icon="fas fas fa-table"
                angle={true}
              >
                <NavItem
                  name="설정"
                  path="/admin/board/config"
                  icon="far fa-circle"
                />
                <NavItem
                  name="카테고리"
                  path="/admin/board/category"
                  icon="far fa-circle"
                />
                <NavItem
                  name="게시판"
                  path="/admin/board/board"
                  icon="far fa-circle"
                />
                <NavItem
                  name="게시물"
                  path="/admin/board/post"
                  icon="far fa-circle"
                />
                <NavItem
                  name="댓글"
                  path="/admin/board/comment"
                  icon="far fa-circle"
                />
                <NavItem
                  name="신고"
                  path="/admin/board/report"
                  icon="far fa-circle"
                />
              </Nav>

              <Nav name="SMS관리" path="#" icon="fas fas fa-phone" angle={true}>
                <NavItem
                  name="설정"
                  path="/admin/sms/config"
                  icon="far fa-circle"
                />
                <NavItem
                  name="문자 보내기"
                  path="/admin/sms/send"
                  icon="far fa-circle"
                />
                <NavItem
                  name="전송내역"
                  path="/admin/sms/log"
                  icon="far fa-circle"
                />
              </Nav>

              <Nav name="샵#" path="#" icon="fas fas fa-tree" angle={true}>
                <NavItem
                  name="설정"
                  path="/admin/shop/config"
                  icon="far fa-circle"
                />
                <NavItem
                  name="카테고리"
                  path="/admin/shop/category"
                  icon="far fa-circle"
                />
                <NavItem
                  name="상품"
                  path="/admin/shop/item"
                  icon="far fa-circle"
                />
                <NavItem
                  name="주문"
                  path="/admin/shop/item"
                  icon="far fa-circle"
                />
                <NavItem
                  name="쿠폰"
                  path="/admin/shop/coupon"
                  icon="far fa-circle"
                />
                <NavItem
                  name="포인트"
                  path="/admin/shop/point"
                  icon="far fa-circle"
                />
                <NavItem
                  name="FAQ"
                  path="/admin/shop/point"
                  icon="far fa-circle"
                />
                <NavItem
                  name="QnA"
                  path="/admin/shop/point"
                  icon="far fa-circle"
                />
              </Nav>
            </ul>
          </nav>
        </div>
      </aside>
      {children}
      <footer className="main-footer">
        <strong>
          Corp &copy; 2022{" "}
          {/* <a href="https://www.rs-team.com/" target="_blank"> */}
          rs-team.com
          {/* </a> */}.
        </strong>
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.1
        </div>
        <div className="float-right d-none d-sm-inline-block mr-4">
          <b>template</b> &nbsp;
          {/* <Link href="/admin/copyright">
            <a>adminLTE3</a>
          </Link> */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
