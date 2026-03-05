/** chunk id: 849352 params = (module,exports,require) **/
t.d(a, {
    i: () => o
});
var r = t(853590),
    n = t(515702),
    i = t(7521),
    l = t(64700);

function o(e) {
    e = (0, i.k)(null != e ? e : {}, u);
    let {
        locale: a
    } = (0, r.Y)();
    return (0, l.useMemo)(() => new(0, n.p)(a, e), [a, e])
}

function u(e, a) {
    if (e === a) return !0;
    let t = Object.keys(e),
        r = Object.keys(a);
    if (t.length !== r.length) return !1;
    for (let r of t)
        if (a[r] !== e[r]) return !1;
    return !0
}