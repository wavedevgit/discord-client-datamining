/** chunk id: 402218 params = (module,exports,require) **/
l.d(t, {
    A: () => en
});
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    C = l(735438),
    r = l(33851),
    o = l.n(r),
    d = l(417597),
    c = l(827734),
    u = l(990078),
    m = l(397927),
    x = l(966327),
    h = l(396583),
    g = l(688810),
    H = l(576470),
    p = l(229527),
    j = l(316031),
    _ = l(706752),
    f = l(985925),
    b = l(534400),
    A = l(694318),
    v = l(967144),
    V = l(761640),
    L = l(71393),
    D = l(576705),
    R = l(287809),
    M = l(530347),
    N = l(881548),
    S = l(562153),
    E = l(661191),
    I = l(427262),
    y = l(157347),
    T = l(70738),
    Z = l(587426),
    U = l(134413),
    w = l(266047),
    O = l(178052),
    k = l(589935),
    F = l(189552),
    B = l(950072),
    P = l(652215),
    G = l(746080),
    Y = l(486974),
    q = l(985018),
    z = l(62255);
let K = i.memo(function(e) {
        let {
            member: t
        } = e, l = i.useMemo(() => (0, j.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), s = i.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
        return (0, n.jsxs)("div", {
            className: z.Ak,
            children: [t.hasUnusualDmActivity && (0, n.jsx)(u.m, {
                text: q.intl.string(q.t.QrfVTp),
                children: (0, n.jsx)(m.EF8, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: c.A.colors.TEXT_MUTED.css
                })
            }), l && (0, n.jsx)(u.m, {
                "aria-label": q.intl.string(q.t["xfJP+u"]),
                __unsupportedReactNodeAsText: (0, n.jsxs)("div", {
                    className: z.CN,
                    children: [(0, n.jsx)("div", {
                        children: q.intl.string(q.t["xfJP+u"])
                    }), (0, n.jsx)(H.A, {
                        deadline: s,
                        showUnits: !0,
                        stopAtOneSec: !0
                    })]
                }),
                children: (0, n.jsx)(m.gQi, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css
                })
            }), (0, A.cx)(t.userId) && (0, n.jsx)(u.m, {
                text: q.intl.string(q.t.PK9FQ2),
                children: (0, n.jsx)(M.A, {
                    width: 20,
                    height: 20,
                    color: c.A.colors.TEXT_FEEDBACK_CRITICAL.css
                })
            }), (0, p.TR)(t) && (0, n.jsx)(u.m, {
                text: q.intl.string(q.t.qOVbaX),
                children: (0, n.jsx)(m._mZ, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: c.A.colors.TEXT_MUTED.css
                })
            })]
        })
    }),
    Q = i.memo(function(e) {
        let {
            member: t,
            highestRole: l
        } = e, s = (0, d.bG)([L.A], () => L.A.getGuild(t.guildId), [t.guildId]), C = t.roles.length - 1, r = i.useMemo(() => new Intl.NumberFormat(q.intl.currentLocale).format(C), [C]), o = (0, F.Cy)(t), c = (0, F.Cy)(t, !0), x = (0, d.bG)([D.A], () => D.A.can(P.xBc.MANAGE_ROLES, s), [s]);
        return null == s ? null : (0, n.jsxs)("div", {
            className: z.yk,
            children: [null != l && (0, n.jsx)(B.A, {
                className: a()(z.Zf, z.Lc),
                role: l,
                guildId: t.guildId
            }), C > 0 && (0, n.jsx)(m.DUT, {
                className: z.yt,
                onClick: e => c(e),
                children: (0, n.jsx)(u.m, {
                    text: q.intl.string(q.t.DY6n4q),
                    children: (0, n.jsxs)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: ["+", r]
                    })
                })
            }), x && (0, n.jsx)(u.m, {
                text: q.intl.string(q.t.h3pSLR),
                children: (0, n.jsx)(m.DUT, {
                    onClick: o,
                    className: a()(z.yt, z.$g),
                    children: (0, n.jsx)(m.j96, {
                        size: "custom",
                        color: "currentColor",
                        className: z.fd,
                        width: 16,
                        height: 16
                    })
                })
            })]
        })
    }),
    X = i.memo(function(e) {
        let {
            member: t,
            user: l
        } = e, i = (0, v.gn)(t?.guildId, t?.userId, t?.colorStrings ?? null);
        return null == l || null == t ? null : (0, n.jsxs)("div", {
            className: z.FD,
            children: [(0, n.jsx)("div", {
                className: z.Wn,
                children: (0, n.jsx)(x.A, {
                    user: l
                })
            }), (0, n.jsx)("div", {
                className: z.eg,
                children: (0, n.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    children: (0, n.jsxs)("div", {
                        className: z.VW,
                        children: [(0, n.jsx)(m.gyj, {
                            name: S.Ay.getName(t.guildId, null, l),
                            colorString: t.colorString ?? null,
                            colorStrings: i,
                            className: z.bc
                        }), (0, n.jsx)(b.Ay, {
                            primaryGuild: l?.primaryGuild,
                            userId: l?.id,
                            contextGuildId: t.guildId,
                            containerClassName: z.Dz
                        })]
                    })
                })
            }), (0, n.jsx)("div", {
                className: z.Br,
                children: (0, n.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    tag: "span",
                    children: I.Ay.getUserTag(l)
                })
            })]
        })
    });

