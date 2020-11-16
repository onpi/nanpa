<template>
  <div class="under_post">
    <div class="item_image">
      <img src="/img/top/img1.jpg" alt="">
    </div>
    <div class="post_wrap">
      <h1 class="post_title">7月10日 東京・渋谷</h1>
      <p class="post_text">犬にて18時ごろから出撃予定です。初めての募集ですのでよろしくお願いします。</p>
      <p class="post_date">2020年7月6日</p>
      <div class="auth_wrap">
        <form class="auth_form" action="" method="post">
          <input class="auth_submit" type="submit" name="削除" value="削除">
        </form>
        <form class="auth_form" action="" method="post">
          <input class="auth_submit" type="submit" name="コピーして再作成" value="コピーして再作成">
        </form>
        <form class="auth_form" action="" method="post">
          <input class="auth_submit" type="submit" name="編集" value="編集">
        </form>
      </div>
      <div class="post_name">
        <div class="post_icon">
          <img src="/img/common/plofile_icon.png" alt="">
        </div>
        <span class="post_name--title">ナンパ師たろう</span>
      </div>
    </div>
    <div class="chat_wrap">
      <form class="chat_form" action="" method="post">
        <div class="chat_icon">
          <img src="/img/common/plofile_icon.png" alt="">
        </div>
        <input class="chat_item chat_text" type="text" name="chat" placeholder="コメントを書き込む" value="">
        <input class="chat_item chat_submit" type="submit" name="投稿" value="投稿">
      </form>
      <div class="">
        <div class="other chat_contents">
          <div class="chat_icon">
            <img src="/img/common/plofile_icon.png" alt="">
          </div>
          <p class="chat_title"><span class="name">名前太郎</span>初めまして。<br>合流しましょう！</p>
        </div>
        <div class="you chat_contents">
          <div class="chat_icon">
            <img src="/img/common/plofile_icon.png" alt="">
          </div>
          <p class="chat_title">
            <span class="name">あなた</span>
            初めまして。<br>ぼくもKPだけしたいです！お願いします！
          </p>
        </div>
        <div class="other chat_contents">
          <div class="chat_icon">
            <img src="/img/common/plofile_icon.png" alt="">
          </div>
          <p class="chat_title">
            <span class="name">名前太郎B</span>
            初めまして。是非合流しましょう！
          </p>
        </div>
      </div>
    </div>
    <div class="creat_label">
      <p class="create_text">作成が完了しました！</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.under_post {
  .post_wrap {
    margin: 14px auto 0;
    max-width: 327px;
    width: 95%;
  }
  .post_title {
    font-size: 16px;
    font-weight: 700;
  }
  .post_text {
    font-size: 12px;
    margin-top: 7px;
  }
  .post_date {
    color: #696969;
    font-size: 10px;
    margin-top: 7px;
    text-align: right;
  }
  .post_name {
    align-items: center;
    display: flex;
    margin-top: 8px;
  }
  .post_icon {
    align-items: center;
    background-color: #efefef;
    border-radius: 50%;
    display: flex;
    height: 28px;
    justify-content: center;
    padding: 4px;
    width: 28px;
  }
  .post_name--title {
    font-size: 12px;
    font-weight: 700;
    margin-left: 4px;
  }
}
.auth_wrap {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  .auth_form {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
  .auth_submit {
    border: none;
    background: transparent;
    color: #DF0066;
    font-size: 10px;
  }
}
.chat_wrap {
  margin: 38px auto 0;
  max-width: 327px;
  width: 95%;
  .chat_form {
    align-items: center;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
  }
  .chat_icon {
    align-items: center;
    background-color: #efefef;
    border-radius: 50%;
    display: flex;
    height: 28px;
    justify-content: center;
    padding: 4px;
    width: 28px;
  }
  .chat_text {
    background-color: #efefef;
    border-radius: 96px;
    border: none;
    max-width: 230px;
    padding: 9px 14px;
    width: 70%;
    &::placeholder {
      color: #696969;
      font-size: 12px;
      font-weight: 700;
    }
  }
  .chat_submit {
    border: 1px solid  #DF0066;
    border-radius: 4px;
    background-color: transparent;
    color: #DF0066;
    max-width: 56px;
    padding: 3px;
    width: 20%;
  }
  .chat_contents {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    &:first-child {
      margin-top: 24px;
    }
  }
  .you {
    flex-direction: row-reverse;
  }
  .chat_title {
    background-color: #efefef;
    border-radius: 10px;
    font-size: 12px;
    max-width: 291px;
    padding: 12px 14px;
    width: 90%;
    .name {
      font-weight: 700;
      display: block;
      margin-bottom: 4px;
    }
  }
}
</style>
