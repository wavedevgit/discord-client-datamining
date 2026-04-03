/** chunk id: 301960 params = (module,exports,require) **/
n.d(t, {
    A: () => H
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
    T = n(793574),
    I = n(688810),
    g = n(735991),
    N = n(975412),
    f = n(168186),
    C = n(597929),
    h = n(589022),
    p = n(427157),
    S = n(287809),
    x = n(486020),
    R = n(203982),
    O = n(405269),
    M = n(763754),
    D = n(635071),
    L = n(728963),
    U = n(943815),
    P = n(652215),
    v = n(985018),
    j = n(767283);

function k(e) {
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

function y(e, t, n, l, a, s) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: A,
        showAvatarPopout: m,
        showTargetAvatarPopout: E,
        onClickAvatar: T,
        onUserContextMenu: I,
        onClickTargetAvatar: g,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: f
    } = e;
    if (c && 1 === n) return null;
    if (c && null == o.activityInstance || u || A) return (0, i.jsx)("div", {
        className: j.Cz,
        children: (0, i.jsx)(k, {
            className: j.Jx
        })
    });
    let C = x.Ay.getGuildMemberAvatarURL({
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
                    [j.WU]: !0,
                    [j.vk]: null != a
                }),
                ref: c
            })
        })({
            user: t,
            guildId: d.guild_id,
            guildAvatar: C,
            onClick: 1 === n ? g : T,
            onContextMenu: 1 === n ? N : I,
            ref: s
        }),
        p = 1 === n ? E : m;
    return null != a && null != p && null != s ? (0, i.jsx)(_.YNO, {
        targetElementRef: s,
        renderPopout: a,
        shouldShow: p,
        position: "right",
        onRequestClose: f,
        children: h
    }) : h()
}

function b(e, t, n, l, a) {
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
        className: 1 === n ? j.iu : "",
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
    className: j.M5
});

function H(e) {
    let t, {
            message: n,
            channel: a
        } = e,
        {
            analyticsLocations: s,
            newestAnalyticsLocation: c
        } = (0, I.Ay)(T.A.EXECUTED_COMMAND),
        x = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
        D = l.useRef(null),
        k = l.useRef(null),
        H = l.useMemo(() => (e, t, l) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != x, "ExecutedCommand: currentUser cannot be undefined"), o()(null != a, "ExecutedCommand: channel cannot be undefined"), (0, i.jsx)(h.A, {
            ...e,
            user: t,
            currentUser: x,
            guildId: a.guild_id,
            channelId: a.id,
            messageId: n.id,
            newAnalyticsLocations: l
        })), [x, a, n.id]),
        F = l.useMemo(() => e => (o()(null != a, "ExecutedCommand: channel cannot be null"), (0, i.jsx)(L.A, {
            ...e,
            channel: a,
            messageId: n.id,
            interactionData: n.interactionData
        })), [a, n.id, n.interactionData]),
        B = (0, f.Am)(n),
        w = B?.type === A.G4.APPLICATION_COMMAND && null != B.target_user ? new p.A(B.target_user) : null,
        V = B?.type === A.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        X = (0, M.d8)(n.interaction?.user, a),
        q = (0, M.d8)(w, a),
        K = l.useMemo(() => e.compact ? (0, U.A)((0, O.i$)(d()(), "LT")) : null, [e.compact]),
        Y = (0, m.Gp)(a.id),
        W = n.interaction;
    if (null == W || null == X) return null;
    let J = () => {
        let t = y(e, W.user, 0, X, e => H(e, W.user, [T.A.AVATAR]), D),
            n = b(e, W.user, 0, X, e => H(e, W.user));
        return (0, i.jsxs)(l.Fragment, {
            children: [t, n]
        }, "user")
    };
    if (n?.activityInstance === null || (0, C.V)(n)) t = v.intl.format(v.t["rg7U+C"], {
        userHook: J,
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
                        if (a.type === P.lAJ.CHAT_INPUT_COMMAND || a.type === P.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, i.jsx)(_.DUT, {
                            ...l,
                            tag: "span",
                            onClick: s,
                            innerRef: n,
                            children: (0, i.jsxs)("div", {
                                className: r()(j.lm, j.vk),
                                children: [(0, i.jsx)(_.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: j.am
                                }), c]
                            })
                        });
                        if (!(0, C.V)(a)) return (0, i.jsx)("div", {
                            className: j.p6,
                            ref: n,
                            children: c
                        });
                        {
                            let e = (0, g.kF)(c);
                            return (0, i.jsx)(_.DUT, {
                                ...l,
                                tag: "span",
                                onClick: () => {
                                    R._.dispatchToLastSubscribed(P.jej.OPEN_APP_LAUNCHER, {
                                        applicationId: a.applicationId
                                    })
                                },
                                innerRef: n,
                                children: (0, i.jsxs)("div", {
                                    className: r()(j.lm, j.vk),
                                    children: [(0, i.jsx)(_.k9F, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: 10,
                                        width: 10,
                                        className: j.am
                                    }), e]
                                })
                            })
                        }
                    }
                })
            }(e, F, k);
            return (0, i.jsx)(l.Fragment, {
                children: t
            }, "command")
        }
    }), V && null != e.renderTargetMessage ? t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), e.renderTargetMessage()]
    }) : null != w && (t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), (0, i.jsx)(() => {
            if (null == w) return null;
            let t = y(e, w, 1, q, e => H(e, w, [T.A.AVATAR]), D),
                n = b(e, w, 1, q, e => H(e, w));
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
        t = Y ? v.intl.format(v.t.kfV8WM, {
            userHook: J,
            activityHook: () => (0, i.jsx)(_.DUT, {
                tag: "span",
                onClick: e,
                children: (0, i.jsx)("div", {
                    className: r()(j.p6, j.vk),
                    children: v.intl.string(v.t.YTgRvn)
                })
            })
        }) : v.intl.format(v.t["6FeSyT"], {
            userHook: J
        })
    }
    return (0, i.jsx)(I.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            className: r()(j.JZ, j.NB, j.JE, K),
            "aria-hidden": !e.compact,
            children: t
        })
    })
}