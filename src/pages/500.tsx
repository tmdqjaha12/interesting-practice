// 서버 렌더링 오류 페이지
function Custom500() {
  /** 마크업 시작입니다. */
  return <h1>500 - Server-side error occurred</h1>;
}

export default Custom500;

// https://nextjs.org/docs/advanced-features/custom-error-page#500-page
// 500 오류는 구성 요소에 의해 클라이언트 측과 서버 측 모두에서 처리됩니다 Error.
// 재정의하려면 파일 pages/_error.js을 정의하고 다음 코드를 추가하십시오.

/**
// pages/_error.js
  function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }

  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }

  export default Error
 */

/**
// 내장 오류 페이지 재사용
  import Error from 'next/error'

  export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const errorCode = res.ok ? false : res.statusCode
    const json = await res.json()

    return {
      props: { errorCode, stars: json.stargazers_count },
    }
  }

  export default function Page({ errorCode, stars }) {
    if (errorCode) {
      return <Error statusCode={errorCode} />
    }

    return <div>Next stars: {stars}</div>
  } 
 */
