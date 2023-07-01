import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Counter from "./components/counter/Counter";
import { Col, Container, Row ,Button,Nav} from "react-bootstrap";

function App() {
  const [isStopwatchVisible, setIsStopwatchVisible] = useState(true);
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  const handleStopwatchButtonClick = () => {
    setIsStopwatchVisible(false);
  };
  const handleCounterButtonClick = () => {
    setIsCounterVisible(false);
  };
  return (
    <Router>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
     

      <Container className="gap-2 d-grid justify-content-center mt-5">
       
        <Row className="gap-4">
          <Col md={{ span: 3, offset: 2 }}>
            {isStopwatchVisible && isCounterVisible? (
              <Link to="/stopwatch">
                <Button size="lg" onClick={handleStopwatchButtonClick}>Stopwatch</Button>
              </Link>
            ) : (
              <Routes>
                <Route path="/stopwatch" element={<Stopwatch />} />
              </Routes>
            )}
          </Col>
          <Col md={{ span: 3, offset: 2 }}>
            { isCounterVisible && isStopwatchVisible ? (
              <Link to="/counter">
                <Button size="lg" onClick={handleCounterButtonClick}>Counter</Button>
              </Link>
            ) : (
              <Routes>
                <Route path="/counter" element={<Counter />} />
              </Routes>
            )}
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
