/** Chunk was on 88615 **/
/** chunk id: 14081, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(228524);
var r = n(627968),
    l = n(503698),
    i = n.n(l),
    o = n(158954),
    s = n(311907),
    a = n(397927),
    u = n(793574),
    d = n(890942),
    c = n(744201),
    p = n(522055),
    m = n(793506),
    f = n(843095),
    v = n(294726),
    g = n(985018),
    A = n(876380),
    _ = n(291305),
    x = n(561797),
    h = n(390175);

function b(e) {
    let {
        guildId: t
    } = e, {
        state: n,
        lowestGameServerCost: l
    } = (0, s.cf)([p.A], () => ({
        state: p.A.getStateForGuild(t),
        lowestGameServerCost: p.A.getLowestGameCostForGuild(t)
    })), b = (0, m.A)(t), {
        textColor: j
    } = (0, c.A)((null == b ? void 0 : b.type) === "active");
    return null == n ? null : (0, r.jsxs)(d.NI, {
        label: g.intl.string(v.default["B3OfL/"]),
        badge: "beta",
        isActive: (null == b ? void 0 : b.type) === "active",
        isWarning: (null == b ? void 0 : b.type) === "expiring",
        onClick: () => (0, f.A)({
            guildId: t,
            analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
        }),
        children: [(0, r.jsxs)("div", {
            className: x.ZS,
            children: [(0, r.jsx)("img", {
                className: i()(_.T, A.Sl, x.Sl),
                src: h.A,
                alt: ""
            }), (0, r.jsx)("div", {
                className: i()(A.Sl, x.D7)
            })]
        }), (0, r.jsx)(d.Ft, {
            title: g.intl.string(v.default["B3OfL/"]),
            textColor: j,
            footer: (0, r.jsx)(d.$L, {
                cost: null != l ? l : 0,
                costDecorator: "+",
                status: b
            }),
            children: (0, r.jsx)(o.EYj, {
                className: A.h_,
                color: j,
                variant: "text-sm/medium",
                children: g.intl.string(v.default.EGkJAG)
            })
        }), (0, r.jsx)(d.kd, {
            children: (0, r.jsx)(a.Button, {
                variant: "primary",
                fullWidth: !0,
                text: Object.values(n.entitlements).length > 0 ? g.intl.string(v.default.PuvU5b) : g.intl.string(v.default.b62EHM),
                onClick: e => {
                    e.stopPropagation(), (0, f.A)({
                        guildId: t,
                        analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW
                    })
                }
            })
        })]
    })
}