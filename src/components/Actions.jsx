import { Row, Col, Button} from "react-bootstrap"


const Actions = ({DeleteData, viewData}) => {
  return (
    <Row className="justify-content-md-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-success py-2" onClick={viewData}>عرض البيانات</Button>
            <Button className="btn-danger py-2" onClick={DeleteData}>مسح الكل</Button>
          </Col>
        </Row>
  )
}

export default Actions