<template>
  <div id="calendar" class="">
    <vuejs-datepicker class="day_input"
      v-model="defaultDate"
      name="datepicker"
    :language="ja"
    :value="defaultDate"
    :format="DatePickerFormat"></vuejs-datepicker>
  </div>

</template>
<script>
import Vue from 'vue'
import VCalendar from 'v-calendar'
import {ja} from 'vuejs-datepicker/dist/locale'
import moment from 'vue-moment'
Vue.use(moment)
export default {
  data() {
    return {
      defaultDate: '2020-01-01',
      DatePickerFormat: 'yyyy-MM-dd',
      ja: ja,
    };
  },
  components: {
    'vuejs-datepicker':vuejsDatepicker
  },
  methods:{
    customformat: function(value){
      return moment(value).format('YYYY-MM-DD');
    }
 }
}

</script>
<style lang="scss" scoped>

</style>
