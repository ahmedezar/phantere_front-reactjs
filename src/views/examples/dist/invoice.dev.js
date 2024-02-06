"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Invoive;

var _react = _interopRequireDefault(require("react"));

var _mdbReactUiKit = require("mdb-react-ui-kit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Invoive() {
  return _react["default"].createElement(_mdbReactUiKit.MDBContainer, {
    className: "py-5"
  }, _react["default"].createElement(_mdbReactUiKit.MDBCard, {
    className: "p-4"
  }, _react["default"].createElement(_mdbReactUiKit.MDBCardBody, null, _react["default"].createElement(_mdbReactUiKit.MDBContainer, {
    className: "mb-2 mt-3"
  }, _react["default"].createElement(_mdbReactUiKit.MDBRow, {
    className: "d-flex align-items-baseline"
  }, _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    xl: "9"
  }, _react["default"].createElement("p", {
    style: {
      color: "#7e8d9f",
      fontSize: "20px"
    }
  }, "Invoice > > ", _react["default"].createElement("strong", null, "ID: #123-123"))))), _react["default"].createElement(_mdbReactUiKit.MDBContainer, null, _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    md: "12",
    className: "text-center"
  }, _react["default"].createElement(_mdbReactUiKit.MDBIcon, {
    far: true,
    icon: "building",
    size: "4x",
    className: "ms-0 ",
    style: {
      color: "#8f8061"
    }
  }), _react["default"].createElement("p", {
    className: "pt-2"
  }, "Company Name"))), _react["default"].createElement(_mdbReactUiKit.MDBRow, null, _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    xl: "8"
  }, _react["default"].createElement(_mdbReactUiKit.MDBTypography, {
    listUnStyled: true
  }, _react["default"].createElement("li", {
    className: "text-muted"
  }, "To: ", _react["default"].createElement("span", {
    style: {
      color: "#8f8061"
    }
  }, "John Bootstrap")), _react["default"].createElement("li", {
    className: "text-muted"
  }, "Street, City"), _react["default"].createElement("li", {
    className: "text-muted"
  }, "State, Country"), _react["default"].createElement("li", {
    className: "text-muted"
  }, _react["default"].createElement(_mdbReactUiKit.MDBIcon, {
    fas: true,
    icon: "phone-alt"
  }), " 123-456-789"))), _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    xl: "4"
  }, _react["default"].createElement("p", {
    className: "text-muted"
  }, "Invoice"), _react["default"].createElement(_mdbReactUiKit.MDBTypography, {
    listUnStyled: true
  }, _react["default"].createElement("li", {
    className: "text-muted"
  }, _react["default"].createElement(_mdbReactUiKit.MDBIcon, {
    fas: true,
    icon: "circle",
    style: {
      color: "#8f8061"
    }
  }), _react["default"].createElement("span", {
    className: "fw-bold ms-1"
  }, "ID:"), "#123-456"), _react["default"].createElement("li", {
    className: "text-muted"
  }, _react["default"].createElement(_mdbReactUiKit.MDBIcon, {
    fas: true,
    icon: "circle",
    style: {
      color: "#8f8061"
    }
  }), _react["default"].createElement("span", {
    className: "fw-bold ms-1"
  }, "Creation Date: "), "Jun 23,2021"), _react["default"].createElement("li", {
    className: "text-muted"
  }, _react["default"].createElement(_mdbReactUiKit.MDBIcon, {
    fas: true,
    icon: "circle",
    style: {
      color: "#8f8061"
    }
  }), _react["default"].createElement("span", {
    className: "fw-bold ms-1"
  }, "Status:"), _react["default"].createElement("span", {
    className: "badge bg-warning text-black fw-bold ms-1"
  }, "Unpaid"))))), _react["default"].createElement(_mdbReactUiKit.MDBRow, {
    className: "my-2 mx-1 justify-content-center"
  }, _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    md: "3",
    className: "mb-4 mb-md-0"
  }, _react["default"].createElement("div", {
    className: "bg-image ripple rounded-5 mb-4 overflow-hidden d-block",
    "data-ripple-color": "light"
  }, _react["default"].createElement("img", {
    src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
    className: "w-100",
    height: "90px",
    alt: "Elegant shoes and shirt"
  }), _react["default"].createElement("a", {
    href: "#!"
  }, _react["default"].createElement("div", {
    className: "hover-overlay"
  }, _react["default"].createElement("div", {
    className: "mask",
    style: {
      backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"
    }
  }))))), _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    md: "6",
    className: "mb-4 mb-md-0"
  }, _react["default"].createElement("p", {
    className: "fw-bold"
  }, "Custom suit"), _react["default"].createElement("p", {
    className: "mb-1"
  }, _react["default"].createElement("span", {
    className: "text-muted me-2"
  }, "Size:"), _react["default"].createElement("span", null, "8.5")), _react["default"].createElement("p", null, _react["default"].createElement("span", {
    className: "text-muted me-2"
  }, "Color:"), _react["default"].createElement("span", null, "Gray"))), _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    md: "3",
    className: "mb-4 mb-md-0"
  }, _react["default"].createElement("h5", {
    className: "mb-2"
  }, _react["default"].createElement("s", {
    className: "text-muted me-2 small align-middle"
  }, "$1500"), _react["default"].createElement("span", {
    className: "align-middle"
  }, "$1050")), _react["default"].createElement("p", {
    className: "text-danger"
  }, _react["default"].createElement("small", null, "You save 25%")))), _react["default"].createElement(_mdbReactUiKit.MDBRow, null, _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    xl: "8"
  }, _react["default"].createElement("p", {
    className: "ms-3"
  }, "Add additional notes and payment information")), _react["default"].createElement(_mdbReactUiKit.MDBCol, {
    xl: "3"
  }, _react["default"].createElement(_mdbReactUiKit.MDBTypography, {
    listUnStyled: true
  }, _react["default"].createElement("li", {
    className: "text-muted ms-3"
  }, _react["default"].createElement("span", {
    "class": "text-black me-4"
  }, "SubTotal"), "$1050"), _react["default"].createElement("li", {
    className: "text-muted ms-3 mt-2"
  }, _react["default"].createElement("span", {
    "class": "text-black me-4"
  }, "Shipping"), "$15")), _react["default"].createElement("p", {
    className: "text-black float-start"
  }, _react["default"].createElement("span", {
    className: "text-black me-3"
  }, " Total Amount"), _react["default"].createElement("span", {
    style: {
      fontSize: "25px"
    }
  }, "$1065")))))));
}