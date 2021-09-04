

#  命名规范

##  项目文件命名

项目名称全部采用小写方式，用中划线隔开（kebab-case）

```js
// good 
mall-management-system
// bad
mall_management-system  mallManagementSystem
```

目录全部采用小写方式， 以中划线分隔，有复数结构时，要采用复数命名法， 缩写不用复数。

```js
// good
scripts / styles / components / images / utils / layouts / demo-styles / demo-scripts / img / doc
// bad
script / style / demo_scripts / demoStyles / imgs / docs
```

##  CSS命名

- 类名使用小写字母，以中划线隔开
- id采用小驼峰命名法
- scss中的变量、函数、混合采用驼峰式命名法

##  JavaScript 命名规范

- 变量名、方法名、参数名统一采用小驼峰命名法（lowerCamelCase）

- 方法名采用动词+名词的形式

  ```js
  // good 
  getToken setUserInfo openDialog
  
  // bad 
  save / open / show / go
  ```

- 常用的动词

  ```txt
  get 获取/set 设置,
  add 增加/remove 删除
  create 创建/destory 移除
  start 启动/stop 停止
  open 打开/close 关闭,
  read 读取/write 写入
  load 载入/save 保存,
  create 创建/destroy 销毁
  begin 开始/end 结束,
  backup 备份/restore 恢复
  import 导入/export 导出,
  split 分割/merge 合并
  inject 注入/extract 提取,
  attach 附着/detach 脱离
  bind 绑定/separate 分离,
  view 查看/browse 浏览
  edit 编辑/modify 修改,
  select 选取/mark 标记
  copy 复制/paste 粘贴,
  undo 撤销/redo 重做
  insert 插入/delete 移除,
  add 加入/append 添加
  clean 清理/clear 清除,
  index 索引/sort 排序
  find 查找/search 搜索,
  increase 增加/decrease 减少
  play 播放/pause 暂停,
  launch 启动/run 运行
  compile 编译/execute 执行,
  debug 调试/trace 跟踪
  observe 观察/listen 监听,
  build 构建/publish 发布
  input 输入/output 输出,
  encode 编码/decode 解码
  encrypt 加密/decrypt 解密,
  compress 压缩/decompress 解压缩
  pack 打包/unpack 解包,
  parse 解析/emit 生成
  connect 连接/disconnect 断开,
  send 发送/receive 接收
  download 下载/upload 上传,
  refresh 刷新/synchronize 同步
  update 更新/revert 复原,
  lock 锁定/unlock 解锁
  check out 签出/check in 签入,
  submit 提交/commit 交付
  push 推/pull 拉,
  expand 展开/collapse 折叠
  begin 起始/end 结束,
  start 开始/finish 完成
  enter 进入/exit 退出,
  abort 放弃/quit 离开
  obsolete 废弃/depreciate 废旧,
  collect 收集/aggregate 聚集
  ```

- 常量命名全部大写，单词之间用下划线隔开，力求语义表达清楚，不嫌名称太长

  ```js
  // good
  MAX_STOCK_COUNT
  // bad
  max_stock
  ```

- 类的名称采用大驼峰命名法