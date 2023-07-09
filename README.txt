# 进入vue_api_server文件夹
1. 插件安装：在本目录终端中运行【npm install】命令，安装插件。
2. 数据库配置（如果数据库配置不成功，可参考下方的 #关于mysql数据库的安装及配置）：
 2-1. 在电脑中安装mysql，并按照vue_api_server\config\default.json文件中的"db_config"配置项配置mysql数据库，一般只需配置database--数据库名，user--用户名 和 password--密码 三项。
 2-2. 将vue_api_server\db\mydb.sql导入mysql数据库。以创建表项和添加表数据。
3. 启动数据库
4. 在本目录终端中运行【node .\app.js】启动后端服务器。

#关于mysql数据库的安装及配置（仅供参考）
1. 前往phpstudy官网安装phpstudy 或 phpstudy_pro
2. 打开phpstudy，在【软件管理】选项卡下安装mysql
3. 点开【数据库】选项卡，点击【创建数据库】按钮，创建mysql数据库，此过程中即可配置database--数据库名，user--用户名 和 password--密码 三项。
4. 点击新建数据库的【操作->导入】，导入mydb.sql文件。
至此，数据库配置完成。
5. 在【首页】选项卡中，点击新建数据库的【启动】按钮，启动数据库。

# 进入vue_shop_server文件夹
1. 在本目录终端中运行【node .\app.js】命令启动前端服务器。
2. 在浏览器中输入【http://127.0.0.1】即可进入vue-shop网站首页。