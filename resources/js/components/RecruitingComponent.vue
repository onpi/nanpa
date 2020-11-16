<template>
  <div class="under under_recruiting">
    <form class="form" action="" method="post">
      <div class="item_wrap">
        <p class="form_title"><span class="titile_number">1</span>タイトルを入力してください。</p>
        <input class="form_text" type="text" placeholder="タイトル" name="title" value="">
      </div>
      <div class="item_wrap">
        <p class="form_title"><span class="titile_number">2</span>日付を選択してください。</p>
        <select class="select_day select" name="day">
          <option value="2020年12月1日">2020年12月1日</option>
          <option value="2020年12月2日">2020年12月2日</option>
          <option value="2020年12月3日">2020年12月3日</option>
        </select>
      </div>
      <div class="item_wrap">
        <p class="form_title"><span class="titile_number">3</span>場所を選択してください。</p>
        <select class="select_place select" name="place">
          <option value="大阪">大阪</option>
          <option value="兵庫">兵庫</option>
          <option value="京都">京都</option>
        </select>
      </div>
      <div class="item_wrap">
        <p class="form_title"><span class="titile_number">4</span>本文を入力してください。</p>
        <textarea name="name" class="form_text" rows="3"></textarea>
      </div>
      <input class="submit_btn" type="submit" name="submit" value="作成">
    </form>
    <a href="#" class="color_text">作成を中断する</a>
    <div class="another_wrap">
      <router-link :to="{ name: 'recruiting.copy' }">
        <a href="#" class="color_text">コピーして再作成</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.form {
  margin-top: 15px;
  .item_wrap {
    margin-top: 25px;
  }
  .form_title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;

  }
  .titile_number {
    align-items: center;
    background-color: #DF0066;
    color: #fff;
    border-radius: 50%;
    display: inline-flex;
    font-size: 14px;
    height: 18px;
    justify-content: center;
    margin-right: 8px;
    width: 18px;
  }
  .form_text {
    margin-top: 5px;
  }
  .select {
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    font-size: 16px;
    padding: 2px;
  }
}
.color_text {
  color: #DF0066;
  display: block;
  font-size: 12px;
  margin-top: 16px;
  text-align: center;
}
.another_wrap {
  margin: 24px auto 0;
  .color_text {
    margin-top: 0;
  }
}
</style>
