import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Tab.css";

function Tab() {
  return (
    <>
      <Nav justify defaultActiveKey="/home" className="fixed-bottom">
        <Nav.Item>
          <Nav.Link className="navlink" href="/home">
            추천친구
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" href="/ClubPage">
            동호회
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" href="/FriendRequestPage">
            매칭
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navlink" href="/MyPage">
            내정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Tab;
