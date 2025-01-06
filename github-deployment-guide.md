# GitHub 网站发布完整指南

## 1. 创建GitHub仓库
1. 登录GitHub
2. 点击右上角 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - Repository name: 仓库名称（如 tianshui-wudaojie）
   - Description: 可选描述
   - Public: 选择公开
   - Initialize this repository with: 保持空白
4. 点击 "Create repository"

## 2. 本地项目准备
1. 确保项目包含以下文件：
   - index.html（主页面）
   - style.css（样式文件）
   - 其他资源文件（如图片、JS文件等）
2. 所有文件应在项目根目录下

## 3. 初始化Git并推送代码
1. 打开终端，进入项目目录
2. 执行以下命令：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 4. 配置GitHub Pages
1. 进入仓库页面
2. 点击 "Settings"
3. 左侧菜单选择 "Pages"
4. 在 "Source" 部分：
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
5. 点击 "Save"

## 5. 访问网站
1. 等待1-2分钟
2. 访问：https://YOUR_USERNAME.github.io/YOUR_REPO/

## 6. 常见问题解决
1. 404错误：
   - 检查仓库是否为Public
   - 确保index.html在根目录
   - 等待5-10分钟

2. 样式丢失：
   - 检查CSS文件路径
   - 确保所有资源文件已提交

3. 自定义域名（可选）：
   - 在Pages设置添加自定义域名
   - 配置DNS解析

## 7. 最佳实践
1. 保持仓库整洁
2. 使用有意义的commit信息
3. 定期备份代码
4. 使用.gitignore排除不需要的文件
