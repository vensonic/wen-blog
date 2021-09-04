#  JavaScript规范

##  代码空格

###  逗号空格

逗号前后的空格可以提高代码的可读性，在逗号后面使用空格，逗号前面不加空格。

```js
// good
const foo = 1, bar = 2

// bad 
const foo = 1,bar = 2
const foo = 1 , bar = 2
const foo = 1 ,bar = 2
```

### 计算属性空格

在对象的计算属性内，禁止使用空格

```js
// good
obj['foo']

// bad
obj[ 'foo' ]
```

###  代码块空格

```js
// good
if (a) {
  b()
}

function a () {}

// bad
if (a){
  b()
}

function a (){}
```

###  操作符空格

二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格

```js
// good
let a = !arr.length;
a++;
a = b + c;

// bad
a = b+c
a ++

```



##  换行

每个独立语句结束后必须换行，运算符处换行时，运算符在行首。

```js
// good
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')
) {
    // ...
}

var result = number1 + number2 + number3
    + number4 + number5;

// bad
if (user.isAuthenticated() &&
    user.isInRole('admin') &&
    user.hasAuthority('add-admin') ||
    user.hasAuthority('delete-admin')) {
    // ...
}

var result = number1 + number2 + number3 +
    number4 + number5;
```



## 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else, for, while, do, switch, try, catch, finally, with。

```javascript
// good
if (condition) {
  doSomething();
}

// bad
if (condition) doSomething();
```



## 比较运算符&相等

- 使用 `===` 和 `!==` 而非 `==` 和 `!=`

- 条件声明例如 `if` 会用 `ToBoolean` 这个抽象方法将表达式转成布尔值并遵循如下规则

  - `Objects` 等于 `true`

  - `Undefined` 等于 `false`

  - `Null` 等于 `false`

  - `Booleans` 等于 `布尔值`

  - `Numbers` 在 `+0`, `-0`, 或者 `NaN` 的情况下等于 `false`, 其他情况是 `true`

  - `Strings` 为 `''` 时等于 `false`, 否则是 `true`

    ```js
    if ([0] && []) {
      // true
      // 数组(即使是空数组)也是对象，对象等于true
    }
    ```



##  注释

- 单行注释

  独占一行，`//`后面需空格

- 多行注释 `/*...*/`

- 注释类型定义

  |     类型定义      |              语法示例              |                   解释                    |
  | :---------------: | :--------------------------------: | :---------------------------------------: |
  |      String       |              {string}              |                    --                     |
  |      Number       |              {number}              |                    --                     |
  |      Boolean      |             {boolean}              |                    --                     |
  |      Object       |              {Object}              |                    --                     |
  |     Function      |             {Function}             |                    --                     |
  |      RegExp       |              {RegExp}              |                    --                     |
  |       Array       |              {Array}               |                    --                     |
  |       Date        |               {Date}               |                    --                     |
  |   单一类型集合    |           {Array.string}           |             string 类型的数组             |
  |      多类型       |       {(number ｜ boolean)}        | 可能是 number 类型, 也可能是 boolean 类型 |
  |    允许为 null    |             {?number}              |       可能是 number, 也可能是 null        |
  |   不允许为 null   |             {!Object}              |         Object 类型, 但不是 null          |
  |   Function 类型   |    {function(number, boolean)}     |              函数, 形参类型               |
  | Function 带返回值 | {function(number, boolean):string} |          函数, 形参, 返回值类型           |
  |     参数可选      |       @param {string=} name        |           可选参数, =为类型后缀           |
  |     可变参数      |      @param {...number} args       |          变长参数, ...为类型前缀          |
  |     任意类型      |                {*}                 |                 任意类型                  |
  |   可选任意类型    |          @param {*=} name          |            可选参数，类型不限             |
  |   可变任意类型    |         @param {...*} args         |            变长参数，类型不限             |

- 函数/方法注释

  - 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识
  - 参数和返回值注释必须包含类型信息和说明
  - 当函数是内部函数，外部不可访问时，可以使用 @inner 标识
  - 对 Object 中各项的描述， 必须使用 @param 标识

  ```js
  /**
  * 函数描述
  *
  * @param {Object} option 参数描述
  * @param {string} option.url option项描述
  * @param {string=} option.method option项描述，可选参数
  */
  function foo(option) {
    // TODO
  }
  ```

  