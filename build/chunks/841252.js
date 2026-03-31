/** chunk id: 841252 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(224850),
    c = n(778712),
    d = n(985018),
    u = n(278272);

function h(e) {
    let {
        affinities: t,
        className: n
    } = e, s = l.useMemo(() => {
        if (t.length > 1) {
            var e;
            return d.intl.formatToPlainString(d.t.HaVk0X, {
                username: null != (e = t[0]).globalName ? e.globalName : e.username,
                numFriends: t.length - 1
            })
        }
        return ""
    }, [t]);
    if (t.length <= 1) return null;
    let h = t.map((e, n) => (0, i.jsx)(o.n, {
        affinity: e,
        applyMask: n !== t.length - 1,
        size: c._3.SIZE_20
    }, e.id));
    return (0, i.jsxs)("div", {
        className: a()(u.kL, n),
        children: [(0, i.jsx)("div", {
            className: u.zc,
            children: h
        }), (0, i.jsx)("div", {
            className: u.FS,
            children: (0, i.jsx)(r.EYj, {
                variant: "text-sm/medium",
                children: s
            })
        })]
    })
}