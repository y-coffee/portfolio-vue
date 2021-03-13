<template>
  <div class="contactform">
    <div class="contactform-header">
      <h1>お問い合わせフォーム</h1>
      <ul>
        <li><router-link class="contactform-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="contactform-header-router" to="/portfoliointro">/ ポートフォリオ説明</router-link></li>
      </ul>
    <div class="sp-contactform-ul">
      <ul>
        <li><router-link class="contactform-header-router" to="/">/ TOP</router-link></li>
        <li><router-link class="contactform-header-router" to="/portfoliointro">/ ポートフォリオ説明</router-link></li>
      </ul>
    </div>
    </div>
    <div class="contactform-content">
      <div class="error-box">
        <p v-if="miss.length">
          <b>入力内容のエラー</b>
          <ul>
            <li class="error-list" v-for="e in miss" v-bind:key="e.id">
              {{ e }}
            </li>
          </ul>
        </p>
      </div>
      <div class="form">
        <form method="POST">
          <div class="intro-box">
            <br>
            <p class="nice-to-meet-you">こんにちは、{{ name + 'さん' }}</p>
            <p>{{ intro }}</p>
          </div>
          <br><br>
          <div>
            <label class="name-label" for="name"><b>お名前<span class="must">(必須)</span></b></label><br>
            <input class="name-area" id="name" type="text" v-model="name" placeholder="ニックネーム可">
          </div>
          <br><br>
          <div>
            <label class="email-label" for="email"><b>E-mail<span class="must">(必須)</span></b></label><br>
            <input class="email-area" id="email" type="email" v-model="email" placeholder="hegehoge@example.com" v-on:change="check">
          </div>
          <br><br>
          <div>
            <label class="text-label" for="comment" style="vertical-align: top;"><b>お問い合わせ内容<span class="must">(必須)</span></b></label><br>
            <textarea class="text-area" id="comment" v-model="comment"></textarea>
          </div>
          <br><br>
          <div>
            <label class="data-label" for="data"><b>お問い合わせ送信日<span class="must">(必須)</span></b></label><br>
            <input class="data-area" type="data" id="date" v-model="date" placeholder="2020/01/01">
          </div>
          <br><br>
          <p class="validation-result">{{ validation.result }}</p>
          <br><br>
          <div class="button-box">
            <button type="button" v-on:click="createComment">送信する</button>
          </div>
        </form>
      </div>
    </div>
    <footer><p>(C)2020 Smash Create</p></footer>
  </div>
</template>



<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      intro: "送信ボタンを押した際に送信完了の旨を伝えるメッセージが表示されない場合は入力項目のどこかにエラーがあります。\n赤色で表示されるエラーメッセージをヒントに記入を完了させてから送信ボタンを押しなおしてください。",
      name: "",
      email: "",
      comment: "",
      date: "",
      posts: [],
      validation: {
        result: "",
      },
      miss: "",

    }
  },
  methods: {
    checkString(inputdata){
      let regExp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      return regExp.test(inputdata);
    },
    check(){
      // バリデーション後にpostという流れにする。
      let booleanEmail = false;
      let inputEmail = this.email;

      if(!this.checkString(inputEmail)){
        this.validation.result = "半角英数字でメールアドレスを入力してください。"

      } else {
        booleanEmail = true;
      }

      if(booleanEmail === true){
        this.validation.result = ""
      }
    },
    createComment() {

      this.miss = [];

      if(!this.name){
        this.miss.push("お名前を入力してください。");
        this.validation.result = "入力漏れがあります。";
      }
      if(!this.email){
        this.miss.push("E-mailを入力してください。");
        this.validation.result = "入力漏れがあります。";
      }
      if(!this.comment){
        this.miss.push("内容欄を入力してください。");
        this.validation.result = "入力漏れがあります。";
      }
      if(!this.date){
        this.miss.push("お問い合わせ送信日を入力してください。");
        this.validation.result = "入力漏れがあります。";
      }


      if(this.name && this.email && this.comment && this.date){
        axios.post(
            process.env.VUE_APP_FIREBASE_URL,
          {
            fields: {
              name: {
                stringValue: this.name
              },
              email: {
                stringValue: this.email
              },
              comment: {
                stringValue: this.comment
              },
              date: {
                stringValue: this.date
              },

            }
          }
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });

        this.name = "";
        this.email = "";
        this.comment = "";
        this.date = "";

        this.e = []
        this.validation.result = "お問い合わせの送信が完了しました。ありがとうございます。"

        }
      }
    }
}
</script>



<style>
.contactform {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
    margin: 0 auto;
    display: block;
    padding: 0;
}

.sp-contactform-ul{
  display: none;
}

.contactform-header {
  width: 100%;
  height: 92px;
  background-color: #43A1FF;
  padding: 0px;
  margin: 0px;
  box-shadow: 0px 10px 0.01px 0 #dddddd;
  position: fixed;
  z-index: 100;
}

.contactform-header ul {
  display: flex;
  justify-content: space-between;
  float: right;
  padding-top: 60px;
  padding-right: 20px;
  margin: 0px;
  color: #ffffff;
  width: 27%;
  list-style: none;
}

