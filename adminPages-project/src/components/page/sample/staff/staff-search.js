import Link from "next/link";


export default function StaffSearch() {



  return (
    <div>
        <Link href="/sample/staff/list/new" className="min-w-[8rem] link-with-icon">
          직원 등록 링크
        </Link>
        {/* <Button type="primary" onClick={() => router.push("/sample/staff/list/add")}>
          직원 등록 버튼
        </Button> */}
    </div>
  );
}