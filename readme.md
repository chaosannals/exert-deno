# [exert-deno](https://github.com/chaosannals/exert-deno)

```bash
# 编译命令介绍
deno compile -h
# 编译本平台
deno compile --unstable hello.js
# 编译指定平台
deno compile --unstable --target x86_64-unknown-linux-gnu hello.js
```

## sfs

```bash
deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/sfs sfs.js

deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/rmlog rmlog.js

deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/cmdarg cmdarg.js
```
