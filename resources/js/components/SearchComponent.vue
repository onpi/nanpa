<template>
  <div class="under under_search">
    <div class="post_contents">
      <form class="form search_form" action="" method="get">
        <select class="select_day select" name="day">
          <option value="2020年12月1日">2020年12月1日</option>
          <option value="2020年12月2日">2020年12月2日</option>
          <option value="2020年12月3日">2020年12月3日</option>
        </select>
        <select class="select_place select" name="place">
          <option value="大阪">大阪</option>
          <option value="兵庫">兵庫</option>
          <option value="京都">京都</option>
        </select>
        <input type="submit" name="" value="検索" class="search_btn">
      </form>
      <h2 class="border_title">7月8日に、大阪 -梅田 心斎橋でナンパ合流できる人</h2>
      <div class="contetens_wrap">
        <router-link class="contents_item" v-bind:to="{name: 'post', params: {postId: n}}" v-for="n in 4">
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
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.search_form {
  align-items: center;
  display: flex;
}
.select {
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  font-size: 16px;
  padding: 5.5px;
}
.select_place {
  margin-left: 4px;
}
.search_btn {
  background-color: #DF0066;
  border: 1px solid  #DF0066;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  max-width: 56px;
  margin-left: 4.7%;
  padding: 4px;
  text-align: center;
  width: 90%;
}
.contetens_wrap {
  margin-top: 24px;
}
.border_title {
  margin-top: 17px;
}
</style>
