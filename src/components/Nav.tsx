import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAsiaAustraliaIcon,
  PhotoIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="aboutus"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">
          <UserGroupIcon className="h-[18px] w-[18px]" />
          Our Story
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="gallery"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900">
          <PhotoIcon className="h-[18px] w-[18px]" />
          Gallery
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="issues"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4  text-gray-900">
          <GlobeAsiaAustraliaIcon className="h-[18px] w-[18px]" />
          Environmental Issues
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-10 h-max w-full rounded-lg py-2 px-4 my-4 bg-white/30 shadow-xl backdrop-blur-3xl lg:px-8 lg:py-4 mx-auto max-w-screen-xl">
      <div className="flex items-center justify-between text-gray-900">
        <Typography
          as="a"
          href="home"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          THANK YOU JEJU
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button className="bg-gray-900 text-sm p-2">Register Now</Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden bg-gray-900 text-gray-900">
          <Button>Register Now</Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
