/** Chunk was on 35894 **/
/** chunk id: 402218, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => er
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(735438),
    s = n(33851),
    c = n.n(s),
    u = n(417597),
    d = n(827734),
    C = n(990078),
    m = n(397927),
    p = n(966327),
    f = n(396583),
    b = n(688810),
    j = n(576470),
    g = n(229527),
    h = n(316031),
    x = n(706752),
    y = n(985925),
    O = n(534400),
    v = n(694318),
    _ = n(967144),
    H = n(761640),
    w = n(71393),
    A = n(576705),
    S = n(287809),
    D = n(530347),
    N = n(881548),
    L = n(562153),
    P = n(661191),
    R = n(427262),
    V = n(157347),
    E = n(70738),
    M = n(134413),
    I = n(266047),
    T = n(178052),
    Z = n(589935),
    k = n(225671),
    U = n(189552),
    F = n(950072),
    B = n(652215),
    G = n(746080),
    q = n(486974),
    z = n(985018),
    Y = n(918372);
let K = l.memo(function(e) {
        let {
            member: t
        } = e, n = l.useMemo(() => (0, h.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), i = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
        return (0, r.jsxs)("div", {
            className: Y.Ak,
            children: [t.hasUnusualDmActivity && (0, r.jsx)(C.m, {
                text: z.intl.string(z.t.QrfVTp),
                children: (0, r.jsx)(m.EF8, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.A.colors.TEXT_MUTED.css
                })
            }), n && (0, r.jsx)(C.m, {
                "aria-label": z.intl.string(z.t["xfJP+u"]),
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    className: Y.CN,
                    children: [(0, r.jsx)("div", {
                        children: z.intl.string(z.t["xfJP+u"])
                    }), (0, r.jsx)(j.A, {
                        deadline: i,
                        showUnits: !0,
                        stopAtOneSec: !0
                    })]
                }),
                children: (0, r.jsx)(m.gQi, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.A.colors.TEXT_FEEDBACK_CRITICAL.css
                })
            }), (0, v.cx)(t.userId) && (0, r.jsx)(C.m, {
                text: z.intl.string(z.t.PK9FQ2),
                children: (0, r.jsx)(D.A, {
                    width: 20,
                    height: 20,
                    color: d.A.colors.TEXT_FEEDBACK_CRITICAL.css
                })
            }), (0, g.TR)(t) && (0, r.jsx)(C.m, {
                text: z.intl.string(z.t.qOVbaX),
                children: (0, r.jsx)(m._mZ, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: d.A.colors.TEXT_MUTED.css
                })
            })]
        })
    }),
    Q = l.memo(function(e) {
        let {
            member: t,
            highestRole: n
        } = e, i = (0, u.bG)([w.A], () => w.A.getGuild(t.guildId), [t.guildId]), a = t.roles.length - 1, s = l.useMemo(() => new Intl.NumberFormat(z.intl.currentLocale).format(a), [a]), c = (0, U.Cy)(t), d = (0, U.Cy)(t, !0), p = (0, u.bG)([A.A], () => A.A.can(B.xBc.MANAGE_ROLES, i), [i]);
        return null == i ? null : (0, r.jsxs)("div", {
            className: Y.yk,
            children: [null != n && (0, r.jsx)(F.A, {
                className: o()(Y.Zf, Y.Lc),
                role: n,
                guildId: t.guildId
            }), a > 0 && (0, r.jsx)(m.DUT, {
                className: Y.yt,
                onClick: e => d(e),
                children: (0, r.jsx)(C.m, {
                    text: z.intl.string(z.t.DY6n4q),
                    children: (0, r.jsxs)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-strong",
                        children: ["+", s]
                    })
                })
            }), p && (0, r.jsx)(C.m, {
                text: z.intl.string(z.t.h3pSLR),
                children: (0, r.jsx)(m.DUT, {
                    onClick: c,
                    className: o()(Y.yt, Y.$g),
                    children: (0, r.jsx)(m.j96, {
                        size: "custom",
                        color: "currentColor",
                        className: Y.fd,
                        width: 16,
                        height: 16
                    })
                })
            })]
        })
    }),
    X = l.memo(function(e) {
        var t, n;
        let {
            member: l,
            user: i
        } = e, o = (0, _.gn)(null == l ? void 0 : l.guildId, null == l ? void 0 : l.userId, null != (t = null == l ? void 0 : l.colorStrings) ? t : null);
        return null == i || null == l ? null : (0, r.jsxs)("div", {
            className: Y.FD,
            children: [(0, r.jsx)("div", {
                className: Y.Wn,
                children: (0, r.jsx)(p.A, {
                    user: i
                })
            }), (0, r.jsx)("div", {
                className: Y.eg,
                children: (0, r.jsx)(m.Text, {
                    variant: "text-sm/medium",
                    children: (0, r.jsxs)("div", {
                        className: Y.VW,
                        children: [(0, r.jsx)(m.gyj, {
                            name: L.Ay.getName(l.guildId, null, i),
                            colorString: null != (n = l.colorString) ? n : null,
                            colorStrings: o,
                            className: Y.bc
                        }), (0, r.jsx)(O.Ay, {
                            primaryGuild: null == i ? void 0 : i.primaryGuild,
                            userId: null == i ? void 0 : i.id,
                            contextGuildId: l.guildId,
                            containerClassName: Y.Dz
                        })]
                    })
                })
            }), (0, r.jsx)("div", {
                className: Y.Br,
                children: (0, r.jsx)(m.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    tag: "span",
                    children: R.Ay.getUserTag(i)
                })
            })]
        })
    });

function W(e) {
    return {
        short: null == e ? null : (0, V.hL)(e, V.wN.JOINED_AT),
        long: new Date(null != e ? e : 0).toLocaleDateString(z.intl.currentLocale, V.wp)
    }
}

function J(e) {
    let {
        member: t,
        showLongDate: n,
        isSortedBy: i
    } = e, [o, a] = l.useState(null);
    l.useEffect(() => {
        a(W(t.joinedAtTimestamp))
    }, [t.joinedAtTimestamp]), (0, f.A)(() => {
        a(W(t.joinedAtTimestamp))
    }, 1e4);
    let s = i ? "text-brand" : "text-default";
    return (null == o ? void 0 : o.short) == null ? null : n ? (0, r.jsx)("div", {
        className: Y.__invalid_joinedAtContainer,
        children: (0, r.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: s,
            children: o.long
        })
    }) : (0, r.jsx)("div", {
        className: Y.__invalid_joinedAtContainer,
        children: (0, r.jsx)(C.m, {
            align: "left",
            __unsupportedReactNodeAsText: o.long,
            children: (0, r.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: s,
                children: o.short
            })
        })
    })
}
let $ = l.memo(function(e) {
        let {
            member: t,
            showLongDate: n,
            isSortedBy: i
        } = e, {
            accountCreationDateShort: o,
            accountCreationDateLong: a
        } = l.useMemo(() => {
            let e = P.default.extractTimestamp(t.userId);
            return {
                accountCreationDateShort: (0, V.hL)(e, V.wN.ACCOUNT_AGE),
                accountCreationDateLong: new Date(e).toLocaleDateString(z.intl.currentLocale, V.OA)
            }
        }, [t.userId]), s = i ? "text-brand" : "text-default";
        return n ? (0, r.jsx)(m.Text, {
            variant: "text-sm/medium",
            color: s,
            children: a
        }) : (0, r.jsx)(C.m, {
            align: "left",
            __unsupportedReactNodeAsText: a,
            children: (0, r.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: s,
                children: o
            })
        })
    }),
    ee = l.memo(function(e) {
        let {
            member: t,
            user: n,
            highestRole: i,
            isHoldingAdvancedInfoKey: a,
            onOpenModerationMenu: s,
            onOpenMemberView: d,
            compact: p,
            hasModViewPanelAccess: f
        } = e, b = (0, u.bG)([A.A, w.A], () => A.A.can(B.xBc.MANAGE_GUILD, w.A.getGuild(t.guildId)), [t.guildId]), {
            selectedUserIds: j,
            addUsers: g,
            removeUser: h
        } = (0, k.A)(t.guildId), x = (0, M.vA)(t.guildId), y = (0, M.O6)(t.guildId, x, t.userId), O = (0, u.bG)([I.A], () => {
            var e;
            return null != (e = I.A.getSearchStateByGuildId(t.guildId).selectedSort) ? e : E.mF.ORDER_BY_UNSPECIFIED
        }, [t.guildId], c()), v = l.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != t && y && (j.has(t.userId) ? h(t.userId) : g([t.userId]))
        }, [g, y, t, h, j]), _ = O === E.mF.ORDER_BY_GUILD_JOINED_AT_ASC, H = O === E.mF.ORDER_BY_USER_ID_ASC || O === E.mF.ORDER_BY_USER_ID_DESC;
        return (0, r.jsxs)(r.Fragment, {
            children: [x && (0, r.jsx)("td", {
                children: (0, r.jsx)(C.m, {
                    shouldShow: !y,
                    ariaHidden: y,
                    text: z.intl.string(z.t["Se4c7+"]),
                    children: (0, r.jsx)(m.DUT, {
                        onClick: v,
                        children: (0, r.jsx)(m.P7L, {
                            checked: j.has(t.userId),
                            disabled: !y
                        })
                    })
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.QB, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)(X, {
                    member: t,
                    user: n
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.qp, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)(J, {
                    showLongDate: a,
                    member: t,
                    isSortedBy: _
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.qp, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)($, {
                    showLongDate: a,
                    member: t,
                    isSortedBy: H
                })
            }), b && (0, r.jsx)("td", {
                className: o()(Y.qp, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)(Z.Ay, {
                    userId: t.userId,
                    guildId: t.guildId
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.QB, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)(Q, {
                    member: t,
                    highestRole: i
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.qp, {
                    [Y.oE]: p
                }),
                children: (0, r.jsx)(K, {
                    member: t
                })
            }), (0, r.jsx)("td", {
                className: o()(Y.OL, {
                    [Y.oE]: p
                }),
                children: (0, r.jsxs)("div", {
                    className: Y.$E,
                    children: [(0, r.jsx)(C.m, {
                        asContainer: !0,
                        text: f ? z.intl.string(z.t.nHfkf4) : z.intl.string(z.t.uTre2y),
                        children: (0, r.jsx)(m.DUT, {
                            onClick: d,
                            className: Y.x6,
                            children: f ? (0, r.jsx)(N.A, {
                                width: et,
                                height: et
                            }) : (0, r.jsx)(m.nys, {
                                size: "custom",
                                color: "currentColor",
                                width: et,
                                height: et
                            })
                        })
                    }), (0, r.jsx)(C.m, {
                        asContainer: !0,
                        text: z.intl.string(z.t.x8Nn4M),
                        children: (0, r.jsx)(m.DUT, {
                            onClick: s,
                            className: Y.x6,
                            children: (0, r.jsx)(m.FHP, {
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
    en = ["sourceInviteCode", "joinSourceType", "inviterId", "integrationType", "joinedAt", "joinedAtTimestamp"],
    er = l.memo(function(e) {
        let {
            userId: t,
            guildId: n,
            style: i,
            rowSelected: s,
            isLoading: d = !1,
            isHoldingAdvancedInfoKey: C = !1,
            compact: m = !1
        } = e, {
            analyticsLocations: p
        } = (0, b.Ay)(), f = (0, u.bG)([H.Ay], () => H.Ay.getGuildSidebarState(n), [n]), j = (null == f ? void 0 : f.details.userId) === t, g = (0, u.bG)([I.A], () => I.A.getEnhancedMember(n, t), [n, t]), h = (0, U.YH)(g), O = (0, u.bG)([S.default], () => S.default.getUser(t), [t]), v = (0, y.q)(n), _ = (0, U.UY)(null != g ? g : void 0), w = l.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), _(e)
        }, [_]), A = l.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != g && (0, U.Ko)(g, p)
        }, [g, p]), D = l.useCallback(e => {
            e.stopPropagation(), e.preventDefault(), null != g && (v ? (0, x.z)(g.guildId, g.userId, G.VV.MEMBER_SAFETY, {
                modViewPanel: q.g.INFO
            }) : (0, U.Ko)(g, p))
        }, [g, p, v]), N = l.useCallback((e, t) => c()((0, a.omit)(e, en), (0, a.omit)(t, en)), []);
        return null == g ? null : (0, r.jsx)(T.A, {
            role: "row",
            value: g,
            style: i,
            className: o()(Y.yF, Y.iA, s && Y.wH, j && Y.qb, d && Y.Lq),
            equalityFn: N,
            onClick: A,
            onContextMenu: w,
            children: (0, r.jsx)(ee, {
                member: g,
                user: O,
                highestRole: h,
                isHoldingAdvancedInfoKey: C,
                onOpenModerationMenu: w,
                onOpenMemberView: D,
                compact: m,
                hasModViewPanelAccess: v
            })
        })
    })