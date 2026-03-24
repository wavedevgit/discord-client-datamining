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
    _ = n(107834),
    g = n(793574),
    A = n(688810),
    x = n(86379),
    p = n(160946),
    h = n(459793),
    f = n(726649),
    T = n(611924),
    E = n(351906),
    S = n(287809),
    b = n(295405),
    C = n(166403),
    N = n(954571),
    v = n(474090),
    I = n(560138),
    j = n(694080),
    y = n(553081),
    O = n(422936),
    R = n(234419),
    L = n(558533),
    P = n(788868),
    D = n(652215),
    G = n(615434);
let M = function(e) {
    let {
        entrypoint: t = P.Mf.UserSettings
    } = e;
    (0, T.P)(f.b);
    let n = (0, x.Hp)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: M
        } = (0, A.Ay)(g.A.PREMIUM_MARKETING),
        k = (0, r.bG)([C.A], () => C.A.hasFetchedSubscriptions()),
        U = (0, r.bG)([b.A], () => b.A.hasFetchedPaymentSources),
        w = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        V = w?.id,
        B = (0, R.V)(),
        F = (0, O.O)(),
        H = (0, p.Y)(P.T7),
        [z, Y] = s.useState(!0),
        X = s.useRef(0),
        W = (0, v.YE)(w, P.PremiumTypes.TIER_2),
        K = (0, r.bG)([I.A], () => I.A.hasFetched);
    s.useEffect(() => {
        K || c.xG()
    }, [K]), s.useEffect(() => {
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
    let Z = (0, r.bG)([E.A], () => E.A.enabled),
        q = t === P.Mf.ApplicationStoreHome,
        J = Z ? (0, i.jsx)(m.A, {}) : n ? (0, i.jsx)(h.uK, {}) : q && W ? (0, i.jsx)(A.f5, {
            value: M,
            children: (0, i.jsx)(y.A, {
                userId: V
            })
        }) : k && H && U ? null : (0, i.jsx)("div", {
            className: a()(G.kL, G.Lq),
            children: (0, i.jsx)(o.y$y, {})
        });
    return null != J ? (0, i.jsxs)(i.Fragment, {
        children: [q && (0, i.jsx)(_.A, {}), J]
    }) : (0, i.jsx)(A.f5, {
        value: M,
        children: (0, i.jsx)(L.A, {
            entrypoint: t
        })
    })
}