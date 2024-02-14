import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

const Invoice = () => {
  return (
    <>
    <MDBContainer className="py-5">
      <MDBCard className="p-4">
        <MDBCardBody>
          <MDBContainer className="mb-2 mt-3">
            <MDBRow className="d-flex align-items-baseline">
              <MDBCol xl="9">
                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>
                  Invoice &gt; &gt; <strong>ID: #123-123</strong>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <MDBCol md="12" className="text-center">
              <MDBIcon
                far
                icon="building"
                size="4x"
                className="ms-0 "
                style={{ color: "#8f8061" }}
              />
              <p className="pt-2">Company Name</p>
            </MDBCol>
          </MDBContainer>
          <MDBRow>
            <MDBCol xl="8">
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  To: <span style={{ color: "#8f8061" }}>John Bootstrap</span>
                </li>
                <li className="text-muted">Street, City</li>
                <li className="text-muted">State, Country</li>
                <li className="text-muted">
                  <MDBIcon fas icon="phone-alt" /> 123-456-789
                </li>
              </MDBTypography>
            </MDBCol>
            <MDBCol xl="4">
              <p className="text-muted">Invoice</p>
              <MDBTypography listUnStyled>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#8f8061" }} />
                  <span className="fw-bold ms-1">ID:</span>#123-456
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#8f8061" }} />
                  <span className="fw-bold ms-1">Creation Date: </span>Jun
                  23,2021
                </li>
                <li className="text-muted">
                  <MDBIcon fas icon="circle" style={{ color: "#8f8061" }} />
                  <span className="fw-bold ms-1">Status:</span>
                  <span className="badge bg-warning text-black fw-bold ms-1">
                    Unpaid
                  </span>
                </li>
              </MDBTypography>
            </MDBCol>
          </MDBRow>
          <MDBRow className="my-2 mx-1 justify-content-center">
            <MDBCol md="3" className="mb-4 mb-md-0">
              <div
                className="bg-image ripple rounded-5 mb-4 overflow-hidden d-block"
                data-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                  className="w-100"
                  height="90px"
                  alt="Elegant shoes and shirt"
                />
                <a href="#!">
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "hsla(0, 0%, 98.4%, 0.2)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </MDBCol>
            <MDBCol md="6" className="mb-4 mb-md-0">
              <p className="fw-bold">Custom suit</p>
              <p className="mb-1">
                <span className="text-muted me-2">Size:</span>
                <span>8.5</span>
              </p>
              <p>
                <span className="text-muted me-2">Color:</span>
                <span>Gray</span>
              </p>
            </MDBCol>
            <MDBCol md="3" className="mb-4 mb-md-0">
              <h5 className="mb-2">
                <s className="text-muted me-2 small align-middle">$1500</s>
                <span className="align-middle">$1050</span>
              </h5>
              <p className="text-danger">
                <small>You save 25%</small>
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol xl="8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </MDBCol>
            <MDBCol xl="3">
              <MDBTypography listUnStyled>
                <li className="text-muted ms-3">
                  <span class="text-black me-4">SubTotal</span>$1050
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span class="text-black me-4">Shipping</span>$15
                </li>
              </MDBTypography>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: "25px" }}>$1065</span>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </>
  );
}
export default Invoice;