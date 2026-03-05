/** chunk id: 498400, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
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
    _ = n(974544),
    g = n(107834),
    m = n(793574),
    A = n(688810),
    h = n(86379),
    p = n(160946),
    x = n(459793),
    E = n(726649),
    T = n(611924),
    S = n(351906),
    C = n(287809),
    I = n(295405),
    f = n(166403),
    b = n(954571),
    N = n(474090),
    v = n(560138),
    j = n(694080),
    O = n(170887),
    R = n(553081),
    y = n(422936),
    P = n(234419),
    L = n(558533),
    D = n(788868),
    G = n(652215),
    M = n(615434);
let U = function(e) {
    let {
        entrypoint: t = D.Mf.UserSettings
    } = e;
    (0, T.P)(E.b);
    let n = (0, h.H)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: U
        } = (0, A.Ay)(m.A.PREMIUM_MARKETING),
        k = (0, r.bG)([f.A], () => f.A.hasFetchedSubscriptions()),
        V = (0, r.bG)([I.A], () => I.A.hasFetchedPaymentSources),
        w = (0, r.bG)([C.default], () => C.default.getCurrentUser()),
        H = w?.id,
        B = (0, P.V)(),
        Y = (0, y.O)(),
        F = (0, p.Y)(D.T7),
        [z, X] = s.useState(!0),
        W = s.useRef(0),
        K = (0, N.YE)(w, D.PremiumTypes.TIER_2),
        Z = (0, O.A)({
            location: "PremiumHomePage"
        }),
        q = (0, r.bG)([v.A], () => v.A.hasFetched);
    s.useEffect(() => {
        q || c.xG()
    }, [q]), s.useEffect(() => {
        d.h.wait(async () => {
            let e = Date.now();
            await Promise.all([c.hP(), c.$o(), (0, u.zS)(null, null, G.tF5.DISCOVERY)]), W.current = Date.now() - e, X(!1)
        })
    }, []), s.useEffect(() => {
        z || b.default.track(G.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: l,
            load_duration_ms: W.current
        })
    }, [l, z]), s.useEffect(() => {
        n && (null != B || null != Y) && (0, j.u1)(B, Y)
    }, [n, B, Y]);
    let J = (0, r.bG)([S.A], () => S.A.enabled),
        Q = t === D.Mf.ApplicationStoreHome,
        $ = J ? (0, i.jsx)(_.A, {}) : n ? (0, i.jsx)(x.uK, {}) : Q && K ? (0, i.jsx)(A.f5, {
            value: U,
            children: (0, i.jsx)(R.A, {
                userId: H
            })
        }) : k && F && V ? null : (0, i.jsx)("div", {
            className: a()(M.kL, M.Lq),
            children: (0, i.jsx)(o.y$y, {})
        });
    return null != $ ? (0, i.jsxs)(i.Fragment, {
        children: [Q && (0, i.jsx)(g.A, {}), $]
    }) : (0, i.jsxs)(A.f5, {
        value: U,
        children: [Q && !Z && (0, i.jsx)(g.A, {}), (0, i.jsx)(L.A, {
            entrypoint: t
        })]
    })
}