# less = MORE?

A GAME DESIGN DOCUMENT


### 組員

### 簡介

#### 遊戲概要

一個能夠殺時間，可是卻又能輕易上癮的輕鬆小遊戲！
以在智慧型手機上「丟」的動作為主體作延伸，玩家丟出彩球完成關卡要求。

#### 遊戲背景

有一天，球球王國的黑森林公主被紅色魔心壞蛋綁架了！扮演糖果指揮官的玩家必須依序派出不同顏色的球球勇者救出公主。因為紅色魔心壞蛋擁有各種不同的魔法招式，所以記得勇者一定要依序發動攻擊才有效呦>///<

### 遊戲玩法

#### 遊戲主介面與操控方法

![UI bubble](https://lh6.googleusercontent.com/-wbnZcpx91GU/Uno4UMjp2pI/AAAAAAAAADo/gCKyec8ddJg/w426-h746-no/UI-bubble.png)

[SAMPLE]

遊戲上方為彩球佇列，玩家用手指按壓並將主介面的冒出彩球往佇列方向（即螢幕之上方）丟出。玩家需依照彩球佇列中的順序，依序將彩球丟出。

在此例中彩球由底部似氣泡狀冒出，依據主題不同我們還會設計不同的產生特性，如平面碰撞、黑洞、氣泡等等。

主介面其實可視為POD、神魔之塔的變體。主介面中的彩球都在一一方框內。

![shenmoe](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSL8zVnQKxf_iq-l7f6rRX94T-ZWH-OqAHQBY1ZuV-9ktlzjY_2)

而最上方的彩球佇列條則可視為太鼓達人等若干節奏遊戲之變體，皆顯示由右至左之物件排列順序。

![Taiko](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIICqyp4CfUGWjoq09if813lyr0oPDaFteyFlvPCbISxbOPTk27A)


#### 遊戲規則

![DEMO](https://lh5.googleusercontent.com/-hkZArP7uH7s/UpQe7AU2E2I/AAAAAAAAAHc/saaJtCXbyjM/w321-h562-no/UI-Method.png)

依照螢幕上排佇列的順序，將彩球往上丟。

若顏色正確且有完成「丟」的動作，則記為有效。
若中途放開（未完成丟），或著是丟錯彩球的顏色，則彩球顯示錯誤反饋，固定振動，並且播放錯誤音效，一點五秒內玩家無法進行動作。(坐等時間流失)

##### 模式一：限時模式(Time Attack)

在限定的時間內，比拼丟球的完成數。預設為90秒，提供60秒、180秒等選項。

##### 模式二：積分累積(Endless)

在不觸發錯誤反饋的情況下累積球數，同時限定最慢必須每秒丟出一顆球。遊戲在玩家錯誤時結束，並計算球數作為積分。

#### 遊戲流程圖

![GAMEFLOW](https://lh5.googleusercontent.com/cmlBsM8ki_YmSqTA_vdRhQTjOfbiYRzfxG1npnxNuw=w575-h743-no)

#### 場景設計

##### 主選單

![MENU](https://lh3.googleusercontent.com/-i4UZvFvjiUo/UpOO-QgF05I/AAAAAAAAAGU/UKCXjYUenJk/w495-h743-no/Menu.png)

##### 操作畫面

![BrownMotion](https://lh4.googleusercontent.com/-8dfawAgsJRY/UpQVF1S22XI/AAAAAAAAAGo/CVZCbO1ypRE/w321-h562-no/UI-BrownMotion.png)

右下角為暫停紐，按下開啟控制選單。

![CenterGravity](https://lh5.googleusercontent.com/-YsJAeJu22Fo/UpQbWrtULqI/AAAAAAAAAHM/bTImhV6g_10/w321-h562-no/UI-CenterGravity.png)

另一個彩球運動物理模擬。類似黑洞，彩球在軌道繞圈，最終會消失在中心。

##### 得分畫面

![Score](https://lh3.googleusercontent.com/-Rybvsda1E7c/UpQYmjoWxUI/AAAAAAAAAHA/o1SWJh3QIHk/w321-h562-no/UI-score.png)

左下角返回選單。中間數字顯示完成球數。

#### 技術運用

* 精美簡約的UI設計
> 1. Photoshop
> 2. illustrator
> 3. 美感。
> 4. 當然跟Document有差啦因為是用mspaint亂拉的

* 物理引擎的使用
> 1. Unity Physics

* 整體動畫效果的一致性
> 1. Photoshop

* 背景音樂、音效建立
> 1. 上網尋找輕鬆風格的無版權配樂
> 2. 自行製作

#### 高風險和高價值項目

##### 高風險

* 要是其實不太好玩…那就只能在初期階段砍掉重練惹= =
* 難以駕馭的扁平化美術風格
* 難以實作的特殊物理特性呈現
  * 如發想document提到的隨機滾動
  * 3D盆等


##### 高價值

* 不同物理特性的實作
  * 氣泡
  * 中心重立場
  * 旋轉球面
  * 3D 滾動
  * 彈跳
* 上癮遊戲的氣氛
  * 音樂、遊戲場景的高同步率
* 可愛又迷人的主題情境

#### 時程規劃

|週次|進度|
|----|---:|
|1| Prototype(1)、UI設計(1)、寫CODE、DEBUG
|2| 建模、建動畫、音效、背景音樂、寫CODE、DEBUG
|3| Prototype(2)UI設計(2)、寫CODE、DEBUG
|4| 效能優化(1)建模建動畫、寫CODE、DEBUG
|5| 建模、建動畫、寫CODE、DEBUG
|6| 整合、寫CODE、DEBUG
|7| Demo囉


#### 工作分配

Person 1

* Coding
* UI Design
* FX Remix

Person 2

* Coding
* UI Design
* FX Remix
* Debug

Person 3

* Coding
* UI Design
* FX Remix
* Performance Optimization

Person 4

* Coding
* UI Design
* FX Remix
* Dubbing
* Animation

Person 5

* Coding
* UI Design
* FX Remix
* Project Manager
* Animation
