/** chunk id: 212168, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o,
    i: () => s
});
var r, i = t(627968),
    a = t(64700),
    l = t(503698),
    d = t.n(l),
    c = t(446958),
    s = ((r = {}).PREMIUM = "premium", r.LIMITED = "limited", r);
let u = {
        premium: {
            border: c.wU,
            background: c.gI
        },
        limited: {
            border: c.rY,
            background: c.pm
        }
    },
    o = a.forwardRef(function(e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: s,
            backgroundClassName: o
        } = e;
        if (!a) return t;
        let {
            border: f,
            background: h
        } = u[r];
        return (0, i.jsx)("div", {
            ref: n,
            className: d()(f, s),
            children: (0, i.jsx)("div", {
                className: d()(l ? h : c.Tp, o),
                children: t
            })
        })
    })