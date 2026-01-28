/** Chunk was on 60667 **/
/** chunk id: 142201, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
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
    _ = n(974544),
    p = n(107834),
    m = n(793574),
    g = n(688810),
    A = n(86379),
    f = n(160946),
    h = n(459793),
    b = n(726649),
    E = n(611924),
    x = n(351906),
    O = n(287809),
    C = n(295405),
    T = n(166403),
    I = n(954571),
    S = n(474090),
    j = n(560138),
    v = n(694080),
    N = n(170887),
    y = n(422936),
    P = n(234419),
    R = n(558533),
    D = n(185180),
    w = n(788868),
    L = n(652215),
    M = n(887069);
let U = function(e) {
    let {
        entrypoint: t = w.Mf.UserSettings
    } = e;
    (0, E.P)(b.b);
    let n = (0, A.H)(),
        {
            sourceAnalyticsLocations: l,
            analyticsLocations: U
        } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
        G = (0, a.bG)([T.A], () => T.A.hasFetchedSubscriptions()),
        k = (0, a.bG)([C.A], () => C.A.hasFetchedPaymentSources),
        V = (0, a.bG)([O.default], () => O.default.getCurrentUser()),
        H = null == V ? void 0 : V.id,
        B = (0, P.V)(),
        F = (0, y.O)(),
        Y = (0, f.Y)(w.T7),
        [W, z] = i.useState(!0),
        K = i.useRef(0),
        Z = (0, S.YE)(V, w.PremiumTypes.TIER_2),
        X = (0, N.A)({
            location: "PremiumMarketingPage"
        }),
        q = (0, a.bG)([j.A], () => j.A.hasFetched);
    i.useEffect(() => {
        q || d.xG()
    }, [q]), i.useEffect(() => {
        c.h.wait(async () => {
            let e = Date.now();
            await Promise.all([d.hP(), d.$o(), (0, u.zS)(null, null, L.tF5.DISCOVERY)]), K.current = Date.now() - e, z(!1)
        })
    }, []), i.useEffect(() => {
        W || I.default.track(L.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: l,
            load_duration_ms: K.current
        })
    }, [l, W]), i.useEffect(() => {
        n && (null != B || null != F) && (0, v.u1)(B, F)
    }, [n, B, F]);
    let J = (0, a.bG)([x.A], () => x.A.enabled),
        Q = t === w.Mf.ApplicationStoreHome,
        $ = J ? (0, r.jsx)(_.A, {}) : n ? (0, r.jsx)(h.uK, {}) : Q && Z ? (0, r.jsx)(g.f5, {
            value: U,
            children: (0, r.jsx)(D.A, {
                userId: H
            })
        }) : G && Y && k ? null : (0, r.jsx)("div", {
            className: s()(M.kL, M.Lq),
            children: (0, r.jsx)(o.y$y, {})
        });
    return null != $ ? (0, r.jsxs)(r.Fragment, {
        children: [Q && (0, r.jsx)(p.A, {}), $]
    }) : (0, r.jsxs)(g.f5, {
        value: U,
        children: [Q && !X && (0, r.jsx)(p.A, {}), (0, r.jsx)(R.A, {
            entrypoint: t
        })]
    })
}