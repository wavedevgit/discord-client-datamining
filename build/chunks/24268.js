/** chunk id: 24268 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(271866),
    c = n(409626),
    u = n(692969),
    m = n(867099),
    h = n(147964),
    x = n(760716),
    p = n(652215),
    g = n(115093),
    _ = n(793877),
    f = n(620352);
let v = window.GLOBAL_ENV.RELEASE_CHANNEL === g.B.STAGING ? "1438571444891025408" : "1346069614634864772";

function b() {
    let e = (0, x.i)(e => e.overrideApplicationId),
        t = (0, x.i)(e => e.setOverrideApplicationId),
        n = null != e,
        [l, g] = i.useState(v),
        [b, j] = i.useState(p.FYj),
        A = i.useCallback(e => {
            e ? t(l) : t(null)
        }, [l, t]),
        C = i.useCallback(e => {
            g(e), n && t(e)
        }, [n, t]),
        y = (0, x.i)(e => e.showSelfActivity),
        S = (0, x.i)(e => e.setShowSelfActivity),
        T = (0, x.i)(e => e.recommendationApplicationIds),
        E = (0, x.i)(e => e.setRecommendationApplicationIds),
        N = i.useCallback(e => {
            e ? E(b) : E(null)
        }, [b, E]),
        I = (0, r.bG)([h.A], () => null != h.A.testModeApplicationId),
        k = i.useCallback(e => {
            e ? (0, o.qfG)(e => (0, a.jsx)(m.A, {
                ...e
            })) : d.cL()
        }, []),
        O = (0, u.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: l,
            source: c.Ob.Embed,
            trackEntryPointImpression: !0
        }),
        R = i.useCallback(e => {
            O?.(e)
        }, [O]);
    return (0, a.jsx)("div", {
        className: s()(_.nd, f.n),
        children: (0, a.jsxs)("div", {
            className: f.k,
            children: [(0, a.jsx)(o.ksK, {
                label: "Application ID",
                value: l,
                onChange: C
            }), (0, a.jsx)(o.Heading, {
                variant: "heading-lg/normal",
                children: "Activity Override"
            }), (0, a.jsx)(o.dOG, {
                label: "Override activity application ID",
                checked: n,
                onChange: A
            }), (0, a.jsx)(o.dOG, {
                label: "Show own voice activity (bypass self check)",
                checked: y,
                onChange: S
            }), (0, a.jsx)(o.dOG, {
                label: "Enable application test mode",
                checked: I,
                onChange: k
            }), (0, a.jsx)(o.Button, {
                text: "Open Game Profile Modal",
                onClick: R
            }), (0, a.jsx)(o.Heading, {
                variant: "heading-lg/normal",
                children: "Wishlists"
            }), (0, a.jsx)(o.ksK, {
                label: "Recommendation application IDs",
                value: b,
                onChange: j,
                disabled: null == T
            }), (0, a.jsx)(o.dOG, {
                label: "Enable recommendation application IDs override",
                checked: null != T,
                onChange: N
            })]
        })
    })
}