/** Chunk was on web.js **/
/** chunk id: 993327, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(927813),
    i = n(86070),
    a = n(517164);
let o = r.A.Millis.MINUTE;

function s(e, t) {
    var n, r;
    if (a.A.isFetchingUserOutbox(e)) return;
    let s = null != (n = null == (r = a.A.getUserOutbox(e)) ? void 0 : r.lastFetched) ? n : 0;
    if (!(Date.now() - s < o)) return (0, i.r7)(e, t)
}