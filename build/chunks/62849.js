/** Chunk was on 72756 **/
/** chunk id: 62849, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => T,
    P: () => M
}), t(896048), t(747238);
var r = t(627968),
    l = t(64700),
    c = t(311907),
    a = t(397927),
    i = t(442433),
    o = t(956793),
    s = t(352505),
    u = t(721592),
    d = t(235393),
    h = t(376943),
    p = t(22007),
    j = t(990474),
    f = t(232042),
    m = t(31995),
    y = t(906754),
    b = t(332173),
    g = t(37632),
    v = t(593284),
    x = t(288539),
    O = t(78377),
    w = t(95701),
    I = t(734057),
    A = t(317525),
    P = t(71393),
    k = t(147036),
    C = t(403362),
    N = t(449054),
    S = t(652215),
    E = t(73510),
    D = t(985018);
async function _(e, n, t) {
    if (null == n) return;
    if (d.A.trackDiscordLinkClicked({
            guildId: e,
            channelId: n,
            messageId: t
        }), null != e) {
        let r = P.A.getGuild(e);
        if ((null == r ? void 0 : r.joinedAt) == null) try {
            await N.Z2(e, {}, {
                channelId: n,
                messageId: t
            });
            return
        } catch (e) {}
    }
    let r = I.A.getChannel(n);
    null != r && null == t && (0, w.ay)(r.type) && (0, h.nc)(r) ? o.default.selectVoiceChannel(r.id) : (0, p.A)(S.BVt.CHANNEL(e, n, t))
}

function M(e) {
    let {
        type: n,
        value: t
    } = e;
    switch (n) {
        case "channel":
            return (0, r.jsx)(T, {
                channelId: t
            });
        case "user":
            return (0, r.jsx)(z, {
                id: t
            });
        case "role":
            return (0, r.jsx)(G, {
                id: t
            });
        case "everyone":
            return (0, r.jsx)(R, {
                roleName: "@everyone"
            });
        case "here":
            return (0, r.jsx)(R, {
                roleName: "@here"
            });
        case "game":
            return (0, r.jsx)(H, {
                id: t
            });
        case "command":
            return (0, r.jsx)(B, {
                id: t.id,
                name: t.name
            })
    }(0, C.xb)(n)
}

function T(e) {
    let {
        channelId: n,
        guildId: l,
        messageId: o
    } = e, s = (0, u.A)(n), {
        name: d,
        iconType: p,
        isForumPost: j,
        hasAccess: m
    } = (0, c.cf)([I.A], () => {
        let e = I.A.getChannel(n);
        return {
            name: null == e ? void 0 : e.name,
            iconType: (0, k.QG)(e),
            isForumPost: null == e ? void 0 : e.isForumPost(),
            hasAccess: null == e || (0, h.nc)(e)
        }
    }, [n]), y = (0, O.p)();
    if (null == p) return;
    let v = l === (null == y ? void 0 : y.guildId) || null == l,
        x = m || s.isSubscriptionGated ? v || null == d ? (0, r.jsx)(f.A, {
            iconType: p,
            children: null != d ? d : (0, r.jsx)("em", {
                children: D.intl.string(D.t.J90oLW)
            })
        }) : (0, r.jsx)(L, {
            guildId: l,
            children: d
        }) : (0, r.jsx)(f.A, {
            iconType: "locked",
            children: D.intl.string(D.t["/YzI63"])
        }),
        w = null;
    return null != o && (w = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(f.A, {
            iconType: j ? "post" : "message"
        })]
    })), (0, r.jsxs)(b.A, {
        role: "link",
        onClick: e => {
            null == e || e.stopPropagation(), _(l, n, o), (0, a.s7G)()
        },
        onContextMenu: e => {
            let l = I.A.getChannel(n);
            (0, i.L3)(e, async () => {
                let {
                    default: e
                } = await t.e("99041").then(t.bind(t, 612856));
                return t => {
                    var c, a, i;
                    return (0, r.jsx)(e, (a = function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), r.forEach(function(n) {
                                var r;
                                r = t[n], n in e ? Object.defineProperty(e, n, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[n] = r
                            })
                        }
                        return e
                    }({}, t), i = i = {
                        channel: l,
                        channelId: null != (c = null == l ? void 0 : l.id) ? c : n,
                        originalLink: null,
                        messageId: o
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t.push.apply(t, r)
                        }
                        return t
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
                    }), a))
                }
            })
        },
        className: "channelMention",
        children: [x, w]
    })
}

function L(e) {
    let {
        guildId: n,
        children: t
    } = e, l = (0, c.bG)([P.A], () => P.A.getGuild(n), [n]);
    return (0, r.jsxs)(y.A, {
        guild: l,
        children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(g.A, {}) : null, t]
    })
}

function z(e) {
    let {
        id: n
    } = e, t = (0, O.p)();
    return (0, r.jsx)(x.A, {
        className: "mention",
        userId: n,
        channelId: null == t ? void 0 : t.channelId,
        viewingChannelId: null == t ? void 0 : t.viewingChannelId,
        parsedUserId: n,
        content: "<@".concat(n, ">")
    })
}

function G(e) {
    let {
        id: n
    } = e, t = (0, O.p)(), l = null == t ? void 0 : t.guildId, a = (0, c.bG)([A.A], () => {
        var e, t;
        return null != (e = null != l ? null == (t = A.A.getRole(l, n)) ? void 0 : t.name : null) ? e : D.intl.string(D.t.sKdZ6U)
    }, [l, n]);
    return (0, r.jsx)(v.A, {
        roleId: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: "@".concat(a)
    })
}

function H(e) {
    let {
        id: n
    } = e, t = (0, O.p)();
    return s.m.useExperiment({
        location: "native markdown"
    }).enabled ? (0, r.jsx)(m.A, {
        gameId: n,
        channelId: null == t ? void 0 : t.channelId
    }) : (0, r.jsx)("span", {
        children: "<@$".concat(n, ">")
    })
}

function R(e) {
    let {
        roleName: n
    } = e, t = (0, O.p)();
    return (0, r.jsx)(v.A, {
        roleName: n,
        channelId: null == t ? void 0 : t.channelId,
        guildId: null == t ? void 0 : t.guildId,
        children: n
    })
}

function B(e) {
    let {
        id: n,
        name: t
    } = e, c = (0, O.p)(), a = l.useMemo(() => {
        let [, ...e] = t.split(" ");
        return "".concat(n).concat([...e].map(e => "".concat(E.v4).concat(e)).join(""))
    }, [n, t]), i = l.useMemo(() => ({
        type: "commandMention",
        channelId: null == c ? void 0 : c.channelId,
        commandId: n,
        commandName: t,
        commandKey: a
    }), [null == c ? void 0 : c.channelId, a, n, t]);
    return (0, r.jsx)(j.gn, {
        node: i,
        children: t
    })
}