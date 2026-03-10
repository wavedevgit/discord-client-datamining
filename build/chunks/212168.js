/** chunk id: 212168 params = (module,exports,require) **/
n.d(t, {
    A: () => c,
    i: () => d
});
var i, r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(446958),
    d = ((i = {}).PREMIUM = "premium", i.LIMITED = "limited", i);
let _ = {
        premium: {
            border: o.wU,
            background: o.gI
        },
        limited: {
            border: o.rY,
            background: o.pm
        }
    },
    c = a.forwardRef(function(e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: d,
            backgroundClassName: c
        } = e;
        if (!a) return n;
        let {
            border: u,
            background: A
        } = _[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: s()(u, d),
            children: (0, r.jsx)("div", {
                className: s()(l ? A : o.Tp, c),
                children: n
            })
        })
    })