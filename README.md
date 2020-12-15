# vuex-auth  
- `npm i vuex`
- src 폴더 아래에 vuex 폴더를 만듬
- 폴더 안에는 아래 그림처럼 5개의 파일 추가, 내용은 위 디렉토리 참고  
![_2020-12-08_09 44 57](https://user-images.githubusercontent.com/46176241/102280644-e4a77980-3f70-11eb-9727-0e7786792468.png)  
- actions.js, getters.js, mutation_types.js, mutations.js, store.js
- 로그인 기능을 실현 시키기 위해 LoginPage.vue 파일 생성  
- 간단히 설명하자면 actions는 다른 파일에서 store를 실행(값을 쓰거나 변경)할 때, getters는 값을 얻어올 때 사용
- 새로고침해도 store 값을 유지하기 위해 vuex-persistedstate 설치 `npm i -s vuex-persistedstate`
