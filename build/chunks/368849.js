/** Chunk was on web.js **/
/** chunk id: 368849, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => i
}), n(457529);
var r = n(264572).Buffer;

function i(e) {
    try {
        return r.from(JSON.stringify(e)).toString("base64")
    } catch (e) {
        return null
    }
}