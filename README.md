# 원티드 프리온보딩 프론트엔드 인턴십 - 선발 과제 

- 이름: 태강희
- 배포링크: https://wanted-pre-onboarding-frontend-khkh0109.vercel.app

<br/>

### 설치 및 실행
```zsh
$ npm install
$ npm start
```

<br/>

### 기술스택 
- JavaScript
- React
- Axios
- Tailwindcss

<br/>

### 페이지 
|**회원가입**|
|:---:|
|![회원가입](https://github.com/khkh0109/wanted-pre-onboarding-frontend/assets/77181642/9090b0a9-e1c4-457d-b0a7-a86391d2635d)|
|**로그인**|
|![로그인](https://github.com/khkh0109/wanted-pre-onboarding-frontend/assets/77181642/a660f18a-3ab6-4b79-a9af-fc134878769f)|
|**투두리스트**|
|![투두리스트](https://github.com/khkh0109/wanted-pre-onboarding-frontend/assets/77181642/642f4d00-d4ae-4e3b-9a80-49816b9cfde8)|


<br/>

### 폴더구조 
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── api
│   ├── components
│   ├── pages
│   ├── util
│   ├── index.css
│   ├── index.js
│   └── router.jsx
└── tailwind.config.js
```

<br/>

### 브랜치 
|브랜치명|설명|
|:---:|:---:|
|`main`| 배포용 브랜치|
|`feat`| 기능 개발용 브랜치|

<br/>

### 커밋 메시지 컨벤션 
#### 구조 
```
타입: 제목 (필수) 

본문 (옵션)
```

#### 예시 
```
feat: TODO 삭제 기능 추가 
```

#### 타입
| 타입 | 설명 |
| --- | --- |
| feat | 새로운 기능을 추가할 경우 |
| fix | 버그를 고친 경우 |
| design | CSS 등 사용자 UI 디자인 변경 |
| style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| refactor | 프로덕션 코드 리팩토링 |
| comment | 필요한 주석 추가 및 변경 |
| docs | 문서를 수정한 경우 |
| test | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X) |
| chore | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) |
| rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
| remove | 파일을 삭제하는 작업만 수행한 경우 |
