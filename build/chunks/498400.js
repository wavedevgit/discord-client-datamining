/** chunk id: 498400 params = (module,exports,require) **/
n.d(t, {
    A: () => G
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
    T = n(726649),
    E = n(611924),
    f = n(351906),
    S = n(287809),
    C = n(295405),
    b = n(166403),
    N = n(954571),
    I = n(474090),
    v = n(560138),
    j = n(694080),
    y = n(553081),
    O = n(422936),
    R = n(234419),
    L = n(558533),
    P = n(788868),
    D = n(652215),
    M = n(615434);
let G = function(e) {
    let {
        entrypoint: t = P.Mf.UserSettings
    } = e;
    (0, E.P)(T.b);
    let n = (0, x.Hp)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: G
        } = (0, A.Ay)(g.A.PREMIUM_MARKETING),
        k = (0, r.bG)([b.A], () => b.A.hasFetchedSubscriptions()),
        U = (0, r.bG)([C.A], () => C.A.hasFetchedPaymentSources),
        w = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        V = w?.id,
        B = (0, R.V)(),
        H = (0, O.O)(),
        F = (0, p.Y)(P.T7),
        [Y, z] = s.useState(!0),
        X = s.useRef(0),
        W = (0, I.YE)(w, P.PremiumTypes.TIER_2),
        K = (0, r.bG)([v.A], () => v.A.hasFetched);
    s.useEffect(() => {
        K || c.xG()
    }, [K]), s.useEffect(() => {
        d.h.wait(async () => {
            let e = Date.now();
            await Promise.all([c.hP(), c.$o(), (0, u.zS)(null, null, D.tF5.DISCOVERY)]), X.current = Date.now() - e, z(!1)
        })
    }, []), s.useEffect(() => {
        Y || N.default.track(D.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: l,
            load_duration_ms: X.current
        })
    }, [l, Y]), s.useEffect(() => {
        n && (null != B || null != H) && (0, j.u1)(B, H)
    }, [n, B, H]);
    let Z = (0, r.bG)([f.A], () => f.A.enabled),
        q = t === P.Mf.ApplicationStoreHome,
        J = Z ? (0, i.jsx)(m.A, {}) : n ? (0, i.jsx)(h.uK, {}) : q && W ? (0, i.jsx)(A.f5, {
            value: G,
            children: (0, i.jsx)(y.A, {
                userId: V
            })
        }) : k && F && U ? null : (0, i.jsx)("div", {
            className: a()(M.kL, M.Lq),
            children: (0, i.jsx)(o.y$y, {})
        });
    return null != J ? (0, i.jsxs)(i.Fragment, {
        children: [q && (0, i.jsx)(_.A, {}), J]
    }) : (0, i.jsx)(A.f5, {
        value: G,
        children: (0, i.jsx)(L.A, {
            entrypoint: t
        })
    })
}