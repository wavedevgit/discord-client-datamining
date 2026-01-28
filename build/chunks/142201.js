/** Chunk was on 5606 **/
/** chunk id: 142201, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    d = n(384904),
    u = n(73825),
    p = n(974544),
    _ = n(107834),
    m = n(793574),
    g = n(688810),
    f = n(86379),
    b = n(160946),
    h = n(459793),
    A = n(726649),
    E = n(611924),
    x = n(351906),
    O = n(287809),
    C = n(295405),
    y = n(166403),
    j = n(954571),
    T = n(474090),
    v = n(560138),
    S = n(694080),
    I = n(170887),
    N = n(422936),
    P = n(234419),
    R = n(558533),
    D = n(185180),
    w = n(788868),
    L = n(652215),
    M = n(887069);
let G = function(e) {
    let {
        entrypoint: t = w.Mf.UserSettings
    } = e;
    (0, E.P)(A.b);
    let n = (0, f.H)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: G
        } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        U = (0, a.bG)([y.A], () => y.A.hasFetchedSubscriptions()),
        k = (0, a.bG)([C.A], () => C.A.hasFetchedPaymentSources),
        H = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
        B = null == H ? void 0 : H.id,
        V = (0, P.V)(),
        F = (0, N.O)(),
        Y = (0, b.Y)(w.T7),
        [W, z] = i.useState(!0),
        K = i.useRef(0),
        Z = (0, T.YE)(H, w.PremiumTypes.TIER_2),
        q = (0, I.A)({
            location: "PremiumMarketingPage"
        }),
        X = (0, a.bG)([v.A], () => v.A.hasFetched);
    i.useEffect(() => {
        X || d.xG()
    }, [X]), i.useEffect(() => {
        c.h.wait(async () => {
            let e = Date.now();
            await Promise.all([d.hP(), d.$o(), (0, u.zS)(null, null, L.tF5.DISCOVERY)]), K.current = Date.now() - e, z(!1)
        })
    }, []), i.useEffect(() => {
        W || j.default.track(L.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: l,
            load_duration_ms: K.current
        })
    }, [l, W]), i.useEffect(() => {
        n && (null != V || null != F) && (0, S.u1)(V, F)
    }, [n, V, F]);
    let J = (0, a.bG)([x.A], () => x.A.enabled),
        Q = t === w.Mf.ApplicationStoreHome,
        $ = J ? (0, r.jsx)(p.A, {}) : n ? (0, r.jsx)(h.uK, {}) : Q && Z ? (0, r.jsx)(g.f5, {
            value: G,
            children: (0, r.jsx)(D.A, {
                userId: B
            })
        }) : U && Y && k ? null : (0, r.jsx)("div", {
            className: s()(M.kL, M.Lq),
            children: (0, r.jsx)(o.y$y, {})
        });
    return null != $ ? (0, r.jsxs)(r.Fragment, {
        children: [Q && (0, r.jsx)(_.A, {}), $]
    }) : (0, r.jsxs)(g.f5, {
        value: G,
        children: [Q && !q && (0, r.jsx)(_.A, {}), (0, r.jsx)(R.A, {
            entrypoint: t
        })]
    })
}