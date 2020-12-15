<template>
  <form @submit.prevent="loginCheck">
    <div class="input_setting">
      <input type="text" class="inputbox" v-model="uid" maxlength="16" placeholder="アカウント"/>
    </div>
    <div class="input_setting">
      <input type="password" class="inputbox" v-model="password" maxlength="32" placeholder="パスワード"/>
    </div>
    <div class="input_setting">
      <button class="login_btn" type="submit">予約確定</button>
    </div>
    <div class="input_setting" v-if="errorState">
      <!-- errorState가 있으면 표시한다 -->
      <p class="alert-danger">{{ errorState }}</p>
    </div>
  </form>
</template>

<script>
	//1. vuex헬퍼 방식이라고 한다. 쉽게 접근 가능하다. 임포트 해야 아래에서 사용하겠지
	import { mapActions, mapGetters } from "vuex";
	//1
	
	export default {
		methods: {
			//2. 불러온 헬퍼를 사용하기 위해서 methods 안에 선언
			...mapActions(["login"]),
			//2
			async loginCheck() {
	      try {
					//3. 헬퍼로 불러왔기 때문에 this.login으로 actions.js에 있는 login함수에 접근 가능, 
	        let loginResult = await this.login({
	          uid: this.uid,
	          password: this.password,
	        });
					//3
	        console.log("login reseult : " + loginResult); // 로그인 성공하면 true, 아니면 false
					//4. 반환값이 true라면 로그인 성공 (isAuth == true) 이므로, 페이지 이동
	        if (loginResult) this.goToPages();
					//4
	      } catch (err) {
	        console.error(err);
	      }
	    },
	    goToPages() {
	      this.$router.push({
	        name: "Reserve",
	      });
	    },
		},
		computed: {
	    ...mapGetters({
	      errorState: "getErrorState",
	    }),
	  },
	}
</script>
