import { useDashboard } from "@/client/sample/dashboard";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CalendarSample from "@/components/page/index/calendar-sample";
import StatisticSample from "@/components/page/index/statistic-sample";
import { useAuth } from "@/lib/auth/auth-provider";
import { Alert, Divider, Skeleton } from "antd";
import ProductList from "../sample/product/product-list";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const HeadOfficePage: IDefaultLayoutPage = () => {
  const { session } = useAuth();
  const { data, error } = useDashboard();

  return (
    <>
      <h2 className="title">👋 {session.user.name || "관리자"}님 안녕하세요!</h2>

      <div className="grid grid-cols-3">
        <div className="w-1/3">
            <ProductList />
        </div>
            <div className="w-1/3">
            <ProductList />
            </div> 
            <div className="w-1/3">
            <ProductList />
        </div>

      </div>

    </>
  );
};

HeadOfficePage.getLayout = getDefaultLayout;
HeadOfficePage.pageHeader = pageHeader;

export default HeadOfficePage;