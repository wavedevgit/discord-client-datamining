/** chunk id: 498400 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(384904),
    u = n(73825),
    m = n(974544),
    g = n(107834),
    _ = n(793574),
    x = n(688810),
    A = n(86379),
    h = n(160946),
    p = n(459793),
    T = n(726649),
    f = n(611924),
    S = n(351906),
    b = n(287809),
    E = n(295405),
    C = n(166403),
    N = n(954571),
    v = n(474090),
    I = n(560138),
    j = n(694080),
    y = n(553081),
    O = n(422936),
    R = n(234419),
    P = n(558533),
    L = n(788868),
    D = n(652215),
    G = n(285959);
let M = function(e) {
    let {
        entrypoint: t = L.Mf.UserSettings
    } = e;
    (0, f.P)(T.b);
    let n = (0, A.Hp)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: M
        } = (0, x.Ay)(_.A.PREMIUM_MARKETING),
        k = (0, r.bG)([C.A], () => C.A.hasFetchedSubscriptions()),
        U = (0, r.bG)([E.A], () => E.A.hasFetchedPaymentSources),
        w = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        V = w?.id,
        B = (0, R.V)(),
        F = (0, O.O)(),
        H = (0, h.Y)(L.T7),
        [z, Y] = s.useState(!0),
        X = s.useRef(0),
        K = (0, v.YE)(w, L.PremiumTypes.TIER_2),
        W = (0, r.bG)([I.A], () => I.A.hasFetched);
    s.useEffect(() => {
        W || c.xG()
    }, [W]), s.useEffect(() => {
        d.h.wait(async () => {
            let e = Date.now();
            await Promise.all([c.hP(), c.$o(), (0, u.zS)(null, null, D.tF5.DISCOVERY)]), X.current = Date.now() - e, Y(!1)
        })
    }, []), s.useEffect(() => {
        z || N.default.track(D.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: l,
            load_duration_ms: X.current
        })
    }, [l, z]), s.useEffect(() => {
        n && (null != B || null != F) && (0, j.u1)(B, F)
    }, [n, B, F]);
    let Z = (0, r.bG)([S.A], () => S.A.enabled),
        q = t === L.Mf.ApplicationStoreHome,
        Q = Z ? (0, i.jsx)(m.A, {}) : n ? (0, i.jsx)(p.uK, {}) : q && K ? (0, i.jsx)(x.f5, {
            value: M,
            children: (0, i.jsx)(y.A, {
                userId: V
            })
        }) : k && H && U ? null : (0, i.jsx)("div", {
            className: a()(G.kL, G.Lq),
            children: (0, i.jsx)(o.y$y, {})
        });
    return null != Q ? (0, i.jsxs)(i.Fragment, {
        children: [q && (0, i.jsx)(g.A, {}), Q]
    }) : (0, i.jsx)(x.f5, {
        value: M,
        children: (0, i.jsx)(P.A, {
            entrypoint: t
        })
    })
}