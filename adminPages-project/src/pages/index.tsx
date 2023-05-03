import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import pageHeader from "@/components/layout/page-header";
import HeadOfficePage from "@/components/page/index/headoffice";


export default function IndexPage() {

  return(

    <div>
      <HeadOfficePage />
    </div>
  );
}

IndexPage.getLayout = getDefaultLayout;
IndexPage.pageHeader = pageHeader;