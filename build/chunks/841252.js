/** chunk id: 841252 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var a = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(158954),
    c = t(224850),
    o = t(778712),
    d = t(985018),
    _ = t(231897);

function u(e) {
    let {
        affinities: n,
        className: t
    } = e, s = i.useMemo(() => {
        if (n.length > 1) {
            var e;
            return d.intl.formatToPlainString(d.t.HaVk0X, {
                username: null != (e = n[0]).globalName ? e.globalName : e.username,
                numFriends: n.length - 1
            })
        }
        return ""
    }, [n]);
    if (n.length <= 1) return null;
    let u = n.map((e, t) => (0, a.jsx)(c.n, {
        affinity: e,
        applyMask: t !== n.length - 1,
        size: o._3.SIZE_20
    }, e.id));
    return (0, a.jsxs)("div", {
        className: r()(_.kL, t),
        children: [(0, a.jsx)("div", {
            className: _.zc,
            children: u
        }), (0, a.jsx)("div", {
            className: _.FS,
            children: (0, a.jsx)(l.EYj, {
                variant: "text-sm/medium",
                children: s
            })
        })]
    })
}