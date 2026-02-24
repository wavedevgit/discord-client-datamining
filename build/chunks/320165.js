/** chunk id: 320165, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(459192),
    u = n(990078),
    d = n(397927),
    c = n(387755),
    h = n(945830),
    m = n(47167),
    g = n(713654),
    p = n(461678),
    A = n(95550),
    f = n(95701),
    x = n(734057),
    E = n(383501),
    S = n(994500),
    v = n(543465),
    C = n(287809),
    I = n(810412),
    T = n(914853),
    _ = n(589051),
    y = n(129537),
    j = n(578093),
    b = n(145567),
    w = n(922611),
    O = n(201479),
    N = n(691761),
    M = n(34307),
    R = n(652215),
    k = n(895867),
    L = n(985018),
    D = n(532165);

function z(e) {
    return null != e && (e.isDM() || e.isMultiUserDM())
}

function P(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: s
    } = e, a = l.useRef(null);
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
                (0, I.YX)(R.uss.TEXT_CHAT_V3, {
                    type: I.Z5.TEXT_CHAT,
                    value: I.IP.PANEL_OPENED,
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
                    text: L.intl.string(L.t["mp1N/2"]),
                    "aria-label": L.intl.string(L.t["mp1N/2"]),
                    children: (0, i.jsx)(d.K0, {
                        ...n,
                        icon: d.tsw,
                        "aria-label": L.intl.string(L.t["mp1N/2"]),
                        size: "sm",
                        variant: "icon-only",
                        onClick: r
                    })
                })
            })
        }
    })
}

function G(e) {
    let {
        channel: t
    } = e, n = l.useRef(null), r = t?.id ?? null, s = t?.guild_id != null, [o, c] = (0, a.yK)([v.Ay], () => s && null != r && null != t ? [v.Ay.isChannelMuted(t.getGuildId(), t.id), v.Ay.resolvedMessageNotifications(t)] : [!1, R.orn.ALL_MESSAGES], [t, r, s]), [h, m] = l.useState(!1), g = l.useCallback(() => {
        m(e => !e), (0, I.YX)(R.uss.TEXT_CHAT_V3, {
            type: I.Z5.TEXT_CHAT,
            value: I.IP.SETTINGS_OPENED,
            secondaryValue: "notification_settings"
        })
    }, []), A = L.intl.string(L.t.h850Ss), f = o || c !== R.orn.ALL_MESSAGES ? d.a_I : d.XFE;
    return s && null != t ? (0, i.jsx)(d.YNO, {
        targetElementRef: n,
        shouldShow: h,
        animation: d.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => m(!1),
        renderPopout: e => (0, i.jsx)(p.A, {
            ...e,
            channel: t,
            navId: "overlay-channel-context",
            label: L.intl.string(L.t.Xm41aV)
        }),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t,
                ...l
            } = e;
            return (0, i.jsx)("div", {
                ref: n,
                children: (0, i.jsx)(u.m, {
                    text: A,
                    "aria-label": A,
                    children: (0, i.jsx)(d.K0, {
                        ...l,
                        icon: f,
                        "aria-label": A,
                        size: "sm",
                        variant: "icon-only",
                        onClick: g
                    })
                })
            })
        }
    }) : null
}

function V(e) {
    let {
        channel: t,
        onStartPrivateCall: n,
        pinsOpen: l,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: s
    } = e;
    return z(t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.m, {
            text: L.intl.string(L.t.JJogjm),
            "aria-label": L.intl.string(L.t.JJogjm),
            children: (0, i.jsx)(d.K0, {
                icon: d._jp,
                "aria-label": L.intl.string(L.t.JJogjm),
                size: "sm",
                variant: "icon-only",
                onClick: () => n(!1)
            })
        }), (0, i.jsx)(P, {
            channel: t,
            pinsOpen: l,
            onTogglePinsPopout: r,
            onRequestClosePinsPopout: s
        }), t.isMultiUserDM() ? (0, i.jsx)(u.m, {
            text: L.intl.string(L.t["LR+Ptf"]),
            "aria-label": L.intl.string(L.t["LR+Ptf"]),
            children: (0, i.jsx)(d.K0, {
                icon: d.DpX,
                "aria-label": L.intl.string(L.t["LR+Ptf"]),
                size: "sm",
                variant: "icon-only",
                onClick: () => {
                    (0, I.YX)(R.uss.TEXT_CHAT_V3, {
                        type: I.Z5.INVITE,
                        value: I.IP.PANEL_OPENED,
                        secondaryValue: "add_members"
                    }), (0, A.Jz)({
                        channel: t,
                        onComplete: e => {
                            (0, b.D$)({
                                target: {
                                    kind: b.bB.CHANNEL,
                                    channelId: e,
                                    guildId: null,
                                    messageId: null
                                },
                                source: M.B.MANUAL,
                                widgetType: R.uss.TEXT_CHAT_V3
                            })
                        }
                    })
                }
            })
        }) : null]
    }) : null
}

function U(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: l,
        onRequestClosePinsPopout: r
    } = e;
    return null == t || t.isPrivate() ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(G, {
            channel: t
        }), (0, i.jsx)(P, {
            channel: t,
            pinsOpen: n,
            onTogglePinsPopout: l,
            onRequestClosePinsPopout: r
        })]
    })
}

function H(e) {
    let {
        channel: t,
        user: n,
        guild: r,
        title: h,
        dragStart: p,
        dragging: A
    } = e, {
        hasFriendList: v
    } = (0, _.M8)("TextChatHeader"), [P, G] = l.useState(!1), H = (0, a.bG)([E.A], () => E.A.getChannelId(), []), Y = t?.isDM() ? n?.id ?? null : null, F = (0, N.p)(Y), Z = H === t?.id, W = L.intl.string(k.default.tYPfF2), X = (0, a.bG)([x.A], () => t?.isThread() && null != t.parent_id ? x.A.getChannel(t.parent_id) : null, [t]), K = (0, a.bG)([C.default, S.A], () => null != X ? (0, m.m1)(X, C.default, S.A) : null, [X]), B = (0, a.bG)([], () => {
        var e, i;
        return e = t, i = n, null == e ? null : e.isDM() && null != i ? S.A.isFriend(i.id) ? {
            tab: T.x.FRIENDS,
            targetId: i.id
        } : null : (0, f.ke)(e.type) ? {
            tab: T.x.MESSAGES,
            targetId: e.id
        } : (0, f.ay)(e.type) ? {
            tab: T.x.VOICE,
            targetId: e.id
        } : null
    }, [t, n]), q = l.useCallback(e => {
        z(t) && ((0, I.YX)(R.uss.TEXT_CHAT_V3, {
            type: I.Z5.CALL_BUTTON,
            value: I.IP.ENABLED,
            secondaryValue: e ? "video" : "voice"
        }), c.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null))
    }, [t]), Q = l.useCallback(() => {
        t?.id != null && G(e => {
            let t = !e;
            return t && (0, I.YX)(R.uss.TEXT_CHAT_V3, {
                type: I.Z5.TEXT_CHAT,
                value: I.IP.PANEL_OPENED,
                secondaryValue: "pins"
            }), t
        })
    }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: s()(D.XV, A && D.cB),
        onMouseDown: e => {
            0 === e.button && p(y.P.MOVE, e.clientX, e.clientY)
        },
        children: [(0, i.jsxs)("div", {
            className: D.LD,
            children: [(0, i.jsx)("div", {
                className: D.gr,
                children: (0, i.jsx)(O.J, {
                    application: F,
                    fallback: (0, i.jsx)(w.g, {
                        channel: null,
                        user: n,
                        guild: r,
                        size: w.c.SIZE_24
                    })
                })
            }), (0, i.jsxs)("div", {
                className: D.G1,
                children: [(() => {
                    if (null != Y) return null;
                    let e = (0, g.gU)(t, r);
                    return null != e ? (0, i.jsx)(e, {
                        className: D.gr,
                        size: "xs"
                    }) : null
                })(), null != X && null != K ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.DUT, {
                        className: D.oH,
                        onMouseDown: e => e.stopPropagation(),
                        onClick: e => {
                            e.stopPropagation(), (0, b.D$)({
                                target: {
                                    kind: b.bB.CHANNEL,
                                    channelId: X.id,
                                    guildId: X.getGuildId?.() ?? X.guild_id ?? null,
                                    messageId: null
                                },
                                source: M.B.MANUAL,
                                widgetType: R.uss.TEXT_CHAT_V3
                            })
                        },
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: K
                        })
                    }), (0, i.jsx)(d._BQ, {
                        className: D.ln,
                        size: "xs",
                        color: d.LU0.colors.TEXT_MUTED
                    })]
                }) : null, (0, i.jsxs)(d.Text, {
                    className: D.DD,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: [h, F?.name != null && "" !== F.name ? (0, i.jsx)(d.Text, {
                        tag: "span",
                        className: D.X7,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: L.intl.formatToPlainString(k.default.x1k3cO, {
                            gameName: F.name
                        })
                    }) : null]
                })]
            })]
        }), (0, i.jsxs)("div", {
            className: D.IE,
            onMouseDown: e => {
                e.stopPropagation()
            },
            children: [(0, i.jsx)(V, {
                channel: t,
                onStartPrivateCall: q,
                pinsOpen: P,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => G(!1)
            }), (0, i.jsx)(U, {
                channel: t,
                pinsOpen: P,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => G(!1)
            }), v && null != B && (0, i.jsx)(j.j, {
                tab: B.tab,
                targetId: B.targetId,
                widgetType: R.uss.TEXT_CHAT_V3,
                shouldStopPropagation: !1
            }), t?.id != null && (Z ? (0, i.jsx)(u.m, {
                text: W,
                "aria-label": W,
                children: (0, i.jsx)(d.K0, {
                    icon: d.gR,
                    "aria-label": W,
                    size: "sm",
                    variant: "icon-only",
                    onClick: () => {
                        (0, I.YX)(R.uss.TEXT_CHAT_V3, {
                            type: I.Z5.TEXT_CHAT,
                            value: I.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "minimize_voice"
                        }), (0, b.S$)({
                            minimized: !0
                        })
                    }
                })
            }) : (0, i.jsx)(o.u, {
                title: L.intl.string(k.default.ERApc4),
                body: L.intl.string(k.default.PBVXVW),
                children: (0, i.jsx)(d.K0, {
                    icon: d.PGe,
                    "aria-label": L.intl.string(k.default.ERApc4),
                    size: "sm",
                    variant: "icon-only",
                    onClick: e => {
                        e.shiftKey ? ((0, I.YX)(R.uss.TEXT_CHAT_V3, {
                            type: I.Z5.TEXT_CHAT,
                            value: I.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "close_all"
                        }), (0, b.$p)()) : (0, b.lu)({
                            channelId: t.id,
                            widgetType: R.uss.TEXT_CHAT_V3,
                            secondaryValue: "close_button"
                        })
                    }
                })
            }))]
        })]
    })
}