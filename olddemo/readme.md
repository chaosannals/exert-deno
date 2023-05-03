# 示例

## sfs

```bash
deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/sfs sfs.js

deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/rmlog rmlog.js

deno compile --unstable --allow-all --target x86_64-unknown-linux-gnu --output dist/cmdarg cmdarg.js
```

## dnkv

Deno Kv 键值对数据库

```bash
# 执行 目前 这个功能是非正式的，必须加 --unstable
deno run --unstable --allow-all dnkv.js
```

```bash
# 编译
deno compile --unstable --allow-all dnkv.js
```