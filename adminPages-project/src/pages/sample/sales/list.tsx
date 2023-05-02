import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import SalesList from "@/components/page/sample/product/product-list";
import SalesSearch from "@/components/page/sample/sales/sales-search";

const pageHeader: IPageHeader = {
    title: "매출 목록",
  };

export default function salesListPage() {

    return(
        <>
					<SalesSearch />
          <SalesList />
        </>

    );

}

salesListPage.getLayout = getDefaultLayout;
salesListPage.pageHeader = pageHeader;
