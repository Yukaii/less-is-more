# less is MORE

![UI bubble](https://lh6.googleusercontent.com/-wbnZcpx91GU/Uno4UMjp2pI/AAAAAAAAADo/gCKyec8ddJg/w426-h746-no/UI-bubble.png)

## Group 1 - Members

## Overview & Soul

透過智慧型手機觸控，按住，拖拉、丟的手勢

完成一種簡單自然不做作

散發出一股特別氣質的好遊戲。

* * * * *

上面是開玩笑的XD，我們認為在智慧型手機上，「丟」出東西有種莫名的爽感

丟垃圾、丟老鼠、丟飛盤，先使手中的東西富有速度、生命感

再殘酷拋棄他，有去無回

這就是丟的意義。

* * * * *

上面是唬爛的XD，我們希望打造全新的上癮小遊戲

透過不斷地用手指摩擦手機堅硬的大猩猩玻璃

達到深度的局部去角質效果

讓玩家的手指有如新生兒般的細緻美好

* * * * *

不廢話了。

「讓使用者有打從心裡而生的小確爽」

這就是我們的初衷。


## Design

### Core

將不同 **顏色/形狀/材質** 的球球丟出作分類。

目前構思出兩種不同的 UI，以下分別敘述。

### UI

#### 平面佇列

![UI Queue](https://lh3.googleusercontent.com/-UzLF4m06qyY/UnpC6p0O6UI/AAAAAAAAAEY/Fex06Z3cLxo/w426-h746-no/UI-Queue.png)

選擇一，因畫面元素較少而簡潔，相對適用於**螢幕較小**的裝置。

但在大螢幕智慧型行動裝置普及的今天，這項考量也可能變得可有可無了。

以下是特性描述：

* 佇列擺於螢幕頂端
* 中央螢幕區塊為球球集散地
* 玩家依照佇列順序丟出球球完成排序


#### 立體盒

![UI BOX](https://lh3.googleusercontent.com/-tHoCwSkvv5g/UnpBIMH5eUI/AAAAAAAAAEI/9EsDxDOCJJE/w848-h480-no/UI-3DBox.png)

選擇二，由立體盒子構成的主畫面。因畫面呈現立體感，所以可能需要較大的螢幕。

球球由產生後由使用者向盒子的各個面，依照球球的顏色與各個面相對應丟出。

以下是特性描述：

* 盒中央為球球集散地
* 盒面多寡可控制難度(四面、六面、八面不等)
* 依照盒面變色丟出相應的球
* 變色根據音樂節奏而出現（似節奏遊戲）
* 可加上joystick調整遊戲視角(additional)
* 3D盒子也可改為2D呈現



## Rules

以下描述各個遊戲行為。

### 球球移動方式

* 中心重力場 (2D or 3D)
  > 球球對中心環繞旋轉
* 四面牆任意碰撞 (2D)
  > 摻雜隱形粒子、布朗運動（啥鬼啊）
* 球球附著於旋轉球面 (3D)
  > 如天球、星象、地球儀模型一般，自由轉動/joystick控制球體旋轉
* 滾動於盆中 (3D)
  > 洗手台、臉盆、馬桶（？）。球球隨時間限制消失（被沖掉？）
* 隨機滾動
  > Random, Random.
* 分層 (3D)
* 彈跳 (2D or 3D)
* 氣泡 (2D)
  > 球球為由螢幕底部冒出的氣泡，放在首頁的圖

### 球球產生方式

* 從平面底部冒出
* 憑空聚合產生(animation)
* 煙霧爆破產生(animation)

### 錯誤事件

* 顏色錯誤
* ...
* ...

### 錯誤反饋

* 扣除積分
* 扣除剩餘時間
* 增加難度（下列難度控制）

### 難度控制

* 球球移動速度
  > 就是要讓你點--不到
* 排序複雜度
  >	信不信我用灰階花色給你玩=w=
* 特殊物件（ex. bomb）
  > 欸點到了對吧，呵呵Game Over
* 遮蔽（即可視範圍）
  > 可視範圍隨音樂節奏擴大縮小

## Technical

1. Google, Google, and Google.
2. Unity
3. 3D MAX
4. PS
5. JScript
6. C#
7. OUR BRAINS
8. vitamin B complex
9. Coffee
10  Alcoholic beverage

## High Risks and High Value

### High Risk

* Some Physical Effects of balls
* Suitable Background Music
* Cryptonの版權反擊(X)

### High Value

> all(X)

* Attractive UI
* Pleasable Interaction
* Cute(萌え) Image
* 初音ミク
* US$ 100 Model(X, truely high value)

## Schedule

|週次|進度|
|----|---:|
|1| Prototype(1)、UI設計(1)、寫CODE、DEBUG
|2| 建模、建動畫、音效、背景音樂、寫CODE、DEBUG
|3| Prototype(2)UI設計(2)、寫CODE、DEBUG
|4| 效能優化(1)建模建動畫、寫CODE、DEBUG
|5| 建模、建動畫、寫CODE、DEBUG
|6| 整合、寫CODE、DEBUG
|7| Demo囉


## Work Assignment

Person A
> * Coding
> * UI Design
> * FX Remix
> * 3Ds MAX Modeling

Person B
> * Coding
> * UI Design
> * FX Remix
> * 3Ds MAX Modeling

Person C
> * Coding
> * UI Design
> * FX Remix
> * 3Ds MAX Modeling
> * Performance Optimization

Person D
> * Coding
> * UI Design
> * FX Remix
> * 3Ds MAX Modeling
> * Dubbing

Person E
> * Coding
> * UI Design
> * FX Remix
> * 3Ds MAX Modeling
> * Project Manager

## References

* iOS 7(atmosphere)
* 太鼓(部分介面)
* 切水果(Bomb)
* Lumines(Different Game Modes)
* 神魔(部分介面)

----------------以上(包括此行)內容純屬虛構，如有雷同實為巧合----------------
