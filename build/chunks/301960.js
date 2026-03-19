/** chunk id: 301960 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(284009),
    o = n.n(s),
    c = n(989349),
    d = n.n(c),
    u = n(311907),
    _ = n(397927),
    m = n(155718),
    A = n(811024),
    E = n(795816),
    I = n(793574),
    T = n(688810),
    f = n(735991),
    N = n(975412),
    C = n(168186),
    g = n(597929),
    h = n(589022),
    p = n(427157),
    R = n(287809),
    x = n(486020),
    S = n(203982),
    O = n(405269),
    M = n(763754),
    D = n(635071),
    P = n(728963),
    U = n(943815),
    v = n(652215),
    L = n(985018),
    j = n(222590);

function y(e) {
    let {
        width: t = 6,
        height: n = 10,
        color: a = "currentColor",
        className: l,
        foreground: r
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
            className: r,
            fill: a
        })
    })
}

function b(e, t, n, a, l, s) {
    let {
        message: o,
        compact: c,
        channel: d,
        isInteractionUserBlocked: u,
        isInteractionUserIgnored: m,
        showAvatarPopout: A,
        showTargetAvatarPopout: E,
        onClickAvatar: I,
        onUserContextMenu: T,
        onClickTargetAvatar: f,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: C
    } = e;
    if (c && 1 === n) return null;
    if (c && null == o.activityInstance || u || m) return (0, i.jsx)("div", {
        className: j.Cz,
        children: (0, i.jsx)(y, {
            className: j.Jx
        })
    });
    let g = x.Ay.getGuildMemberAvatarURL({
            avatar: a.guildMemberAvatar ?? void 0,
            userId: t.id,
            guildId: d?.guild_id ?? ""
        }) ?? void 0,
        h = () => (function(e) {
            let {
                user: t,
                guildId: n,
                guildAvatar: a,
                onClick: l,
                onContextMenu: s,
                onMouseDown: o,
                ref: c
            } = e;
            return (0, i.jsx)("img", {
                alt: "",
                src: a ?? t.getAvatarURL(n, 16),
                onClick: l,
                onContextMenu: s,
                onMouseDown: o,
                className: r()({
                    [j.WU]: !0,
                    [j.vk]: null != l
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
        p = 1 === n ? E : A;
    return null != l && null != p && null != s ? (0, i.jsx)(_.YNO, {
        targetElementRef: s,
        renderPopout: l,
        shouldShow: p,
        position: "right",
        onRequestClose: C,
        children: h
    }) : h()
}

function k(e, t, n, a, l) {
    let {
        message: r,
        channel: s,
        showUsernamePopout: o,
        showTargetUsernamePopout: c,
        onClickUsername: d,
        onUserContextMenu: u,
        onClickTargetUsername: _,
        onTargetUserContextMenu: m,
        onPopoutRequestClose: A
    } = e;
    return (0, i.jsx)(D.A, {
        className: 1 === n ? j.iu : "",
        compact: !0,
        author: a,
        message: r,
        channel: s,
        userOverride: t,
        showPopout: 1 === n ? c : o,
        renderPopout: l,
        onClick: 1 === n ? _ : d,
        onContextMenu: 1 === n ? m : u,
        onPopoutRequestClose: A
    })
}
let G = () => (0, i.jsx)(_._BQ, {
    size: "xxs",
    color: "currentColor",
    className: j.M5
});

function F(e) {
    let t, {
            message: n,
            channel: l
        } = e,
        {
            analyticsLocations: s,
            newestAnalyticsLocation: c
        } = (0, T.Ay)(I.A.EXECUTED_COMMAND),
        x = (0, u.bG)([R.default], () => R.default.getCurrentUser()),
        D = a.useRef(null),
        y = a.useRef(null),
        F = a.useMemo(() => (e, t, a) => (o()(null != t, "ExecutedCommand: user cannot be undefined"), o()(null != x, "ExecutedCommand: currentUser cannot be undefined"), o()(null != l, "ExecutedCommand: channel cannot be undefined"), (0, i.jsx)(h.A, {
            ...e,
            user: t,
            currentUser: x,
            guildId: l.guild_id,
            channelId: l.id,
            messageId: n.id,
            newAnalyticsLocations: a
        })), [x, l, n.id]),
        B = a.useMemo(() => e => (o()(null != l, "ExecutedCommand: channel cannot be null"), (0, i.jsx)(P.A, {
            ...e,
            channel: l,
            messageId: n.id,
            interactionData: n.interactionData
        })), [l, n.id, n.interactionData]),
        H = (0, C.Am)(n),
        w = H?.type === m.G4.APPLICATION_COMMAND && null != H.target_user ? new p.A(H.target_user) : null,
        V = H?.type === m.G4.APPLICATION_COMMAND && null != n.messageReference && null != e.renderTargetMessage,
        q = (0, M.d8)(n.interaction?.user, l),
        X = (0, M.d8)(w, l),
        K = a.useMemo(() => e.compact ? (0, U.A)((0, O.i$)(d()(), "LT")) : null, [e.compact]),
        Y = (0, A.Gp)(l.id),
        z = n.interaction;
    if (null == z || null == q) return null;
    let J = () => {
        let t = b(e, z.user, 0, q, e => F(e, z.user, [I.A.AVATAR]), D),
            n = k(e, z.user, 0, q, e => F(e, z.user));
        return (0, i.jsxs)(a.Fragment, {
            children: [t, n]
        }, "user")
    };
    if (n?.activityInstance === null || (0, g.V)(n)) t = L.intl.format(L.t["rg7U+C"], {
        userHook: J,
        commandHook: () => {
            let t = function(e, t, n) {
                let {
                    showDataPopout: a,
                    message: l,
                    onClickCommand: s,
                    onPopoutRequestClose: o
                } = e, c = l.interaction.displayName;
                return (0, i.jsx)(_.YNO, {
                    targetElementRef: n,
                    renderPopout: t,
                    shouldShow: a,
                    position: "top",
                    align: "center",
                    onRequestClose: o,
                    animation: _.YNO.Animation.FADE,
                    positionKey: null != l.interactionData ? "ready" : "loading",
                    children: e => {
                        let {
                            onClick: t,
                            ...a
                        } = e;
                        if (l.type === v.lAJ.CHAT_INPUT_COMMAND || l.type === v.lAJ.INTERACTION_PREMIUM_UPSELL) return (0, i.jsx)(_.DUT, {
                            ...a,
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
                        if (!(0, g.V)(l)) return (0, i.jsx)("div", {
                            className: j.p6,
                            ref: n,
                            children: c
                        });
                        {
                            let e = (0, f.kF)(c);
                            return (0, i.jsx)(_.DUT, {
                                ...a,
                                tag: "span",
                                onClick: () => {
                                    S._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, {
                                        applicationId: l.applicationId
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
            }(e, B, y);
            return (0, i.jsx)(a.Fragment, {
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
            return (0, i.jsxs)(a.Fragment, {
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
            }), (0, E.LV)({
                guildId: l.guild_id
            })
        };
        t = Y ? L.intl.format(L.t.kfV8WM, {
            userHook: J,
            activityHook: () => (0, i.jsx)(_.DUT, {
                tag: "span",
                onClick: e,
                children: (0, i.jsx)("div", {
                    className: r()(j.p6, j.vk),
                    children: L.intl.string(L.t.YTgRvn)
                })
            })
        }) : L.intl.format(L.t["6FeSyT"], {
            userHook: J
        })
    }
    return (0, i.jsx)(T.f5, {
        value: s,
        children: (0, i.jsx)("div", {
            className: r()(j.JZ, j.NB, j.JE, K),
            "aria-hidden": !e.compact,
            children: t
        })
    })
}