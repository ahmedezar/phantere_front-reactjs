import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown,
    DropdownToggle,
  } from "reactstrap";
  import Header from "components/Headers/Header.js";
  import { useEffect, useState } from "react";
  
  const ListeUser = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/auth/users', {
              headers: { "content-type": "application/json" },
              credentials: 'include',
            });
    
            if (!response.ok) {
              console.error('Error fetching data:', response.statusText);
              return;
            }
    
            const userData = await response.json();
            setUsers(userData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
      const handleDeleteUser = async (_id) => {

        try {
          if (!_id) {
            console.error('User ID is undefined');
            return;
          }
    
          const response = await fetch(`http://localhost:4000/auth/user/${_id}`, {
            method: 'DELETE',
            credentials: 'include',
          });
    
          if (!response.ok) {
            console.error('Error deleting user:', response.statusText);
            // Handle error as needed
          } else {
            // Update the user list after successful deletion
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== _id));
          }
        } catch (error) {
          console.error('Error deleting user:', error);
          // Handle error as needed
        }
      };
    return (
      <>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Liste Users</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">User Email</th>
                      <th scope="col">Budget</th>
                      <th scope="col">Status</th>
                      <th scope="col">User name</th>
                      <th scope="col">User SurName</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">{user.email}</span>
                            </Media>
                          </Media>
                        </th>
                        {/* <td>{user.budget}</td> */}
                      <tr>  $2,500 USD</tr>
                        <td>
                          {/* <Badge color="" className="badge-dot mr-4">
                            <i className={`bg-${user.statusColor}`} />
                            {user.status}
                          </Badge> */}
                          <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <Media className="align-items-center">
                              <Media>
                                <span className="mb-0 text-sm">{user.name}</span>
                              </Media>
                            </Media>
                          </div>
                        </td>
                        <td>{user.surname}</td>
                        {/* Add more columns as needed */}
                        <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              // Call a function to delete the user by ID
              handleDeleteUser(user._id);
            }}
          >
            Delete User
          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                      </tr>
                      
                    ))}
                   
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          </Container>
    </>
  );
};

export default ListeUser;
