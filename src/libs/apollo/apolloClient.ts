import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { IncomingMessage, ServerResponse } from "http";
import { useMemo } from "react";

export const LOCALSTORAGE_A_TOKEN = "token";

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

export const pdfHtmlVar = makeVar("");
export const selectGroupsItemVar = makeVar(0);
export const selectSideItemVar = makeVar("");
export const isMobileVar = makeVar(false);
if (typeof window === "undefined") {
} else {
  isMobileVar(
    Boolean(
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    )
  );
}

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        selectGroupsItem: {
          read() {
            return selectGroupsItemVar();
          },
        },
        selectSideItem: {
          read() {
            return selectSideItemVar();
          },
        },
        isMobile: {
          read() {
            return isMobileVar();
          },
        },
      },
    },
  },
});

let apolloClient: ApolloClient<NormalizedCacheObject>;
const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  credentials: "same-origin",
});

// request header config
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Authorization: localStorage.getItem(LOCALSTORAGE_A_TOKEN) || "",
      // Authorization: authTokenVar() ? `Bearer ${authTokenVar()}` : "",
    },
  };
});

function createApolloClient(
  context: ResolverContext | null,
  accesstoken: string
): ApolloClient<NormalizedCacheObject> {
  const is_server = typeof window === "undefined";
  if (is_server) {
    return new ApolloClient({
      ssrMode: true,
      uri: process.env.GRAPHQL_URL,
      cache: cache,
      headers: {
        Authorization: accesstoken ? accesstoken : "",
      },
      credentials: "same-origin",
    });
  } else {
    return new ApolloClient({
      ssrMode: false,
      link: authLink.concat(httpLink),
      cache: cache,
    });
  }
}

export function initializeApollo(
  initialState: any = null,
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send // 'getStaticProps'와 같은 Next.js 데이터 가져 오기 메소드가있는 페이지는 can send
  // a custom context which will be used by `SchemaLink` to server render pages // 서버 렌더링 페이지에`SchemaLink`가 사용할 사용자 정의 컨텍스트
  context: ResolverContext | null,
  accesstoken?: string
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient =
    apolloClient ?? createApolloClient(context, accesstoken ?? "");
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state // 페이지에 Apollo Client를 사용하는 Next.js 데이터 가져 오기 방법이있는 경우 초기 상태
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching // 클라이언트 측 데이터를 가져 오는 동안로드 된 기존 캐시 가져 오기
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps // getStaticProps / getServerSideProps에서 전달 된 데이터를 사용하여 캐시를 복원합니다.
    // combined with the existing cached data // 기존 캐시 데이터와 결합
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client // SSG 및 SSR의 경우 항상 새 Apollo 클라이언트를 만듭니다.
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client // 클라이언트에서 Apollo 클라이언트를 한 번 생성합니다.
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

// eslint-disable-next-line
export function useApollo(
  initialState: any,
  accesstoken: string
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(
    () => initializeApollo(initialState, null, accesstoken),
    [initialState, accesstoken]
  );
  return store;
}
