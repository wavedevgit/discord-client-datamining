/** chunk id: 849352, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    i: () => s
});
var r = n(853590),
    i = n(515702),
    a = n(7521),
    o = n(64700);

function s(e) {
    e = (0, a.k)(null != e ? e : {}, l);
    let {
        locale: t
    } = (0, r.Y)();
    return (0, o.useMemo)(() => new(0, i.p)(t, e), [t, e])
}

function l(e, t) {
    if (e === t) return !0;
    let n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let r of n)
        if (t[r] !== e[r]) return !1;
    return !0
}