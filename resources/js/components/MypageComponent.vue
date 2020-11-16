<template>
  <div class="under_mypage">
    <div class="mv">
      <img src="/img/mypage/mv.jpg" alt="">
    </div>
    <div class="mypage_wrap">
      <div class="my_icon">
        <img src="/img/common/plofile_icon.png" alt="">
      </div>
      <h2 class="mypage_name">ナンパ師たろう</h2>
      <div class="auth_wrap">
        <form class="repost" action="index.html" method="post">
          <input class="mypage_submit" type="submit" name="submit" value="コピーして再作成">
        </form>
        <form class="edit" action="index.html" method="post">
          <input class="mypage_submit" type="submit" name="submit" value="編集">
        </form>
      </div>
      <div class="profile_wrap">
        <div class="profile_item">
          <span class="profile_item--title">年齢</span>
          <span class="profile_item--text">20代前半</span>
        </div>
        <div class="profile_item">
          <span class="profile_item--title">即数</span>
          <span class="profile_item--text">10~20</span>
        </div>
        <div class="profile_item">
          <span class="profile_item--title">ナンパ歴</span>
          <span class="profile_item--text">1年半</span>
        </div>
        <div class="profile_item">
          <span class="profile_item--title">スタイル</span>
          <span class="profile_item--text">誠実系</span>
        </div>
        <div class="profile_item">
          <span class="profile_item--title">主な活動場所</span>
          <span class="profile_item--text">U(梅田),M(ミナミ)</span>
        </div>
      </div>
      <h3 class="profile_title">自己紹介</h3>
      <p class="profile_text">気軽に合流してください。どんな方でもOKです。</p>
    </div>
    <div class="post_contents">
      <h3 class="post_title">あなたの募集</h3>
      <div class="contetens_wrap">
        <router-link class="contents_item" v-bind:to="{name: 'post', params: {postId: n}}" v-for="n in 2">
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
    <div class="post_contents">
      <h3 class="post_title">閲覧履歴</h3>
      <div class="contetens_wrap">
        <router-link class="contents_item" v-bind:to="{name: 'post', params: {postId: n}}" v-for="n in 2">
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
    <div class="post_contents">
      <h3 class="post_title">コメント履歴</h3>
      <div class="contetens_wrap">
        <router-link class="contents_item" v-bind:to="{name: 'post', params: {postId: n}}" v-for="n in 2">
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
.under_mypage {
  .mypage_wrap {
    max-width: 327px;
    margin: auto;
    position: relative;
    width: 95%;
  }
  .my_icon {
    align-items: center;
    background-color: #efefef;
    border-radius: 50%;
    display: flex;
    height: 44px;
    justify-content: center;
    left: 0;
    margin: auto;
    padding: 4px;
    position: absolute;
    right: 0;
    // top: -30%;
    top: -53px;
    width: 44px;
    z-index: 10;
  }
  .mypage_name {
    font-size: 12px;
    font-weight: 700;
    margin-top: 28px;
    text-align: center;
  }
  .auth_wrap {
    align-items: center;
    display: flex;
    justify-content: center;
    .edit {
      margin-left: 8px;
    }
    .mypage_submit {
      border: none;
      background: inherit;
      color: #DF0066;
      font-size: 10px;
    }
  }
  .profile_wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    .profile_item {
      margin-bottom: 12px;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
  .profile_item--title {
    background-color: #efefef;
    color: #696969;
    display: inline-block;
    font-size: 10px;
    line-height: 1;
    padding: 4px;
  }
  .profile_item--text {
    display: inline-block;
    font-size: 14px;
    margin-left: 4px;
  }
  .profile_title {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }
  .profile_text {
    font-size: 14px;
    margin: 5px 0 10px;
  }
  .post_title {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
