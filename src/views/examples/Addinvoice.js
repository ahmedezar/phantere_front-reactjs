import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";
import IconContext from "@ant-design/icons/lib/components/Context";
import { margin } from "@mui/system";
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components

const Addinvoice = () => {
  const [image, setImage] = useState(null);
  const [items, setItems] = useState([]);

  const handleImageUpload = (files) => {
    const selectedImage = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      // Lorsque le fichier est chargé, mettez à jour l'état de l'image avec les données de l'image
      setImage(event.target.result);
    };

    // Lecture du fichier en tant que Data URL
    reader.readAsDataURL(selectedImage);
  };
  const handleAddItem = () => {
    setItems([...items, { quantity: "", unit: "", price: "", total: "" }]);
  };


  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemChange = (index, key, value) => {
    const updatedItems = [...items];
    updatedItems[index][key] = value;
    if (key === "quantity" || key === "price") {
      updatedItems[index].total = (updatedItems[index].quantity || 0) * (updatedItems[index].price || 0);
    }
    setItems(updatedItems);
  };

  const getTotalOrder = () => {
    return items.reduce((acc, item) => acc + parseFloat(item.total || 0), 0);
  };


  return (
    <>
      <Container className="mt-7" fluid>

        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-2">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Add invoice</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                Invoice information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="2">
                    <FormGroup>
                      {/* Affichage de l'image téléchargée */}
                      {image && (
                        <img
                          src={image}
                          alt="Uploaded"
                          style={{ width: "20%", height: "40%" }}
                        />
                      )}
                    </FormGroup>
                    <FormGroup className="text-left">
                      <Input
                        type="file"
                        id="uploadImage"
                        onChange={(e) => handleImageUpload(e.target.files)}
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="uploadImage"
                        className="btn btn-primary btn-sm"
                      >
                        Upload Logo
                      </label>
                    </FormGroup>
                  </Col>
                  <Col lg="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Client
                      </label>
                      <Input
                        className="form-control-alternative"
                        // defaultValue="lucky.jesse"
                        id="input-username"
                        placeholder="Client Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="N° SIREN">
                        N° SIREN:
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="N° SIREN"
                        placeholder="N° SIREN"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor=" N° TVA">
                        N° TVA:
                      </label>
                      <Input
                        className="form-control-alternative"
                        id=" N° TVA"
                        placeholder=" N° TVA"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="numFact">
                        numFact:
                      </label>
                      <Input
                        className="form-control-alternative"
                        id=" numFact"
                        placeholder=" numFact"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-first-name"
                      >
                        Invoice date
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Lucky"
                        id="input-first-name"
                        placeholder="First name"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <Card className="bg-secondary shadow">
                <CardBody>
                  <Form>
                    {/* Vos champs de formulaire existants ici */}

                    {/* Section pour quantité, unité, prix, total et boutons */}
                    <div className="pl-lg-4">
                      <h6 className="heading-small text-muted mb-4">Order</h6>
                      {items.map((item, index) => (
                        <Row key={index}>
                          <Col lg="2">
                            <FormGroup>
                              <label>Quantité</label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Quantité"
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "quantity",
                                    e.target.value
                                  )
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label>Unité</label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Unité"
                                type="text"
                                value={item.unit}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "unit",
                                    e.target.value
                                  )
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="2">
                            <FormGroup>
                              <label>Prix</label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Prix"
                                type="number"
                                value={item.price}
                                onChange={(e) =>
                                  handleItemChange(
                                    index,
                                    "price",
                                    e.target.value
                                  )
                                }
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="2">
                            <FormGroup>
                              <label>Total</label>
                              <Input
                                className="form-control-alternative"
                                placeholder="Total"
                                type="number"
                                value={item.total}
                                readOnly
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="2">
                            <Button
                              color="danger"
                              className="mt-4"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <DeleteFilled />
                            </Button>
                          </Col>
                        </Row>
                      ))}

                      <Row>
                        
                      <Col lg="8">
                      <Button 
                        color="primary"
                        className="mt-4"
                        onClick={handleAddItem}
                      >
                        Add field
                      </Button>
                      </Col>
                      <Col lg="2"  >
                          <FormGroup>
                            <label>Total order</label>
                            <Input
                              className="form-control-alternative"
                              placeholder="Total"
                              type="number"
                              value={getTotalOrder()}
                              readOnly
                            />
                          </FormGroup>
                        </Col>
                   
                      </Row>
                    </div>

                    {/* Autres champs et boutons ici */}
                  </Form>
                </CardBody>
              </Card>
              <hr className="my-4" />
              {/* Address */}
              <h6 className="heading-small text-muted mb-4">
                Contact information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-address"
                      >
                        Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        id="input-address"
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        City
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="New York"
                        id="input-city"
                        placeholder="City"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Country
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue="United States"
                        id="input-country"
                        placeholder="Country"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Postal code
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-postal-code"
                        placeholder="Postal code"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Description */}
              <h6 className="heading-small text-muted mb-4">Description</h6>
              <div className="pl-lg-4">
                <FormGroup>
                  <label>Description</label>
                  <Input
                    className="form-control-alternative"
                    placeholder="A few words about you ..."
                    rows="4"
                    defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                    type="textarea"
                  />
                </FormGroup>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
};

export default Addinvoice;
