<template>
  <div class="under under_register">
    <div class="logo_image">
      <img src="/img/common/logo.jpg" alt="">
    </div>
    <h2 class="title">新規登録（無料）</h2>
    <div class="step_wrap">
      <div class="number_wrap number_wrap1">
        <span class="number number1">1</span>
        <p class="number_text">メールアドレス<br>登録</p>
      </div>
      <div class="number_wrap number_wrap2">
        <span class="number number2">2</span>
        <p class="number_text">登録完了</p>
      </div>
    </div>
    <form class="form register_form" action="" method="post">
      <div class="form_email">
        <input class="form_text form_mark" placeholder="メールアドレス" type="text" name="email" value="">
      </div>
      <div class="form_password">
        <input class="form_text form_mark" placeholder="パスワード" type="password" name="password" value="">
      </div>
      <div class="form_password">
        <input class="form_text form_mark" placeholder="パスワード（確認）" type="password" name="confirm_password" value="">
      </div>
      <input class="form_text form_yourname" placeholder="ニックネーム" type="text" name="yourname" value="">
      <input class="submit_btn" type="submit" name="submit" value="登録する">
    </form>
    <div class="another_wrap">
      <p class="another_text">すでに登録済みの方は</p>
      <router-link v-bind:to="{name: 'login'}">
        <a href="#" class="another_link">ログイン</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.under_register {
  .register_form {
    margin-top: 24px;
  }
  .another_wrap {
    margin: 42px auto 0;
  }
}
</style>
