/** chunk id: 284600, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(29583),
    i = n(618027),
    a = n(998280);

function o(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, a.A)(t);
    n % 7 == 0 && (n -= 7);
    var o = 1,
        s = (0, r.default)(e),
        l = 7 * ((n % 7 + 7) % 7 < o) + n - s.getUTCDay();
    return s.setUTCDate(s.getUTCDate() + l), s
}