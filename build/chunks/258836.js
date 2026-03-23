/** chunk id: 258836 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    r = n(397927),
    o = n(775602),
    d = n(832248),
    c = n(323970),
    u = n(985018),
    m = n(876402);
let h = i.lazy(() => n.e("24832").then(n.bind(n, 748579)));

function p() {
    let e = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        t = (0, d.A)(e => e.shouldRenderTenureLevelUp),
        n = (0, c.A)();
    return e || !t || null == n ? null : (0, a.jsx)(x, {
        levelUpData: n
    })
}

function x(e) {
    let {
        levelUpData: t
    } = e, n = i.useRef(null), l = i.useCallback(() => {
        d.A.setState({
            shouldRenderTenureLevelUp: !1
        })
    }, []);
    return i.useEffect(() => l, [l]), (0, a.jsx)(r.Oky, {
        containerRef: n,
        children: (0, a.jsxs)("div", {
            className: m.i,
            children: [(0, a.jsx)("div", {
                className: m.b,
                children: (0, a.jsx)(s.m, {
                    text: u.intl.string(u.t.cpT0Cq),
                    children: (0, a.jsx)(r.K0, {
                        icon: r.PGe,
                        variant: "secondary",
                        size: "sm",
                        onClick: l,
                        "aria-label": u.intl.string(u.t.cpT0Cq)
                    })
                })
            }), (0, a.jsx)(i.Suspense, {
                fallback: null,
                children: (0, a.jsx)(h, {
                    levelUpData: t
                })
            })]
        })
    })
}