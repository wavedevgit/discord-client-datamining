/** chunk id: 767521, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(817281),
    c = n(688810),
    u = n(692798),
    d = n(544028),
    p = n(652215),
    h = n(985018),
    g = n(882773);
let m = function() {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(), t = (0, l.bG)([d.A], () => d.A.theme), n = i.useRef(null);
    i.useEffect(() => {
        null == n.current && (n.current = t)
    }, [t]);
    let m = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.LIGHT),
        f = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.DARKER),
        A = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.MIDNIGHT),
        _ = i.useMemo(() => [{
            theme: p.NJ8.LIGHT,
            label: h.t.K2sFfo,
            color: m.hex()
        }, {
            theme: p.NJ8.DARKER,
            label: h.t.b8Cei3,
            color: f.hex()
        }, {
            theme: p.NJ8.MIDNIGHT,
            label: h.t.Do4ZJx,
            color: A.hex()
        }], [m, f, A]),
        b = i.useCallback(t => {
            (0, u.X8)({
                isPersisted: !0,
                analyticsLocations: e,
                themeName: "default ".concat(t)
            }), (0, o.u_)({
                theme: t
            })
        }, [e]),
        E = i.useCallback(() => {
            null != n.current && b(n.current)
        }, [b]);
    return (0, r.jsx)("div", {
        className: g.N,
        children: (0, r.jsxs)("div", {
            className: g.t7,
            children: [_.map(e => (0, r.jsxs)("button", {
                type: "button",
                className: g.Du,
                onClick: () => b(e.theme),
                "aria-label": h.intl.string(e.label),
                children: [(0, r.jsx)("div", {
                    className: "".concat(g.WT, " ").concat(t === e.theme ? g.TA : ""),
                    style: {
                        backgroundColor: e.color
                    }
                }), (0, r.jsx)("span", {
                    className: g.i,
                    children: h.intl.string(e.label)
                })]
            }, e.theme)), (0, r.jsx)(s.K0, {
                onClick: E,
                "aria-label": h.intl.string(h.t.yBZMsQ),
                icon: s.fNY,
                variant: "secondary"
            })]
        })
    })
}