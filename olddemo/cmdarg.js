function argsAnalyze(args) {
    let sign = '@';
    const result = {
        '@': []
    };
    for(let arg of args) {
        if (arg.startsWith('-')) {
            sign = arg;
            result[sign] = [];
        } else {
            result[sign].push(arg);
        }
    }
    return result;
}

const r = argsAnalyze(Deno.args);
console.log(r);