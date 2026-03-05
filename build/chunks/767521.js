/** chunk id: 767521, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(827734),
    s = n(397927),
    o = n(817281),
    d = n(688810),
    c = n(692798),
    u = n(544028),
    A = n(652215),
    h = n(985018),
    _ = n(126911);
let m = function() {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(), t = (0, l.bG)([u.A], () => u.A.theme), n = r.useRef(null);
    r.useEffect(() => {
        null == n.current && (n.current = t)
    }, [t]);
    let m = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, A.NJ8.LIGHT),
        g = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, A.NJ8.DARKER),
        p = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, A.NJ8.MIDNIGHT),
        E = r.useMemo(() => [{
            theme: A.NJ8.LIGHT,
            label: h.t.K2sFfo,
            color: m.hex()
        }, {
            theme: A.NJ8.DARKER,
            label: h.t.b8Cei3,
            color: g.hex()
        }, {
            theme: A.NJ8.MIDNIGHT,
            label: h.t.Do4ZJx,
            color: p.hex()
        }], [m, g, p]),
        I = r.useCallback(t => {
            (0, c.X8)({
                isPersisted: !0,
                analyticsLocations: e,
                themeName: `default ${t}`
            }), (0, o.u_)({
                theme: t
            })
        }, [e]),
        f = r.useCallback(() => {
            null != n.current && I(n.current)
        }, [I]);
    return (0, i.jsx)("div", {
        className: _.N,
        children: (0, i.jsxs)("div", {
            className: _.t7,
            children: [E.map(e => (0, i.jsxs)("button", {
                type: "button",
                className: _.Du,
                onClick: () => I(e.theme),
                "aria-label": h.intl.string(e.label),
                children: [(0, i.jsx)("div", {
                    className: `${_.WT} ${t===e.theme?_.TA:""}`,
                    style: {
                        backgroundColor: e.color
                    }
                }), (0, i.jsx)("span", {
                    className: _.i,
                    children: h.intl.string(e.label)
                })]
            }, e.theme)), (0, i.jsx)(s.K0, {
                onClick: f,
                "aria-label": h.intl.string(h.t.yBZMsQ),
                icon: s.fNY,
                variant: "secondary"
            })]
        })
    })
}