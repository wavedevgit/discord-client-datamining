/** Chunk was on web.js **/
/** chunk id: 142201, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(384904),
    d = n(73825),
    f = n(974544),
    p = n(107834),
    _ = n(793574),
    h = n(688810),
    m = n(86379),
    g = n(160946),
    E = n(459793),
    y = n(726649),
    b = n(611924),
    O = n(351906),
    v = n(287809),
    A = n(295405),
    I = n(166403),
    S = n(954571),
    T = n(474090),
    C = n(560138),
    N = n(694080),
    w = n(170887),
    R = n(422936),
    P = n(234419),
    D = n(558533),
    x = n(185180),
    L = n(788868),
    j = n(652215),
    M = n(887069);
let k = function(e) {
    let {
        entrypoint: t = L.Mf.UserSettings
    } = e;
    (0, b.P)(y.b);
    let n = (0, m.H)(),
        {
            sourceAnalyticsLocations: a,
            analyticsLocations: k
        } = (0, h.Ay)(_.A.PREMIUM_MARKETING),
        U = (0, o.bG)([I.A], () => I.A.hasFetchedSubscriptions()),
        G = (0, o.bG)([A.A], () => A.A.hasFetchedPaymentSources),
        V = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        F = null == V ? void 0 : V.id,
        B = (0, P.V)(),
        H = (0, R.O)(),
        Y = (0, g.Y)(L.T7),
        [W, K] = i.useState(!0),
        z = i.useRef(0),
        q = (0, T.YE)(V, L.PremiumTypes.TIER_2),
        Z = (0, w.A)({
            location: "PremiumMarketingPage"
        }),
        X = (0, o.bG)([C.A], () => C.A.hasFetched);
    i.useEffect(() => {
        X || u.xG()
    }, [X]), i.useEffect(() => {
        c.h.wait(async () => {
            let e = Date.now();
            await Promise.all([u.hP(), u.$o(), (0, d.zS)(null, null, j.tF5.DISCOVERY)]), z.current = Date.now() - e, K(!1)
        })
    }, []), i.useEffect(() => {
        W || S.default.track(j.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
            location_stack: a,
            load_duration_ms: z.current
        })
    }, [a, W]), i.useEffect(() => {
        n && (null != B || null != H) && (0, N.u1)(B, H)
    }, [n, B, H]);
    let Q = (0, o.bG)([O.A], () => O.A.enabled),
        J = t === L.Mf.ApplicationStoreHome,
        $ = Q ? (0, r.jsx)(f.A, {}) : n ? (0, r.jsx)(E.uK, {}) : J && q ? (0, r.jsx)(h.f5, {
            value: k,
            children: (0, r.jsx)(x.A, {
                userId: F
            })
        }) : U && Y && G ? null : (0, r.jsx)("div", {
            className: s()(M.kL, M.Lq),
            children: (0, r.jsx)(l.y$y, {})
        });
    return null != $ ? (0, r.jsxs)(r.Fragment, {
        children: [J && (0, r.jsx)(p.A, {}), $]
    }) : (0, r.jsxs)(h.f5, {
        value: k,
        children: [J && !Z && (0, r.jsx)(p.A, {}), (0, r.jsx)(D.A, {
            entrypoint: t
        })]
    })
}