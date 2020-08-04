import React from "react";
import { Row, Col } from "reactstrap";

function Admin() {
  return (
    <Row className="justify-content-center">
      <Col xs="2" className="text-center">
        You are successfully logged in so you can access this page
      </Col>
    </Row>
  );
}

export default Admin;
