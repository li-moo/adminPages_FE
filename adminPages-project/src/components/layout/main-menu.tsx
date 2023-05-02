import { Divider } from "antd";
import { Home, Monitor, Package2, Pencil, Files } from "lucide-react";
import React from "react";
import Menu, { IMenu } from "./nav";

const mainMenuData: IMenu[] = [
  {
    id: "home",
    name: "홈",
    icon: <Home className="w-5 h-5" />,
    link: {
      path: "/",
    },
  },
  {
    id: "product",
    name: "상품 관리",
    icon: <Package2 className="w-5 h-5" />,
    submenu: [
      {
        id: "productList",
        name: "상품 목록",
        link: {
          path: "/sample/product/list",
        },
      },
    ],
  },
  {
    id: "orders",
    name: "발주",
    icon: <Files className="w-5 h-5" />,
    submenu: [
      {
        id: "ordersList",
        name: "발주 목록",
        link: {
          path: "/sample/orders/list",
        },
      },
    ],
  },
  {
    id: "sales",
    name: "매출",
    icon: <Pencil className="w-5 h-5" />,
    submenu: [
      {
        id: "salesList",
        name: "매출 목록",
        link: {
          path: "/sample/sales/list",
        },
      },
    ],
  },
];

const devMenuData: IMenu[] = [
  {
    id: "dev",
    name: "매출조회",
    icon: <Monitor className="w-5 h-5" />,
    submenu: [
      {
        name: "폼",
        link: {
          path: "/sample/form",
        },
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <>
      <>
        <Divider orientation="left" plain>
          메인
        </Divider>

        <Menu data={mainMenuData} />
      </>
      <>
        <Divider orientation="left" plain>
          개발
        </Divider>

        <Menu data={devMenuData} />
      </>
    </>
  );
};

export default React.memo(MainMenu);
