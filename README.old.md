# React

생활코딩(https://www.youtube.com/watch?v=XMb0w3KMw00&list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)을 통한 리액트 공부
React - 복잡한 코드를 컴포넌트로 나누어 간단하게 만들어주는 기술
컴포넌트를 통해 얻을 수 있는 장점!
1. 가독성
2. 재사용성
3. 유지보수

## 주요 3가지 과정
coding -> run -> deploy(소비자에 전달)

## 공식문서랑 친해지자
- 리액트를 사용하는 여러 방법이 있지만 본 강의에서는 Toolchain 사용(CreateReactApp)
- 해당 툴을 사용하기 위해 npm다운 필요(node.js계의 앱스토어 같은 느낌)

## nodejs 설치
https://nodejs.org/ko/
- 위 사이트에 접속하여 nodejs 설치하기 (자신의 운영체제에 맞게)
- window의 경우 cmd창에서 npm -v를 쳤을 때 버전이 뜨면 올바르게 설치가 된 상태

## create-react-app 설치
- cmd창 키기
- npm install -g create-react-app
- react 생성 폴더 경로로 이동
- create-react-app . (이때 폴더명에 대문자나 특수문자가 있으면 실행 오류 발생)
- npm run start (창 실행)
- ctrl + c (종료)

## public 폴더
- index.html이 존재
- index.html : 현재 보이는 창의 페이지
- id가 root인 div안에 모든 컴포넌트가 들어감

## src 폴더
- root안에 들어가는 컴포넌트
- App.js 수정수정

## build 폴더
- 현 작업물에서 용량을 줄이기 위해 불필요한 공백을 없앤 폴더
- 실제 서비스할때 build 내용을 사용하면 된다.