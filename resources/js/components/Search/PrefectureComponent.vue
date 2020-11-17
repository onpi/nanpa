<template>
  <div id="jsPlaceModal" class="place">
    <span @click="open()">場所</span>
    <div @click="close()" :aria-hidden="isOpen ? 'false' : 'true'" class="modal_bg"></div>
    <div class="modal_contents" :aria-hidden="isOpen ? 'false' : 'true'">
      <div class="area">
        <div class="label" v-bind:class="{checked:parentList[1]}" @click="parentBtn(1)">関東</div>
        <div class="area_child--wrap" v-show="parentList[1]">
          <div class="area_child">
            <div class="label" v-bind:class="{checked:childList[1]}" @click="childBtn(1)">東京</div>
            <div class="area_grandchild--wrap" v-show="childList[1]">
              <div class="area_grandchild">
                <div class="label" v-bind:class="{checked:grandchildList[1]}" @click="grandchildBtn(1)">渋谷</div>
              </div>
              <div class="area_grandchild">
                <div class="label" v-bind:class="{checked:grandchildList[2]}" @click="grandchildBtn(2)">新宿</div>
              </div>
            </div>
          </div>
          <div class="area_child">
            <div class="label" v-bind:class="{checked:childList[2]}" @click="childBtn(2)">神奈川</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="label" v-bind:class="{checked:parentList[2]}" @click="parentBtn(2)">関西</div>
        <div class="area_child--wrap" v-show="parentList[2]" v-bind:class="{active:parentList}">
          <div class="area_child">
            <div class="label" v-bind:class="{checked:childList[3]}" @click="childBtn(3)">大阪</div>
            <div class="area_grandchild--wrap" v-show="childList[3]">
              <div class="area_grandchild">
                <div class="label" v-bind:class="{checked:grandchildList[3]}" @click="grandchildBtn(3)">梅田</div>
              </div>
              <div class="area_grandchild">
                <div class="label" v-bind:class="{checked:grandchildList[4]}" @click="grandchildBtn(4)">難波</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: "Prefecture",
  data: function() {
    return {
      isOpen: false,
      parentList: {},
      childList: {},
      grandchildList: {},
    };
  },
  methods: {
    parentBtn: function(e) {
      // this.parentList = !this.parentList
      this.$set(this.parentList, e, !this.parentList[e])
    },
    childBtn: function(e) {
      this.$set(this.childList, e, !this.childList[e])
    },
    grandchildBtn: function(e) {
      this.$set(this.grandchildList, e, !this.grandchildList[e])
    },
    open: function() {
      this.isOpen = true;
    },
    close: function() {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped>
// モーダル
#jsPlaceModal {
  .modal_contents {
    background: #FFFFFF;
    display: none;
    overflow-y: scroll;
    &[aria-hidden=false] {
      background: #FFFFFF;
      display: block;
      // height: 300px;
      height: auto;
      max-height: 225px;
      left: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      top: 50%;
      width: 300px;
      z-index: 11;

    }
  }
}
.modal_bg[aria-hidden=false] {
  background-color: rgba(0, 0, 0, .75);
  height: 100%;
  left: 0;
  position: fixed;
  top:0 ;
  width: 100%;
  z-index: 1;

}
.area {
  background: #FFFFFF;
  .label {
    border-bottom: 1px solid #f5f5f5;
    cursor: pointer;
    display: block;
    font-size: 14px;
    padding: 10px 0;
    padding-left: 40px;
    position: relative;
    &::before {
      background-image: url(/img/common/before.png);
      background-size: contain;
      background-repeat: no-repeat;
      bottom: 0;
      content: '';
      display: inline-block;
      height: 16px;
      left: 16px;
      margin: auto;
      position: absolute;
      top: 0;
      width: 16px;
    }
    &::after {
      background-image: url(/img/common/arrow.png);
      background-size: contain;
      background-repeat: no-repeat;
      bottom: 0;
      content: '';
      display: inline-block;
      height: 5px;
      margin: auto;
      position: absolute;
      right: 11px;
      top: 0;
      width: 7px;
    }
  }
  .checked {
    &::before {
      background-image: url(/img/common/after.png);
    }
  }
  // 子カテゴリー（大阪、東京など）
  .area_child--wrap {
    .label {
      padding-left: 48px;
      &::before {
        left: 24px;
      }
    }
  }
  // 孫カテゴリー（梅田、難波など）
  .area_grandchild {
    .label {
      padding-left: 64px;
      &::before {
        left: 40px;
      }
    }
  }
}

.place {
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1;
  margin-left: 4px;
  max-width: 70px;
  padding: 4px 9px;
  position: relative;
  text-align: left;
  width: 30%;
  &::after {
    background-image: url(/img/common/search.png);
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 0;
    content: '';
    display: inline-block;
    height: 16px;
    margin: auto;
    position: absolute;
    right: 11px;
    top: 0;
    width: 8px;
  }
}

</style>
