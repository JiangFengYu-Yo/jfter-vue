<template>
  <div class="main">
    <div class="content">
      <router-view />
    </div>
    <div class="shadow" v-show="isShadowData" @click="shadowClickEvent"></div>
    <div class="bottom">
      <div class="bottom-item" @click="bottomItemClickEvent(1)">
        <div class="bottom-item-top">
          <i class="iconfont icon-shouye" />
        </div>
        <div class="bottom-item-bottom">
          首页
        </div>
      </div>
      <div class="bottom-item" @click="bottomItemClickEvent(2)">
        <div class="bottom-item-top">
          <i class="iconfont icon-faxian" />
        </div>
        <div class="bottom-item-bottom">
          发现
        </div>
      </div>
      <div class="bottom-more" @click="bottomMoreClickEvent">
        <i class="iconfont icon-jiahao" />
      </div>
      <div class="bottom-item" @click="bottomItemClickEvent(3)">
        <div class="bottom-item-top">
          <i class="iconfont icon-shangpin" />
        </div>
        <div class="bottom-item-bottom">
          市集
        </div>
      </div>
      <div class="bottom-item" @click="bottomItemClickEvent(4)">
        <div class="bottom-item-top">
          <i class="iconfont icon-yonghu" />
        </div>
        <div class="bottom-item-bottom">
          我的
        </div>
      </div>
    </div>
    <div class="login">
      <login></login>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShadowData: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let routeName = this.$route.path.split('/')[1]
      let arr = ['homepage', 'discover', 'fair', 'me']
      document.getElementsByClassName('bottom-item').forEach((item, index) => {
        if(arr[index] === routeName) {
          item.firstElementChild.firstElementChild.style.color = 'darkcyan'
          item.lastElementChild.style.color = '#fff'
          item.lastElementChild.style.backgroundColor = 'darkcyan'
        }
      })
    },
    underdevelopment() {
      alert('_(:3」∠❀)还没开发')
    },
    bottomItemClickEvent(nth) {
      switch (nth) {
        case 1:
          this.$router.push('/homepage')
          break
        case 2:
          this.$router.push('/discover')
          break
        case 3:
          this.$router.push('/fair')
          break
        case 4:
          this.$router.push('/me')
          break
      }
    },
    shadowClickEvent() {
      this.isShadowData = false
      let style = document.getElementsByClassName('bottom-more')[0].style
      if(style.transform === 'rotateZ(45deg)')
        style.transform = ''
    },
    bottomMoreClickEvent() {
      this.isShadowData = !this.isShadowData
      let style = document.getElementsByClassName('bottom-more')[0].style
      switch (style.transform) {
        case 'rotateZ(45deg)':
          style.transform = ''
          break
        case '':
          style.transform = 'rotateZ(45deg)'
          break
      }
    }
  },
  watch: {
    $route(val) {
      let routeName = val.path.split('/')[1]
      let arr = ['homepage', 'discover', 'fair', 'me']
      document.getElementsByClassName('bottom-item').forEach((item, index) => {
          if(arr[index] === routeName) {
            item.firstElementChild.firstElementChild.style.color = 'darkcyan'
            item.lastElementChild.style.color = '#fff'
            item.lastElementChild.style.backgroundColor = 'darkcyan'
          }else {
            item.firstElementChild.firstElementChild.style.color = '#000'
            item.lastElementChild.style.color = '#000'
            item.lastElementChild.style.backgroundColor = '#fff'
          }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  .content {
    height: 92vh;
    width: 100vw;
    overflow: scroll;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 92vh;
    width: 100vw;
    background-color: rgba(50, 50, 50, 0.5);
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
          font-size: 5vw;
          transition: all .5s;
        }
      }
      .bottom-item-bottom {
        padding: .5vw;
        border-radius: 1vw;
        font-size: 3vw;
        transition: all .5s;
      }
    }
    .bottom-more {
      width: 10vw;
      height: 10vw;
      border-radius: 50%;
      background-image: linear-gradient(to bottom right, darkcyan, cyan);
      transition: all .5s;
      display: flex;
      justify-content: space-around;
      align-items: center;
      i {
        font-weight: bold;
        font-size: 4vw;
        color: white;
      }
    }
  }
}
</style>
