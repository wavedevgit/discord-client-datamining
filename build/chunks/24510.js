/** chunk id: 24510, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => s
});
var r = n(998280),
    i = n(29583),
    a = n(212604),
    o = n(618027);

function s(e, t) {
    (0, o.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.A)(t) - (Math.floor(n.getMonth() / 3) + 1);
    return (0, a.default)(n, n.getMonth() + 3 * s)
}