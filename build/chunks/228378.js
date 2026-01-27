/** Chunk was on web.js **/
/** chunk id: 228378, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => o
});
var r = n(998280),
    i = n(29583),
    a = n(618027);

function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t);
    if (isNaN(o)) return new Date(NaN);
    if (!o) return n;
    var s = n.getDate(),
        l = new Date(n.getTime());
    return (l.setMonth(n.getMonth() + o + 1, 0), s >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), s), n)
}