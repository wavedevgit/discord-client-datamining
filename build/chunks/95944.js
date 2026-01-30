/** chunk id: 95944, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = n(29583),
    i = n(618027);

function a(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getFullYear(),
        a = t.getMonth(),
        o = new Date(0);
    return o.setFullYear(n, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
}