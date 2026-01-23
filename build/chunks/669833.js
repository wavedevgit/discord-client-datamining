/** Chunk was on web.js **/
/** chunk id: 669833, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e)
}
n.d(t, {
    _: () => r
})