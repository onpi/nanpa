<template>
  <div class="under under_recruiting under_recruiting--copy">
    <div class="post_contents">
      <h2 class="border_title">コピーして再作成</h2>
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
.contetens_wrap {
  margin-top: 24px;
}
.border_title {
  margin-top: 17px;
}
</style>
