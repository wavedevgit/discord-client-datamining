/** chunk id: 222785, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => B
});
var i = t(627968),
    r = t(64700),
    l = t(284009),
    a = t.n(l),
    c = t(311907),
    o = t(397927),
    d = t(686449),
    s = t(819744),
    u = t(149305),
    g = t(293260),
    p = t(616075),
    b = t(226958),
    y = t(82770),
    f = t(346247),
    O = t(434352),
    j = t(664967),
    A = t(531335),
    h = t(957316),
    m = t(974103),
    v = t(509536),
    D = t(359047),
    P = t(997509),
    I = t(595818),
    x = t(685073),
    w = t(534400),
    E = t(647534),
    _ = t(857071),
    G = t(36942),
    M = t(149280),
    S = t(260509),
    T = t(696451),
    N = t(576705),
    L = t(543465),
    U = t(287809),
    C = t(954571),
    k = t(652215),
    R = t(349828),
    H = t(985018),
    J = t(583970);

function F(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.forEach(function(n) {
            var i;
            i = t[n], n in e ? Object.defineProperty(e, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = i
        })
    }
    return e
}

function V(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t.push.apply(t, i)
        }
        return t
    })(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e
}
let B = r.memo(function(e) {
    var n;
    let {
        guild: l,
        onClose: B,
        onSelect: X
    } = e, W = (0, c.bG)([U.default], () => U.default.getCurrentUser());
    a()(null != W, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
        C.default.track(k.HAw.GUILD_DROPDOWN_MENU_VIEWED, {
            guild_id: l.id
        })
    });
    let Y = (0, c.bG)([L.Ay], () => L.Ay.isGuildCollapsed(l.id), [l.id]),
        {
            canAccessSettings: Q,
            canManageChannels: Z,
            showGuildAnalytics: q
        } = (0, c.cf)([N.A], () => ({
            canAccessSettings: N.A.canAccessGuildSettings(l),
            canManageChannels: N.A.can(k.xBc.MANAGE_CHANNELS, l),
            showGuildAnalytics: N.A.can(k.xBc.VIEW_GUILD_ANALYTICS, l) && l.features.has(k.GuildFeatures.COMMUNITY)
        }), [l]),
        K = (0, m.ic)(l),
        $ = (0, S.bM)(l, W),
        z = (0, c.bG)([_.A], () => _.A.isLurking(l.id), [l.id]),
        ee = (0, c.bG)([T.Ay], () => T.Ay.isCurrentUserGuest(l.id)),
        en = (0, D.A)(l.id, !0),
        et = (0, g.Ay)(l),
        ei = (0, A.A)({
            source: k.PE1.GUILD_HEADER,
            guild: l
        }),
        er = (0, f.A)({
            guildId: l.id,
            userId: W.id,
            analyticsLocation: {
                page: k.liQ.GUILD_CHANNEL,
                section: k.JJy.GUILD_DROPDOWN_MENU
            },
            icon: o.R2l
        }),
        el = l.features.has(k.GuildFeatures.HUB),
        ea = l.id === R.V,
        ec = l.id === k.gNP,
        eo = (0, G.A)(l.id, !0),
        ed = (0, b.A)(l),
        es = (0, y.A)(l),
        eu = (0, j.A)(l, !0),
        eg = (0, O.A)(l),
        {
            isFavoritesPerk: ep
        } = (0, p.l)("GuildHeaderPopout"),
        eb = (0, M.A)(l),
        {
            triggerDeadchat: ey
        } = u.c.useExperiment({
            guildId: l.id,
            location: "guild header"
        }, {
            autoTrackExposure: !1
        }),
        ef = (0, x.Rg)(l) && (0, x.q0)(l),
        eO = r.useCallback(() => {
            (0, o.mMO)(async () => {
                let {
                    default: e
                } = await t.e("53485").then(t.bind(t, 20508));
                return n => (0, i.jsx)(e, V(F({}, n), {
                    guild: l
                }))
            })
        }, [l]);
    return z || ee ? (0, i.jsx)(o.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: X,
        navId: "guild-header-popout",
        variant: "fixed",
        onClose: B,
        "aria-label": H.intl.string(H.t.HpQykc),
        children: (0, i.jsx)(o.Drp, {
            id: "leave-guild",
            label: H.intl.string(H.t.J2TBi3),
            icon: o.oLl,
            leadingAccessory: {
                type: "icon",
                icon: o.oLl
            },
            action: () => {
                P.A.leaveGuild(l.id, !0)
            }
        })
    }) : ea ? (0, i.jsxs)(o.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: X,
        navId: "favorites-header-popout",
        variant: "fixed",
        onClose: B,
        "aria-label": H.intl.string(H.t.HpQykc),
        children: [(0, i.jsxs)(o.rXV, {
            children: [ep && (0, i.jsx)(o.Drp, {
                id: "add-channel",
                label: H.intl.string(H.t["6uDHk6"]),
                color: "brand",
                icon: o.U1e,
                leadingAccessory: {
                    type: "icon",
                    icon: o.U1e
                },
                action: () => (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await t.e("15077").then(t.bind(t, 889186));
                    return n => (0, i.jsx)(e, F({}, n))
                })
            }), (0, i.jsx)(o.Drp, {
                id: "create-category",
                label: H.intl.string(H.t["ISN+NM"]),
                icon: o.YPf,
                leadingAccessory: {
                    type: "icon",
                    icon: o.YPf
                },
                action: () => (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await t.e("5639").then(t.bind(t, 395199));
                    return n => (0, i.jsx)(e, F({}, n))
                })
            })]
        }), (0, i.jsx)(o.rXV, {
            children: (0, i.jsx)(o.sLh, {
                id: "hide-muted-channels",
                label: H.intl.string(H.t.UwOLJO),
                checked: Y,
                action: () => d.A.toggleCollapseGuild(l.id)
            })
        })]
    }) : el ? (0, i.jsxs)(o.W1t, {
        "data-menu-migrated": !0,
        onSelect: X,
        navId: "guild-header-popout",
        variant: "fixed",
        onClose: B,
        "aria-label": H.intl.string(H.t.HpQykc),
        children: [(0, i.jsxs)(o.rXV, {
            children: [Q ? (0, i.jsx)(o.Drp, {
                id: "settings",
                label: H.intl.string(H.t["154/bL"]),
                icon: eb ? o.vJI : o.Zes,
                leadingAccessory: {
                    type: "icon",
                    icon: eb ? o.vJI : o.Zes
                },
                action: () => {
                    P.A.open(l.id, (0, I.x)())
                }
            }) : null, ei, (0, i.jsx)(o.Drp, {
                id: "privacy",
                label: H.intl.string(H.t.BayiAo),
                icon: o.lmn,
                leadingAccessory: {
                    type: "icon",
                    icon: o.lmn
                },
                action: () => (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await t.e("62026").then(t.bind(t, 585265));
                    return n => (0, i.jsx)(e, V(F({}, n), {
                        guild: l
                    }))
                })
            }), er]
        }), $ ? null : (0, i.jsx)(o.rXV, {
            children: (0, i.jsx)(o.Drp, {
                id: "leave",
                label: H.intl.string(H.t.Dv8gFT),
                icon: o.oLl,
                leadingAccessory: {
                    type: "icon",
                    icon: o.oLl
                },
                color: "danger",
                action: eO
            })
        })]
    }) : ec ? null : (0, i.jsxs)(o.W1t, {
        "data-menu-needs-review": !0,
        onSelect: X,
        navId: "guild-header-popout",
        variant: "fixed",
        onClose: B,
        "aria-label": H.intl.string(H.t.HpQykc),
        children: [(0, i.jsxs)(o.rXV, {
            children: [(0, i.jsx)(o.Drp, {
                id: "premium-subscribe",
                label: H.intl.string(H.t.VJEVbu),
                icon: o._Jp,
                leadingAccessory: {
                    type: "icon",
                    icon: o._Jp
                },
                action: () => {
                    (0, v.K)({
                        guildId: l.id,
                        location: {
                            section: k.JJy.GUILD_HEADER_POPOUT
                        }
                    })
                }
            }), ef && (0, i.jsx)(o.Drp, {
                id: "guild-tag",
                label: H.intl.string(J.default.mf2OwH),
                leadingAccessory: {
                    type: "guildTag",
                    element: (0, i.jsx)(w.o9, {
                        guildId: l.id,
                        guildTag: l.profile.tag,
                        guildBadge: null != (n = l.profile.badge) ? n : void 0,
                        inline: !1
                    })
                },
                icon: (0, i.jsx)(w.o9, {
                    guildId: l.id,
                    guildBadge: l.profile.badge,
                    guildTag: l.profile.tag,
                    inline: !1
                }),
                action: () => (0, E.A)(l.id)
            })]
        }), (0, i.jsxs)(o.rXV, {
            children: [$ && W.isStaff() && ey ? (0, i.jsx)(o.Drp, {
                id: "create-deadchat",
                label: "Deadchat Ping",
                icon: o.MBj,
                leadingAccessory: {
                    type: "icon",
                    icon: o.MBj
                },
                action: () => {
                    (0, s.g)(l.id, k.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT)
                }
            }) : null, ei, Q ? (0, i.jsx)(o.Drp, {
                id: "settings",
                label: H.intl.string(H.t["154/bL"]),
                icon: eb ? o.vJI : o.Zes,
                leadingAccessory: {
                    type: "icon",
                    icon: eb ? o.vJI : o.Zes
                },
                action: () => {
                    P.A.open(l.id, (0, I.x)())
                }
            }) : null, q ? (0, i.jsx)(o.Drp, {
                id: "insights",
                label: H.intl.string(H.t["0wWfUG"]),
                icon: o.Uy2,
                leadingAccessory: {
                    type: "icon",
                    icon: o.Uy2
                },
                action: () => P.A.open(l.id, k.BEX.ANALYTICS)
            }) : null, Z ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Drp, {
                    id: "create-channel",
                    label: H.intl.string(H.t["fUYU+j"]),
                    icon: o.U1e,
                    leadingAccessory: {
                        type: "icon",
                        icon: o.U1e
                    },
                    action: () => (0, o.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([t.e("64233"), t.e("9743")]).then(t.bind(t, 409200));
                        return n => (0, i.jsx)(e, V(F({}, n), {
                            channelType: k.rbe.GUILD_TEXT,
                            guildId: l.id
                        }))
                    })
                }), (0, i.jsx)(o.Drp, {
                    id: "create-category",
                    label: H.intl.string(H.t["ISN+NM"]),
                    icon: o.YPf,
                    leadingAccessory: {
                        type: "icon",
                        icon: o.YPf
                    },
                    action: () => (0, o.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([t.e("64233"), t.e("9743")]).then(t.bind(t, 409200));
                        return n => (0, i.jsx)(e, V(F({}, n), {
                            channelType: k.rbe.GUILD_CATEGORY,
                            guildId: l.id
                        }))
                    })
                })]
            }) : null, en, ed, es, et, eg]
        }), (0, i.jsxs)(o.rXV, {
            children: [eo, (0, i.jsx)(o.Drp, {
                id: "notifications",
                label: H.intl.string(H.t.h850Ss),
                icon: o.XFE,
                leadingAccessory: {
                    type: "icon",
                    icon: o.XFE
                },
                action: () => (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([t.e("64992"), t.e("67208")]).then(t.bind(t, 401539));
                    return n => (0, i.jsx)(e, V(F({}, n), {
                        guildId: l.id
                    }))
                })
            }), (0, i.jsx)(o.Drp, {
                id: "privacy",
                label: H.intl.string(H.t.BayiAo),
                icon: o.lmn,
                leadingAccessory: {
                    type: "icon",
                    icon: o.lmn
                },
                action: () => (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await t.e("62026").then(t.bind(t, 585265));
                    return n => (0, i.jsx)(e, V(F({}, n), {
                        guild: l
                    }))
                })
            })]
        }), (0, i.jsxs)(o.rXV, {
            children: [er, (0, i.jsx)(o.sLh, {
                id: "hide-muted-channels",
                label: H.intl.string(H.t.UwOLJO),
                leadingAccessory: {
                    type: "icon",
                    icon: o.G3N
                },
                checked: Y,
                action: () => d.A.toggleCollapseGuild(l.id)
            })]
        }), (0, i.jsxs)(o.rXV, {
            children: [eu, K && l.features.has(k.GuildFeatures.COMMUNITY) ? (0, i.jsx)(o.Drp, {
                id: "report-raid",
                label: H.intl.string(H.t.cswId3),
                icon: o.lmn,
                leadingAccessory: {
                    type: "icon",
                    icon: o.lmn
                },
                color: "danger",
                action: () => (0, h.M)(l.id)
            }) : null, $ ? null : (0, i.jsx)(o.Drp, {
                id: "leave",
                label: H.intl.string(H.t.J2TBi3),
                icon: o.oLl,
                leadingAccessory: {
                    type: "icon",
                    icon: o.oLl
                },
                color: "danger",
                action: eO
            })]
        })]
    })
})