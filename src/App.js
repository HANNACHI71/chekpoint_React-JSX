import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    
    <div>
      <p>“Hello, there!” </p>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image imageUrl={product.imageUrl} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
