/** chunk id: 841252 params = (module,exports,require) **/
t.d(n, {
    A: () => m
});
var i = t(627968),
    a = t(64700),
    s = t(503698),
    l = t.n(s),
    r = t(158954),
    c = t(224850),
    o = t(778712),
    u = t(985018),
    d = t(353074);

function m(e) {
    let {
        affinities: n,
        className: t
    } = e, s = a.useMemo(() => {
        if (n.length > 1) {
            var e;
            return u.intl.formatToPlainString(u.t.HaVk0X, {
                username: null != (e = n[0]).globalName ? e.globalName : e.username,
                numFriends: n.length - 1
            })
        }
        return ""
    }, [n]);
    if (n.length <= 1) return null;
    let m = n.map((e, t) => (0, i.jsx)(c.n, {
        affinity: e,
        applyMask: t !== n.length - 1,
        size: o._3.SIZE_20
    }, e.id));
    return (0, i.jsxs)("div", {
        className: l()(d.kL, t),
        children: [(0, i.jsx)("div", {
            className: d.zc,
            children: m
        }), (0, i.jsx)("div", {
            className: d.FS,
            children: (0, i.jsx)(r.EYj, {
                variant: "text-sm/medium",
                children: s
            })
        })]
    })
}