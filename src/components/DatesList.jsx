import { Row , Col} from "react-bootstrap";


const DatesList = ({user}) => {
  return (
    <Row className="justify-content-md-center">
    <Col sm="8" className="my-2">

      {/* Users Container */}
      <div className="users p-2 main">
        {user.length
          ? user.map((user) => {
              return (
                <div className=" py-3 border-bottom d-flex" key={user.name}>
                  <img
                    src={user.img}
                    alt="profile"
                    className="profile"
                  />
                  <div className="content px-3">
                    <p className="d-inline fs-5">{user.name}</p>
                    <p>{user.time}</p>
                  </div>
                </div>
              );
            })
          : <h1 className="text-center"> لا يوجد مواعيد اليوم</h1>}
      </div>

    </Col>
  </Row>
  )
}

export default DatesList