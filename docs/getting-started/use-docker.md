# 使用 Docker {#deploy-with-docker}

1. 在你的机器上安装好 [Docker](https://docker.com/)。

2. 拉取镜像：

    ```sh
    docker pull silianz/python-openbmclapi:latest
    ```

    ::::info

    你也可使用镜像源进行拉取：

    ```sh
    docker pull registry.cn-hangzhou.aliyuncs.com/silianz/python-openbmclapi:latest
    ```

    ::::

3. 创建容器：

    ```sh
    docker run -d \
    -v /path/to/your/cache:/opt/python-openbmclapi/bmclapi \
    -e cluster.id=${cluster.id} \
    -e cluster.secret=${cluster.secret} \
    -e cluster.public_port=${cluster.public_port} \
    -p ${cluster.public_port}:8080 \
    --restart always \
    --name python-openbmclapi \
    silianz/python-openbmclapi 
    ```

    **参数说明：**

    `cluster.public_port` - 对外开放的端口。

    `cluster.id` - 即 `CLUSTER_ID`。

    `cluster.secret` - 即 `CLUSTER_SECRET`。

::::info

其他配置参数请参见配置文件，请使用**命名空间 ID** 将相应的配置项作为环境变量传入到 Docker 容器中。

在某些特定的情况下，你可能无法将某些配置参数传入容器，此时你可以尝试挂载配置文件，只需在容器启动命令中加上这条参数：

```sh
-v /path/to/your/config/file:/opt/python-openbmclapi/config/config.yml
```

:::tip 命名空间 ID

命名空间 ID 是将配置项传入 Docker 容器的一种方法。

```yml title="config/config.yml"
dashboard:
  password: ""
  username: admin
  websocket: true
```

这是一段示例的配置项，将这些配置项转化为命名空间 ID 分别为：

```properties
dashboard.password=""
dashboard.user=admin
dashboard.websocker=true
```

在转化配置项为命名空间 ID 时，使用 `.` 连接配置项的键与值。

:::
::::
