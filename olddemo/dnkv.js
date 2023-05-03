const kv = await Deno.openKv();

const key = ["users", crypto.randomUUID()];
const value = { name: "Alice", created: new Date() };
await kv.set(key, value);

const result = await kv.get(key);
console.log('示例1', result.value);

await kv.set(["users", "alice"], { birthday: "January 1, 1990" });
await kv.set(["users", "sam"], { birthday: "February 14, 1985" });
await kv.set(["users", "taylor"], { birthday: "December 25, 1970" });

// List out all entries with keys starting with `["users"]`
const iter = kv.list({ prefix: ["users"] });
for await (const entry of iter) {
  console.log('示例2', entry.key);
  console.log(entry.value);
}


// 示例 3 这东西好像有 bug ，一会能设置上，一会不行的。。
await kv.set(["balance"], { bob: 11, liz: 11 });

const change = 10;

const bob = await kv.get(["balance", "bob"]);
const liz = await kv.get(["balance", "liz"]);

if (liz.value < change) {
    console.log('liz', liz.value)
  throw "not enough balance";
}

const success = await kv.atomic()
  .check(bob, liz) // balances did not change
  .set(["balance", "bob"], bob.value - change)
  .set(["balance", "liz"], liz.value + change)
  .commit();

console.log('示例3', bob.value, liz.value);

const bob2 = await kv.get(["balance", "bob"]);

console.log('示例3', bob2.value, liz.value);