function W(e) {
    return {
        short: null == e ? null : (0, y.hL)(e, y.wN.JOINED_AT),
        long: new Date(e ?? 0).toLocaleDateString(q.intl.currentLocale, y.wp)
    }
}

function J(e) {
    let {
        member: t,
        showLongDate: l,
        isSortedBy: s
    } = e, [a, C] = i.useState(null);
    i.useEffect(() => {
        C(W(t.joinedAtTimestamp))
    }, [t.joinedAtTimestamp]), (0, h.A)(() => {
        C(W(t.joinedAtTimestamp))
    }, 1e4);
    let r = s ? "text-brand" : "text-default";
    return a?.short == null ? null : l ? (0, n.jsx)("div", {
        className: z.__invalid_joinedAtContainer,
        children: (0, n.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: r,
            children: a.long
        })
    }) : (0, n.jsx)("div", {
        className: z.__invalid_joinedAtContainer,
        children: (0, n.jsx)(u.m, {
            align: "left",
            __unsupportedReactNodeAsText: a.long,
            children: (0, n.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: r,
                children: a.short
            })
        })
    })
}
let $ = i.memo(function(e) {
        let {
            member: t,
            showLongDate: l,
            isSortedBy: s
        } = e, {
            accountCreationDateShort: a,
            accountCreationDateLong: C
        } = i.useMemo(() => {
            let e = E.default.extractTimestamp(t.userId);
            return {
                accountCreationDateShort: (0, y.hL)(e, y.wN.ACCOUNT_AGE),
                accountCreationDateLong: new Date(e).toLocaleDateString(q.intl.currentLocale, y.OA)
            }
        }, [t.userId]), r = s ? "text-brand" : "text-default";
        return l ? (0, n.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: r,
            children: C
        }) : (0, n.jsx)(u.m, {
            align: "left",
            __unsupportedReactNodeAsText: C,
            children: (0, n.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: r,
                children: a
            })
        })
    }),
    ee = i.memo(function(e) {
        let {
            member: t,
            user: l,
            highestRole: s,
            isHoldingAdvancedInfoKey: C,
            onOpenModerationMenu: r,
            onOpenMemberView: c,
            compact: x,
            hasModViewPanelAccess: h
        } = e, g = (0, d.bG)([D.A, L.A], () => D.A.can(P.xBc.MANAGE_GUILD, L.A.getGuild(t.guildId)), [t.guildId]), {
            selectedUserIds: H,
            addUsers: p,
            removeUser: j
        } = (0, Z.A)(t.guildId), _ = (0, U.vA)(t.guildId), f = (0, U.O6)(t.guildId, _, t.userId), b = (0, d.bG)([w.A], () => w.A.getSearchStateByGuildId(t.guildId).selectedSort ?? T.mF.ORDER_BY_UNSPECIFIED, [t.guildId], o()), A = i.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != t && f && (H.has(t.userId) ? j(t.userId) : p([t.userId]))
        }, [p, f, t, j, H]), v = b === T.mF.ORDER_BY_GUILD_JOINED_AT_ASC, V = b === T.mF.ORDER_BY_USER_ID_ASC || b === T.mF.ORDER_BY_USER_ID_DESC;
        return (0, n.jsxs)(n.Fragment, {
            children: [_ && (0, n.jsx)("td", {
                children: (0, n.jsx)(u.m, {
                    shouldShow: !f,
                    ariaHidden: f,
                    text: q.intl.string(q.t["Se4c7+"]),
                    children: (0, n.jsx)(m.DUT, {
                        onClick: A,
                        children: (0, n.jsx)(m.P7L, {
                            checked: H.has(t.userId),
                            disabled: !f
                        })
                    })
                })
            }), (0, n.jsx)("td", {
                className: a()(z.QB, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)(X, {
                    member: t,
                    user: l
                })
            }), (0, n.jsx)("td", {
                className: a()(z.qp, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)(J, {
                    showLongDate: C,
                    member: t,
                    isSortedBy: v
                })
            }), (0, n.jsx)("td", {
                className: a()(z.qp, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)($, {
                    showLongDate: C,
                    member: t,
                    isSortedBy: V
                })
            }), g && (0, n.jsx)("td", {
                className: a()(z.qp, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)(k.Ay, {
                    userId: t.userId,
                    guildId: t.guildId
                })
            }), (0, n.jsx)("td", {
                className: a()(z.QB, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)(Q, {
                    member: t,
                    highestRole: s
                })
            }), (0, n.jsx)("td", {
                className: a()(z.qp, {
                    [z.oE]: x
                }),
                children: (0, n.jsx)(K, {
                    member: t
                })
            }), (0, n.jsx)("td", {
                className: a()(z.OL, {
                    [z.oE]: x
                }),
                children: (0, n.jsxs)("div", {
                    className: z.$E,
                    children: [(0, n.jsx)(u.m, {
                        asContainer: !0,
                        text: h ? q.intl.string(q.t.nHfkf4) : q.intl.string(q.t.uTre2y),
                        children: (0, n.jsx)(m.DUT, {
                            onClick: c,
                            className: z.x6,
                            children: h ? (0, n.jsx)(N.A, {
                                width: et,
                                height: et
                            }) : (0, n.jsx)(m.nys, {
                                size: "custom",
                                color: "currentColor",
                                width: et,
                                height: et
                            })
                        })
                    }), (0, n.jsx)(u.m, {
                        asContainer: !0,
                        text: q.intl.string(q.t.x8Nn4M),
                        children: (0, n.jsx)(m.DUT, {
                            onClick: r,
                            className: z.x6,
                            children: (0, n.jsx)(m.FHP, {
                                size: "custom",
                                color: "currentColor",
                                width: et,
                                height: et
                            })
                        })
                    })]
                })
            })]
        })
    }),
    et = 18,
    el = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    en = i.memo(function(e) {
        let {
            userId: t,
            guildId: l,
            style: s,
            rowSelected: r,
            isLoading: c = !1,
            isHoldingAdvancedInfoKey: u = !1,
            compact: m = !1
        } = e, {
            analyticsLocations: x
        } = (0, g.Ay)(), h = (0, d.bG)([V.Ay], () => V.Ay.getGuildSidebarState(l), [l]), H = h?.details.userId === t, p = (0, d.bG)([w.A], () => w.A.getEnhancedMember(l, t), [l, t]), j = (0, F.YH)(p), b = (0, d.bG)([R.default], () => R.default.getUser(t), [t]), A = (0, f.q)(l), v = (0, F.UY)(p ?? void 0), L = i.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), v(e)
        }, [v]), D = i.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != p && (0, F.Ko)(p, x)
        }, [p, x]), M = i.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != p && (A ? (0, _.z)(p.guildId, p.userId, G.VV.MEMBER_SAFETY, {
                modViewPanel: Y.g.INFO
            }) : (0, F.Ko)(p, x))
        }, [p, x, A]), N = i.useCallback((e, t) => o()((0, C.omit)(e, el), (0, C.omit)(t, el)), []);
        return null == p ? null : (0, n.jsx)(O.A, {
            role: "row",
            value: p,
            style: s,
            className: a()(z.yF, z.iA, r && z.wH, H && z.qb, c && z.Lq),
            equalityFn: N,
            onClick: D,
            onContextMenu: L,
            children: (0, n.jsx)(ee, {
                member: p,
                user: b,
                highestRole: j,
                isHoldingAdvancedInfoKey: u,
                onOpenModerationMenu: L,
                onOpenMemberView: M,
                compact: m,
                hasModViewPanelAccess: A
            })
        })
    })