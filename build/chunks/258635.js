/** chunk id: 258635, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var r = !0,
    i = "Invariant failed";

function a(e, t) {
    if (!e) {
        if (r) throw Error(i);
        var n = "function" == typeof t ? t() : t,
            a = n ? "".concat(i, ": ").concat(n) : i;
        throw Error(a)
    }
}