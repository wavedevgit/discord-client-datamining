/** Chunk was on web.js **/
/** chunk id: 910692, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    BC: () => eN,
    Eh: () => eA,
    Fl: () => ew,
    YN: () => eO,
    fD: () => eI
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s);
n(340287);
var c = n(311907),
    u = n(554146),
    d = n(827734),
    f = n(342952),
    p = n(990078),
    _ = n(397927),
    h = n(308528),
    m = n(367513),
    g = n(956793),
    E = n(401843),
    y = n(775602),
    b = n(969151),
    O = n(1768),
    v = n(262763),
    A = n(402216),
    I = n(826673),
    S = n(822123),
    T = n(643501),
    C = n(409626),
    N = n(692969),
    w = n(279250),
    R = n(607407),
    P = n(263063),
    D = n(721592),
    L = n(378570),
    x = n(565688),
    M = n(93879),
    j = n(242640),
    k = n(912276),
    U = n(636585),
    G = n(95701),
    F = n(734057),
    V = n(71393),
    B = n(576705),
    H = n(994500),
    Y = n(543465),
    W = n(287809),
    K = n(977997),
    z = n(607567),
    q = n(954571),
    Z = n(486020),
    Q = n(562153),
    X = n(939341),
    J = n(20805),
    $ = n(22869),
    ee = n(623671),
    et = n(428249),
    en = n(327098),
    er = n(576757),
    ei = n(202195),
    ea = n(176563),
    eo = n(422973),
    es = n(315246),
    el = n(899682),
    ec = n(424994),
    eu = n(652215),
    ed = n(381941),
    ef = n(188275),
    ep = n(985018),
    e_ = n(187866);

function eh(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function em(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            eh(e, t, n[t])
        })
    }
    return e
}

function eg(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function eE(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eg(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function ey(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = eb(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function eb(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function eO(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: e_.SW,
        children: t
    })
}

function ev(e) {
    let {
        children: t,
        backgroundImgSrc: n,
        className: i,
        style: a = {}
    } = e, {
        primaryColor: s,
        secondaryColor: l
    } = (0, ea.A)(n);
    return null != n && (a.background = "linear-gradient(45deg, ".concat(s, ", ").concat(l, ")")), (0, r.jsx)(_.NPJ, {
        theme: eu.NJ8.DARK,
        disableAdaptiveTheme: !0,
        children: e => (0, r.jsx)("div", {
            className: o()(e_.ZK, e, i),
            style: a,
            children: t
        })
    })
}

function eA(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)("div", {
        className: e_.$m,
        children: t
    })
}

function eI(e) {
    let {
        channel: t,
        user: n,
        onReaction: a,
        entry: o,
        buttons: s = [],
        header: f,
        onVoiceChannelPreview: m
    } = e, [g, E] = i.useState(!1), [y, b] = i.useState(null), v = i.useRef(null), A = (0, c.bG)([B.A], () => null != t && eu.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && B.A.can(eu.xBc.SEND_MESSAGES, t)), [S, T] = i.useState(!1), [C, N] = i.useState(!1), {
        voiceBar: w,
        joinVoiceButton: R
    } = eP({
        channel: t,
        entry: o,
        onVoiceChannelPreview: m
    }), {
        embeddedActivity: P
    } = (0, en.A)(o), D = eR(P), L = null != R && 0 === s.length ? [R] : s, x = L.length > 0, M = L.length >= 2, [j, k] = i.useState(!x), U = Q.Ay.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n), G = null != t && g ? ep.intl.formatToPlainString(ep.t["8lzR/R"], {
        channel: "#".concat(t.name)
    }) : ep.intl.formatToPlainString(ep.t["4c+CAx"], {
        channel: "@".concat(U)
    }), V = g ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG), H = async e => {
        let r, {
            emoji: i
        } = e;
        if (null != i) {
            if (q.default.track(eu.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: ec.UG.GUILD_MEMBER_LIST,
                    channel_id: null == t ? void 0 : t.id,
                    guild_id: null == t ? void 0 : t.guild_id
                }), (0, I.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), T(!0), N(!1), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
            else {
                var o;
                let e = await h.A.getOrEnsurePrivateChannel(n.id);
                r = null != (o = F.A.getChannel(e)) ? o : null
            }
            return l()(null != r, "Send channel must be defined"), W({
                reply: ":".concat(i.name, ":"),
                sendToChannel: r,
                onComplete: (e, t) => {
                    N(!0), setTimeout(() => {
                        T(!1), a(e, t)
                    }, 600)
                },
                interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
                requiresChannelReadiness: !1
            })
        }
    }, Y = async e => {
        let r;
        if ((0, I.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g) l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), r = t;
        else {
            let e = await h.A.openPrivateChannel({
                    recipientIds: n.id
                }),
                t = F.A.getChannel(e);
            l()(null != t, "DM channel must be defined"), r = t
        }
        let i = r.type === eu.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({
            reply: e,
            sendToChannel: r,
            interactionType: i,
            onComplete: a,
            requiresChannelReadiness: !0
        })
    }, W = async e => {
        let {
            reply: t,
            sendToChannel: n,
            onComplete: r,
            interactionType: i,
            requiresChannelReadiness: a
        } = e;
        null == y || y.focus(), await (0, et.d)({
            channel: n,
            content: t,
            entry: o,
            whenReady: a,
            doNotNotifyOnError: !1,
            location: ed.Hx.CONTENT_INVENTORY_MEMBERLIST
        }), null == r || r(i, n)
    }, K = null != f ? f : null != w ? w : null != D ? D : void 0, z = () => {
        E(e => !e), j && (null == y || y.focus())
    }, Z = e => {
        k(e), e && (null == y || y.focus())
    };
    return (0, r.jsx)("div", {
        ref: v,
        style: {
            pointerEvents: S ? "none" : "all"
        },
        children: (0, r.jsx)(_.Oky, {
            containerRef: v,
            children: (0, r.jsxs)("div", {
                children: [(0, r.jsx)(el.A, {
                    sent: C,
                    shown: S,
                    className: e_.Jt
                }), null != K ? K : (0, r.jsx)(eo.A, {
                    children: (0, r.jsxs)("div", {
                        className: e_.T7,
                        children: [(0, r.jsx)(eS, {
                            channel: t,
                            onClickSuggestion: H
                        }), (0, r.jsx)(O.g1, {
                            onSelectEmoji: H
                        })]
                    })
                }), (0, r.jsxs)("div", {
                    className: j ? e_.P2 : e_.VE,
                    children: [(0, r.jsx)(O.nd, {
                        placeholder: G,
                        onEnter: Y,
                        setEditorRef: e => b(e),
                        channel: g ? t : void 0,
                        showEmojiButton: null != K,
                        className: e_.N8,
                        autoFocus: !1,
                        renderAttachButton: A ? () => (0, r.jsx)(p.m, {
                            text: V,
                            children: (0, r.jsx)(_.DUT, {
                                className: e_.wD,
                                onClick: z,
                                children: g ? (0, r.jsx)(_.N$i, {
                                    size: "custom",
                                    width: 20,
                                    height: 20
                                }) : (0, r.jsx)(_.XxR, {
                                    size: "custom",
                                    width: 20,
                                    height: 20
                                })
                            })
                        }) : void 0
                    }), x && (0, r.jsx)(_.DUT, {
                        onClick: () => Z(!1),
                        className: e_.i3,
                        children: (0, r.jsx)(_.PGe, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.A.colors.ICON_STRONG
                        })
                    })]
                }), !1 === j && (0, r.jsxs)("div", {
                    className: e_.fh,
                    children: [!M && (0, r.jsx)(_.Button, {
                        fullWidth: !0,
                        variant: "secondary",
                        onClick: () => Z(!0),
                        size: M ? "sm" : "md",
                        text: ep.intl.string(ep.t.OAJQlP)
                    }, "toggleMessageMode"), L]
                })]
            })
        })
    })
}
let eS = e => {
    let {
        channel: t,
        onClickSuggestion: n
    } = e, [a, o] = i.useState(!1);
    i.useEffect(() => {
        o(!0)
    }, []);
    let s = !!y.A.keyboardModeEnabled && !a,
        l = (0, S.Fj)(null == t ? void 0 : t.guild_id).slice(0, 5).map(e => null == e.id ? {
            emoji: e,
            url: e.url
        } : {
            emoji: e,
            url: (0, Z._O)({
                id: e.id,
                animated: e.animated,
                size: 58
            })
        });
    return (0, r.jsx)(r.Fragment, {
        children: l.map(e => {
            let {
                emoji: t,
                url: i
            } = e;
            return null != i ? (0, r.jsx)("div", {
                children: (0, r.jsx)(p.m, {
                    asContainer: !0,
                    text: ep.intl.formatToPlainString(ep.t.kilW3l, {
                        emojiName: t.name
                    }),
                    position: "top",
                    "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, {
                        emojiName: t.name
                    }),
                    shouldShow: !s && void 0,
                    children: (0, r.jsx)(k.D, {
                        emoji: t,
                        isDisabled: !a,
                        onClick: () => n({
                            emoji: t
                        }),
                        className: e_.Zg
                    })
                })
            }, t.name) : null
        })
    })
};

function eT(e) {
    let {
        channel: t,
        userDescription: n,
        entry: i,
        disableGameProfileLinks: a,
        onUserPopoutClosed: s
    } = e, l = null == t ? void 0 : t.guild_id, {
        displayParticipants: u,
        participant1: d,
        participant2: p,
        numOtherParticipants: h
    } = (0, er.A)(i, 3), m = (0, c.bG)([W.default], () => W.default.getUser(i.author_id)), {
        streamPreviewUrl: g
    } = (0, ei.A)(i), E = null != g, y = [d, p];
    return (0, r.jsxs)("div", {
        className: e_.MH,
        children: [(0, r.jsxs)("div", {
            className: e_.WP,
            children: [(0, r.jsx)(f.A, {
                maxUsers: 3,
                users: u,
                size: _._3J.SIZE_24,
                hideOverflowCount: !0,
                disableUsernameTooltip: !0,
                onUserPopoutRequestClose: s
            }), (0, r.jsx)(_.hKd, {
                size: 8,
                horizontal: !0
            }), (0, r.jsx)(_.Heading, {
                variant: "heading-sm/normal",
                className: o()(e_.Xn, e_.zA),
                children: ep.intl.format(n, {
                    user0: Q.Ay.getName(l, null == t ? void 0 : t.id, y[0]),
                    user1: Q.Ay.getName(l, null == t ? void 0 : t.id, y[1]),
                    countOthers: h,
                    countOthersHook: (e, t) => (0, r.jsx)(_.Text, {
                        variant: "text-sm/medium",
                        className: o()(e_.Mj, e_.nk),
                        children: e
                    }, t),
                    name0Hook: (e, n) => (0, r.jsx)($.A, {
                        textClassName: o()(e_.Mj, e_.nk),
                        text: e,
                        user: y[0],
                        channel: t,
                        onPopoutClosed: s,
                        enableDisplayNameStyles: !0
                    }, n),
                    name1Hook: (e, n) => (0, r.jsx)($.A, {
                        textClassName: o()(e_.Mj, e_.nk),
                        text: e,
                        user: y[1],
                        channel: t,
                        onPopoutClosed: s,
                        enableDisplayNameStyles: !0
                    }, n)
                })
            })]
        }), E && (0, r.jsx)(A.Ay, {
            size: A.Ay.Sizes.SMALL
        }), null != m && (0, r.jsx)(es.A, {
            user: m,
            channel: t,
            guildId: l,
            entry: i,
            disableGameProfileLinks: a
        })]
    })
}

function eC(e) {
    let {
        children: t,
        onClick: n
    } = e;
    return null == n ? t : (0, r.jsx)(_.DUT, {
        className: e_.Zw,
        onClick: n,
        children: t
    })
}

function eN(e) {
    var t, n, i;
    let {
        title: a,
        subtitle: s,
        badges: l,
        children: c,
        onClickThumbnail: u,
        onClickTitle: d,
        onClickSubtitle: f,
        headerIcons: p,
        disableGameProfileLinks: h = !1,
        showCoverImage: m = !0,
        onUserPopoutClosed: g,
        trackRankingItemInteraction: E
    } = e, y = ey(e, ["title", "subtitle", "badges", "children", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "headerIcons", "disableGameProfileLinks", "showCoverImage", "onUserPopoutClosed", "trackRankingItemInteraction"]), {
        entry: b
    } = y, O = (0, J.zD)(b), v = O ? null == (t = b.extra) ? void 0 : t.application_id : void 0, A = (0, N.A)({
        location: "ContentPopout",
        applicationId: h ? void 0 : v,
        source: C.Ob.ActivityCard,
        trackEntryPointImpression: !0,
        sourceUserId: b.author_id
    }, {
        onOpened: () => null == E ? void 0 : E(ec.PA.OPENED_GAME_PROFILE)
    }), {
        largeImage: I,
        smallImage: S
    } = (0, X.nO)({
        entry: b,
        showCoverImage: m
    }), T = (0, x.w)({
        location: "content_inventory"
    }), w = O ? A : void 0;
    return (0, r.jsxs)("div", {
        className: e_.au,
        children: [(0, r.jsx)(eT, eE(em({
            disableGameProfileLinks: h
        }, y), {
            onUserPopoutClosed: g
        })), (0, r.jsxs)(ev, {
            backgroundImgSrc: null == I ? void 0 : I.src,
            children: [(0, r.jsxs)("div", {
                className: e_.CG,
                children: [(0, r.jsx)("div", {
                    className: e_.Fb,
                    children: (0, r.jsx)(ee.d, {
                        image: I,
                        smallImage: S,
                        aspectRatio: m ? "none" : void 0,
                        onClick: null != u ? u : w,
                        size: ee.w.SIZE_72
                    })
                }), (0, r.jsxs)("div", {
                    className: e_.iC,
                    children: [(0, r.jsx)(eC, {
                        onClick: null != d ? d : w,
                        children: (0, r.jsx)(_.Heading, {
                            variant: "heading-md/medium",
                            className: o()(e_.$2, {
                                [e_.bC]: null != p
                            }),
                            lineClamp: 3,
                            children: a
                        })
                    }), null != s ? (0, r.jsx)(eC, {
                        onClick: null != f ? f : w,
                        children: (0, r.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            className: e_.LG,
                            children: s
                        })
                    }) : null, (0, r.jsx)(_.hKd, {
                        size: 8
                    }), l]
                }), (0, r.jsx)("div", {
                    className: e_.hO,
                    children: p
                })]
            }), c]
        }), T && null != v && ef.sQ.has(v) ? (0, r.jsx)(M.A, {
            className: e_.zu,
            applicationId: v,
            userIds: [b.author_id],
            cardSize: j.Y.SMALL_SQUARE,
            location: "content_popout",
            guildId: null == (n = y.channel) ? void 0 : n.guild_id,
            channelId: null == (i = y.channel) ? void 0 : i.id
        }) : null]
    })
}

function ew(e) {
    var t, n, a;
    let {
        title: o,
        subtitle: s,
        badges: l,
        stream: u,
        onClickThumbnail: d,
        onClickTitle: f,
        onClickSubtitle: p,
        onUserPopoutClosed: h,
        trackRankingItemInteraction: m
    } = e, y = ey(e, ["title", "subtitle", "badges", "stream", "onClickThumbnail", "onClickTitle", "onClickSubtitle", "onUserPopoutClosed", "trackRankingItemInteraction"]), b = (0, c.bG)([F.A], () => F.A.getChannel(null == u ? void 0 : u.channelId)), [O] = i.useMemo(() => (0, w.eo)(b, K.A, V.A, B.A, T.default), [b]), {
        entry: v
    } = y, A = (0, J.zD)(v), I = A ? null == (t = v.extra) ? void 0 : t.application_id : void 0, S = (0, N.A)({
        location: "ContentPopout",
        applicationId: I,
        source: C.Ob.ActivityCard,
        trackEntryPointImpression: !0,
        sourceUserId: v.author_id
    }, {
        onOpened: () => null == m ? void 0 : m(ec.PA.OPENED_GAME_PROFILE)
    }), P = A ? S : void 0, {
        activity: D,
        activityApplication: L,
        fallbackApplication: k
    } = (0, en.A)(v), {
        largeImage: U,
        smallImage: G
    } = (0, X.D8)(D, null != L ? L : k), {
        largeImage: H
    } = (0, X.nO)({
        entry: v
    }), Y = (0, x.w)({
        location: "content_inventory"
    });
    return (0, r.jsxs)("div", {
        className: e_.au,
        children: [(0, r.jsx)(eT, eE(em({}, y), {
            onUserPopoutClosed: h
        })), (0, r.jsxs)(ev, {
            backgroundImgSrc: null == H ? void 0 : H.src,
            className: e_.uR,
            children: [(0, r.jsx)(eC, {
                onClick: O ? () => {
                    g.default.selectVoiceChannel(u.channelId), (0, E.Nl)(u)
                } : void 0,
                children: (0, r.jsxs)("div", {
                    className: e_.nh,
                    children: [(0, r.jsx)(R.A, {
                        className: e_.j7,
                        stream: u
                    }), O && (0, r.jsx)("div", {
                        className: e_.NE,
                        children: (0, r.jsx)(_.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: ep.intl.string(ep.t["7Xq/nV"])
                        })
                    })]
                })
            }), (0, r.jsxs)("div", {
                className: e_.$6,
                children: [null != U && (0, r.jsx)("div", {
                    className: e_.Fb,
                    children: (0, r.jsx)(ee.d, {
                        image: U,
                        smallImage: G,
                        onClick: null != d ? d : P,
                        size: ee.w.SIZE_72
                    })
                }), (0, r.jsxs)("div", {
                    className: e_.gv,
                    children: [(0, r.jsx)(eC, {
                        onClick: null != f ? f : P,
                        children: (0, r.jsx)(_.Heading, {
                            variant: "heading-md/semibold",
                            className: e_.nk,
                            lineClamp: 3,
                            children: o
                        })
                    }), null != s ? (0, r.jsx)(eC, {
                        onClick: null != p ? p : P,
                        children: (0, r.jsx)(_.Text, {
                            variant: "text-sm/normal",
                            className: e_.zA,
                            children: s
                        })
                    }) : null, (0, r.jsx)(_.hKd, {
                        size: 8
                    }), l]
                })]
            })]
        }), Y && null != I && ef.sQ.has(I) ? (0, r.jsx)(M.A, {
            className: e_.zu,
            applicationId: I,
            userIds: [v.author_id],
            cardSize: j.Y.SMALL_SQUARE,
            location: "content_popout",
            guildId: null == (n = y.channel) ? void 0 : n.guild_id,
            channelId: null == (a = y.channel) ? void 0 : a.id
        }) : null]
    })
}

function eR(e) {
    let t = (0, c.bG)([V.A], () => V.A.getGuild((0, b.D)(null == e ? void 0 : e.location))),
        n = (0, c.bG)([F.A], () => F.A.getChannel((0, b.H)(null == e ? void 0 : e.location))),
        i = (0, c.yK)([W.default], () => {
            var t, n;
            return null != (t = null == e || null == (n = e.participants) ? void 0 : n.map(e => W.default.getUser(e.userId))) ? t : []
        });
    return null != e && null != t && null != n && G.k3.has(n.type) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
            className: e_.kP,
            children: [(0, r.jsxs)(_.DUT, {
                "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
                onClick: () => (0, L.iN)(n.id),
                className: e_.I3,
                children: [(0, r.jsx)(P.A, {
                    guild: t,
                    size: P.A.Sizes.SMOL,
                    className: e_.O9,
                    active: !0
                }), (0, r.jsx)(_._BQ, {
                    size: "xxs",
                    color: d.A.colors.INTERACTIVE_TEXT_DEFAULT
                }), (0, r.jsx)(_.N$i, {
                    size: "xs",
                    color: d.A.colors.TEXT_DEFAULT
                }), (0, r.jsx)(_.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    className: e_.NR,
                    children: null == n ? void 0 : n.name
                })]
            }), (0, r.jsx)(U.A, {
                guildId: t.id,
                users: i,
                max: 3,
                renderUser: (e, n) => (0, r.jsx)(_.euF, {
                    src: e.getAvatarURL(t.id, 16),
                    size: _._3J.SIZE_16,
                    "aria-label": "avatar",
                    className: n
                }),
                renderMoreUsers: e => (0, r.jsx)("div", {
                    className: e_.V9,
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-xxs/semibold",
                        color: "text-default",
                        children: e
                    })
                })
            })]
        }), (0, r.jsx)(_.hKd, {
            size: 16
        })]
    }) : null
}

function eP(e) {
    let {
        channel: t,
        entry: n,
        onVoiceChannelPreview: a
    } = e, {
        streamPreviewUrl: o,
        channel: s
    } = (0, ei.A)(n), {
        needSubscriptionToAccess: l
    } = (0, D.A)(null == t ? void 0 : t.id), u = (0, c.bG)([V.A], () => null != s ? V.A.getGuild(s.guild_id) : void 0), f = (0, c.yK)([z.Ay], () => null != s ? z.Ay.getVoiceStatesForChannel(s) : [], [s]), h = (0, c.bG)([K.A], () => K.A.isInChannel(null == s ? void 0 : s.id)), g = i.useMemo(() => {
        for (let e of f) {
            let t = F.A.getDMFromUserId(e.user.id),
                n = null != t && Y.Ay.isChannelMuted(null, t),
                r = H.A.isBlockedOrIgnored(e.user.id);
            if (n || r) return !0
        }
        return !1
    }, [f]);
    if (null == s || null == u) return {
        voiceBar: void 0,
        joinVoiceButton: void 0
    };
    let E = null != o,
        y = () => {
            m.A.updateChatOpen(s.id, !0), (0, L.iN)(s.id), null == a || a(s)
        },
        b = () => {
            v.A.handleVoiceConnect({
                channel: s,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0
            })
        },
        O = e => {
            let {
                children: t,
                text: n,
                hasRestrictedOrMutedVCParticipant: i
            } = e, a = i ? (0, r.jsxs)(r.Fragment, {
                children: [i && (0, r.jsx)(_.id, {
                    size: "custom",
                    width: 13,
                    height: 13,
                    className: e_.vb
                }), ep.intl.string(ep.t.d6DpXI)]
            }) : n;
            return (0, r.jsx)(p.m, {
                "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : null != n && n,
                __unsupportedReactNodeAsText: a,
                shouldShow: !0,
                children: t
            }, "voice-preview")
        };
    return {
        voiceBar: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: e_.kP,
                children: [(0, r.jsx)(O, {
                    text: ep.intl.string(ep.t.WIVYqJ),
                    hasRestrictedOrMutedVCParticipant: g,
                    children: (0, r.jsxs)(_.DUT, {
                        "aria-label": ep.intl.string(ep.t.WIVYqJ),
                        onClick: y,
                        className: e_.I3,
                        children: [(0, r.jsx)(P.A, {
                            guild: u,
                            size: P.A.Sizes.SMOL,
                            className: e_.O9,
                            active: !0
                        }), (0, r.jsx)(_._BQ, {
                            size: "xxs",
                            color: d.A.colors.INTERACTIVE_TEXT_DEFAULT
                        }), (0, r.jsx)(_.HKD, {
                            size: "xs",
                            color: d.A.colors.TEXT_DEFAULT
                        }), (0, r.jsx)(_.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            className: e_.NR,
                            children: s.name
                        })]
                    })
                }), (0, r.jsx)(U.A, {
                    guildId: u.id,
                    users: f,
                    max: 3,
                    renderUser: (e, t) => (0, r.jsx)(_.euF, {
                        src: e.user.getAvatarURL(u.id, 16),
                        size: _._3J.SIZE_16,
                        "aria-label": "avatar",
                        className: t
                    }),
                    renderMoreUsers: e => (0, r.jsx)("div", {
                        className: e_.V9,
                        children: (0, r.jsx)(_.Text, {
                            variant: "text-xxs/semibold",
                            color: "text-default",
                            children: e
                        })
                    })
                })]
            }), (0, r.jsx)(_.hKd, {
                size: 16
            })]
        }),
        joinVoiceButton: h ? null : (0, r.jsx)(O, {
            hasRestrictedOrMutedVCParticipant: g,
            children: (0, r.jsx)(_.Button, {
                onClick: b,
                fullWidth: !0,
                text: E ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
                icon: E ? _.kN9 : _.HKD,
                variant: "active",
                size: "md"
            })
        })
    }
}