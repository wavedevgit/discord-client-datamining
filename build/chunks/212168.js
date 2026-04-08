/** chunk id: 212168 params = (module,exports,require) **/
i.d(t, {
    A: () => u,
    i: () => c
});
var l, n = i(627968),
    a = i(64700),
    s = i(503698),
    r = i.n(s),
    d = i(157772),
    c = ((l = {}).PREMIUM = "premium", l.LIMITED = "limited", l);
let o = {
        premium: {
            border: d.wU,
            background: d.gI
        },
        limited: {
            border: d.rY,
            background: d.pm
        }
    },
    u = a.forwardRef(function(e, t) {
        let {
            children: i,
            type: l = "premium",
            isShown: a,
            hasBackground: s = !1,
            className: c,
            backgroundClassName: u
        } = e;
        if (!a) return i;
        let {
            border: m,
            background: x
        } = o[l];
        return (0, n.jsx)("div", {
            ref: t,
            className: r()(m, c),
            children: (0, n.jsx)("div", {
                className: r()(s ? x : d.Tp, u),
                children: i
            })
        })
    })