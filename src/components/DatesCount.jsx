import { Row, Col } from "react-bootstrap";

// import Data from './Data'
const DatesCount = ({user}) => {
  return (
    <Row className="justify-content-md-center">
      <Col sm="8">لديك {user.length} مواعيد اليوم</Col>
    </Row>
  );
};

export default DatesCount;
