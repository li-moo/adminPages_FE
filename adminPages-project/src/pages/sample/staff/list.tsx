import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import StaffSearch from "@/components/page/sample/staff/staff-search";

const pageHeader: IPageHeader = {
    title: "직원 목록",
  };

export default function staffListPage() {

    return(
        <>
          <StaffSearch />
        </>

    );

}

staffListPage.getLayout = getDefaultLayout;
staffListPage.pageHeader = pageHeader;
