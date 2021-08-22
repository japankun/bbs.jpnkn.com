---
sort: 7
---

# 対応ブラウザ

- httpが未対応のブラウザは読み込みURLをhttpsからhttpに書き換える必要があります。

|     ブラウザ    |  バージョン   | 読み込み | 書き込み | https対応 |
| :-------------: | :-----------: | :------: | :------: | :--: |
|    JaneStyle    |     4.0.0     |   △ ※1   |    ○     | ○ |
|     LiveMate    |      exA      |   △ ※1   |    ○     | x |
|   SpeechCastMe  | 2.0.1 rev.122 |    ○     |    ○     | ○ |
|     nicocast    |     1.23      |    ○     |    ○     | x |
|    PCRBrowser   |     0.0.1     |    ○     |    ○     | ○ |
|    PCRPlayer    |     0.25      |    ○     |    ○     | ○ |
|   PeerstPlayer  |    5.1.40     |   △ ※1   |    ○     | x |
|     Mekacast    |     0.40a     |     ×      |    ×     | x |
|     unacast     | ver0.1.7.1/0.1.3 |     ○      |    -     | ○ |
| pasta04/unacast | ver0.6.7/0.6.6.0 |     ○      |    -     | ○ |

```note
JaneStyle 4.10 以降では新規板登録時に板名取得ボタンを使用すると板名取得エラーが発生します。お手数ですが、手動で板名の設定をお願いします。
```


- ※1 差分取得未対応

### 各ブラウザの状況

|     ブラウザ     |           Content-Type            | 差分取得 | 301 | 
| :-------------: | :-------------------------------: | :------: | :---: |
|    JaneStyle    | application/x-www-form-urlencoded |    ×     |   ?   |
|   LiveMate exA  |     application/octet-stream      |    ×     |   ×   |
|   SpeechCastMe  |               不明                |    ○     |   ?   |
|     nicocast    |               不明                |    ○     |   ×   |
|    PCRBrowser   | application/x-www-form-urlencoded |    ○     |   ○   |
|    PCRPlayer    | application/x-www-form-urlencoded |    ○     |   ○   |
|   PeerstPlayer  |               不明                |    ×     |   ×   |
|     unacast     |                 -                 |    ○     |   ○   |
| pasta04/unacast |                 -                 |    ○     |   ○   |

