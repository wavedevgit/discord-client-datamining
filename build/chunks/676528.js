/** chunk id: 676528, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(860511),
    i = n(65978),
    a = n(647055),
    o = function(e) {
        return i.slice(0, e.length) === e
    };
e.exports = function() {
    return o("Bun/") ? "BUN" : o("Cloudflare-Workers") ? "CLOUDFLARE" : o("Deno/") ? "DENO" : o("Node.js/") ? "NODE" : r.Bun && "string" == typeof Bun.version ? "BUN" : r.Deno && "object" == typeof Deno.version ? "DENO" : "process" === a(r.process) ? "NODE" : r.window && r.document ? "BROWSER" : "REST"
}()