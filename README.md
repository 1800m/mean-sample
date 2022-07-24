# mean-sample

MEAN Stackを利用した開発のリポジトリ

## Dockerイメージのビルド

```bash
# ${TAG}に任意の文字列を入力して実行するとイメージがビルドされる
# .envファイル(タグ情報)が同時に出力される
bash build.sh ${TAG}
```

## Dockerコンテナの起動

```bash
# ビルド時のタグが付いたイメージに基づきコンテナが起動する
bash run.sh
```

## Dockerコンテナの停止・削除

```bash
# run.shで起動したコンテナを停止して削除する
bash down.sh
```


## MongoDBの初期化

```bash
# レプリカセット設定
docker exec -i mongodb-primary bash -c "mongo /docker-entrypoint-initdb.d/init.js"
```

### ダミーデータの挿入

```bash
# 3件分のダミーデータ
# reservation-app-dev（DB名）を変えれば任意のDBに書込可能
docker exec -i mongodb-primary bash -c "mongo reservation-app-dev /docker-entrypoint-initdb.d/dummy-data.js"
```

## アプリ起動

### FE
```bash
# コンテナのログイン
docker exec -it web-app-fe bash
# アプリの起動
npm run start-dev
# アプリの停止
Ctrl+C
```

### BE
```bash
# コンテナのログイン
docker exec -it web-app-be bash
# アプリの起動
npm run start-dev
# アプリの停止
Ctrl+C
```
