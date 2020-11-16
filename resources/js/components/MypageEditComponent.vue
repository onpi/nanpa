<template>
  <div class="under_mypage under_mypage--edit">
    <h1 class="edit_title">プロフィールを編集する</h1>
    <form class="edit_form" action="index.html" method="post">
      <label for="profile_icon" class="icon_label">
        <div class="my_icon">
          <img src="/img/common/plofile_icon.png" alt="">
        </div>
        <input id="profile_icon" class="profile_icon" type="file" name="profile_icon" value="">
      </label>

      <p class="form_title nickname">ニックネーム（必須）</p>
      <input class="edit_yorname" type="text" name="yourname" value="" placeholder="ニックネーム">
      <p class="form_title age_title">年齢</p>
      <select class="age select" name="age">
        <option value="未設定">未設定</option>
        <option v-for="n in 90">{{ n }}</option>
      </select>
      <p class="form_title">ナンパスタイル</p>
      <select class="age select" name="style">
        <option value="未設定">未設定</option>
      </select>
      <p class="form_title">即数</p>
      <select class="age select" name="soku">
        <option value="未設定">未設定</option>
      </select>
      <p class="form_title">ナンパ歴</p>
      <select class="age select" name="soku">
        <option value="未設定">未設定</option>
      </select>
      <p class="form_title">主な活動場所</p>
      <select class="age select" name="soku">
        <option value="未設定">未設定</option>
      </select>
      <p class="form_title">自己紹介</p>
      <textarea class="texta" name="name" rows="3" cols="80"></textarea>
      <input class="edit_submit" type="submit" name="submit" value="編集完了">
      <a class="cansel" href="javascript:history.back();">キャンセル</a>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.under_mypage--edit {
  max-width: 327px;
  margin: auto;
  width: 90%;
  .icon_label {
    position: relative;
    &::after {
      background-image: url(/img/common/camera.png);
      background-repeat: no-repeat;
      background-size: 16px 16px;
      background-color: #efefef;
      border-radius: 50%;
      background-position: center;
      bottom: 21px;
      content: "";
      display: inline-block;
      height: 12px;
      position: absolute;
      padding: 6px;
      right: 54px;
      width: 12px;
    }
  }
  .profile_icon {
    opacity: 0;
  }
  .my_icon {
    align-items: center;
    background-color: #efefef;
    border-radius: 50%;
    display: flex;
    height: 80px;
    justify-content: center;
    left: 0;
    margin: 24px auto 0;
    padding: 11px;
    width: 80px;
  }
  .edit_title {
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
  }
  .form_title {
    font-size: 14px;
    margin-top: 16px;
  }
  .nickname {
    margin-top: 0;
  }
  .edit_yorname {
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    margin-top: 5px;
    padding: 12px;
    width: 100%;
  }
  .select {
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 5px;
    padding: 4px;
  }
  .texta {
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 5px;
    padding: 4px;
    width: 100%;
  }
  .edit_submit {
    background-color: #DF0066;
    border: 1px solid  #DF0066;
    border-radius: 4px;
    color: #fff;
    display: block;
    font-size: 16px;
    line-height: 1;
    max-width: 165px;
    margin: 24px auto 0;
    padding: 7px;
    text-align: center;
    width: 100%;
  }
  .cansel {
    color: #DF0066;
    display: block;
    font-size: 10px;
    margin-top: 16px;
    text-align: center;
  }
}
</style>
