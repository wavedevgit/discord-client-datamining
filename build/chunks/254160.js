/** Chunk was on web.js **/
/** chunk id: 254160, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => o
});
var r = n(887924);
let i = new(n(626584)).A("codedLinkQueue"),
    a = new r.default({
        concurrency: 5,
        intervalCap: 10,
        interval: 2e3
    });

function o(e) {
    a.add(e)
}
a.on("add", () => {
    a.size > 0 && i.warn("Message link fetch queue backlog:", a.size)
})