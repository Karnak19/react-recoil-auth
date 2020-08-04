import React from "react";
import { Row, Col, Alert } from "reactstrap";

function Admin() {
  return (
    <Row className="justify-content-center">
      <Col className="text-center">
        <Alert color="success">You are successfully logged in so you can access this page</Alert>
      </Col>
    </Row>
  );
}

export default Admin;
