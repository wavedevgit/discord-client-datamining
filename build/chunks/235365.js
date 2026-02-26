/** chunk id: 235365, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N,
    L: () => g
});
var r = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    i = n(230109),
    d = n(732955),
    u = n(688810),
    o = n(320118),
    c = n(954571),
    m = n(570627),
    h = n(128620),
    x = n(652215),
    p = n(723468),
    _ = n(985018),
    f = n(204593);
let g = "orbs",
    N = e => {
        let {
            className: t,
            location: n
        } = e, l = m.m.useConfig({
            location: "PremiumTenureRewardsOrbsSection"
        }).enabled, {
            analyticsLocations: N
        } = (0, u.Ay)(n), b = a.useRef(null), R = a.useRef(!1), {
            passesGeneralUIInvariant: E,
            programReward: v
        } = (0, o.F)({
            location: "PremiumTenureRewardsOrbsSection"
        });
        return E ? (0, r.jsx)(u.f5, {
            value: N,
            children: (0, r.jsx)(i.L, {
                innerRef: b,
                onChange: e => {
                    e && !R.current && (R.current = !0, c.default.track(x.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                        program_state: v?.program_current_state
                    }))
                },
                threshold: .5,
                children: (0, r.jsxs)("div", {
                    ref: b,
                    id: g,
                    className: s()(f.uW, f.Uv, f.qr, t, {
                        [f.J4]: l
                    }),
                    children: [(0, r.jsx)(d.DZT, {
                        variant: l ? "display-sm" : "heading-xxl/extrabold",
                        className: f.R_,
                        style: {
                            textAlign: "start"
                        },
                        children: _.intl.string(p.default.EdGvBM)
                    }), (0, r.jsx)(d.EYj, {
                        variant: l ? "text-md/medium" : "text-lg/normal",
                        className: s()(f.VA, f.dO),
                        children: _.intl.string(p.default["2KoHRF"])
                    }), (0, r.jsx)(h.A, {})]
                })
            })
        }) : null
    }