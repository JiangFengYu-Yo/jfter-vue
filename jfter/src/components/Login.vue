<template>
  <div class="main">
    <div class="top">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="top-1-main">
            <span>全新JFTER,更轻更年轻</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="top-2-main">
            <span>插画师贴纸，让照片更美丽</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="top-3-main">
            <span>每个照片都是全新的视角</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="top-4-main">
            <span>关注有趣的人，发现有趣的事</span>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="top-5-main">
            <div class="top-5-main-top"><span>LOFTER</span></div>
            <div class="top-5-main-bottom"><span>让兴趣.更有趣</span></div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="middle">
      <div class="middle-top">
        <div class="middle-top-top">
          <input type="text" name="username" placeholder="Account">
        </div>
        <div class="middle-top-bottom">
          <input type="password" name="password" placeholder="Password">
        </div>
      </div>
      <div class="middle-bottom">
        <div class="middle-bottom-left">
          <span>登录</span>
        </div>
        <div class="middle-bottom-right">
          <span>注册</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-item">
        <i class="iconfont icon-qq" />
      </div>
      <div class="bottom-item">
        <i class="iconfont icon-wechat" />
      </div>
      <div class="bottom-item">
        <i class="iconfont icon-weibo" />
      </div>
      <div class="bottom-item">
        <i class="iconfont icon-youxiang-" />
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>
.main {
  background-image: linear-gradient(to bottom right, #434343, #000000);
  .top {
    .van-swipe {
      width: 100vw;
      height: 50vh;
      color: #fff;
      font-size: 5vw;
      font-weight: bold;
      .van-swipe-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    .top-5-main {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
  .middle {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .middle-top {
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .middle-top-top {
        padding-top: 1vh;
        input {
          border: 0;
          outline: none;
          width: 60vw;
          height: 5vh;
          font-size: 2.5vh;
          border-radius: 2.5vh;
          padding: 0 5vw;
          box-sizing: border-box;
          text-align: center;
        }
      }
      .middle-top-bottom {
        padding-bottom: 1vh;
        input {
          border: 0;
          outline: none;
          width: 60vw;
          height: 5vh;
          font-size: 2.5vh;
          border-radius: 2.5vh;
          padding: 0 5vw;
          box-sizing: border-box;
          text-align: center;
        }
      }
    }
    .middle-bottom {
      height: 10vh;
      width: 60vw;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      font-size: 5vw;
      font-weight: bold;
      .middle-bottom-left {
        background-image: linear-gradient(to right, #fa709a, #fee140);
        padding: 1vw;
        border-radius: 8.5vw;
        span {
          text-align: center;
          line-height: 4vh;
          display: inline-block;
          height: 4vh;
          width: 18vw;
          border-radius: 7.5vw;
          background: #222;
        }
      }
      .middle-bottom-right {
        background-image: linear-gradient(to right, #fa709a, #fee140);
        padding: 1vw;
        border-radius: 8.5vw;
        span {
          text-align: center;
          line-height: 4vh;
          display: inline-block;
          height: 4vh;
          width: 18vw;
          border-radius: 7.5vw;
          background: #222;
        }
      }
    }
  }
  .bottom {
    width: 60vw;
    margin: 0 auto;
    height: 20vh;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .bottom-item {
      i {
        font-size: 7vw;
      }
    }
  }
}
</style>