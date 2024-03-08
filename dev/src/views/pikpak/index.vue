<template>
  <div class="content">
    <div class="">
      <div class="tit">请输入邀请码: </div>
      <input v-model="invite_code" class="inp" type="text">
      <div class="tit">请输入邮箱: </div>
      <input v-model="newEmail" class="inp" type="text">
      <div class="btn" @click="send">发送</div>
      <div class="tit">请输入验证码: </div>
      <input v-model="verifyCode" class="inp" type="text">
      <div class="btn" @click="handleSecondButtonClick">确认验证码</div>
    </div>
    <div class="email-wrap">
      <iframe src="https://rootsh.com/" class="full-size" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
  import { main } from './main'
  export default {
    name: 'index',
    data() {
      return {
        invite_code: '49667207',
        newEmail: '',
        verifyCode: ''
      }
    },
    methods: {
      waitForSecondButtonClick() {
        return new Promise(resolve => {
          this.$once('secondButtonClick', userInfo => {
            resolve(userInfo) // 将信息传递给 resolve 方法
          })
        })
      },
      handleSecondButtonClick() {
        // 触发自定义事件，通知第一个按钮点击的代码可以继续执行，并传递信息
        this.$emit('secondButtonClick', this.verifyCode)
      },
      send() {
        main(this.invite_code, this.newEmail, this.waitForSecondButtonClick)
      }
    }
  }
</script>

<style scoped lang="scss">
.content {
}

.email-wrap {
  width: 100%;
  height: 500px;
}

.full-size {
  width: 100%;
  height: 100%;
}

.tit {
  font-size: 15px;
}

.inp {
  width: 100%;
  height: 30px;
  border: 1px solid #d0bebe;
  margin: 10px 0;
}

.btn {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #d0bebe;
  background-color: #aaa;
}
</style>