.contactform-header li {
  font-weight: bold;
  border-bottom: none;
}

.contactform-header h1 {
  padding-left: 50px;
  font-weight: bold;
  margin: 0px;
  color: #ffffff;
  line-height: 92px;
  float: left;
}

.contactform-header-router {
  text-decoration: none;
  color: #ffffff;
}

.contactform-header-router:hover {
  text-decoration: none;
  color: #ffffff;
}

.intro-box {
  width: 80%;
  margin: 0 auto;
  white-space: pre-wrap;
  text-align: left;
}

.nice-to-meet-you {
  font-size: 30px;
}

.contactform-content {
  padding-top: 140px;
}

.error-box {
  width: 80%;
  display: block;
  margin: 0 auto;
}

.error-list {
  color: red;
}

.form {
  display: block;
  margin: 0 auto;
}

.must {
  color: red;
}

.name-label {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  display: block;
}

.email-label {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  display: block;
}

.text-label {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  display: block;
}

.data-label {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  display: block;
}

.name-area {
  width: 80%;
  margin: 0 auto;
  display: block;
}

.email-area {
  width: 80%;
  margin: 0 auto;
  display: block;
}

.text-area {
  width: 80%;
  height: 300px;
  margin: 0 auto;
  display: block;
}

.data-area {
  width: 80%;
  margin: 0 auto;
  display: block;
}

.validation-result {
  width: 80%;
  display: block;
  margin: 0 auto;
  text-align: center;
}

.button-box {
  width: 80%;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  margin-bottom: 100px;
}

button {
  width: 200px;
  height: 50px;
  color: #ffffff;
  background-color: #43A1FF;
  border-bottom-color: #6ca8e4;
  border-right-color: #5287bb;
  border-top-color: #79ade0;
  border-left-color: #9cc1e7;
  font-weight: bold;
}

footer {
  height: 46px;
  background-color: #43A1FF;
  margin-top: 50px;
}

footer p {
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  line-height: 2;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 0px;
}


@media (max-width: 480px){

  .contactform-header {
    height: 95px;
  }

  .contactform-header h1 {
    font-size: 6vw;
    padding: 0px;
    height: 50%;
    margin-bottom: 20px;
    margin-top: -15px;
    margin-left: 20px;
  }

  .contactform-header ul {
    display: none;
  }

  .sp-contactform-ul {
    display: block;
    overflow: hidden;
    background-color: #43A1FF;
    width: 100%;
    height: 35px;
    border-top: 3px solid oldlace;
  }

  .sp-contactform-ul ul {
    float: right;
    width: 50%;
    padding: 0px;
    margin-top: 4px;
    margin-right: 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  .sp-contactform-ul li {
    font-size: 3.5vw;
  }

  .contactform-header-router {
    color: #ffffff;
    text-decoration: none;
  }

  .intro-box {
    width: 80%;
    margin: 0 auto;
    font-size: 3.5vw;
    white-space: pre-wrap;
    text-align: left;
  }

  .nice-to-meet-you {
    font-size: 6vw;
  }

  .contactform-content {
    padding-top: 140px;
  }

  .error-box {
    width: 80%;
    font-size: 3.5vw;
    display: block;
    margin: 0 auto;
  }

  .error-list {
    color: red;
  }

  .form {
    display: block;
    margin: 0 auto;
    font-size: 3.5vw;
  }


  .button-box {
    width: 80%;
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 4.5vw;
    margin-bottom: 100px;
  }

  button {
    width: 200px;
    height: 50px;
    color: #ffffff;
    background-color: #43A1FF;
    border-bottom-color: #6ca8e4;
    border-right-color: #5287bb;
    border-top-color: #79ade0;
    border-left-color: #9cc1e7;
    font-weight: bold;
  }

  footer p {
    font-size: 2.5vw;
  }

}


@media (min-width: 480px) and (max-width: 896px) {

  .contactform-header {
    width: 100%;
    height: 150px;
    box-shadow: none;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    box-shadow: 0px 10px 0.01px 0 #dddddd;
  }

  .contactform-header h1 {
    font-size: 4vw;
    padding: 0px;
    height: 50%;
    margin-bottom: 20px;
    margin-top: 0px;
    margin-left: 30px;
  }

  .contactform-header ul {
    display: none;
  }

  .sp-contactform-ul {
    display: block;
    overflow: hidden;
    background-color: #43A1FF;
    width: 100%;
    height: 60px;
    border-top: 3px solid oldlace;
  }

  .sp-contactform-ul ul {
    float: right;
    width: 70%;
    padding: 0px;
    margin-top: 10px;
    margin-right: 20px;
    list-style: none;
    display: flex;
    justify-content: flex-end;
  }

  .sp-contactform-ul li {
    font-size: 2.5vw;
    margin-right: 10px;;
  }

  .contact-header-router {
    color: #ffffff;
    text-decoration: none;
  }

  .contactform-content {
    padding-top: 200px;
  }


}


</style>
