# kby-website

## Panduan development

```shell
$ git clone git@github.com:iqbalperkasa/kby-website.git
$ cd kby-website
$ npm install
```

Jalankan server frontend di local.

```shell
$ npm run dev # http://localhost:1234, HMR activated (auto reload)
```

(Opsional). Jalankan server backend di local.

```shell
$ npm install -g now@latest # instal now cli
$ now dev # http://localhost:3000, auto reload
```

## Production

Setiap push commit ke remote, otomatis akan terdeploy oleh [Vercel](https://vercel.com) di branch remote tersebut, atau bisa deploy manual dari local:

```shell
$ now
```
