<template>
  <div class="main">
    <div class="content">
      <router-view />
    </div>
    <div class="bottom">
      <div class="bottom-item">
        <div class="bottom-item-top">
          <i class="iconfont icon-shouye" />
        </div>
        <div class="bottom-item-bottom">
          首页
        </div>
      </div>
      <div class="bottom-item">
        <div class="bottom-item-top">
          <i class="iconfont icon-faxian" />
        </div>
        <div class="bottom-item-bottom">
          发现
        </div>
      </div>
      <div class="bottom-more">
        <i class="iconfont icon-jiahao" />
      </div>
      <div class="bottom-item">
        <div class="bottom-item-top">
          <i class="iconfont icon-shangpin" />
        </div>
        <div class="bottom-item-bottom">
          市集
        </div>
      </div>
      <div class="bottom-item">
        <div class="bottom-item-top">
          <i class="iconfont icon-yonghu" />
        </div>
        <div class="bottom-item-bottom">
          我的
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style lang="less" scoped>
.main {
  .content {
    height: 92vh;
    width: 100vw;
    overflow: scroll;
  }
  .bottom {
    height: 8vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .bottom-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 6vh;
      .bottom-item-top {
        i {
          font-size: 6vw;
        }
      }
      .bottom-item-bottom {
        font-size: 3vw;
      }
    }
    .bottom-more {
      padding: 2vw;
      border-radius: 50%;
      background-image: linear-gradient(to bottom right, darkcyan, cyan);
      i {
        font-weight: bold;
        font-size: 4vw;
        color: white;
      }
    }
  }
}
</style>
