/** Chunk was on web.js **/
/** chunk id: 989133, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e, t) {
    if (e.score === t.score) {
        var n, r, i, a, s, o;
        let l = null != (n = null != (r = e.sortable) ? r : null == (s = e.comparator) ? void 0 : s.toLocaleLowerCase()) ? n : "",
            c = null != (i = null != (a = e.sortable) ? a : null == (o = t.comparator) ? void 0 : o.toLocaleLowerCase()) ? i : "";
        if (l < c) return -1;
        if (l > c) return 1
    }
    return t.score - e.score
}
n.d(t, {
    A: () => r
})