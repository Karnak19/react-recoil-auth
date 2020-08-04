import React, { useState } from "react";
import Axios from "axios";
import { useSetRecoilState } from "recoil";
import { Row, Col, Button, Spinner } from "reactstrap";

import { user as userAtom, isAuth as isAuthAtom, token as tokenAtom } from "../recoil/atoms";

function Home() {
  const [loading, setLoading] = useState(false);
  const setUser = useSetRecoilState(userAtom);
  const setIsAuth = useSetRecoilState(isAuthAtom);
  const setToken = useSetRecoilState(tokenAtom);

  const login = () => {
    setLoading(true);
    Promise.all([
      Axios.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
      Axios.get("https://reqres.in/api/users/2"),
    ])
      .then(([resLogin, resUser]) => {
        setIsAuth(true);
        setUser(resUser.data.data);
        setToken(resLogin.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Row className="justify-content-center">
      <Col xs="2" className="text-center">
        <Button color="success" outline block onClick={login} disabled={loading}>
          {!loading ? "Login !" : <Spinner size="sm" />}
        </Button>
      </Col>
    </Row>
  );
}

export default Home;
