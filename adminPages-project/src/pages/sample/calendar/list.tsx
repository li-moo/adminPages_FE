import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import CalendarList from "@/components/page/sample/calendar/calender-list";
import { Divider } from "antd";

const pageHeader: IPageHeader = {
    title: "일정 목록",
  };

export default function calenderListPage() {

    return(
        <>
        <Divider />
        <CalendarList />
        <Divider />
        </>

    );

}

calenderListPage.getLayout = getDefaultLayout;
calenderListPage.pageHeader = pageHeader;