import React from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBTypography, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Invoive() {
  return React.createElement(
    MDBContainer,
    { className: "py-5" },
    React.createElement(
      MDBCard,
      { className: "p-4" },
      React.createElement(
        MDBCardBody,
        null,
        React.createElement(
          MDBContainer,
          { className: "mb-2 mt-3" },
          React.createElement(
            MDBRow,
            { className: "d-flex align-items-baseline" },
            React.createElement(
              MDBCol,
              { xl: "9" },
              React.createElement(
                "p",
                { style: { color: "#7e8d9f", fontSize: "20px" } },
                "Invoice > > ",
                React.createElement(
                  "strong",
                  null,
                  "ID: #123-123"
                )
              )
            )
          )
        ),
        React.createElement(
          MDBContainer,
          null,
          React.createElement(
            MDBCol,
            { md: "12", className: "text-center" },
            React.createElement(MDBIcon, {
              far: true,
              icon: "building",
              size: "4x",
              className: "ms-0 ",
              style: { color: "#8f8061" }
            }),
            React.createElement(
              "p",
              { className: "pt-2" },
              "Company Name"
            )
          )
        ),
        React.createElement(
          MDBRow,
          null,
          React.createElement(
            MDBCol,
            { xl: "8" },
            React.createElement(
              MDBTypography,
              { listUnStyled: true },
              React.createElement(
                "li",
                { className: "text-muted" },
                "To: ",
                React.createElement(
                  "span",
                  { style: { color: "#8f8061" } },
                  "John Bootstrap"
                )
              ),
              React.createElement(
                "li",
                { className: "text-muted" },
                "Street, City"
              ),
              React.createElement(
                "li",
                { className: "text-muted" },
                "State, Country"
              ),
              React.createElement(
                "li",
                { className: "text-muted" },
                React.createElement(MDBIcon, { fas: true, icon: "phone-alt" }),
                " 123-456-789"
              )
            )
          ),
          React.createElement(
            MDBCol,
            { xl: "4" },
            React.createElement(
              "p",
              { className: "text-muted" },
              "Invoice"
            ),
            React.createElement(
              MDBTypography,
              { listUnStyled: true },
              React.createElement(
                "li",
                { className: "text-muted" },
                React.createElement(MDBIcon, { fas: true, icon: "circle", style: { color: "#8f8061" } }),
                React.createElement(
                  "span",
                  { className: "fw-bold ms-1" },
                  "ID:"
                ),
                "#123-456"
              ),
              React.createElement(
                "li",
                { className: "text-muted" },
                React.createElement(MDBIcon, { fas: true, icon: "circle", style: { color: "#8f8061" } }),
                React.createElement(
                  "span",
                  { className: "fw-bold ms-1" },
                  "Creation Date: "
                ),
                "Jun 23,2021"
              ),
              React.createElement(
                "li",
                { className: "text-muted" },
                React.createElement(MDBIcon, { fas: true, icon: "circle", style: { color: "#8f8061" } }),
                React.createElement(
                  "span",
                  { className: "fw-bold ms-1" },
                  "Status:"
                ),
                React.createElement(
                  "span",
                  { className: "badge bg-warning text-black fw-bold ms-1" },
                  "Unpaid"
                )
              )
            )
          )
        ),
        React.createElement(
          MDBRow,
          { className: "my-2 mx-1 justify-content-center" },
          React.createElement(
            MDBCol,
            { md: "3", className: "mb-4 mb-md-0" },
            React.createElement(
              "div",
              {
                className: "bg-image ripple rounded-5 mb-4 overflow-hidden d-block",
                "data-ripple-color": "light"
              },
              React.createElement("img", {
                src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp",
                className: "w-100",
                height: "90px",
                alt: "Elegant shoes and shirt"
              }),
              React.createElement(
                "a",
                { href: "#!" },
                React.createElement(
                  "div",
                  { className: "hover-overlay" },
                  React.createElement("div", {
                    className: "mask",
                    style: { backgroundColor: "hsla(0, 0%, 98.4%, 0.2)" }
                  })
                )
              )
            )
          ),
          React.createElement(
            MDBCol,
            { md: "6", className: "mb-4 mb-md-0" },
            React.createElement(
              "p",
              { className: "fw-bold" },
              "Custom suit"
            ),
            React.createElement(
              "p",
              { className: "mb-1" },
              React.createElement(
                "span",
                { className: "text-muted me-2" },
                "Size:"
              ),
              React.createElement(
                "span",
                null,
                "8.5"
              )
            ),
            React.createElement(
              "p",
              null,
              React.createElement(
                "span",
                { className: "text-muted me-2" },
                "Color:"
              ),
              React.createElement(
                "span",
                null,
                "Gray"
              )
            )
          ),
          React.createElement(
            MDBCol,
            { md: "3", className: "mb-4 mb-md-0" },
            React.createElement(
              "h5",
              { className: "mb-2" },
              React.createElement(
                "s",
                { className: "text-muted me-2 small align-middle" },
                "$1500"
              ),
              React.createElement(
                "span",
                { className: "align-middle" },
                "$1050"
              )
            ),
            React.createElement(
              "p",
              { className: "text-danger" },
              React.createElement(
                "small",
                null,
                "You save 25%"
              )
            )
          )
        ),
        React.createElement(
          MDBRow,
          null,
          React.createElement(
            MDBCol,
            { xl: "8" },
            React.createElement(
              "p",
              { className: "ms-3" },
              "Add additional notes and payment information"
            )
          ),
          React.createElement(
            MDBCol,
            { xl: "3" },
            React.createElement(
              MDBTypography,
              { listUnStyled: true },
              React.createElement(
                "li",
                { className: "text-muted ms-3" },
                React.createElement(
                  "span",
                  { "class": "text-black me-4" },
                  "SubTotal"
                ),
                "$1050"
              ),
              React.createElement(
                "li",
                { className: "text-muted ms-3 mt-2" },
                React.createElement(
                  "span",
                  { "class": "text-black me-4" },
                  "Shipping"
                ),
                "$15"
              )
            ),
            React.createElement(
              "p",
              { className: "text-black float-start" },
              React.createElement(
                "span",
                { className: "text-black me-3" },
                " Total Amount"
              ),
              React.createElement(
                "span",
                { style: { fontSize: "25px" } },
                "$1065"
              )
            )
          )
        )
      )
    )
  );
}
