import Head from "next/head";
import React from "react";

export const DEFAULT_TITLE = "통합 관리자 시스템 SH";
export const DEFAULT_DESCRIPTION = "통합 관리자 시스템 SH";

interface ISeoHeadProps {
  title?: string;
  description?: string;
}

const SeoHead = ({ title, description }: ISeoHeadProps) => {
  return (
    <Head>
      <title>{title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}</title>
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
    </Head>
  );
};

export default React.memo(SeoHead);