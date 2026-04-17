/** chunk id: 301960 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => F
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    u = n.n(c),
    d = n(311907),
    _ = n(397927),
    A = n(155718),
    E = n(811024),
    m = n(795816),
    I = n(793574),
    T = n(688810),
    g = n(735991),
    N = n(975412),
    f = n(168186),
    C = n(597929),
    p = n(589022),
    h = n(427157),
    S = n(287809),
    R = n(486020),
    x = n(203982),
    O = n(405269),
    M = n(763754),
    D = n(635071),
    U = n(728963),
    P = n(943815),
    L = n(652215),
    v = n(985018),
    b = n(334211);

function y(e) {
    let {
        width: t = 6,
        height: n = 10,
        color: r = "currentColor",
        className: l,
        foreground: s
    } = e;
    return (0, i.jsx)("svg", {
        className: l,
        width: t,
        height: n,
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
            className: s,
            fill: r
        })
    })
}

function k(e, t, n, r, l, a) {
    let {
        message: o,
        compact: c,
        channel: u,
        isInteractionUserBlocked: d,
        isInteractionUserIgnored: A,
        showAvatarPopout: E,
        showTargetAvatarPopout: m,
        onClickAvatar: I,
        onUserContextMenu: T,
        onClickTargetAvatar: g,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: f
    } = e;
    if (c && 1 === n) return null;
    if (c && null == o.activityInstance || d || A) return (0, i.jsx)("div", {
        className: b.Cz,
        children: (0, i.jsx)(y, {
            className: b.Jx
        })
    });
    let C = R.Ay.getGuildMemberAvatarURL({
            avatar: r.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: u?.guild_id ?? ""
        }) ?? void 0,
        p = () => (function(e) {
            let {
                user: t,
                guildId: n,
                guildAvatar: r,
                onClick: l,
                onContextMenu: a,
                onMouseDown: o,
                ref: c
            } = e;
            return (0, i.jsx)("img", {
                alt: "",
                src: r ?? t.getAvatarURL(n, 16),
                onClick: l,
                onContextMenu: a,
                onMouseDown: o,
                className: s()({
                    [b.WU]: !0,
                    [b.vk]: null != l
                }),
                ref: c
            })
        })({
            user: t,
            guildId: u.guild_id,
            guildAvatar: C,
            onClick: 1 === n ? g : I,
            onContextMenu: 1 === n ? N : T,
            ref: a
        }),
        h = 1 === n ? m : E;
    return null != l && null != h && null != a ? (0, i.jsx)(_.YNO, {
        targetElementRef: a,
        renderPopout: l,
        shouldShow: h,
        position: "right",
        onRequestClose: f,
        children: p
    }) : p()
}

function j(e, t, n, r, l) {
    let {
        message: s,
        channel: a,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: u,
        onUserContextMenu: d,
        onClickTargetUsername: _,
        onTargetUserContextMenu: A,
        onPopoutRequestClose: E
    } = e;
    return (0, i.jsx)(D.A, {
        className: 1 === n ? b.iu : "",
        compact: !0,
        author: r,
        message: s,
        channel: a,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: l,
        onClick: 1 === n ? _ : u,
        onContextMenu: 1 === n ? A : d,
        onPopoutRequestClose: E
    })
}
let G = () => (0, i.jsx)(_._BQ, {
    size: "xxs",
    color: "currentColor",
    className: b.M5
});

function F(e) {
    let t, {
            message: n,
            channel: l
        } = e,
        {
            analyticsLocations: a,
            newestAnalyticsLocation: c
        } = (0, T.Ay)(I.A.EXECUTED_COMMAND),
        R = (0, d.bG)([S.default], () => S.default.getCurrentUser()),
        D = r.useRef(null),
        y = r.useRef(null),
        F = r.useMemo(() => (e, t, r) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != R, "ExecutedCommand: currentUser cannot be undefined"), o()(null != l, "ExecutedCommand: channel cannot be undefined"), (0, i.jsx)(p.A, {
            ...e,
            user: t,
            currentUser: R,
            guildId: l.guild_id,
            channelId: l.id,
            messageId: n.id,
            newAnalyticsLocations: r
        })), [R, l, n.id]),
        H = r.useMemo(() => e => (o()(null != l, "ExecutedCommand: channel cannot be null"), (0, i.jsx)(U.A, {
            ...e,
            channel: l,
            messageId: n.id,
            interactionData: n.interactionData
        })), [l, n.id, n.interactionData]),
        w = (0, f.Am)(n),
        B = w?.type === A.G4.APPLICATION_COMMAND && null != w.target_user ? new h.A(w.target_user) : null,
        X = w?.type === A.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        V = (0, M.d8)(n.interaction?.user, l),
        q = (0, M.d8)(B, l),
        K = r.useMemo(() => e.compact ? (0, P.A)((0, O.i$)(u()(), "LT")) : null, [e.compact]),
        Y = (0, E.Gp)(l.id),
        W = n.interaction;
    if (null == W || null == V) return null;
    let J = () => {
        let t = k(e, W.user, 0, V, e => F(e, W.user, [I.A.AVATAR]), D),
            n = j(e, W.user, 0, V, e => F(e, W.user));
        return (0, i.jsxs)(r.Fragment, {
            children: [t, n]
        }, "user")
    };
    if (n?.activityInstance === null || (0, C.V)(n)) t = v.intl.format(v.t["rg7U+C"], {
        userHook: J,
        commandHook: () => {
            let t = function(e, t, n) {
                let {
                    showDataPopout: r,
                    message: l,
                    onClickCommand: a,
                    onPopoutRequestClose: o
                } = e, c = l.interaction.displayName;
                return (0, i.jsx)(_.YNO, {
                    targetElementRef: n,
                    renderPopout: t,
                    shouldShow: r,
                    position: "top",
                    align: "center",
                    onRequestClose: o,
                    animation: _.YNO.Animation.FADE,
                    positionKey: null != l.interactionData ? "ready" : "loading",
                    children: e => {
                        let {
                            onClick: t,
                            ...r
                        } = e;
                        if (l.type === L.lAJ.CHAT_INPUT_COMMAND || l.type === L.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, i.jsx)(_.DUT, {
                            ...r,
                            tag: "span",
                            onClick: a,
                            innerRef: n,
                            children: (0, i.jsxs)("div", {
                                className: s()(b.lm, b.vk),
                                children: [(0, i.jsx)(_.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: b.am
                                }), c]
                            })
                        });
                        if (!(0, C.V)(l)) return (0, i.jsx)("div", {
                            className: b.p6,
                            ref: n,
                            children: c
                        });
                        {
                            let e = (0, g.kF)(c);
                            return (0, i.jsx)(_.DUT, {
                                ...r,
                                tag: "span",
                                onClick: () => {
                                    x._.dispatchToLastSubscribed(L.jej.OPEN_APP_LAUNCHER, {
                                        applicationId: l.applicationId
                                    })
                                },
                                innerRef: n,
                                children: (0, i.jsxs)("div", {
                                    className: s()(b.lm, b.vk),
                                    children: [(0, i.jsx)(_.k9F, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: 10,
                                        width: 10,
                                        className: b.am
                                    }), e]
                                })
                            })
                        }
                    }
                })
            }(e, H, y);
            return (0, i.jsx)(r.Fragment, {
                children: t
            }, "command")
        }
    }), X && null != e.renderTargetMessage ? t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), e.renderTargetMessage()]
    }) : null != B && (t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), (0, i.jsx)(() => {
            if (null == B) return null;
            let t = k(e, B, 1, q, e => F(e, B, [I.A.AVATAR]), D),
                n = j(e, B, 1, q, e => F(e, B));
            return (0, i.jsxs)(r.Fragment, {
                children: [t, n]
            }, "target")
        }, {})]
    }));
    else {
        let e = () => {
            (0, N.A)({
                context: null != l ? {
                    type: "channel",
                    channel: l
                } : {
                    type: "contextless"
                },
                openInPopout: !1,
                analyticsLocation: c
            }), (0, m.LV)({
                guildId: l.guild_id
            })
        };
        t = Y ? v.intl.format(v.t.kfV8WM, {
            userHook: J,
            activityHook: () => (0, i.jsx)(_.DUT, {
                tag: "span",
                onClick: e,
                children: (0, i.jsx)("div", {
                    className: s()(b.p6, b.vk),
                    children: v.intl.string(v.t.YTgRvn)
                })
            })
        }) : v.intl.format(v.t["6FeSyT"], {
            userHook: J
        })
    }
    return (0, i.jsx)(T.f5, {
        value: a,
        children: (0, i.jsx)("div", {
            className: s()(b.JZ, b.NB, b.JE, K),
            "aria-hidden": !e.compact,
            children: t
        })
    })
}