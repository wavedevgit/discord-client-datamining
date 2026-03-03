/** chunk id: 301960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
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
    m = n(397927),
    _ = n(155718),
    A = n(811024),
    f = n(795816),
    h = n(793574),
    g = n(688810),
    E = n(735991),
    p = n(975412),
    x = n(168186),
    C = n(597929),
    I = n(589022),
    T = n(427157),
    N = n(287809),
    S = n(486020),
    R = n(203982),
    v = n(405269),
    M = n(763754),
    j = n(635071),
    O = n(728963),
    b = n(943815),
    y = n(652215),
    L = n(985018),
    D = n(679740);

function U(e) {
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

function P(e, t, n, l, a, s) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: _,
        showAvatarPopout: A,
        showTargetAvatarPopout: f,
        onClickAvatar: h,
        onUserContextMenu: g,
        onClickTargetAvatar: E,
        onTargetUserContextMenu: p,
        onPopoutRequestClose: x
    } = e;
    if (c && 1 === n) return null;
    if (c && null == o.activityInstance || u || _) return (0, i.jsx)("div", {
        className: D.Cz,
        children: (0, i.jsx)(U, {
            className: D.Jx
        })
    });
    let C = S.Ay.getGuildMemberAvatarURL({
            avatar: l.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: d?.guild_id ?? ""
        }) ?? void 0,
        I = () => (function(e) {
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
                    [D.WU]: !0,
                    [D.vk]: null != a
                }),
                ref: c
            })
        })({
            user: t,
            guildId: d.guild_id,
            guildAvatar: C,
            onClick: 1 === n ? E : h,
            onContextMenu: 1 === n ? p : g,
            ref: s
        }),
        T = 1 === n ? f : A;
    return null != a && null != T && null != s ? (0, i.jsx)(m.YNO, {
        targetElementRef: s,
        renderPopout: a,
        shouldShow: T,
        position: "right",
        onRequestClose: x,
        children: I
    }) : I()
}

function k(e, t, n, l, a) {
    let {
        message: r,
        channel: s,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: m,
        onTargetUserContextMenu: _,
        onPopoutRequestClose: A
    } = e;
    return (0, i.jsx)(j.A, {
        className: 1 === n ? D.iu : "",
        compact: !0,
        author: l,
        message: r,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: a,
        onClick: 1 === n ? m : d,
        onContextMenu: 1 === n ? _ : u,
        onPopoutRequestClose: A
    })
}
let G = () => (0, i.jsx)(m._BQ, {
    size: "xxs",
    color: "currentColor",
    className: D.M5
});

function w(e) {
    let t, {
            message: n,
            channel: a
        } = e,
        {
            analyticsLocations: s,
            newestAnalyticsLocation: c
        } = (0, g.Ay)(h.A.EXECUTED_COMMAND),
        S = (0, u.bG)([N.default], () => N.default.getCurrentUser()),
        j = l.useRef(null),
        U = l.useRef(null),
        w = l.useMemo(() => (e, t, l) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != S, "ExecutedCommand: currentUser cannot be undefined"), o()(null != a, "ExecutedCommand: channel cannot be undefined"), (0, i.jsx)(I.A, {
            ...e,
            user: t,
            currentUser: S,
            guildId: a.guild_id,
            channelId: a.id,
            messageId: n.id,
            newAnalyticsLocations: l
        })), [S, a, n.id]),
        F = l.useMemo(() => e => (o()(null != a, "ExecutedCommand: channel cannot be null"), (0, i.jsx)(O.A, {
            ...e,
            channel: a,
            messageId: n.id,
            interactionData: n.interactionData
        })), [a, n.id, n.interactionData]),
        H = (0, x.Am)(n),
        B = H?.type === _.G4.APPLICATION_COMMAND && null != H.target_user ? new T.A(H.target_user) : null,
        V = H?.type === _.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        z = (0, M.d8)(n.interaction?.user, a),
        J = (0, M.d8)(B, a),
        K = l.useMemo(() => e.compact ? (0, b.A)((0, v.i$)(d()(), "LT")) : null, [e.compact]),
        Y = (0, A.Gp)(a.id),
        W = n.interaction;
    if (null == W || null == z) return null;
    let Q = () => {
        let t = P(e, W.user, 0, z, e => w(e, W.user, [h.A.AVATAR]), j),
            n = k(e, W.user, 0, z, e => w(e, W.user));
        return (0, i.jsxs)(l.Fragment, {
            children: [t, n]
        }, "user")
    };
    if (n?.activityInstance === null || (0, C.V)(n)) t = L.intl.format(L.t["rg7U+C"], {
        userHook: Q,
        commandHook: () => {
            let t = function(e, t, n) {
                let {
                    showDataPopout: l,
                    message: a,
                    onClickCommand: s,
                    onPopoutRequestClose: o
                } = e, c = a.interaction.displayName;
                return (0, i.jsx)(m.YNO, {
                    targetElementRef: n,
                    renderPopout: t,
                    shouldShow: l,
                    position: "top",
                    align: "center",
                    onRequestClose: o,
                    animation: m.YNO.Animation.FADE,
                    positionKey: null != a.interactionData ? "ready" : "loading",
                    children: e => {
                        let {
                            onClick: t,
                            ...l
                        } = e;
                        if (a.type === y.lAJ.CHAT_INPUT_COMMAND || a.type === y.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, i.jsx)(m.DUT, {
                            ...l,
                            tag: "span",
                            onClick: s,
                            innerRef: n,
                            children: (0, i.jsxs)("div", {
                                className: r()(D.lm, D.vk),
                                children: [(0, i.jsx)(m.k9F, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 10,
                                    width: 10,
                                    className: D.am
                                }), c]
                            })
                        });
                        if (!(0, C.V)(a)) return (0, i.jsx)("div", {
                            className: D.p6,
                            ref: n,
                            children: c
                        });
                        {
                            let e = (0, E.kF)(c);
                            return (0, i.jsx)(m.DUT, {
                                ...l,
                                tag: "span",
                                onClick: () => {
                                    R._.dispatchToLastSubscribed(y.jej.OPEN_APP_LAUNCHER, {
                                        applicationId: a.applicationId
                                    })
                                },
                                innerRef: n,
                                children: (0, i.jsxs)("div", {
                                    className: r()(D.lm, D.vk),
                                    children: [(0, i.jsx)(m.k9F, {
                                        size: "custom",
                                        color: "currentColor",
                                        height: 10,
                                        width: 10,
                                        className: D.am
                                    }), e]
                                })
                            })
                        }
                    }
                })
            }(e, F, U);
            return (0, i.jsx)(l.Fragment, {
                children: t
            }, "command")
        }
    }), V && null != e.renderTargetMessage ? t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), e.renderTargetMessage()]
    }) : null != B && (t = (0, i.jsxs)(i.Fragment, {
        children: [t, (0, i.jsx)(G, {}), (0, i.jsx)(() => {
            if (null == B) return null;
            let t = P(e, B, 1, J, e => w(e, B, [h.A.AVATAR]), j),
                n = k(e, B, 1, J, e => w(e, B));
            return (0, i.jsxs)(l.Fragment, {
                children: [t, n]
            }, "target")
        }, {})]
    }));
    else {
        let e = () => {
            (0, p.A)({
                context: null != a ? {
                    type: "channel",
                    channel: a
                } : {
                    type: "contextless"
                },
                openInPopout: !1,
                analyticsLocation: c
            }), (0, f.LV)({
                guildId: a.guild_id
            })
        };
        t = Y ? L.intl.format(L.t.kfV8WM, {
            userHook: Q,
            activityHook: () => (0, i.jsx)(m.DUT, {
                tag: "span",
                onClick: e,
                children: (0, i.jsx)("div", {
                    className: r()(D.p6, D.vk),
                    children: L.intl.string(L.t.YTgRvn)
                })
            })
        }) : L.intl.format(L.t["6FeSyT"], {
            userHook: Q
        })
    }
    return (0, i.jsx)(g.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            className: r()(D.JZ, D.NB, D.JE, K),
            "aria-hidden": !e.compact,
            children: t
        })
    })
}