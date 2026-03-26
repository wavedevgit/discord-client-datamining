/** chunk id: 212168 params = (module,exports,require) **/
n.d(t, {
    A: () => u,
    i: () => d
});
var i, l = n(627968),
    r = n(64700),
    s = n(503698),
    o = n.n(s),
    a = n(110465),
    d = ((i = {}).PREMIUM = "premium", i.LIMITED = "limited", i);
let c = {
        premium: {
            border: a.wU,
            background: a.gI
        },
        limited: {
            border: a.rY,
            background: a.pm
        }
    },
    u = r.forwardRef(function(e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: r,
            hasBackground: s = !1,
            className: d,
            backgroundClassName: u
        } = e;
        if (!r) return n;
        let {
            border: A,
            background: E
        } = c[i];
        return (0, l.jsx)("div", {
            ref: t,
            className: o()(A, d),
            children: (0, l.jsx)("div", {
                className: o()(s ? E : a.Tp, u),
                children: n
            })
        })
    })