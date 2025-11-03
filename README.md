# 博客网站运行和打包教程

## 项目介绍
这是一个基于VitePress构建的博客网站，使用了@sugarat/theme主题，包含了文章发布、图片展示等功能。

## 环境准备
1. 安装Node.js (建议使用v16或更高版本)
2. 安装npm (通常随Node.js一起安装)
3. 克隆或下载本项目到本地

## 运行步骤
1. 打开命令行终端，进入项目根目录
   ```bash
   cd d:\Project\blog-1
   ```

2. 安装项目依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   npm run dev
   ```

4. 在浏览器中访问 `http://localhost:5173` 查看网站效果

## 打包步骤
### 1. 默认打包(部署到根目录)
如果你的网站将部署到域名的根目录下，使用以下命令：
```bash
npm run build
```
打包完成后，文件会生成在 `docs/.vitepress/dist` 目录中。

### 2. 自定义子目录打包
如果你的网站需要部署到子目录下(例如 `https://yourdomain.com/blog-1/`)，使用以下命令：
```bash
npm run build:custom
```
> 注意：默认子目录为 `/bolog-1/`，如需修改，请编辑package.json文件中的`build:custom`脚本。

## 部署说明
1. 打包完成后，将 `docs/.vitepress/dist` 目录中的所有文件复制到你的Web服务器目录
2. 如果是部署到子目录，确保服务器配置正确指向该子目录
3. 对于GitHub Pages等平台，确保设置正确的base路径

## 常见问题
### 1. 打包报错 "base option should start with a slash"
这是因为base路径配置不正确。请确保config.mts中的base配置以斜杠开头：
```javascript
base: process.env.VITEPRESS_BASE || "/"
```

### 2. 图片路径问题
请使用绝对路径引用图片，例如：
```markdown
![图片描述](/1.jpg)
```
图片文件应放在 `docs/public` 目录下。

### 3. 如何修改子目录名称
编辑package.json文件中的`build:custom`脚本，将`VITEPRESS_BASE=/bolog-1/`修改为你需要的子目录路径，例如：
```json
"build:custom": "set VITEPRESS_BASE=/my-blog/&& vitepress build docs"
```