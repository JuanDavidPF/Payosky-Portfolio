"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Badge,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "../../atoms/ThemeSwitcher/ThemeSwitcher";
import ThemedLogo from "../../atoms/ThemedLogo/ThemedLogo";

export default function MainNavbar() {
  return (
    <Navbar
      position="static"
      classNames={{
        base: "p-2 lg:p-4 lg:bg-transparent lg:backdrop-filter-none",
        wrapper: "px-4 sm:px-6",
        item: "data-[active=true]:text-primary ",
      }}
      height="60px"
    >
      <NavbarContent
        className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content2 px-4 dark:bg-content1 sm:flex"
        justify="start"
      >
        {/* Mobile Brand */}
        <NavbarBrand>
          <ThemedLogo />
        </NavbarBrand>

        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current="page"
            className="flex gap-2 text-inherit"
            href="#"
          >
            Deployments
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Analytics
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-2 text-inherit" href="#">
            Settings
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Brand */}
      <NavbarBrand className="sm:hidden">
        <NavbarMenuToggle className="mr-2 h-6 s" />
        <ThemedLogo />
      </NavbarBrand>

      <NavbarContent
        className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1"
        justify="end"
      >
        {/* Search */}
        <NavbarItem className="mr-2 hidden lg:flex">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper:
                "bg-default-100 group-data-[hover=true]:bg-default-50 group-data-[focus=true]:bg-100",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            radius="full"
            startContent={
              <Icon
                className="text-default-500"
                icon="solar:magnifer-linear"
                width={20}
              />
            }
          />
        </NavbarItem>
        {/* Mobile search */}
        <NavbarItem className="lg:hidden">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:magnifer-linear"
              width={20}
            />
          </Button>
        </NavbarItem>
        {/* Theme change */}
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        {/* Settings */}
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:settings-linear"
              width={24}
            />
          </Button>
        </NavbarItem>
        {/* Notifications */}
        <NavbarItem className="flex">
          <Popover offset={12} placement="bottom-end">
            <PopoverTrigger>
              <Button
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light"
              >
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-default-500"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
              <div>asd</div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive>
          <Link aria-current="page" className="w-full" color="primary" href="#">
            Deployments
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Analytics
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Team
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" color="foreground" href="#">
            Settings
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
