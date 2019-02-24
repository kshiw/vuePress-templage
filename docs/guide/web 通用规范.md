# web 通用规范

## 1 引言


### 1.1 编写目的

前端通用代码规范(以下简称"规范")，目的是规范Web前端代码的编写风格，提高代码的一致性和可维护性。

### 1.2 适用范围

适用于Web前端所有开发人员。

### 1.3 说明

规范配合检测工具用来指导开发，规范中具体细则分为Force及Option两个级别,并会给出不规范写法予以参照。

## 2 HTML

关于HTML规范包括以下几个方面：

* 命名规范
* 标签规范
* 格式规范

以上规范，在开发规程中需要强制遵守

### 2.1 命名规范

* 规则
  * 头：header
  * 内容：content/container
  * 尾：footer
  * 导航：nav
  * 侧栏：sidebar
  * 栏目：column
  * 页面外围控制整体佈局宽度：wrapper
  * 左右中：left right center
  * 登录条：loginbar
  * 标志：logo
  * 广告：banner
  * 页面主体：main
  * 热点：hot
  * 下载：download
  * 子导航：subnav
  * 菜单：menu
  * 子菜单：submenu
  * 搜索：search
  * 页脚：footer
  * 滚动：scroll
  * 内容：content
  * 标签：tags
  * 提示信息：msg
  * 小技巧：tips
  * 栏目标题：title
  * 服务：service
  * 注册：regsiter
  * 状态：status
* 注意事项
  * 一律小写
  * 尽量用英文
  * 不加中杠和下划线
  * 尽量不缩写，除非一看就明白的单词
  * 驼峰式命名，命名要有意义

#### 2.1.1 class命名

* class 单词全字母小写，单词间以 - 分隔

  ```html
  <!-- 推荐 -->
  <div class="head-info"></div>

  <!-- 不推荐 -->
  <div class="Head_info"></div>
  ```

* 子class命名嵌套不超过4层

  ```html
  <!-- 不规范写法，子class命名嵌套不要超过4层 -->
  <div class="head-info">
    <div class="head-info-content">
      <div class="head-info-content-one">
        <div class="head-info-content-one-example"></div>
      </div>
    </div>
  </div>
  ```

* class选择器命名

  ```html
  <!-- 推荐 -->
  <div class="s-info"></div>

  <!-- 不推荐 -->
  <div class="info"></div>

  ```

* 前面加空格

  ```html
  <!-- 不推荐 -->
  .nav{
      color: #ebc;
  }
  <!-- 推荐 -->
  .nav {
      color: #ebc;
  }
  ```

#### 2.1.2 id命名

* id命名采用 Camel

  ```html
  <!-- 推荐 -->
  <div id="headInfo"></div>

  <!-- 不推荐 -->
  <div id="HeadInfo"></div>
  ```

### 2.2 标签规范

* img标签需要添加提示性文字

  ```html
  <!-- 推荐 -->
  <img src="" alt="首页logo">

  <!-- 不推荐 -->
  <img src="">
  ```

* 标签名小写

  ```html
  <!-- 推荐 -->
  <section> 
    <p>这是一个段落。</p>
  </section>

  <!-- 不推荐 -->
  <Section> 
    <p>这是一个段落。</p>
  </SECTION>

  <!-- 不推荐 -->
  <SECTION> 
    <p>这是一个段落。</p>
  </SECTION>
  ```

* 关闭所有的HTML标签

  ```html
  <!-- 推荐 -->
  <section>
    <p>这是一个段落。</p>
    <p>这是一个段落。</p>
  </section

  <!-- 不推荐 -->
  <section>
    <p>这是一个段落。
    <p>这是一个段落。
  </section>
  ```

### 2.3 格式规范

* 标签中属性的位置:id 放第一 、class放第二

  ```html
  <!-- 推荐 -->
  <div id="name" class="user-info"></div>
  ```

* 等号前后少用空格

  ```html
  <!-- 推荐 -->
  <link rel="stylesheet" href="styles.css">

  <!-- 不推荐 -->
  <link rel = "stylesheet" href = "styles.css">
  ```

* 推荐注释

  ```html
  <!-- 这是单行注释 -->

  <!-- 
    这是多行注释。这是多行注释。这是多行注释。这是多行注释。
    这是多行注释。这是多行注释。这是多行注释。这是多行注释。
  -->
  ```

## 3 CSS

