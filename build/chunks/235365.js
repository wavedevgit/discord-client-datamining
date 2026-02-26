/** chunk id: 235365, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => N,
    L: () => g
});
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(230109),
    d = r(732955),
    u = r(688810),
    o = r(320118),
    c = r(954571),
    m = r(570627),
    h = r(128620),
    x = r(652215),
    p = r(723468),
    _ = r(985018),
    f = r(204593);
let g = "orbs",
    N = e => {
        let {
            className: t,
            location: r
        } = e, l = m.m.useConfig({
            location: "PremiumTenureRewardsOrbsSection"
        }).enabled, {
            analyticsLocations: N
        } = (0, u.Ay)(r), b = a.useRef(null), R = a.useRef(!1), {
            passesGeneralUIInvariant: v,
            programReward: E
        } = (0, o.F)({
            location: "PremiumTenureRewardsOrbsSection"
        });
        return v ? (0, n.jsx)(u.f5, {
            value: N,
            children: (0, n.jsx)(i.L, {
                innerRef: b,
                onChange: e => {
                    e && !R.current && (R.current = !0, c.default.track(x.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                        program_state: E?.program_current_state
                    }))
                },
                threshold: .5,
                children: (0, n.jsxs)("div", {
                    ref: b,
                    id: g,
                    className: s()(f.uW, f.Uv, f.qr, t, {
                        [f.J4]: l
                    }),
                    children: [(0, n.jsx)(d.DZT, {
                        variant: l ? "display-sm" : "heading-xxl/extrabold",
                        className: f.R_,
                        style: {
                            textAlign: "start"
                        },
                        children: _.intl.string(p.default.EdGvBM)
                    }), (0, n.jsx)(d.EYj, {
                        variant: l ? "text-md/medium" : "text-lg/normal",
                        className: s()(f.VA, f.dO),
                        children: _.intl.string(p.default["2KoHRF"])
                    }), (0, n.jsx)(h.A, {})]
                })
            })
        }) : null
    }