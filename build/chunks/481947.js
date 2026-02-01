/** chunk id: 481947, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    Kc: () => L,
    Wr: () => w
}), n(321073), n(938796), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(172218),
    o = n(665260),
    c = n(934551),
    u = n(990078),
    d = n(397927),
    p = n(440594),
    f = n(58149),
    m = n(659974),
    g = n(863089),
    y = n(402216),
    b = n(609425),
    _ = n(73392),
    h = n(769015),
    A = n(217356),
    v = n(559405),
    O = n(790381),
    S = n(266080),
    j = n(427262),
    x = n(652215),
    I = n(806931),
    E = n(544105),
    C = n(985018),
    P = n(77615);

function N(e) {
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
let T = e => {
        let {
            hangStatusActivity: t,
            iconClassName: n,
            isSelf: l,
            onAddHangStatusClicked: i,
            userId: s
        } = e, o = e => {
            e.stopPropagation(), null == i || i()
        };
        return l && null == t ? (0, r.jsx)(d.DUT, {
            onClick: o,
            className: P.Pt,
            children: (0, r.jsx)(d.nm2, {
                color: "currentColor",
                className: a()(P.Kk, P.G8, n)
            })
        }) : (0, r.jsx)(d.DUT, {
            onClick: o,
            className: P.Pt,
            children: (0, r.jsx)(v.A, {
                userId: s,
                size: 16,
                hangStatusActivity: t,
                className: a()(P.Kk, n)
            })
        })
    },
    w = e => {
        let {
            children: t,
            collapsed: n = !1,
            className: l
        } = e;
        return (0, r.jsx)("div", {
            className: a()(l, P.p_, n ? P.GT : P.m3),
            role: "group",
            children: t
        })
    };

function L(e) {
    let {
        className: t,
        mute: n,
        localMute: l,
        localVideoDisabled: i,
        serverMute: s,
        deaf: f,
        serverDeaf: m,
        collapsed: g,
        video: b,
        isStreaming: _,
        disabled: h,
        isWatching: A,
        iconClassName: v,
        embeddedApplication: j,
        otherClientSessionType: N,
        voicePlatform: w,
        application: L,
        guildId: D,
        channelId: k,
        user: M,
        disconnected: U,
        hangStatusActivity: G,
        showHangStatus: V,
        isSelf: F,
        handleHoverHangStatus: W,
        handleHoverIcons: H,
        onAddHangStatusClicked: z
    } = e;
    if (g || h) return null;
    let K = [],
        B = function(e) {
            let {
                iconClassName: t,
                mute: n,
                localMute: l,
                serverMute: i,
                deaf: s,
                serverDeaf: o
            } = e, c = [];
            if (n) {
                let e;
                e = i || l ? d.O1p : d.z0P;
                let n = (0, r.jsx)(e, {
                    className: a()(P.Kk, t, {
                        [P.DU]: i
                    }),
                    color: "currentColor"
                });
                c.push((0, r.jsx)(u.m, {
                    text: l ? C.intl.string(C.t.Q8Uzof) : i ? C.intl.string(C.t.uLddbQ) : C.intl.string(C.t.tjtv3P),
                    children: n
                }, "mute"))
            }
            if (o || s) {
                let e = o ? d.TJE : d.cQT,
                    n = (0, r.jsx)(e, {
                        className: a()(P.Kk, t, {
                            [P.DU]: o
                        }),
                        color: "currentColor"
                    });
                c.push((0, r.jsx)(u.m, {
                    text: o ? C.intl.string(C.t.btxSdB) : C.intl.string(C.t.NjmiOL),
                    children: n
                }, "deaf"))
            }
            return c
        }({
            iconClassName: v,
            mute: n,
            localMute: l,
            serverMute: s,
            deaf: f,
            serverDeaf: m
        });
    b && (i ? K.push((0, r.jsx)(u.m, {
        text: C.intl.string(C.t["PXMZ/+"]),
        children: (0, r.jsx)(d.OCo, {
            size: "md",
            color: "currentColor",
            className: a()(P.Kk, v),
            colorClass: P.of
        })
    }, "video")) : K.push((0, r.jsx)(u.m, {
        text: C.intl.string(C.t.FlNoSV),
        children: (0, r.jsx)(d.npA, {
            size: "md",
            color: "currentColor",
            className: a()(P.Kk, v)
        })
    }, "video"))), U && K.push((0, r.jsx)(u.m, {
        text: C.intl.string(C.t.HFwRpk),
        children: (0, r.jsx)(d.EpV, {
            className: a()(P.Kk, v),
            color: d.LU0.colors.STATUS_WARNING_BACKGROUND
        })
    }, "disconnected")), null != j && K.push((0, r.jsx)(u.m, {
        text: (0, p.A)(j.name),
        children: (0, r.jsx)(d.k9F, {
            size: "md",
            color: "currentColor",
            className: a()(P.Kk, v)
        })
    }, "activity")), N === E.f$.XBOX || w === I.J7.XBOX ? K.push((0, r.jsx)(S.A, {
        className: a()(P.Kk, v)
    }, "xbox")) : N === E.f$.PLAYSTATION || w === I.J7.PLAYSTATION ? K.push((0, r.jsx)(O.A, {
        className: a()(P.Kk, v)
    }, "playstation")) : w === I.J7.QUEST && K.push((0, r.jsx)(c.VrHeadsetIcon, {
        size: "xs",
        color: "currentColor",
        className: a()(P.Kk, v)
    }, "quest")), A && K.push((0, r.jsx)(u.m, {
        text: C.intl.string(C.t["JH1SJ+"]),
        children: (0, r.jsx)(d.bMW, {
            size: "xs",
            color: "currentColor",
            className: a()(P.Kk, v)
        })
    }, "watch")), _ && K.push((0, r.jsx)(y.Ay, {
        size: y.Ay.Sizes.SMALL
    }, "stream"));
    let Y = null != L && !(0, o.Lt)(L.flags, x.gfo.EMBEDDED),
        J = null == G && Y;
    return 0 !== K.length || 0 !== B.length || V || J ? (0, r.jsxs)("div", {
        className: a()(P.Pt, t),
        children: [(0, r.jsxs)("div", {
            className: P.RL,
            onMouseEnter: () => null == H ? void 0 : H(!0),
            onMouseLeave: () => null == H ? void 0 : H(!1),
            children: [B, K]
        }), V || J ? (0, r.jsx)("div", {
            className: P.RL,
            onMouseEnter: () => null == W ? void 0 : W(!0),
            onMouseLeave: () => null == W ? void 0 : W(!1),
            children: J ? (0, r.jsx)(R, {
                application: L,
                iconClassName: v,
                guildId: D,
                channelId: k,
                userId: M.id
            }, "".concat(M.id, "-game")) : (0, r.jsx)(T, {
                userId: M.id,
                hangStatusActivity: G,
                iconClassName: v,
                isSelf: F,
                onAddHangStatusClicked: z
            })
        }) : null]
    }) : null
}
let D = /^(14256|21552)$/.test(n.j) ? function(e) {
    var t, n, l;
    let i, s, {
            avatarContainerClass: o = P.H,
            userNameClassName: c = P.gr,
            size: p = x.OSZ.SMALL,
            selected: f = !1,
            disabled: y = !1,
            isOverlay: h = !1,
            ref: v
        } = e,
        O = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i
            }
            if (i = function(e, t) {
                    if (null == e) return {};
                    var n, r, l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l
                }(e, t), Object.getOwnPropertySymbols)
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay", "ref"]),
        {
            onClick: S,
            onKeyDown: I,
            onDoubleClick: E,
            onContextMenu: T,
            onMouseLeave: w,
            onMouseDown: D,
            priority: R,
            speaking: k = !1,
            latched: M,
            collapsed: U,
            mute: G,
            serverMute: V,
            guildId: F,
            nick: W,
            isGuest: H,
            flipped: z,
            className: K,
            overlap: B,
            "aria-label": Y,
            ringing: J,
            user: Z
        } = O,
        X = (0, b.A)({
            userId: Z.id,
            guildId: F
        }),
        q = (0, _.a)({
            displayNameStyles: X
        }),
        $ = (0, g.A)(Z.id),
        Q = (0, m.v)({
            isSpeaking: k,
            isLatched: M && !G && !V,
            voiceDb: $
        });
    return (0, r.jsx)(d.sqX, {
        ref: v,
        className: a()(K, {
            [P.q7]: !0,
            [P.EF]: B,
            [P.wH]: f,
            [P.vk]: null != S,
            [P.L9]: p === x.OSZ.SMALL,
            [P.p8]: p === x.OSZ.LARGE,
            [P.r9]: !f && y,
            [P.DF]: J
        }),
        onClick: e => {
            null == S || S(e, Z)
        },
        onDoubleClick: e => {
            null == E || E(e, Z)
        },
        onContextMenu: e => {
            null == T || T(e, Z)
        },
        onMouseLeave: e => {
            null == w || w(e, Z)
        },
        onMouseDown: e => {
            null == D || D(e, Z)
        },
        onKeyDown: I,
        "aria-label": null != (t = null != Y ? Y : W) ? t : Z.username,
        focusProps: {
            offset: {
                right: 4
            }
        },
        children: (0, r.jsxs)("div", {
            className: a()(P.Qs, {
                [P.zq]: z
            }),
            children: [R && !U ? (0, r.jsx)(u.m, {
                text: C.intl.string(C.t.BVK71i),
                children: (0, r.jsx)("div", {
                    className: a()(P.G, {
                        [P.g4]: !G && !V && k
                    })
                })
            }) : null, (0, r.jsx)("div", {
                className: a()(o, P.my, {
                    [P.Jb]: p === x.OSZ.LARGE,
                    [P.dT]: p === x.OSZ.SMALL
                }),
                style: N({
                    backgroundImage: "url(".concat(Z.getAvatarURL(F, p === x.OSZ.LARGE ? 38 : 24), ")")
                }, Q)
            }), (i = (0, r.jsxs)("div", {
                className: a()(c, P.Xh, q, {
                    [P.Pi]: !G && !V && k
                }),
                children: [null != W ? W : j.Ay.getName(Z), H ? (0, r.jsxs)("span", {
                    className: P.IW,
                    children: ["\xa0", C.intl.string(C.t["pFO/Ph"])]
                }) : ""]
            }), s = {
                primaryGuild: Z.primaryGuild,
                userId: Z.id,
                contextGuildId: F,
                isOverlay: h,
                disableTooltip: !0,
                className: a()(P.fc, h && P.zW),
                profileViewedAnalytics: {
                    source: h ? x.JJy.OVERLAY : x.ThZ.VOICE_PANEL
                }
            }, !U || h ? (0, r.jsx)(A.A, (n = N({}, s), l = l = {
                children: i
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n)) : null), (0, r.jsx)(L, N({
                disabled: y
            }, O))]
        })
    })
} : null;

function R(e) {
    let {
        application: t,
        iconClassName: n,
        guildId: i,
        channelId: o,
        userId: c
    } = e, [d, p] = l.useState(!1), m = (0, s.K)(e => p(e));
    return l.useEffect(() => {
        d && f.Ay.trackWithMetadata(x.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
            channel_id: o,
            guild_id: i,
            user_id: c
        })
    }, [t.id, o, i, c, d]), (0, r.jsx)(u.m, {
        text: C.intl.formatToPlainString(C.t.Sq9xJ7, {
            game: t.name
        }),
        "aria-label": C.intl.formatToPlainString(C.t.Sq9xJ7, {
            game: t.name
        }),
        children: (0, r.jsx)(h.A, {
            ref: m,
            className: a()(P.Kk, P.Gt, n),
            game: t,
            size: h.M.XSMALL,
            onMouseEnter: () => {
                f.Ay.trackWithMetadata(x.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                    channel_id: o,
                    guild_id: i,
                    game_name: t.name,
                    user_id: c
                })
            }
        })
    })
}