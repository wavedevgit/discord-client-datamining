/** chunk id: 331884, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => s
});
var r = n(284009),
    i = n.n(r),
    a = n(311907),
    o = n(287809);
let s = () => {
    let e = (0, a.bG)([o.default], () => o.default.getCurrentUser());
    return i()(null != e, "user has to be signed in before accessing shop"), e
}