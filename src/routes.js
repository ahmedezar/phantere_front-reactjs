
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Resetpassword from "views/examples/Resetpassword.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ListeUser from "views/examples/ListeUser";
import Addinvoice from './views/examples/Addinvoice';

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: "ni ni-tv-2 text-primary",
    component: <Addinvoice />,
    layout: "/admin",
  },
  
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/listeuser",
    name: "ListeUser",
    icon: "ni ni-circle-08 text-pink",
    component: <ListeUser />,
    layout: "/admin",
  },
  {
    path: "/resetpassword",
    name: "Resetpassword",
    icon: "ni ni-circle-08 text-pink",
    component: <Resetpassword />,
    layout: "/auth",
  },
];
export default routes;
