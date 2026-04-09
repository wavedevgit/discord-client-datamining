/** chunk id: 767521 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(827734),
    s = n(397927),
    o = n(817281),
    d = n(688810),
    c = n(692798),
    u = n(544028),
    A = n(652215),
    _ = n(985018),
    h = n(343852);
let m = function() {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(), t = (0, r.bG)([u.A], () => u.A.theme), n = a.useRef(null);
    a.useEffect(() => {
        null == n.current && (n.current = t)
    }, [t]);
    let m = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.LIGHT),
        g = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.DARKER),
        p = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOW, A.NJ8.MIDNIGHT),
        E = a.useMemo(() => [{
            theme: A.NJ8.LIGHT,
            label: _.t.K2sFfo,
            color: m.hex()
        }, {
            theme: A.NJ8.DARKER,
            label: _.t.b8Cei3,
            color: g.hex()
        }, {
            theme: A.NJ8.MIDNIGHT,
            label: _.t.Do4ZJx,
            color: p.hex()
        }], [m, g, p]),
        I = a.useCallback(t => {
            (0, c.X8)({
                isPersisted: !0,
                analyticsLocations: e,
                themeName: `default ${t}`
            }), (0, o.u_)({
                theme: t
            })
        }, [e]),
        f = a.useCallback(() => {
            null != n.current && I(n.current)
        }, [I]);
    return (0, i.jsx)("div", {
        className: h.N,
        children: (0, i.jsxs)("div", {
            className: h.t7,
            children: [E.map(e => (0, i.jsxs)("button", {
                type: "button",
                className: h.Du,
                onClick: () => I(e.theme),
                "aria-label": _.intl.string(e.label),
                children: [(0, i.jsx)("div", {
                    className: `${h.WT} ${t===e.theme?h.TA:""}`,
                    style: {
                        backgroundColor: e.color
                    }
                }), (0, i.jsx)("span", {
                    className: h.i,
                    children: _.intl.string(e.label)
                })]
            }, e.theme)), (0, i.jsx)(s.K0, {
                onClick: f,
                "aria-label": _.intl.string(_.t.yBZMsQ),
                icon: s.fNY,
                variant: "secondary"
            })]
        })
    })
}