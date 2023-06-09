import GradientBg from "@/components/page/login/gradient-bg";
import LoginForm from "@/components/page/login/login-form";
import { Alert } from "antd";
import { Verified } from "lucide-react";

const LoginPage = () => {
  return (
    // <div className="flex min-h-screen bg-white items-centerw-full">
    <div className="">
      <div className={`relative hidden w-1/2 lg:block`}>
        <GradientBg className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute inline-flex items-center gap-1 px-3 py-2 font-semibold text-white border-2 border-white rounded-lg left-5 bottom-">
        {/* <div className="absolute inline-flex items-center gap-1 px-3 py-2 font-semibold text-white border-2 border-white rounded-lg left-5 bottom-"> */}
          <Verified width={18} height={18} />
          관리자 시스템 
        </div>
      </div>

      {/* <div className="w-full lg:w-1/2"> */}
      <div className="divdiv"
>
      <style jsx>{`
      .divdiv {
        margin-top: 170px;
      }
    `}</style>
        <div className="relative flex items-center justify-center h-full">
          {/* <section className="w-full px-5 pb-10 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6 sm:px-0"> */}
          <section className="w-full px-5 pb-10 text-gray-800 sm:w-4/6 md:w-3/6 lg:w-4/6 xl:w-3/6 sm:px-0">
            {!process.env.NEXT_PUBLIC_API_ENDPOINT ? (
              <Alert
                message="환경변수 설정 오류"
                description={
                  <span>
                 점검 중{" "}
                    <a
                      href="
                      
                      "
                      target="_blank"
                      rel="noreferrer"
                    >
                      참고 링크
                    </a>
                  </span>
                }
                type="error"
                showIcon
                className="my-10"
              />
            ) : null}
            <div className="flex flex-col items-center justify-center px-2 mt-8 sm:mt-0">

              <h2 className="mt-2 text-5xl font-bold leading-tight inter">통합 관리자 시스템</h2>
              <div className="mt-1 text-lg text-gray-400">Admin System</div>
            </div>

            <div className="p-8 lg:w-1/2 mx-auto">

              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;