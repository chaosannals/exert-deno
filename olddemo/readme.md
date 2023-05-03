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
# 编译
deno compile --unstable --allow-all dnkv.js
```