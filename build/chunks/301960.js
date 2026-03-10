/** chunk id: 301960 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(989349),
    d = n.n(c),
    u = n(311907),
    _ = n(397927),
    A = n(155718),
    m = n(811024),
    E = n(795816),
    I = n(793574),
    T = n(688810),
    f = n(735991),
    N = n(975412),
    C = n(168186),
    g = n(597929),
    h = n(589022),
    p = n(427157),
    S = n(287809),
    R = n(486020),
    x = n(203982),
    O = n(405269),
    M = n(763754),
    D = n(635071),
    P = n(728963),
    U = n(943815),
    v = n(652215),
    L = n(985018),
    y = n(679740);

function j(e) {
    let {
        width: t = 6,
        height: n = 10,
        color: l = "currentColor",
        className: a,
        foreground: r
    } = e;
    return (0, i.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: r,
            fill: l
        })
    })
}

function b(e, t, n, l, a, s) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: A,
        showAvatarPopout: m,
        showTargetAvatarPopout: E,
        onClickAvatar: I,
        onUserContextMenu: T,
        onClickTargetAvatar: f,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: C
    } = e;
    if (c && 1 === n) return null;
    if (c && null == o.activityInstance || u || A) return (0, i.jsx)("div", {
        className: y.Cz,
        children: (0, i.jsx)(j, {
            className: y.Jx
        })
    });
    let g = R.Ay.getGuildMemberAvatarURL({
            avatar: l.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: d?.guild_id ?? ""
        }) ?? void 0,
        h = () => (function(e) {
            let {
                user: t,
                guildId: n,
                guildAvatar: l,
                onClick: a,
                onContextMenu: s,
                onMouseDown: o,
                ref: c
            } = e;
            return (0, i.jsx)("img", {
                alt: "",
                src: l ?? t.getAvatarURL(n, 16),
                onClick: a,
                onContextMenu: s,
                onMouseDown: o,
                className: r()({
                    [y.WU]: !0,
                    [y.vk]: null != a
                }),
                ref: c
            })
        })({
            user: t,
            guildId: d.guild_id,
            guildAvatar: g,
            onClick: 1 === n ? f : I,
            onContextMenu: 1 === n ? N : T,
            ref: s
        }),
        p = 1 === n ? E : m;
    return null != a && null != p && null != s ? (0, i.jsx)(_.YNO, {
        targetElementRef: s,
        renderPopout: a,
        shouldShow: p,
        position: "right",
        onRequestClose: C,
        children: h
    }) : h()
}

function k(e, t, n, l, a) {
    let {
        message: r,
        channel: s,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: _,
        onTargetUserContextMenu: A,
        onPopoutRequestClose: m
    } = e;
    return (0, i.jsx)(D.A, {
        className: 1 === n ? y.iu : "",
        compact: !0,
        author: l,
        message: r,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: a,
        onClick: 1 === n ? _ : d,
        onContextMenu: 1 === n ? A : u,
        onPopoutRequestClose: m
    })
}
let G = () => (0, i.jsx)(_._BQ, {
    size: "xxs",
    color: "currentColor",
    className: y.M5
});

function F(e) {
    let t, {
            message: n,
            channel: a
        } = e,
        {
            analyticsLocations: s,
            newestAnalyticsLocation: c
        } = (0, T.Ay)(I.A.EXECUTED_COMMAND),
        R = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        D = l.useRef(null),
        j = l.useRef(null),
        F = l.useMemo(() => (e, t, l) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != R, "ExecutedCommand: currentUser cannot be undefined"), o()(null != a, "ExecutedCommand: channel cannot be undefined"), (0, i.jsx)(h.A, {
            ...e,
            user: t,
            currentUser: R,
            guildId: a.guild_id,
            channelId: a.id,
            messageId: n.id,
            newAnalyticsLocations: l
        })), [R, a, n.id]),
        B = l.useMemo(() => e => (o()(null != a, "ExecutedCommand: channel cannot be null"), (0, i.jsx)(P.A, {
            ...e,
            channel: a,
            messageId: n.id,
            interactionData: n.interactionData
        })), [a, n.id, n.interactionData]),
        H = (0, C.Am)(n),
        w = H?.type === A.G4.APPLICATION_COMMAND && null != H.target_user ? new p.A(H.target_user) : null,
        V = H?.type === A.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        q = (0, M.d8)(n.interaction?.user, a),
        X = (0, M.d8)(w, a),
        K = l.useMemo(() => e.compact ? (0, U.A)((0, O.i$)(d()(), "LT")) : null, [e.compact]),
        z = (0, m.Gp)(a.id),
        Y = n.interaction;
    if (null == Y || null == q) return null;
    let W = () => {
        let t = b(e, Y.user, 0, q, e => F(e, Y.user, [I.A.AVATAR]), D),
            n = k(e, Y.user, 0, q, e => F(e, Y.user));
        return (0, i.jsxs)(l.Fragment, {
            children: [t, n]
        }, "user")
    };
    if (n?.activityInstance === null || (0, g.V)(n)) t = L.intl.format(L.t["rg7U+C"], {
        userHook: W,
        commandHook: () => {
            let t = function(e, t, n) {
                let {
                    showDataPopout: l,
                    message: a,
                    onClickCommand: s,
                    onPopoutRequestClose: o
                } = e, c = a.interaction.displayName;
                return (0, i.jsx)(_.YNO, {
                    targetElementRef: n,
                    renderPopout: t,
                    shouldShow: l,
                    position: "top",
                    align: "center",
                    onRequestClose: o,
                    animation: _.YNO.Animation.FADE,
                    positionKey: null != a.interactionData ? "ready" : "loading",
                    children: e => {
                        let {
                            onClick: t,
                            ...l
                        } = e;
                        if (a.type === v.lAJ.CHAT_INPUT_COMMAND || a.type === v.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, i.jsx)(_.DUT, {
                            ...l,
                            tag: "span",
                            onClick: s,
                            innerRef: n,
                            children: (0, i.jsxs)("div", {
                                className: r()(y.lm, y.vk),
                                children: [(0, i.jsx)(_.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: y.am
                                }), c]
                            })
                        });
                        if (!(0, g.V)(a)) return (0, i.jsx)("div", {
                            className: y.p6,
                            ref: n,
                            children: c
                        });
                        {
                            let e = (0, f.kF)(c);
                            return (0, i.jsx)(_.DUT, {
                                ...l,
                                tag: "span",
                                onClick: () => {
                                    x._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, {
                                        applicationId: a.applicationId
                                    })
                                },
                                innerRef: n,
                                children: (0, i.jsxs)("div", {
                                    className: r()(y.lm, y.vk),
                                    children: [(0, i.jsx)(_.k9F, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: 10,
                                        width: 10,
                                        className: y.am
                                    }), e]
                                })
                            })
                        }
                    }
                })
            }(e, B, j);
            return (0, i.jsx)(l.Fragment, {
                children: t
            }, "command")
        }
    }), V && null != e.renderTargetMessage ? t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), e.renderTargetMessage()]
    }) : null != w && (t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), (0, i.jsx)(() => {
            if (null == w) return null;
            let t = b(e, w, 1, X, e => F(e, w, [I.A.AVATAR]), D),
                n = k(e, w, 1, X, e => F(e, w));
            return (0, i.jsxs)(l.Fragment, {
                children: [t, n]
            }, "target")
        }, {})]
    }));
    else {
        let e = () => {
            (0, N.A)({
                context: null != a ? {
                    type: "channel",
                    channel: a
                } : {
                    type: "contextless"
                },
                openInPopout: !1,
                analyticsLocation: c
            }), (0, E.LV)({
                guildId: a.guild_id
            })
        };
        t = z ? L.intl.format(L.t.kfV8WM, {
            userHook: W,
            activityHook: () => (0, i.jsx)(_.DUT, {
                tag: "span",
                onClick: e,
                children: (0, i.jsx)("div", {
                    className: r()(y.p6, y.vk),
                    children: L.intl.string(L.t.YTgRvn)
                })
            })
        }) : L.intl.format(L.t["6FeSyT"], {
            userHook: W
        })
    }
    return (0, i.jsx)(T.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            className: r()(y.JZ, y.NB, y.JE, K),
            "aria-hidden": !e.compact,
            children: t
        })
    })
}