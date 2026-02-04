/** chunk id: 320165, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => F
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(990078),
    u = n(397927),
    c = n(387755),
    d = n(945830),
    h = n(47167),
    p = n(713654),
    f = n(461678),
    g = n(95550),
    m = n(95701),
    A = n(734057),
    y = n(383501),
    O = n(994500),
    v = n(543465),
    b = n(287809),
    E = n(810412),
    _ = n(914853),
    S = n(589051),
    x = n(129537),
    I = n(578093),
    j = n(145567),
    C = n(922611),
    T = n(201479),
    w = n(691761),
    N = n(34307),
    P = n(652215),
    D = n(895867),
    R = n(985018),
    L = n(532165);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function M(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function z(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }
    if (l = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
                l = Object.getOwnPropertyNames(e);
            for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
}

function V(e) {
    return null != e && (e.isDM() || e.isMultiUserDM())
}

function U(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: l,
        onRequestClosePinsPopout: a
    } = e, o = r.useRef(null);
    return (null == t ? void 0 : t.id) == null ? null : (0, i.jsx)(u.YNO, {
        targetElementRef: o,
        shouldShow: n,
        animation: u.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        ignoreModalClicks: !0,
        onRequestClose: a,
        renderPopout: e => (0, i.jsx)(d.A, M(k({}, e), {
            channel: t,
            onJump: () => {}
        })),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t
            } = e, n = z(e, ["onClick"]);
            return (0, i.jsx)("div", {
                ref: o,
                children: (0, i.jsx)(s.m, {
                    text: R.intl.string(R.t["mp1N/2"]),
                    "aria-label": R.intl.string(R.t["mp1N/2"]),
                    children: (0, i.jsx)(u.K0, M(k({}, n), {
                        icon: u.tsw,
                        "aria-label": R.intl.string(R.t["mp1N/2"]),
                        size: "sm",
                        variant: "icon-only",
                        onClick: l
                    }))
                })
            })
        }
    })
}

function G(e) {
    var t;
    let {
        channel: n
    } = e, l = r.useRef(null), a = null != (t = null == n ? void 0 : n.id) ? t : null, c = (null == n ? void 0 : n.guild_id) != null, [d, h] = (0, o.yK)([v.Ay], () => c && null != a && null != n ? [v.Ay.isChannelMuted(n.getGuildId(), n.id), v.Ay.resolvedMessageNotifications(n)] : [!1, P.orn.ALL_MESSAGES], [n, a, c]), [p, g] = r.useState(!1), m = r.useCallback(() => {
        g(e => !e)
    }, []), A = R.intl.string(R.t.h850Ss), y = d || h !== P.orn.ALL_MESSAGES ? u.a_I : u.XFE;
    return c && null != n ? (0, i.jsx)(u.YNO, {
        targetElementRef: l,
        shouldShow: p,
        animation: u.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => g(!1),
        renderPopout: e => (0, i.jsx)(f.A, M(k({}, e), {
            channel: n,
            navId: "overlay-channel-context",
            label: R.intl.string(R.t.Xm41aV)
        })),
        clickTrap: !0,
        children: e => {
            let {
                onClick: t
            } = e, n = z(e, ["onClick"]);
            return (0, i.jsx)("div", {
                ref: l,
                children: (0, i.jsx)(s.m, {
                    text: A,
                    "aria-label": A,
                    children: (0, i.jsx)(u.K0, M(k({}, n), {
                        icon: y,
                        "aria-label": A,
                        size: "sm",
                        variant: "icon-only",
                        onClick: m
                    }))
                })
            })
        }
    }) : null
}

function H(e) {
    let {
        channel: t,
        onStartPrivateCall: n,
        pinsOpen: r,
        onTogglePinsPopout: l,
        onRequestClosePinsPopout: a
    } = e;
    return V(t) ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.m, {
            text: R.intl.string(R.t.JJogjm),
            "aria-label": R.intl.string(R.t.JJogjm),
            children: (0, i.jsx)(u.K0, {
                icon: u._jp,
                "aria-label": R.intl.string(R.t.JJogjm),
                size: "sm",
                variant: "icon-only",
                onClick: () => n(!1)
            })
        }), (0, i.jsx)(U, {
            channel: t,
            pinsOpen: r,
            onTogglePinsPopout: l,
            onRequestClosePinsPopout: a
        }), t.isMultiUserDM() ? (0, i.jsx)(s.m, {
            text: R.intl.string(R.t["LR+Ptf"]),
            "aria-label": R.intl.string(R.t["LR+Ptf"]),
            children: (0, i.jsx)(u.K0, {
                icon: u.DpX,
                "aria-label": R.intl.string(R.t["LR+Ptf"]),
                size: "sm",
                variant: "icon-only",
                onClick: () => {
                    (0, E.YX)(P.uss.TEXT_CHAT_V3, {
                        type: E.Z5.INVITE,
                        value: E.IP.PANEL_OPENED,
                        secondaryValue: "add_members"
                    }), (0, g.Jz)({
                        channel: t,
                        onComplete: e => {
                            (0, j.D$)({
                                target: {
                                    kind: j.bB.CHANNEL,
                                    channelId: e,
                                    guildId: null,
                                    messageId: null
                                },
                                source: N.B.MANUAL,
                                widgetType: P.uss.TEXT_CHAT_V3
                            })
                        }
                    })
                }
            })
        }) : null]
    }) : null
}

function Y(e) {
    let {
        channel: t,
        pinsOpen: n,
        onTogglePinsPopout: r,
        onRequestClosePinsPopout: l
    } = e;
    return null == t || t.isPrivate() ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(G, {
            channel: t
        }), (0, i.jsx)(U, {
            channel: t,
            pinsOpen: n,
            onTogglePinsPopout: r,
            onRequestClosePinsPopout: l
        })]
    })
}

function F(e) {
    var t;
    let {
        channel: n,
        user: l,
        guild: d,
        title: f,
        dragStart: g,
        dragging: v
    } = e, {
        hasFriendList: k
    } = (0, S.M8)("TextChatHeader"), [M, z] = r.useState(!1), U = (0, o.bG)([y.A], () => y.A.getChannelId(), []), G = (null == n ? void 0 : n.isDM()) && null != (t = null == l ? void 0 : l.id) ? t : null, F = (0, w.p)(G), W = U === (null == n ? void 0 : n.id), K = R.intl.string(D.default.tYPfF2), Z = (0, o.bG)([A.A], () => (null == n ? void 0 : n.isThread()) && null != n.parent_id ? A.A.getChannel(n.parent_id) : null, [n]), B = (0, o.bG)([b.default, O.A], () => null != Z ? (0, h.m1)(Z, b.default, O.A) : null, [Z]), X = (0, o.bG)([], () => {
        var e, t;
        return e = n, t = l, null == e ? null : e.isDM() && null != t ? O.A.isFriend(t.id) ? {
            tab: _.x.FRIENDS,
            targetId: t.id
        } : null : (0, m.ke)(e.type) ? {
            tab: _.x.MESSAGES,
            targetId: e.id
        } : (0, m.ay)(e.type) ? {
            tab: _.x.VOICE,
            targetId: e.id
        } : null
    }, [n, l]), J = r.useCallback(e => {
        V(n) && ((0, E.YX)(P.uss.TEXT_CHAT_V3, {
            type: E.Z5.CALL_BUTTON,
            value: E.IP.ENABLED,
            secondaryValue: e ? "video" : "voice"
        }), c.A.call(n.id, e, !0, n.isDM() ? n.getRecipientId() : null))
    }, [n]), Q = r.useCallback(() => {
        (null == n ? void 0 : n.id) != null && z(e => {
            let t = !e;
            return t && (0, E.YX)(P.uss.TEXT_CHAT_V3, {
                type: E.Z5.TEXT_CHAT,
                value: E.IP.PANEL_OPENED,
                secondaryValue: "pins"
            }), t
        })
    }, [null == n ? void 0 : n.id]);
    return (0, i.jsxs)("div", {
        className: a()(L.XV, v && L.cB),
        onMouseDown: e => {
            0 === e.button && g(x.P.MOVE, e.clientX, e.clientY)
        },
        children: [(0, i.jsxs)("div", {
            className: L.LD,
            children: [(0, i.jsx)("div", {
                className: L.gr,
                children: (0, i.jsx)(T.J, {
                    application: F,
                    fallback: (0, i.jsx)(C.g, {
                        channel: null,
                        user: l,
                        guild: d,
                        size: C.c.SIZE_24
                    })
                })
            }), (0, i.jsxs)("div", {
                className: L.G1,
                children: [(() => {
                    if (null != G) return null;
                    let e = (0, p.gU)(n, d);
                    return null != e ? (0, i.jsx)(e, {
                        className: L.gr,
                        size: "xs"
                    }) : null
                })(), null != Z && null != B ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u.DUT, {
                        className: L.oH,
                        onMouseDown: e => e.stopPropagation(),
                        onClick: e => {
                            var t, n, i;
                            e.stopPropagation(), (0, j.D$)({
                                target: {
                                    kind: j.bB.CHANNEL,
                                    channelId: Z.id,
                                    guildId: null != (t = null != (n = null == (i = Z.getGuildId) ? void 0 : i.call(Z)) ? n : Z.guild_id) ? t : null,
                                    messageId: null
                                },
                                source: N.B.MANUAL,
                                widgetType: P.uss.TEXT_CHAT_V3
                            })
                        },
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            color: "text-muted",
                            children: B
                        })
                    }), (0, i.jsx)(u._BQ, {
                        className: L.ln,
                        size: "xs",
                        color: u.LU0.colors.TEXT_MUTED
                    })]
                }) : null, (0, i.jsxs)(u.Text, {
                    className: L.DD,
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: [f, (null == F ? void 0 : F.name) != null && "" !== F.name ? (0, i.jsx)(u.Text, {
                        tag: "span",
                        className: L.X7,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: R.intl.formatToPlainString(D.default.x1k3cO, {
                            gameName: F.name
                        })
                    }) : null]
                })]
            })]
        }), (0, i.jsxs)("div", {
            className: L.IE,
            onMouseDown: e => {
                e.stopPropagation()
            },
            children: [(0, i.jsx)(H, {
                channel: n,
                onStartPrivateCall: J,
                pinsOpen: M,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => z(!1)
            }), (0, i.jsx)(Y, {
                channel: n,
                pinsOpen: M,
                onTogglePinsPopout: Q,
                onRequestClosePinsPopout: () => z(!1)
            }), k && null != X && (0, i.jsx)(I.j, {
                tab: X.tab,
                targetId: X.targetId,
                widgetType: P.uss.TEXT_CHAT_V3,
                shouldStopPropagation: !1
            }), (null == n ? void 0 : n.id) != null && (0, i.jsx)(s.m, {
                text: W ? K : R.intl.string(D.default.ERApc4),
                "aria-label": W ? K : R.intl.string(D.default.ERApc4),
                children: (0, i.jsx)(u.K0, {
                    icon: W ? u.gR : u.PGe,
                    "aria-label": W ? K : R.intl.string(D.default.ERApc4),
                    size: "sm",
                    variant: "icon-only",
                    onClick: () => {
                        if (W) {
                            (0, E.YX)(P.uss.TEXT_CHAT_V3, {
                                type: E.Z5.TEXT_CHAT,
                                value: E.IP.CLOSED_TEXT_CHAT,
                                secondaryValue: "minimize_voice"
                            }), (0, j.S$)({
                                minimized: !0
                            });
                            return
                        }(0, j.lu)({
                            channelId: n.id,
                            widgetType: P.uss.TEXT_CHAT_V3,
                            secondaryValue: "close_button"
                        })
                    }
                })
            })]
        })]
    })
}