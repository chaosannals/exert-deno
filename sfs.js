import * as path from "https://deno.land/std@0.88.0/path/mod.ts";

async function statisticFiles(folder) {
    const result = {};
    for await(const entry of Deno.readDir(folder)) {
        const cp = path.join(folder, entry.name);
        // 处理子目录。
        if (entry.isDirectory) {
            const cr = await statisticFiles(cp);
            for (const k of Object.keys(cr)) {
                if (!result[k]) {
                    result[k] = {};
                }
                for (const k2 of Object.keys(cr[k])) {
                    // 初始化统计信息。
                    if (!result[k][k2]) {
                        result[k][k2] = cr[k][k2];
                    }
                    // 累计统计信息。
                    else {
                        result[k][k2].size += cr[k][k2].size;
                        result[k][k2].count += cr[k][k2].count;
                    }
                }
            }
        }
        // 处理文件。
        else if (entry.isFile) {
            const extname = path.extname(entry.name);
            const stat = await Deno.stat(cp);
            if (!result[extname]) {
                result[extname] = {};
            }
            // 初始化统计信息。
            if (!result[extname][folder]) {
                result[extname][folder] = {
                    size: stat.size,
                    count: 1,
                };
            }
            // 累计统计信息。
            else {
                result[extname][folder].count += 1;
                result[extname][folder].size += stat.size;
            }
        }
    }
    return result;
}

const spath = await Deno.realPath(Deno.args[0] || ".")
const r = await statisticFiles(spath);
console.log(r);