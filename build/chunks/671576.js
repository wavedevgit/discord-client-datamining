/** chunk id: 671576 params = (module,exports,require) **/
l.d(t, {
    default: () => T
});
var n = l(627968),
    s = l(64700),
    i = l(158954),
    a = l(311907),
    r = l(435371),
    d = l(397927),
    c = l(71393),
    o = l(954571),
    u = l(554113),
    x = l(974103),
    m = l(903093),
    h = l(610136),
    j = l(336496),
    _ = l(218113),
    A = l(652215),
    g = l(985018),
    b = l(673212);

function T(e) {
    let {
        guildId: t,
        transitionState: l,
        onClose: T,
        analyticsData: f
    } = e, E = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]), v = !!E?.features.has(A.GuildFeatures.INVITES_DISABLED), [S] = s.useState(!1), [N, I] = s.useState(_.f7), R = (0, a.bG)([h.A], () => h.A.getGuildIncident(t)), C = (0, x.w)(E), p = (0, m.r2)(R) || v, M = (0, m.di)(R), [D, G] = s.useState(p), [y, L] = s.useState(M), [U, P] = s.useState(!1), k = D !== p || y !== M || U, B = v && !C;
    return null == E ? (T(), null) : (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: g.intl.string(g.t.oCYAc7),
        actions: [{
            text: g.intl.string(g.t["ETE/oC"]),
            onClick: T,
            variant: "secondary",
            disabled: S
        }, {
            text: g.intl.string(g.t["pwm/z0"]),
            onClick: () => {
                (p || M) && !D && !y ? ((0, u.tr)(E.id, !1, !1), (0, d.mMO)(() => Promise.resolve(e => (0, n.jsx)(j.default, {
                    ...e,
                    guildId: t
                })))) : (0, u.tr)(E.id, D, y, N);
                let {
                    source: e,
                    alertType: l,
                    messageId: s
                } = f;
                o.default.track(A.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                    guild_id: t,
                    source: e,
                    raid_alert_id: s,
                    raid_alert_type: l,
                    intervention_type_enabled: (0, m.mR)(D, y),
                    intervention_type_disabled: (0, m.fi)(D, y),
                    duration: 60 * N
                }), T()
            },
            loading: S,
            disabled: !k
        }],
        onClose: T,
        children: (0, n.jsxs)("div", {
            className: b.rs,
            children: [(0, n.jsx)(d.l6P, {
                label: g.intl.string(g.t.vKYZzc),
                hideLabel: !0,
                placeholder: g.intl.string(g.t.vKYZzc),
                options: (0, _.aE)(),
                onSelectionChange: function(e) {
                    I(e), P(!0)
                },
                value: N,
                selectionMode: "single",
                fullWidth: !0
            }), (0, n.jsxs)("div", {
                className: b.Qb,
                children: [(0, n.jsxs)("div", {
                    className: b.Iy,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t.Uwsjn6)
                    }), (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.qPJkZh)
                    })]
                }), (0, n.jsx)(r.un, {
                    body: g.intl.string(g.t["9GPbsV"]),
                    shouldShow: v,
                    asContainer: !0,
                    element: "div",
                    children: (0, n.jsx)("div", {
                        className: b.L$,
                        children: (0, n.jsx)(d.dOG, {
                            onChange: function() {
                                G(e => !e)
                            },
                            checked: D,
                            disabled: B
                        })
                    })
                })]
            }), (0, n.jsxs)("div", {
                className: b.Qb,
                children: [(0, n.jsxs)("div", {
                    className: b.Iy,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t["wrDmA/"])
                    }), (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.UQbJW7)
                    })]
                }), (0, n.jsx)("div", {
                    className: b.L$,
                    children: (0, n.jsx)(d.dOG, {
                        onChange: function() {
                            L(e => !e)
                        },
                        checked: y
                    })
                })]
            })]
        })
    })
}