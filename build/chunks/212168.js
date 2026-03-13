/** chunk id: 212168 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    i: () => d
});
var i, r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(342108),
    d = ((i = {}).PREMIUM = "premium", i.LIMITED = "limited", i);
let c = {
        premium: {
            border: o.wU,
            background: o.gI
        },
        limited: {
            border: o.rY,
            background: o.pm
        }
    },
    _ = a.forwardRef(function(e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: a,
            hasBackground: s = !1,
            className: d,
            backgroundClassName: _
        } = e;
        if (!a) return n;
        let {
            border: u,
            background: A
        } = c[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: l()(u, d),
            children: (0, r.jsx)("div", {
                className: l()(s ? A : o.Tp, _),
                children: n
            })
        })
    })