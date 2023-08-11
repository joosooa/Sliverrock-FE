import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Tab.css";

function MatchingTab() {
  return (
    <>
      <Nav
        justify
        defaultActiveKey="/FriendRequestPage"
        className="matching-tab fixed-bottom"
      >
        <Nav.Item>
          <Nav.Link className="navlink" href="/FriendRequestPage">
            친구 신청
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" href="/FriendListPage">
            친구 목록
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default MatchingTab;
