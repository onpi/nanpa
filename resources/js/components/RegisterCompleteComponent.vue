<template>
  <div class="under under_register under_complete">
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
    <p class="complete_text">登録が完了しました！</p>
    <router-link :to="{ name: 'top' }">
      <a href="#" class="btn">ホーム画面へ</a>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.under_complete {
  .number1 {
    &::before {
      background: #DF0066;
    }
  }
  .number2 {
    background: #DF0066;
    color: #fff;
  }
  .complete_text {
    font-size: 14px;
    font-weight: 700;
    margin-top: 24px;
    text-align: center;
  }
  .btn {
    margin: 32px auto 0;
  }
}
</style>