* CSS书写顺序
  * 位置顺序(position, top, right, z-index, display, float等)
  * 大小(width, height, padding, margin)
  * 文字系列(font, line-height, letter-spacing,color- text-align等)
  * 背景(background, border等)
  * 其他(animation, transition等)

  ```css
  <!-- 不推荐 -->
  .example {
    color: red;
    z-index: 1;
    brackground-color: #9e0;
    display: inline-block;
    font-size: 1.5em;
  }
  <!-- 推荐 -->
  .example {
    z-index: 1;
    display: inline-block;
    font-size: 1.5em;
    color: red;
    brackground-color: #9e0;
  }
  ```

* 使用缩写

  ```css
  <!-- 不推荐 -->
  .line-box {
    border-top-style: none;
    z-index: 1;
    padding-bottom: 2em;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0;
  }
  <!-- 推荐 -->
  .line-box {
    border-top: 0;
    padding: 0 1em 2em;
  }
  ```

* 去掉小数点前的“0”

  ```css
  <!-- 不推荐 -->
  font-size: 0.8em;
  <!-- 推荐 -->
  font-size: .8em;
  ```

* 不要随意使用Id

  ```css
  <!-- 不推荐 -->
  #info-title {
    font-size: 3em;
  }
  <!-- 推荐 -->
  .info-title {
    font-size: 3em;
  }
  ```

* 16进制颜色代码缩写

  ```css
  <!-- 不推荐 -->
  .info-title {
    color: #eebbcc;
  }
  <!-- 推荐 -->
  .info-title {
    color: #ebc;
  }
  ```

* 为选择器添加状态前缀

  ```css
  <!-- 不推荐 -->
  .withdrawal {
    background-color: #eebbcc;
  }
  <!-- 推荐 -->
  .is-withdrawal {
    background-color: #ebc;
  }
  ```

* 简写命名

  ```css
  <!-- 不推荐 -->
  .navigation {
    color: #eebbcc;
  }
  <!-- 推荐 -->
  .nav {
    color: #ebc;
  }
  ```

## 4 Javascript

### 4.1 命名规范

>驼峰式命名法介绍：驼峰式命名法由小(大)写字母开始，后续每个单词首字母都大写。按照第一个字母是否大写

* 变量
  * 命名方法：小驼峰式命名法。
  * 命名规范：前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)
  * 命名建议：尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型。

    ```javascript
    // 推荐
    var maxCount = 10;
    var tableTitle = 'LoginTable';

    // 不推荐
    var setCount = 10;
    var getTitle = 'LoginTable';
    ```
* 函数
  * 命名方法：小驼峰式命名法。
  * 命名规范：前缀应当为动词。
  * 命名建议：可使用常见动词约定
    |动词|含义|返回值|
    |:--:|:--:|:--:|
    |can|判断是否可执行某个动作(权限)|函数返回一个布尔值。true：可执行；false：不可执行|
    |has|判断是否含有某个值|函数返回一个布尔值。true：含有此值；false：不含有此值|
    |is|判断是否为某个值|函数返回一个布尔值。true：为某个值；false：不为某个值|
    |get|获取某个值|函数返回一个非布尔值|
    |set|设置某个值|无返回值、返回是否设置成功或者返回链式对象|
    |load|加载某些数据|无返回值或者返回是否加载完成的结果|

    ```javascript
    // 是否可阅读
    function canRead() {
    return true;
    }

    // 获取名称
    function getName() {
    return this.name;
    }
    ```

* 常量
  * 命名方法：名称全部大写。
  * 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

    ```javascript
    var MAX_COUNT = 10;
    var URL = 'http://www.baidu.com';
    ```

* 构造函数
  * 命名方法：大驼峰式命名法，首字母大写。
  * 命名规范：前缀为名称。

    ```javascript
    function Student(name) {
    this.name = name;
    }
    var st = new Student('tom');
    ```

* 类的成员

  ```javascript
  类的成员包含：
  ① 公共属性和方法：跟变量和函数的命名一样。
  ② 私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。

  function Student(name) {
    var _name = name; // 私有成员

    // 公共方法
    this.getName = function () {
    return _name;
  }

  // 公共方式
    this.setName = function (value) {
      _name = value;
    }
  }
  var st = new Student('tom');
  st.setName('jerry');
  console.log(st.getName()); // => jerry：输出_name私有变量的值
  ```)