<template>
<div class="box_wrap">
  <CalenderModal/>
  <Prefecture/>
</div>
</template>

<script>
import CalenderModal from "./CalenderModal";
import Prefecture from "./PrefectureComponent";
export default {
  components: {
    CalenderModal,
    Prefecture
  },
}
</script>

<style lang="scss" scoped>
.box_wrap {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
}
</style>
