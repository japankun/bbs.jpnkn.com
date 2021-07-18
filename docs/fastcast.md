---
sort: 6
---

# fastcast (beta)

<img src="https://raw.githubusercontent.com/japankun/bbs.jpnkn.com/master/upload/images/fascast-20210429.png" width="600">

fastcastはOBSのブラウザソース向けのレス表示機能です。

- Fastインタフェースをレス表示のみに特化させた仕様なので読み上げ機能などはありません。
- レス表示はしたいけど読み上げの機能は不要、あるいは別のソフトで行いたい。
- 最新レスのみを数秒表示したい
- などの用途を想定しています。

### OBSブラウザソースの追加のやり方

1. OBSのソースにブラウザを追加します。
2. OBSのブラウザソースのURLに次のようなアドレスを指定します。

```
https://bbs.jpnkn.com/{掲示板ID}/beta/fastcast/
```

3. サンプルとして「支点・力点・作用点」のテキストが数秒表示された後に消えます。
4. 以降、掲示板に新着レスがあると表示されます。

### 表示内容について

<img src="https://raw.githubusercontent.com/japankun/bbs.jpnkn.com/master/upload/images/fastcast_view.png" width="600">


### 字幕の色やフォントのカスタマイズ

<img src="https://raw.githubusercontent.com/japankun/bbs.jpnkn.com/master/upload/images/fastcast_customize-20210504.png" width="600">

- 字幕表示に関する設定は以下にて行なえます。
- [https://bbs.jpnkn.com/develop/beta/fastcast/custom](https://bbs.jpnkn.com/develop/beta/fastcast/custom)
- 設定内容は**OBSのブラウザソース内にあるカスタムCSSに貼り付ける**ことで反映されます。
- フォントはOBSの動いているデバイス内にあるフォントを指定することができます。
