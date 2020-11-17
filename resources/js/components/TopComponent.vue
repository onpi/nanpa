<template>
<div class="top">
  <div class="mv">
    <div class="mv_contents">
      <h2 class="mv_title">いつ、どこでナンパ合流しますか？</h2>
      <form class="mv_form" method="get">
        <SearchForm/>
        <input type="submit" name="" value="検索" class="box_submit">
      </form>
      <p class="or_text">もしくは</p>
      <a href="#" class="create_bosyu">募集を作る</a>
    </div>
  </div>
  <div class="post_contents">
    <h3 class="top_title">新着ナンパ合流募集</h3>
    <div class="contetens_wrap">
      <router-link class="contents_item" v-bind:to="{name: 'post', params: {postId: n}}" v-for="n in 6">
        <div class="item_image">
          <img src="/img/top/img1.jpg" alt="">
        </div>
        <h3 class="item_title">タイトルタイトル</h3>
        <span class="date">2020年7月8日 東京・渋谷</span>
        <p class="item_text">犬にて18時ごろから出撃予定です。初めての募集ですのでよろしくお願いします。</p>
        <div class="item_ex">
          <div class="post_name">
            <div class="post_image">
              <img src="/img/common/plofile_icon.png" alt="">
            </div>
            <span class="post_name--title">名前 太郎</span>
          </div>
          <p class="post_time">1時間</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-link :to="{ name: 'recruiting' }">
    <a href="#" class="bosyu_btn">
      <img src="/img/common/bosyu_btn.png" alt="募集する">
    </a>
  </router-link>
</div>
</template>

<script>
import SearchForm from "./Search/SearchFormComponent";
export default {
  components: {
    SearchForm
  },
}

</script>

<style lang="scss" scoped>
.top {
  .mv {
    background-image: url('/img/top/mv.jpg');
    background-size: cover;
    padding: 25px 30px;
    .mv_contents {
      background-color: rgba(255, 255, 255, 0.72);
      border-radius: 6px;
      padding: 12px;
    }
    .mv_title {
      font-size: 18px;
      font-weight: 700;
      text-align: center;
    }

    .box_submit {
      background-color: #DF0066;
      border-radius: 4px;
      border: 1px  solid #DF0066;
      color: #fff;
      display: block;
      font-size: 16px;
      line-height: 1;
      max-width: 165px;
      margin: 15px auto 0;
      padding: 9px 2px;
      width: 100%;
      &:hover {
        background-color: #fff;
        color: #DF0066;
      }
    }
    .or_text {
      font-size: 12px;
      font-weight: 700;
      margin-top: 8px;
      text-align: center;
    }
    .create_bosyu {
      color: #DF0066;
      display: block;
      font-size: 12px;
      font-weight: 700;
      margin-top: 5px;
      text-align: center;
    }
  }
  .post_contents {
    padding: 16px 6.4% 0;
    .top_title {
      border-bottom: 1px solid #DF0066;
      font-size: 18px;
      font-weight: 700;
    }

  }
  .bosyu_btn {
    bottom: 30px;
    height: 74px;
    position: fixed;
    right: 20px;
    width: 74px;
  }
}
</style>
