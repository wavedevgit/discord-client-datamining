/** chunk id: 235365 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    L: () => p
});
var s = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(230109),
    d = n(732955),
    o = n(688810),
    c = n(320118),
    u = n(954571),
    m = n(128620),
    h = n(652215),
    x = n(490285),
    C = n(985018),
    _ = n(102338);
let p = "orbs",
    g = e => {
        let {
            className: t,
            location: n
        } = e, {
            analyticsLocations: a
        } = (0, o.Ay)(n), g = r.useRef(null), f = r.useRef(!1), {
            passesGeneralUIInvariant: R,
            programReward: b
        } = (0, c.F)({
            location: "PremiumTenureRewardsOrbsSection"
        });
        return R ? (0, s.jsx)(o.f5, {
            value: a,
            children: (0, s.jsx)(i.L, {
                innerRef: g,
                onChange: e => {
                    e && !f.current && (f.current = !0, u.default.track(h.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                        program_state: b?.program_current_state
                    }))
                },
                threshold: .5,
                children: (0, s.jsxs)("div", {
                    ref: g,
                    id: p,
                    className: l()(_.uW, _.Uv, _.qr, t),
                    children: [(0, s.jsx)(d.DZT, {
                        variant: "display-sm",
                        className: _.R_,
                        style: {
                            textAlign: "start"
                        },
                        children: C.intl.string(x.default.EdGvBM)
                    }), (0, s.jsx)(d.EYj, {
                        variant: "text-md/medium",
                        className: l()(_.VA, _.dO),
                        children: C.intl.string(x.default["2KoHRF"])
                    }), (0, s.jsx)(m.A, {})]
                })
            })
        }) : null
    }