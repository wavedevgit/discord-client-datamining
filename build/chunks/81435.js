/** Chunk was on 1113 **/
/** chunk id: 81435, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => z
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n(960488),
    c = n(311907),
    u = n(3026),
    d = n(397927),
    h = n(442433),
    p = n(104171),
    g = n(47167),
    f = n(713654),
    m = n(427930),
    b = n(427209),
    A = n(763754),
    y = n(291812),
    O = n(449859),
    _ = n(812299),
    x = n(943220),
    j = n(538355),
    v = n(995273),
    E = n(854627),
    C = n(95701),
    S = n(260509),
    I = n(734057),
    N = n(256587),
    T = n(71393),
    P = n(851109),
    w = n(706341),
    R = n(932883),
    D = n(654795),
    L = n(559873),
    M = n(346061),
    k = n(652215),
    G = n(228160),
    U = n(985018),
    V = n(471135);

function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function H(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function F(e) {
    let {
        message: t,
        channel: n,
        focusProps: i,
        isSelected: a,
        isUnread: o,
        groupedMessages: h
    } = e, p = n.type === k.rbe.UNKNOWN ? d.N$i : (0, f.gU)(n, null), m = (0, g.Ay)(n, !1), b = (0, c.bG)([T.A], () => T.A.getGuild(n.getGuildId())), {
        nick: y,
        colorString: O
    } = (0, A.Ay)(t), {
        avatarSrc: j,
        eventHandlers: v
    } = (0, E.A)({
        userId: t.author.id,
        size: d._3J.SIZE_32,
        guildId: null == b ? void 0 : b.id,
        animateOnHover: !0
    }), C = n.type !== k.rbe.GUILD_ANNOUNCEMENT || null == b, I = (0, _.y)({
        channel: n,
        message: t,
        user: t.author,
        compact: !0,
        isRepliedMessage: !0
    }), P = (0, r.jsx)("div", {
        className: V.Ys,
        inert: !0,
        children: (0, r.jsx)(x.A, {
            channel: n,
            message: t,
            hideGuildTag: !0,
            hideSystemTag: !0,
            className: V.Xh
        })
    });
    return (0, l.useEffect)(() => {
        null != b && N.A.requestMember(b.id, t.author.id)
    }, [b, t.author.id]), (0, r.jsx)(d.vN3, H(B({}, i), {
        children: (0, r.jsxs)("div", {
            onMouseLeave: v.onMouseLeave,
            onMouseEnter: v.onMouseEnter,
            className: V.zC,
            children: [o && !a && (0, r.jsx)("div", {
                className: V.Zm
            }), (0, r.jsx)(d.BJc, {
                align: "start",
                style: {
                    width: "fit-content",
                    marginTop: "4px"
                },
                children: C ? (0, r.jsx)(M.e, {
                    "aria-label": "User Avatar",
                    src: j,
                    size: d._3J.SIZE_32,
                    cornerIconUrl: null != b ? (0, S.Iv)(b, 24) : void 0,
                    cornerIconOffsetX: 4,
                    cornerIconOffsetY: 3
                }) : (0, r.jsx)(M.h, {
                    "aria-label": "Guild Icon",
                    src: (0, S.Iv)(b, 32),
                    size: d._3J.SIZE_32,
                    cornerIconUrl: t.author.getAvatarURL(b.id, 24),
                    cornerIconOffsetX: 4,
                    cornerIconOffsetY: 3
                })
            }), (0, r.jsxs)(d.BJc, {
                gap: 0,
                style: {
                    minWidth: 0
                },
                children: [(0, r.jsxs)(d.BJc, {
                    direction: "horizontal",
                    gap: 4,
                    style: {
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        justifyContent: "space-between"
                    },
                    children: [C ? (0, r.jsxs)("div", {
                        className: V.ZR,
                        children: [(0, r.jsx)("div", {
                            className: V.Xh,
                            style: {
                                color: null != O ? O : void 0
                            },
                            children: (0, r.jsx)(u.A, {
                                children: P
                            })
                        }), I]
                    }) : (0, r.jsx)(u.A, {
                        children: (0, r.jsx)(d.Heading, {
                            variant: "text-md/semibold",
                            style: {
                                color: null != O ? O : void 0
                            },
                            className: V.Xh,
                            children: b.name
                        })
                    }), (0, r.jsxs)(d.BJc, {
                        direction: "horizontal",
                        gap: 4,
                        align: "center",
                        style: {
                            width: "fit-content"
                        },
                        children: [(0, r.jsx)(L.A, {
                            message: t,
                            channel: n,
                            isUnread: o
                        }), t.mentioned && o ? (0, r.jsx)(d.hVq, {
                            className: V.WK,
                            count: 1
                        }) : (0, r.jsx)(Y, {
                            message: t
                        })]
                    })]
                }), (0, r.jsxs)(d.BJc, {
                    direction: "horizontal",
                    align: "center",
                    gap: 4,
                    inert: !0,
                    className: s()(V.HA, {
                        [V.gy]: o,
                        [V.wH]: a
                    }),
                    children: [null !== p && (0, r.jsx)(p, {
                        size: "xxs",
                        className: V.p4
                    }), (0, r.jsxs)(d.Text, {
                        variant: "text-sm/medium",
                        lineClamp: 1,
                        className: s()(V.HA, {
                            [V.gy]: o,
                            [V.wH]: a
                        }),
                        children: [m, !C && " \xb7 ".concat(y)]
                    })]
                }), (0, r.jsx)(W, {
                    message: t,
                    isUnread: o,
                    isSelected: a,
                    channel: n
                }), h.length > 0 && (0, r.jsx)(d.BJc, {
                    gap: 4,
                    style: {
                        minWidth: 0,
                        marginTop: 4,
                        marginBottom: 4
                    },
                    children: (0, r.jsx)(K, {
                        overflowMessages: h
                    })
                })]
            })]
        })
    }))
}

function K(e) {
    let {
        overflowMessages: t
    } = e, n = (0, a.uniqBy)(t.map(e => e.author), e => e.id).slice(0, 3);
    return (0, r.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 4,
        inert: !0,
        children: [(0, r.jsx)(p.Ay, {
            users: n,
            useFallbackUserForPopout: !0,
            size: p.DN.SIZE_16
        }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: V.gD,
            children: U.intl.formatToPlainString(G.default.NzUuLD, {
                count: t.length
            })
        })]
    })
}

function Y(e) {
    let {
        message: t
    } = e, n = (0, v.jb)(t.timestamp.getTime());
    return (0, r.jsx)(O.A, {
        timestamp: t.timestamp,
        className: V.vE,
        isEdited: t.isEdited(),
        isInline: !0,
        children: n
    })
}

function W(e) {
    let {
        message: t,
        channel: n,
        isUnread: i,
        isSelected: a
    } = e, {
        previewContent: o,
        Icon: c
    } = function(e) {
        let {
            message: t,
            isUnread: n,
            isSelected: i
        } = e, {
            content: a
        } = (0, j.A)(t, {
            hideSimpleEmbedContent: !0,
            allowList: !1,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !1,
            formatInline: !0,
            noStyleAndInteraction: !0
        });
        return (0, l.useMemo)(() => {
            var e;
            let l, o = "" === t.content,
                c = t.embeds.some(e => e.type === k.Auw.GIFV),
                u = (l = t.embeds.some(e => e.type === k.Auw.GIFV), t.attachments.length + +!!l),
                h = (0, m.A)(t),
                p = t.stickerItems.length > 0,
                g = t.isPoll(),
                f = t.type === k.lAJ.POLL_RESULT,
                A = t.hasFlag(k.pr7.IS_VOICE_MESSAGE),
                O = t.type === k.lAJ.USER_JOIN,
                _ = null;
            1 === u ? _ = d.xfq : u > 1 ? _ = d.sYc : h ? _ = b.A : g || f ? _ = d.YRe : p ? _ = d.tEP : A && (_ = d.HKD);
            let x = !0,
                j = null;
            return o ? h ? j = U.intl.string(U.t["9ddYKt"]) : g ? (x = !1, j = null == (e = t.poll) ? void 0 : e.question.text) : j = f ? U.intl.string(U.t.sad2PH) : c ? U.intl.string(U.t.p0oZmy) : u > 1 ? U.intl.formatToPlainString(U.t.rtfTKp, {
                count: u
            }) : 1 === u ? U.intl.string(U.t.tCcq5p) : p ? U.intl.format(U.t.zY4v1B, {
                stickerName: t.stickerItems[0].name
            }) : A ? U.intl.string(U.t.slFYgi) : O ? U.intl.string(U.t.Yvvfw9) : U.intl.string(U.t.sDqZHL) : (x = !1, j = (0, r.jsx)(y.Ay, {
                content: a,
                message: t,
                compact: !1,
                className: s()(V.iU, {
                    [V.gy]: n,
                    [V.wH]: i
                })
            })), o && (j = (0, r.jsx)("div", {
                className: s()(V.iU, {
                    [V.gy]: n,
                    [V.wH]: i,
                    [V.QP]: x
                }),
                children: j
            })), {
                previewContent: j,
                Icon: _
            }
        }, [t, a, n, i])
    }({
        message: t,
        channel: n,
        isUnread: i,
        isSelected: a
    });
    return (0, r.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 4,
        align: "center",
        inert: !0,
        children: [null != c && (0, r.jsx)(c, {
            size: "xxs",
            className: V.p4
        }), (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            lineClamp: 1,
            className: V.iU,
            children: o
        })]
    })
}
let z = (0, l.memo)(function(e) {
    var t;
    let {
        message: i,
        groupedMessages: a,
        isUnread: u
    } = e, p = i.message, g = (0, R.op)(), {
        params: f
    } = (0, o.W5)(), m = (0, c.bG)([I.A], () => {
        if (null == p) return null;
        let e = I.A.getChannel(i.channelId);
        return null != e ? e : new C.jb({
            id: i.channelId,
            guild_id: i.guildId,
            type: k.rbe.UNKNOWN,
            name: U.intl.string(U.t.J90oLW)
        })
    }), b = (0, D.s)(e => {
        var t;
        return e.isMenuOpenForMessage(null != (t = null == p ? void 0 : p.id) ? t : null)
    }), {
        notificationCenterVariant: A
    } = (0, P.X8)({
        location: "NotificationsInboxMessageUnit"
    }), y = l.useMemo(() => "".concat(null == p ? void 0 : p.author.username, ": ").concat(null == m ? void 0 : m.name), [null == p ? void 0 : p.author.username, null == m ? void 0 : m.name]), O = null != (t = null == a ? void 0 : a.map(e => e.message).filter(e => null != e)) ? t : [];
    return null == p || null == m ? null : (0, r.jsx)(d.sqX, {
        "aria-label": y,
        className: s()(V.FJ, {
            [V.wH]: p.id === f.messageId,
            [V.Yj]: b
        }),
        onClick: () => {
            w.A.inboxItemClick({
                message: p,
                channel: m,
                isUnread: u,
                isSidebar: A === P.U5.SIDEBAR,
                viewId: g
            })
        },
        onContextMenu: e => {
            e.preventDefault(), (0, R.Ml)({
                interactionType: R.X8.CONTEXT_MENU,
                message: p,
                viewId: g
            }), (0, h.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("48118").then(n.bind(n, 594005));
                return t => (0, r.jsx)(e, H(B({}, t), {
                    channel: m
                }))
            }, {
                disableClickTrap: !0
            })
        },
        children: (0, r.jsx)(F, {
            message: p,
            channel: m,
            isSelected: p.id === f.messageId,
            groupedMessages: O,
            isUnread: u
        })
    })
}, (e, t) => {
    var n, r;
    return e.isUnread === t.isUnread && e.message.id === t.message.id && (null == (n = e.groupedMessages) ? void 0 : n.length) === (null == (r = t.groupedMessages) ? void 0 : r.length)
})