/** Chunk was on 65298 **/
/** chunk id: 189244, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968);
n(64700);
var l = n(311907),
    r = n(873298),
    i = n(397927),
    s = n(775602),
    o = n(590180),
    c = n(4227),
    d = n(993408),
    u = n(841702),
    m = n(544028),
    p = n(253932),
    h = n(287809),
    x = n(850730),
    g = n(385803),
    f = n(607335);

function b() {
    var e, t, n, b, v, j, _, y;
    (0, u.Bf)();
    let A = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
        C = p.eh.useSetting(),
        S = (0, l.bG)([m.A], () => m.A.theme),
        O = C.backgroundGradientPresetId,
        T = (0, l.bG)([c.A], () => c.A.purchases),
        E = (0, d.x9)(T),
        N = (0, d.$W)(T),
        w = null == A || null == (v = A.avatarDecoration) ? void 0 : v.skuId,
        I = null == A || null == (_ = A.collectibles) || null == (j = _.nameplate) ? void 0 : j.skuId,
        P = null != w && null != (e = E.find(e => e.skuId === w)) ? e : null,
        k = null != I && null != (t = N.find(e => e.skuId === I)) ? t : null,
        R = (0, l.bG)([o.A], () => o.A.getProduct(null == P ? void 0 : P.skuId)),
        D = (0, l.bG)([o.A], () => o.A.getProduct(null == k ? void 0 : k.skuId)),
        M = (0, l.bG)([s.A], () => s.A.fontSize),
        L = (0, l.bG)([s.A], () => s.A.messageGroupSpacing),
        U = p.Xi.useSetting();
    return (0, x.DB)(), (0, a.jsxs)("div", {
        className: f.kL,
        children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: "Randomize customization settings"
            }), (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                children: "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state."
            }), (0, a.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: "Randomize Theme",
                onClick: x.t0
            }), (0, a.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: "Randomize Collectibles",
                onClick: x.ZL
            }), (0, a.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                text: "Randomize Appearance Settings",
                onClick: x.ln
            })]
        }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(i.Heading, {
                variant: "heading-lg/semibold",
                children: "Current Settings"
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Theme: ", S]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Client Theme ID:", " ", null != O ? null == (y = g.ag[O]) ? void 0 : y.getName() : "None"]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Avatar Decoration: ", null != (n = null == R ? void 0 : R.name) ? n : "None"]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Nameplate: ", null != (b = null == D ? void 0 : D.name) ? b : "None"]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Font Size: ", M, "px"]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["Message Spacing: ", L]
            }), (0, a.jsxs)(i.Text, {
                variant: "text-md/normal",
                children: ["UI Density: ", U, " (", function(e) {
                    switch (e) {
                        case r.NS.COMPACT:
                            return "Compact";
                        case r.NS.COZY:
                            return "Cozy";
                        case r.NS.DEFAULT:
                            return "Default";
                        case r.NS.RESPONSIVE:
                            return "Responsive";
                        default:
                            return "Unknown"
                    }
                }(U), ")"]
            })]
        })]
    })
}