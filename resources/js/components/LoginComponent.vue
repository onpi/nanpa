<template>
  <div class="under under_register under_login">
    <div class="logo_image">
      <img src="/img/common/logo.jpg" alt="">
    </div>
    <form class="form login_form" action="" method="post">
      <div class="form_email">
        <input class="form_text form_mark" placeholder="メールアドレス" type="text" name="email" value="">
      </div>
      <div class="form_password">
        <input class="form_text form_mark" placeholder="パスワード" type="password" name="password" value="">
      </div>
      <input class="submit_btn" type="submit" name="submit" value="ログイン">
    </form>
    <a href="#" class="forgot_password">パスワードを忘れた場合</a>
    <div class="another_wrap">
      <p class="another_text">まだ登録をしていない方は</p>
      <router-link v-bind:to="{name: 'register'}">
        <a href="#" class="another_link">新規登録</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.under_login {
  .login_form {
    margin-top: 40px;
  }
  .forgot_password {
    color: #DF0066;
    display: block;
    font-size: 12px;
    margin-top: 16px;
    text-align: center;
  }
  .another_wrap {
    margin: 26px auto 0;
  }
}
</style>
