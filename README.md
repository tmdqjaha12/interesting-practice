# start

npx create-next-app@latest --typescript

---

# script

npm run dev  
npm run build  
npm start

---

# env

.env: 환경변수. .env.development, .env.production를 설정하면 해당 파일은 무시된다.  
.env.development: run dev 환경에서만 사용되는 환경변수  
.env.production: run start 환경에서만 사용되는 환경변수  
.env.local: 설정된 기본 환경변수를 재정의  
위 환경 변수는 next server 에서만 읽을 수 있다. 그러므로 client env가 필요하다면 next.config.js에서 추가 정의를 해줘야 한다.

---

# cycle

1. \_app
2. \_document

---

# server Functions

1. getServerSideProps: next server-side에서 실행된다.
2. getStaticSideProps: dev사용시에는 1번과 같다.
3. getStaticPaths: 2번과 같이 사용되며 build시에만 실행된다.

---

# planetscale

git clone https://github.com/planetscale/nextjs-starter  
npm install  
mv .env.example .env

pscale  
pscale auth login  
pscale region list  
pscale database create <name> --region ap-northeast  
DATABASE_URL="mysql://127.0.0.1:3306/hsb-first-test"  
pscale connect <name>  
npx prisma db push 커넥트 필수인 상태

---

# prisma

---

# apollo

- 위 planetscale과 prisma는 next server(/api)에서 사용할 경우 (backend front, one directory)
- apollo는 백엔드와 프론트과 디렉토리 단계서부터 완전히 분리도니 경우 외부 graphql을 사용하기 위해 사용. (원한다면 api에서도 graphql을 셋팅하여 사용할 수 있다.)

---

# tailwind

테일윈드 사용이 필요한 경우 ./public/styles/globals.css 주석을 제거하면 된다.

---

# 상태관리

apollo makeVar

---
