<template>
<header class="header">
    <div class="header_inner">
      <router-link class="logo" :to="{ name: 'top' }">
        <img src="/img/common/h_logo.png" alt="">
      </router-link>
      <nav class="nav">
        <ul class="nav_box yb">
          <li>
            <router-link v-bind:to="{name: 'login'}">
              <a href="#" class="nav_item link_item">ログイン</a>
            </router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'register'}">
              <a href="#" class="nav_item link_item register">新規登録</a>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
</header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.header {
  padding: 9px 16px;
  .header_inner {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    max-width: 55px;
    width: 20%;
  }
  .nav {
    width: 80%;
  }
  .nav_box {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
  .nav_item {
    font-size: 12px;
  }
  .register {
    background-color: #DF0066;
    border-radius: 4px;
    border: 1px solid #DF0066;
    color: #fff;
    display: block;
    font-size: 12px;
    line-height: 1;
    max-width: 80px;
    margin-left: 8px;
    padding: 6px 0;
    text-align: center;
    width: 80px;
    &:hover {
      background-color: #fff;
      color: #DF0066;
    }
  }
}
</style>
