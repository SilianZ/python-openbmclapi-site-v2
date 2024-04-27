# Python OpenBMCLAPI Site

[Python OpenBMCLAPI](https://github.com/TTB-Network/python-openbmclapi) 的帮助文档。

此网站使用 [Docusaurus v3](https://docusaurus.io/) 构建，Docusaurus 是一个静态网站生成器。

## 安装

```
$ yarn
```

## 本地开发

```
$ yarn start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都是实时更新的，你不需要重新启动服务器。

## 构建

```
$ yarn build
```

此命令将静态内容生成到 `build` 目录中，并且可以使用任何静态内容托管服务来运行。

## 部署

### GitHub Pages

使用 SSH：

```
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果你使用 GitHub Pages 进行托管，此命令是构建网站并推送到 `gh pages` 分支的方法。

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTTB-Network%2Fpython-openbmclapi-site)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2FTTB-Network%2Fpython-openbmclapi-site)
