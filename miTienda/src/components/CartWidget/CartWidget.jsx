import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Button id="cart" variant="success" className="ms-4 btn-fix">
      <FaShoppingBag className="text-light" />
      <Badge pill bg="secondary">
        9
      </Badge>
    </Button>
  );
};
