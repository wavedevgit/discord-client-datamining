/** chunk id: 671576, original params: e,t,l (module,exports,require) **/
l.d(t, {
    default: () => _
}), l(896048);
var n = l(627968),
    r = l(64700),
    i = l(158954),
    s = l(311907),
    a = l(435371),
    o = l(397927),
    c = l(71393),
    d = l(954571),
    u = l(554113),
    x = l(974103),
    m = l(903093),
    j = l(610136),
    b = l(336496),
    h = l(218113),
    f = l(652215),
    g = l(985018),
    v = l(651846);

function _(e) {
    let {
        guildId: t,
        transitionState: l,
        onClose: _,
        analyticsData: A
    } = e, p = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]), T = !!(null == p ? void 0 : p.features.has(f.GuildFeatures.INVITES_DISABLED)), [E] = r.useState(!1), [S, y] = r.useState(h.f7), O = (0, s.bG)([j.A], () => j.A.getGuildIncident(t)), N = (0, x.w)(p), I = (0, m.r2)(O) || T, R = (0, m.di)(O), [C, D] = r.useState(I), [P, M] = r.useState(R), [w, G] = r.useState(!1), L = C !== I || P !== R || w, U = T && !N;
    return null == p ? (_(), null) : (0, n.jsx)(i.Modal, {
        transitionState: l,
        title: g.intl.string(g.t.oCYAc7),
        actions: [{
            text: g.intl.string(g.t["ETE/oC"]),
            onClick: _,
            variant: "secondary",
            disabled: E
        }, {
            text: g.intl.string(g.t["pwm/z0"]),
            onClick: () => {
                (I || R) && !C && !P ? ((0, u.tr)(p.id, !1, !1), (0, o.mMO)(() => Promise.resolve(e => {
                    var l, r;
                    return (0, n.jsx)(b.default, (l = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var l = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(l);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(l, e).enumerable
                            }))), n.forEach(function(t) {
                                var n;
                                n = l[t], t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n
                            })
                        }
                        return e
                    }({}, e), r = r = {
                        guildId: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var l = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            l.push.apply(l, n)
                        }
                        return l
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
                    }), l))
                }))) : (0, u.tr)(p.id, C, P, S);
                let {
                    source: e,
                    alertType: l,
                    messageId: r
                } = A;
                d.default.track(f.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
                    guild_id: t,
                    source: e,
                    raid_alert_id: r,
                    raid_alert_type: l,
                    intervention_type_enabled: (0, m.mR)(C, P),
                    intervention_type_disabled: (0, m.fi)(C, P),
                    duration: 60 * S
                }), _()
            },
            loading: E,
            disabled: !L
        }],
        onClose: _,
        children: (0, n.jsxs)("div", {
            className: v.rs,
            children: [(0, n.jsx)(o.l6P, {
                label: g.intl.string(g.t.vKYZzc),
                hideLabel: !0,
                placeholder: g.intl.string(g.t.vKYZzc),
                options: (0, h.aE)(),
                onSelectionChange: function(e) {
                    y(e), G(!0)
                },
                value: S,
                selectionMode: "single",
                fullWidth: !0
            }), (0, n.jsxs)("div", {
                className: v.Qb,
                children: [(0, n.jsxs)("div", {
                    className: v.Iy,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t.Uwsjn6)
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.qPJkZh)
                    })]
                }), (0, n.jsx)(a.un, {
                    body: g.intl.string(g.t["9GPbsV"]),
                    shouldShow: T,
                    asContainer: !0,
                    element: "div",
                    children: (0, n.jsx)("div", {
                        className: v.L$,
                        children: (0, n.jsx)(o.dOG, {
                            onChange: function() {
                                D(e => !e)
                            },
                            checked: C,
                            disabled: U
                        })
                    })
                })]
            }), (0, n.jsxs)("div", {
                className: v.Qb,
                children: [(0, n.jsxs)("div", {
                    className: v.Iy,
                    children: [(0, n.jsx)(o.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(g.t["wrDmA/"])
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: g.intl.string(g.t.UQbJW7)
                    })]
                }), (0, n.jsx)("div", {
                    className: v.L$,
                    children: (0, n.jsx)(o.dOG, {
                        onChange: function() {
                            M(e => !e)
                        },
                        checked: P
                    })
                })]
            })]
        })
    })
}