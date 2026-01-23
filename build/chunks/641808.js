/** Chunk was on web.js **/
/** chunk id: 641808, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError("attempted to set read only private field");
        t.value = n
    }
}
n.d(t, {
    _: () => r
})