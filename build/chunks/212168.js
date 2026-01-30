/** chunk id: 212168, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => s,
    i: () => u
});
var r, i = t(627968),
    l = t(64700),
    a = t(503698),
    d = t.n(a),
    c = t(446958),
    u = ((r = {}).PREMIUM = "premium", r.LIMITED = "limited", r);
let o = {
        premium: {
            border: c.wU,
            background: c.gI
        },
        limited: {
            border: c.rY,
            background: c.pm
        }
    },
    s = l.forwardRef(function(e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: l,
            hasBackground: a = !1,
            className: u,
            backgroundClassName: s
        } = e;
        if (!l) return t;
        let {
            border: f,
            background: h
        } = o[r];
        return (0, i.jsx)("div", {
            ref: n,
            className: d()(f, u),
            children: (0, i.jsx)("div", {
                className: d()(a ? h : c.Tp, s),
                children: t
            })
        })
    })