/** chunk id: 212168, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o,
    i: () => c
});
var r, i = t(627968),
    a = t(64700),
    l = t(503698),
    d = t.n(l),
    s = t(342108),
    c = ((r = {}).PREMIUM = "premium", r.LIMITED = "limited", r);
let u = {
        premium: {
            border: s.wU,
            background: s.gI
        },
        limited: {
            border: s.rY,
            background: s.pm
        }
    },
    o = a.forwardRef(function(e, n) {
        let {
            children: t,
            type: r = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: c,
            backgroundClassName: o
        } = e;
        if (!a) return t;
        let {
            border: f,
            background: h
        } = u[r];
        return (0, i.jsx)("div", {
            ref: n,
            className: d()(f, c),
            children: (0, i.jsx)("div", {
                className: d()(l ? h : s.Tp, o),
                children: t
            })
        })
    })