# nuxt-form-test

> My supreme Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Custom usage

### deploy
need [Firebase CLI](https://firebase.google.com/docs/cli/) and overwritten api key.
```
yarn deploy
```

### live demo
https://nuxt-form-test.web.app/

## What
フロントエンドに [Nuxt.js](https://ja.nuxtjs.org/)、バックエンドに Firebase を使ったお問い合わせフォームです。  
UI フレームワークに [Vuetify](https://vuetifyjs.com/) を使用しています。

PC / Android の Chrome のみ、「お問い合わせ内容」を音声入力できます。
現段階の Web Standard においては experimental technology という立ち位置の SpeechRecognition API を使用しています。  
https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

入力内容のメール受信に Node.js モジュールの [Nodemailer](https://nodemailer.com/) を使っています。Node.js による処理は Firebase Functions を使用しています。

デプロイには Firebase Hosting を使用しています。

refs: https://github.com/hrfmmymt/vue-form-test
