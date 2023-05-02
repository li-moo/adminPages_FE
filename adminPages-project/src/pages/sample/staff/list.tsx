import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import StaffSearch from "@/components/page/sample/staff/staff-search";
import StaffList from "@/components/page/sample/staff/staff-list";

const pageHeader: IPageHeader = {
    title: "직원 목록",
  };

export default function staffListPage() {

    return(
        <>
          <StaffSearch />
          <h1>여기서부터 리스트</h1>
          <StaffList />
        </>

    );

}

staffListPage.getLayout = getDefaultLayout;
staffListPage.pageHeader = pageHeader;