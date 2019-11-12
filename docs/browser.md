# 対応ブラウザ

- httpが必須のブラウザは読み込みURLをhttpsからhttpに書き換える必要があります。

|   ブラウザ   |  バージョン   | 読み込み | 書き込み | httpへの書き換え |
| :----------: | :-----------: | :------: | :------: | :--: |
|  JaneStyle   |     4.0.0     |   △ ※1   |    ○     | 必要 |
|   LiveMate   |      exA      |   △ ※1   |    ○     | 必要 |
| SpeechCastMe | 2.0.1 rev.122 |    ○     |    ○     | 任意 |
|   nicocast   |     1.23      |    ○     |    ○     | 必要 |
|  PCRBrowser  |     0.0.1     |    ○     |    ○     | 任意 |
|  PCRPlayer   |     0.25      |    ○     |    ○     | 任意 |
| PeerstPlayer |    5.1.40     |   △ ※1   |    ○     | 必要 |

- ※1 差分取得未対応

### 各ブラウザの状況

|   ブラウザ   |           Content-Type            | 差分取得 |
| :----------: | :-------------------------------: | :------: |
|  JaneStyle   | application/x-www-form-urlencoded |    ×     |
| LiveMate exA |     application/octet-stream      |    ×     |
| SpeechCastMe |               不明                |    ○     |
|   nicocast   |               不明                |    ○     |
|  PCRBrowser  | application/x-www-form-urlencoded |    ○     |
|  PCRPlayer   | application/x-www-form-urlencoded |    ○     |
| PeerstPlayer |               不明                |    ×     |

