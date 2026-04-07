/** chunk id: 320165 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(459192),
    d = n(990078),
    c = n(397927),
    u = n(387755),
    _ = n(945830),
    h = n(47167),
    m = n(713654),
    f = n(461678),
    p = n(95550),
    g = n(95701),
    A = n(734057),
    x = n(383501),
    I = n(994500),
    E = n(543465),
    b = n(287809),
    v = n(810412),
    S = n(914853),
    C = n(589051),
    y = n(129537),
    T = n(578093),
    N = n(145567),
    w = n(922611),
    L = n(201479),
    j = n(691761),
    O = n(256688),
    P = n(652215),
    R = n(895867),
    D = n(985018),
    k = n(580884);

function M(e) {
    return null != e && (e.isDM() || e.isMultiUserDM())
}

function G(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: l
    } = e, s = a.useRef(null);
    return t?.id == null ? null : (0, i.jsx)(c.YNO, {
        targetElementRef: s,
        shouldShow: n,
        animation: c.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: l,
        renderPopout: e => (0, i.jsx)(_.A, {
            ...e,
            channel: t,
            onJump: () => {
                (0, v.YX)(P.uss.TEXT_CHAT_V3, {
                    type: v.Z5.TEXT_CHAT,
                    value: v.IP.PANEL_OPENED,
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
                ref: s,
                children: (0, i.jsx)(d.m, {
                    text: D.intl.string(D.t["mp1N/2"]),
                    "aria-label": D.intl.string(D.t["mp1N/2"]),
                    children: (0, i.jsx)(c.K0, {
                        ...n,
                        icon: c.tsw,
                        "aria-label": D.intl.string(D.t["mp1N/2"]),
                        size: "sm",
                        variant: "icon-only",
                        onClick: r
                    })
                })
            })
        }
    })
}

function z(e) {
    let {
        channel: t
    } = e, n = a.useRef(null), r = t?.id ?? null, l = t?.guild_id != null, [o, u] = (0, s.yK)([E.Ay], () => l && null != r && null != t ? [E.Ay.isChannelMuted(t.getGuildId(), t.id), E.Ay.resolvedMessageNotifications(t)] : [!1, P.orn.ALL_MESSAGES], [t, r, l]), [_, h] = a.useState(!1), m = a.useCallback(() => {
        h(e => !e), (0, v.YX)(P.uss.TEXT_CHAT_V3, {
            type: v.Z5.TEXT_CHAT,
            value: v.IP.SETTINGS_OPENED,
            secondaryValue: "notification_settings"
        })
    }, []), p = D.intl.string(D.t.h850Ss), g = o || u !== P.orn.ALL_MESSAGES ? c.a_I : c.XFE;
    return l && null != t ? (0, i.jsx)(c.YNO, {
        targetElementRef: n,
        shouldShow: _,
        animation: c.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => h(!1),
        renderPopout: e => (0, i.jsx)(f.A, {
            ...e,
            channel: t,
            navId: "overlay-channel-context",
            label: D.intl.string(D.t.Xm41aV)
        }),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t,
                ...a
            } = e;
            return (0, i.jsx)("div", {
                ref: n,
                children: (0, i.jsx)(d.m, {
                    text: p,
                    "aria-label": p,
                    children: (0, i.jsx)(c.K0, {
                        ...a,
                        icon: g,
                        "aria-label": p,
                        size: "sm",
                        variant: "icon-only",
                        onClick: m
                    })
                })
            })
        }
    }) : null
}

function U(e) {
    let {
        channel: t,
        onStartPrivateCall: n,
        pinsOpen: a,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: l
    } = e;
    return M(t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.m, {
            text: D.intl.string(D.t.JJogjm),
            "aria-label": D.intl.string(D.t.JJogjm),
            children: (0, i.jsx)(c.K0, {
                icon: c._jp,
                "aria-label": D.intl.string(D.t.JJogjm),
                size: "sm",
                variant: "icon-only",
                onClick: () => n(!1)
            })
        }), (0, i.jsx)(G, {
            channel: t,
            pinsOpen: a,
            onTogglePinsPopout: r,
            onRequestClosePinsPopout: l
        }), t.isMultiUserDM() ? (0, i.jsx)(d.m, {
            text: D.intl.string(D.t["LR+Ptf"]),
            "aria-label": D.intl.string(D.t["LR+Ptf"]),
            children: (0, i.jsx)(c.K0, {
                icon: c.DpX,
                "aria-label": D.intl.string(D.t["LR+Ptf"]),
                size: "sm",
                variant: "icon-only",
                onClick: () => {
                    (0, v.YX)(P.uss.TEXT_CHAT_V3, {
                        type: v.Z5.INVITE,
                        value: v.IP.PANEL_OPENED,
                        secondaryValue: "add_members"
                    }), (0, p.Jz)({
                        channel: t,
                        onComplete: e => {
                            (0, N.D$)({
                                target: {
                                    kind: N.bB.CHANNEL,
                                    channelId: e,
                                    guildId: null,
                                    messageId: null
                                },
                                source: O.B.MANUAL,
                                widgetType: P.uss.TEXT_CHAT_V3
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
        onTogglePinsPopout: a,
        onRequestClosePinsPopout: r
    } = e;
    return null == t || t.isPrivate() ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(z, {
            channel: t
        }), (0, i.jsx)(G, {
            channel: t,
            pinsOpen: n,
            onTogglePinsPopout: a,
            onRequestClosePinsPopout: r
        })]
    })
}

function F(e) {
    let {
        channel: t,
        user: n,
        guild: r,
        title: _,
        dragStart: f,
        dragging: p
    } = e, {
        hasFriendList: E
    } = (0, C.M8)("TextChatHeader"), [G, z] = a.useState(!1), F = (0, s.bG)([x.A], () => x.A.getChannelId(), []), W = t?.isDM() ? n?.id ?? null : null, H = (0, j.p)(W), B = F === t?.id, Y = D.intl.string(R.default.tYPfF2), X = (0, s.bG)([A.A], () => t?.isThread() && null != t.parent_id ? A.A.getChannel(t.parent_id) : null, [t]), Z = (0, s.bG)([b.default, I.A], () => null != X ? (0, h.m1)(X, b.default, I.A) : null, [X]), K = (0, s.bG)([], () => {
        var e, i;
        return e = t, i = n, null == e ? null : e.isDM() && null != i ? I.A.isFriend(i.id) ? {
            tab: S.x.FRIENDS,
            targetId: i.id
        } : null : (0, g.ke)(e.type) ? {
            tab: S.x.MESSAGES,
            targetId: e.id
        } : (0, g.ay)(e.type) ? {
            tab: S.x.VOICE,
            targetId: e.id
        } : null
    }, [t, n]), J = a.useCallback(e => {
        M(t) && ((0, v.YX)(P.uss.TEXT_CHAT_V3, {
            type: v.Z5.CALL_BUTTON,
            value: v.IP.ENABLED,
            secondaryValue: e ? "video" : "voice"
        }), u.A.call(t.id, e, !0, t.isDM() ? t.getRecipientId() : null))
    }, [t]), Q = a.useCallback(() => {
        t?.id != null && z(e => {
            let t = !e;
            return t && (0, v.YX)(P.uss.TEXT_CHAT_V3, {
                type: v.Z5.TEXT_CHAT,
                value: v.IP.PANEL_OPENED,
                secondaryValue: "pins"
            }), t
        })
    }, [t?.id]);
    return (0, i.jsxs)("div", {
        className: l()(k.XV, p && k.cB),
        onMouseDown: e => {
            0 === e.button && f(y.P.MOVE, e.clientX, e.clientY)
        },
        children: [(0, i.jsxs)("div", {
            className: k.LD,
            children: [(0, i.jsx)("div", {
                className: k.gr,
                children: (0, i.jsx)(L.J, {
                    application: H,
                    fallback: (0, i.jsx)(w.g, {
                        channel: null,
                        user: n,
                        guild: r,
                        size: w.c.SIZE_24
                    })
                })
            }), (0, i.jsxs)("div", {
                className: k.G1,
                children: [(() => {
                    if (null != W) return null;
                    let e = (0, m.gU)(t, r);
                    return null != e ? (0, i.jsx)(e, {
                        className: k.gr,
                        size: "xs"
                    }) : null
                })(), null != X && null != Z ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.DUT, {
                        className: k.oH,
                        onMouseDown: e => e.stopPropagation(),
                        onClick: e => {
                            e.stopPropagation(), (0, N.D$)({
                                target: {
                                    kind: N.bB.CHANNEL,
                                    channelId: X.id,
                                    guildId: X.getGuildId?.() ?? X.guild_id ?? null,
                                    messageId: null
                                },
                                source: O.B.MANUAL,
                                widgetType: P.uss.TEXT_CHAT_V3
                            })
                        },
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: Z
                        })
                    }), (0, i.jsx)(c._BQ, {
                        className: k.ln,
                        size: "xs",
                        color: c.LU0.colors.TEXT_MUTED
                    })]
                }) : null, (0, i.jsxs)(c.Text, {
                    className: k.DD,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: [_, H?.name != null && "" !== H.name ? (0, i.jsx)(c.Text, {
                        tag: "span",
                        className: k.X7,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: D.intl.formatToPlainString(R.default.x1k3cO, {
                            gameName: H.name
                        })
                    }) : null]
                })]
            })]
        }), (0, i.jsxs)("div", {
            className: k.IE,
            onMouseDown: e => {
                e.stopPropagation()
            },
            children: [(0, i.jsx)(U, {
                channel: t,
                onStartPrivateCall: J,
                pinsOpen: G,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => z(!1)
            }), (0, i.jsx)(V, {
                channel: t,
                pinsOpen: G,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => z(!1)
            }), E && null != K && (0, i.jsx)(T.j, {
                tab: K.tab,
                targetId: K.targetId,
                widgetType: P.uss.TEXT_CHAT_V3,
                shouldStopPropagation: !1
            }), t?.id != null && (B ? (0, i.jsx)(d.m, {
                text: Y,
                "aria-label": Y,
                children: (0, i.jsx)(c.K0, {
                    icon: c.gR,
                    "aria-label": Y,
                    size: "sm",
                    variant: "icon-only",
                    onClick: () => {
                        (0, v.YX)(P.uss.TEXT_CHAT_V3, {
                            type: v.Z5.TEXT_CHAT,
                            value: v.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "minimize_voice"
                        }), (0, N.S$)({
                            minimized: !0
                        })
                    }
                })
            }) : (0, i.jsx)(o.u, {
                title: D.intl.string(R.default.ERApc4),
                body: D.intl.string(R.default.PBVXVW),
                children: (0, i.jsx)(c.K0, {
                    icon: c.PGe,
                    "aria-label": D.intl.string(R.default.ERApc4),
                    size: "sm",
                    variant: "icon-only",
                    onClick: e => {
                        e.shiftKey ? ((0, v.YX)(P.uss.TEXT_CHAT_V3, {
                            type: v.Z5.TEXT_CHAT,
                            value: v.IP.CLOSED_TEXT_CHAT,
                            secondaryValue: "close_all"
                        }), (0, N.$p)()) : (0, N.lu)({
                            channelId: t.id,
                            widgetType: P.uss.TEXT_CHAT_V3,
                            secondaryValue: "close_button"
                        })
                    }
                })
            }))]
        })]
    })
}