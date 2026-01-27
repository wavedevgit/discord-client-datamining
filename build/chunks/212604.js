/** Chunk was on web.js **/
/** chunk id: 212604, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => s
});
var r = n(998280),
    i = n(29583),
    a = n(95944),
    o = n(618027);

function s(e, t) {
    (0, o.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.A)(t),
        l = n.getFullYear(),
        c = n.getDate(),
        u = new Date(0);
    u.setFullYear(l, s, 15), u.setHours(0, 0, 0, 0);
    var d = (0, a.A)(u);
    return n.setMonth(s, Math.min(c, d)), n
}