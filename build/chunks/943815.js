/** Chunk was on web.js **/
/** chunk id: 943815, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(747238);
var r = n(679740);
let i = {
        LATIN12: r.Xh,
        LATIN24: r.ID,
        ASIAN: r.KC
    },
    a = 5,
    s = /(AM|PM)$/;

function o(e) {
    return null != e.match(s) ? i.LATIN24 : e.length <= a ? i.LATIN12 : i.ASIAN
}