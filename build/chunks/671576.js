/** chunk id: 671576 params = (module,exports,require) **/
l.d(t, {
    default: () => b
});
var n = l(627968),
    s = l(64700),
    i = l(158954),
    a = l(311907),
    r = l(435371),
    d = l(397927),
    o = l(71393),
    c = l(954571),
    u = l(554113),
    x = l(974103),
    m = l(903093),
    h = l(610136),
    j = l(336496),
    _ = l(218113),
    g = l(652215),
    A = l(985018),
    f = l(226143);

function b(e) {
    let {
        guildId: t,
        transitionState: l,
        onClose: b,
        analyticsData: v
    } = e, T = (0, a.bG)([o.A], () => o.A.getGuild(t), [t]), N = !!T?.features.has(g.GuildFeatures.INVITES_DISABLED), [E] = s.useState(!1), [S, C] = s.useState(_.f7), I = (0, a.bG)([h.A], () => h.A.getGuildIncident(t)), R = (0, x.w)(T), p = (0, m.r2)(I) || N, M = (0, m.di)(I), [D, y] = s.useState(p), [G, L] = s.useState(M), [P, k] = s.useState(!1), U = D !== p || G !== M || P, w = N && !R;
    return null == T ? (b(), null) : (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: A.intl.string(A.t.oCYAc7),
        actions: [{
            text: A.intl.string(A.t["ETE/oC"]),
            onClick: b,
            variant: "secondary",
            disabled: E
        }, {
            text: A.intl.string(A.t["pwm/z0"]),
            onClick: () => {
                (p || M) && !D && !G ? ((0, u.tr)(T.id, !1, !1), (0, d.mMO)(() => Promise.resolve(e => (0, n.jsx)(j.default, {
                    ...e,
                    guildId: t
                })))) : (0, u.tr)(T.id, D, G, S);
                let {
                    source: e,
                    alertType: l,
                    messageId: s
                } = v;
                c.default.track(g.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                    guild_id: t,
                    source: e,
                    raid_alert_id: s,
                    raid_alert_type: l,
                    intervention_type_enabled: (0, m.mR)(D, G),
                    intervention_type_disabled: (0, m.fi)(D, G),
                    duration: 60 * S
                }), b()
            },
            loading: E,
            disabled: !U
        }],
        onClose: b,
        children: (0, n.jsxs)("div", {
            className: f.rs,
            children: [(0, n.jsx)(d.l6P, {
                label: A.intl.string(A.t.vKYZzc),
                hideLabel: !0,
                placeholder: A.intl.string(A.t.vKYZzc),
                options: (0, _.aE)(),
                onSelectionChange: function(e) {
                    C(e), k(!0)
                },
                value: S,
                selectionMode: "single",
                fullWidth: !0
            }), (0, n.jsxs)("div", {
                className: f.Qb,
                children: [(0, n.jsxs)("div", {
                    className: f.Iy,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t.Uwsjn6)
                    }), (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(A.t.qPJkZh)
                    })]
                }), (0, n.jsx)(r.un, {
                    body: A.intl.string(A.t["9GPbsV"]),
                    shouldShow: N,
                    asContainer: !0,
                    element: "div",
                    children: (0, n.jsx)("div", {
                        className: f.L$,
                        children: (0, n.jsx)(d.dOG, {
                            onChange: function() {
                                y(e => !e)
                            },
                            checked: D,
                            disabled: w
                        })
                    })
                })]
            }), (0, n.jsxs)("div", {
                className: f.Qb,
                children: [(0, n.jsxs)("div", {
                    className: f.Iy,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: A.intl.string(A.t["wrDmA/"])
                    }), (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(A.t.UQbJW7)
                    })]
                }), (0, n.jsx)("div", {
                    className: f.L$,
                    children: (0, n.jsx)(d.dOG, {
                        onChange: function() {
                            L(e => !e)
                        },
                        checked: G
                    })
                })]
            })]
        })
    })
}