import * as path from "https://deno.land/std@0.88.0/path/mod.ts";

async function clearLogFilesByFolder(folder, suffixes) {
    const result = [];
    for await(const entry of Deno.readDir(folder)) {
        const cp = path.join(folder, entry.name);
        // 处理子目录。
        if (entry.isDirectory) {
            const cr = await clearLogFilesByFolder(cp, suffixes);
            result.push(...cr);
        }
        // 处理文件。
        else if (entry.isFile) {
            const extname = path.extname(entry.name);

            if (suffixes.indexOf(extname) >= 0) {
                await Deno.remove(cp);
                result.push(cp);
            }
        }
    }
    return result;
}

const spath = await Deno.realPath(Deno.args[0] || ".")
const r = await clearLogFilesByFolder(spath, ['.log']);
console.log(r);