import React from "react";
import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import MyMenu from '../../assets/Icon/menu.png'
import Logo from '../../assets/images/logo.png'
 
const DrawerForMobile=() => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
        
        <Button onClick={openDrawer} className="btn btn-primary bg-transparent text-blue-500 font-bold  shadow-none hover:bg-transparent hover:text-blue-500 hover:shadow-none -py-2 lg:hidden">
        <img src={MyMenu} alt=""/>
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="bg-slate-500 bg-opacity-90 backdrop-blur-md w-[200px] brightness-150">
        <div className="mb-2 flex items-center justify-between p-3 bg-blue-gray-800 ">
          <img className="h-6 " src={Logo} alt="" />
          <IconButton variant="text" color="blue-gray" className="flex justify-end" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-customBlue-dark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>

        </div>
        <List className="text-textColor font-semibold ">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>contact</li>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerForMobile;