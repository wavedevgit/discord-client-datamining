/** chunk id: 320165 params = (module,exports,require) **/
n.d(t, {
    A: () => z
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(459192),
    u = n(990078),
    d = n(397927),
    c = n(387755),
    h = n(945830),
    g = n(47167),
    m = n(713654),
    f = n(461678),
    A = n(95550),
    I = n(95701),
    E = n(734057),
    p = n(383501),
    _ = n(994500),
    S = n(543465),
    x = n(287809),
    T = n(810412),
    C = n(914853),
    N = n(589051),
    v = n(129537),
    y = n(578093),
    M = n(145567),
    b = n(922611),
    R = n(201479),
    D = n(691761),
    O = n(34307),
    w = n(652215),
    j = n(499214),
    k = n(985018),
    U = n(657956);

function L(e) {
    return null != e && (e.isDM() || e.isMultiUserDM())
}

function G(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: l,
        onRequestClosePinsPopout: s
    } = e, a = r.useRef(null);
    return t?.id == null ? null : (0, i.jsx)(d.YNO, {
        targetElementRef: a,
        shouldShow: n,
        animation: d.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: s,
        renderPopout: e => (0, i.jsx)(h.A, {
            ...e,
            channel: t,
            onJump: () => {
                (0, T.YX)(w.uss.TEXT_CHAT_V3, {
                    type: T.Z5.TEXT_CHAT,
                    value: T.IP.PANEL_OPENED,
                    secondaryValue: "jumped"
                })
            }
        }),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t,
                ...n
            } = e;
            return (0, i.jsx)("div", {
                ref: a,
                children: (0, i.jsx)(u.m, {
                    text: k.intl.string(k.t["mp1N/2"]),
                    "aria-label": k.intl.string(k.t["mp1N/2"]),
                    children: (0, i.jsx)(d.K0, {
                        ...n,
                        icon: d.tsw,
                        "aria-label": k.intl.string(k.t["mp1N/2"]),
                        size: "sm",
                        variant: "icon-only",
                        onClick: l
                    })
                })
            })
        }
    })
}

function P(e) {
    let {
        channel: t
    } = e, n = r.useRef(null), l = t?.id ?? null, s = t?.guild_id != null, [o, c] = (0, a.yK)([S.Ay], () => s && null != l && null != t ? [S.Ay.isChannelMuted(t.getGuildId(), t.id), S.Ay.resolvedMessageNotifications(t)] : [!1, w.orn.ALL_MESSAGES], [t, l, s]), [h, g] = r.useState(!1), m = r.useCallback(() => {
        g(e => !e), (0, T.YX)(w.uss.TEXT_CHAT_V3, {
            type: T.Z5.TEXT_CHAT,
            value: T.IP.SETTINGS_OPENED,
            secondaryValue: "notification_settings"
        })
    }, []), A = k.intl.string(k.t.h850Ss), I = o || c !== w.orn.ALL_MESSAGES ? d.a_I : d.XFE;
    return s && null != t ? (0, i.jsx)(d.YNO, {
        targetElementRef: n,
        shouldShow: h,
        animation: d.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => g(!1),
        renderPopout: e => (0, i.jsx)(f.A, {
            ...e,
            channel: t,
            navId: "overlay-channel-context",
            label: k.intl.string(k.t.Xm41aV)
        }),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t,
                ...r
            } = e;
            return (0, i.jsx)("div", {
                ref: n,
                children: (0, i.jsx)(u.m, {
                    text: A,
                    "aria-label": A,
                    children: (0, i.jsx)(d.K0, {
                        ...r,
                        icon: I,
                        "aria-label": A,
                        size: "sm",
                        variant: "icon-only",
                        onClick: m
                    })
                })
            })
        }
    }) : null
}

function F(e) {
    let {
        channel: t,
        onStartPrivateCall: n,
        pinsOpen: r,
        onTogglePinsPopout: l,
        onRequestClosePinsPopout: s
    } = e;
    return L(t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.m, {
            text: k.intl.string(k.t.JJogjm),
            "aria-label": k.intl.string(k.t.JJogjm),
            children: (0, i.jsx)(d.K0, {
                icon: d._jp,
                "aria-label": k.intl.string(k.t.JJogjm),
                size: "sm",
                variant: "icon-only",
                onClick: () => n(!1)
            })
        }), (0, i.jsx)(G, {
            channel: t,
            pinsOpen: r,
            onTogglePinsPopout: l,
            onRequestClosePinsPopout: s
        }), t.isMultiUserDM() ? (0, i.jsx)(u.m, {
            text: k.intl.string(k.t["LR+Ptf"]),
            "aria-label": k.intl.string(k.t["LR+Ptf"]),
            children: (0, i.jsx)(d.K0, {
                icon: d.DpX,
                "aria-label": k.intl.string(k.t["LR+Ptf"]),
                size: "sm",
                variant: "icon-only",
                onClick: () => {
                    (0, T.YX)(w.uss.TEXT_CHAT_V3, {
                        type: T.Z5.INVITE,
                        value: T.IP.PANEL_OPENED,
                        secondaryValue: "add_members"
                    }), (0, A.Jz)({
                        channel: t,
                        onComplete: e => {
                            (0, M.D$)({
                                target: {
                                    kind: M.bB.CHANNEL,
                                    channelId: e,
                                    guildId: null,
                                    messageId: null
                                },
                                source: O.B.MANUAL,
                                widgetType: w.uss.TEXT_CHAT_V3
                            })
                        }
                    })
                }
            })
        }) : null]
    }) : null
}

function V(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: l
    } = e;
    return null == t || t.isPrivate() ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(P, {
            channel: t
        }), (0, i.jsx)(G, {
            channel: t,
            pinsOpen: n,
            onTogglePinsPopout: r,
            onRequestClosePinsPopout: l
        })]
    })
}

function z(e) {
    let {
        channel: t,
        user: n,
        guild: l,
        title: h,
        dragStart: f,
        dragging: A
    } = e, {
        hasFriendList: S
    } = (0, N.M8)("TextChatHeader"), [G, P] = r.useState(!1), z = (0, a.bG)([p.A], () => p.A.getChannelId(), []), H = t?.isDM() ? n?.id ?? null : null, Y = (0, D.p)(H), W = z === t?.id, B = k.intl.string(j.default.tYPfF2), Z = (0, a.bG)([E.A], () => t?.isThread() && null != t.parent_id ? E.A.getChannel(t.parent_id) : null, [t]), X = (0, a.bG)([x.default, _.A], () => null != Z ? (0, g.m1)(Z, x.default, _.A) : null, [Z]), K = (0, a.bG)([], () => {
        var e, i;
        return e = t, i = n, null == e ? null : e.isDM() && null != i ? _.A.isFriend(i.id) ? {
            tab: C.x.FRIENDS,
            targetId: i.id
        } : null : (0, I.ke)(e.type) ? {
            tab: C.x.MESSAGES,
            targetId: e.id
        } : (0, I.ay)(e.type) ? {
            tab: C.x.VOICE,
            targetId: e.id
        } : null
    }, [t, n]), $ = r.useCallback(e => {
        L(t) && ((0, T.YX)(w.uss.TEXT_CHAT_V3, {
            type: T.Z5.CALL_BUTTON,
            value: T.IP.ENABLED,
            secondaryValue: e ? "video" : "voice"
        }), c.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null))
    }, [t]), q = r.useCallback(() => {
        t?.id != null && P(e => {
            let t = !e;
            return t && (0, T.YX)(w.uss.TEXT_CHAT_V3, {
                type: T.Z5.TEXT_CHAT,
                value: T.IP.PANEL_OPENED,
                secondaryValue: "pins"
            }), t
        })
    }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: s()(U.XV, A && U.cB),
        onMouseDown: e => {
            0 === e.button && f(v.P.MOVE, e.clientX, e.clientY)
        },
        children: [(0, i.jsxs)("div", {
            className: U.LD,
            children: [(0, i.jsx)("div", {
                className: U.gr,
                children: (0, i.jsx)(R.J, {
                    application: Y,
                    fallback: (0, i.jsx)(b.g, {
                        channel: null,
                        user: n,
                        guild: l,
                        size: b.c.SIZE_24
                    })
                })
            }), (0, i.jsxs)("div", {
                className: U.G1,
                children: [(() => {
                    if (null != H) return null;
                    let e = (0, m.gU)(t, l);
                    return null != e ? (0, i.jsx)(e, {
                        className: U.gr,
                        size: "xs"
                    }) : null
                })(), null != Z && null != X ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.DUT, {
                        className: U.oH,
                        onMouseDown: e => e.stopPropagation(),
                        onClick: e => {
                            e.stopPropagation(), (0, M.D$)({
                                target: {
                                    kind: M.bB.CHANNEL,
                                    channelId: Z.id,
                                    guildId: Z.getGuildId?.() ?? Z.guild_id ?? null,
                                    messageId: null
                                },
                                source: O.B.MANUAL,
                                widgetType: w.uss.TEXT_CHAT_V3
                            })
                        },
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: X
                        })
                    }), (0, i.jsx)(d._BQ, {
                        className: U.ln,
                        size: "xs",
                        color: d.LU0.colors.TEXT_MUTED
                    })]
                }) : null, (0, i.jsxs)(d.Text, {
                    className: U.DD,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: [h, Y?.name != null && "" !== Y.name ? (0, i.jsx)(d.Text, {
                        tag: "span",
                        className: U.X7,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: k.intl.formatToPlainString(j.default.x1k3cO, {
                            gameName: Y.name
                        })
                    }) : null]
                })]
            })]
        }), (0, i.jsxs)("div", {
            className: U.IE,
            onMouseDown: e => {
                e.stopPropagation()
            },
            children: [(0, i.jsx)(F, {
                channel: t,
                onStartPrivateCall: $,
                pinsOpen: G,
                onTogglePinsPopout: q,
                onRequestClosePinsPopout: () => P(!1)
            }), (0, i.jsx)(V, {
                channel: t,
                pinsOpen: G,
                onTogglePinsPopout: q,
                onRequestClosePinsPopout: () => P(!1)
            }), S && null != K && (0, i.jsx)(y.j, {
                tab: K.tab,
                targetId: K.targetId,
                widgetType: w.uss.TEXT_CHAT_V3,
                shouldStopPropagation: !1
            }), t?.id != null && (W ? (0, i.jsx)(u.m, {
                text: B,
                "aria-label": B,
                children: (0, i.jsx)(d.K0, {
                    icon: d.gR,
                    "aria-label": B,
                    size: "sm",
                    variant: "icon-only",
                    onClick: () => {
                        (0, T.YX)(w.uss.TEXT_CHAT_V3, {
                            type: T.Z5.TEXT_CHAT,
                            value: T.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "minimize_voice"
                        }), (0, M.S$)({
                            minimized: !0
                        })
                    }
                })
            }) : (0, i.jsx)(o.u, {
                title: k.intl.string(j.default.ERApc4),
                body: k.intl.string(j.default.PBVXVW),
                children: (0, i.jsx)(d.K0, {
                    icon: d.PGe,
                    "aria-label": k.intl.string(j.default.ERApc4),
                    size: "sm",
                    variant: "icon-only",
                    onClick: e => {
                        e.shiftKey ? ((0, T.YX)(w.uss.TEXT_CHAT_V3, {
                            type: T.Z5.TEXT_CHAT,
                            value: T.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "close_all"
                        }), (0, M.$p)()) : (0, M.lu)({
                            channelId: t.id,
                            widgetType: w.uss.TEXT_CHAT_V3,
                            secondaryValue: "close_button"
                        })
                    }
                })
            }))]
        })]
    })
}