/** chunk id: 433560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => V,
    d: () => z
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(205693),
    u = n(435371),
    c = n(397927),
    d = n(827343),
    h = n(442433),
    p = n(391973),
    f = n(401843),
    g = n(520698),
    m = n(164617),
    y = n(402216),
    A = n(652896),
    v = n(607407),
    b = n(534400),
    E = n(267102),
    O = n(401901),
    x = n(203355),
    _ = n(110234),
    S = n(616356),
    I = n(961350),
    j = n(430452),
    T = n(287809),
    C = n(562153),
    N = n(810412),
    w = n(589051),
    P = n(761661),
    D = n(652215),
    R = n(985018),
    k = n(444638);

function M(e) {
    let {
        participant: t
    } = e;
    return (0, i.jsx)(u.m_, {
        text: R.intl.string(R.t["4EGMWL"]),
        children: (0, i.jsx)(c.DUT, {
            className: k.IF,
            onClick: e => {
                (0, f.vN)((0, A._z)(t.stream), !1), e.stopPropagation(), (0, N.YX)(D.uss.GO_LIVE, {
                    type: N.Z5.SCREEN_SHARE,
                    value: N.IP.DISABLED,
                    userId: t.user.id
                })
            },
            children: (0, i.jsx)(c.GT3, {
                size: "sm",
                color: c.LU0.colors.WHITE
            })
        })
    })
}

function L(e) {
    let {
        participant: t
    } = e, n = t.user.id, l = (0, s.bG)([j.A], () => {
        let e = (0, g.A)(t.type);
        return j.A.isLocalMute(t.user.id, e)
    }, [t]), a = (0, s.bG)([I.default], () => I.default.getId()), {
        hasVideo: h
    } = (0, _.A)(t, a), p = l && h, f = r.useCallback(() => {
        d.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(u.m_, {
        text: p ? R.intl.string(R.t.YqAjXy) : R.intl.string(R.t.w4m945),
        children: (0, i.jsx)(c.DUT, {
            className: k.IF,
            onClick: e => {
                e.stopPropagation(), (0, N.YX)(D.uss.GO_LIVE, {
                    type: N.Z5.AUDIO,
                    value: p ? N.IP.ENABLED : N.IP.DISABLED,
                    userId: t.user.id
                }), f()
            },
            children: p ? (0, i.jsx)(c._RO, {
                size: "sm",
                color: "currentColor"
            }) : (0, i.jsx)(c.HKD, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}

function U(e, t) {
    return r => {
        (0, N.YX)(D.uss.GO_LIVE, {
            type: N.Z5.GO_LIVE,
            value: N.IP.SETTINGS_OPENED,
            userId: e.user.id
        }), r.stopPropagation(), (0, h.L3)(r, async () => {
            let {
                default: r
            } = await n.e("61361").then(n.bind(n, 663912));
            return n => {
                var l, a;
                return (0, i.jsx)(r, (l = function(e) {
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
                }({}, n), a = a = {
                    stream: e.stream,
                    exitFullscreen: () => {},
                    appContext: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, i)
                    }
                    return n
                })(Object(a)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                }), l))
            }
        })
    }
}

function G(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: r
    } = e, l = (0, E.Us)(), o = n.user, d = (0, s.bG)([T.default], () => {
        var e;
        return null != (e = T.default.getUser(o.id)) ? e : o
    }, [o]), h = t ? R.intl.string(R.t.tLxK4l) : R.intl.string(R.t.E5RDnK), {
        enabled: p
    } = (0, w.QC)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: a()(k.MI, {
                [k.te]: t
            })
        }), !t && (0, i.jsx)("div", {
            className: k.TP,
            children: (0, i.jsx)(u.m_, {
                text: h,
                children: (0, i.jsxs)(c.DUT, {
                    className: k.kx,
                    onClick: () => {
                        (0, f.A9)(n.stream, {
                            forceMultiple: !0,
                            noFocus: !0
                        }), r(), (0, N.YX)(D.uss.GO_LIVE, {
                            type: N.Z5.GO_LIVE,
                            value: N.IP.ENABLED,
                            userId: n.user.id
                        })
                    },
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: R.intl.string(R.t.I6JG46)
                    }), (0, i.jsx)(c.vAm, {
                        size: "sm",
                        color: "currentColor"
                    })]
                })
            })
        }), (0, i.jsxs)("div", {
            className: k.ne,
            children: [(0, i.jsx)("div", {
                className: k.fL,
                children: (0, i.jsxs)("div", {
                    className: k.K8,
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: k.yb,
                        children: C.Ay.getName(n.stream.guildId, n.stream.channelId, o)
                    }), (0, i.jsx)(b.Ay, {
                        primaryGuild: d.primaryGuild,
                        userId: d.id,
                        containerClassName: k.Mp,
                        inline: !1,
                        onShowProfile: () => {
                            (0, N.YX)(D.uss.GO_LIVE, {
                                type: N.Z5.GO_LIVE,
                                value: N.IP.GUILD_PROFILE_OPENED,
                                userId: n.user.id
                            })
                        }
                    })]
                })
            }), (0, i.jsx)("div", {
                className: k.FO,
                children: t && (0, i.jsxs)(i.Fragment, {
                    children: [p && (0, i.jsx)(M, {
                        participant: n
                    }), (0, i.jsx)(L, {
                        participant: n
                    }), (0, i.jsx)(u.m_, {
                        text: R.intl.string(R.t["3D5yo/"]),
                        children: (0, i.jsx)(c.DUT, {
                            className: k.IF,
                            onClick: U(n, l),
                            children: (0, i.jsx)(c.jNK, {
                                size: "sm",
                                color: "currentColor"
                            })
                        })
                    })]
                })
            })]
        })]
    })
}
let V = new Set([D.XYD.ENDED, D.XYD.FAILED, D.XYD.PAUSED]),
    z = r.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: a
        } = e, o = (0, s.bG)([S.A], () => S.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, E.Us)(), d = null != o && V.has(o.state), h = null != o, f = (0, P.dh)(t.stream), g = (0, P.XG)(t.stream);
        return !h && r || d ? null : (0, i.jsxs)("div", {
            className: k.Vs,
            children: [h && !r && (0, i.jsx)(y.Ay, {
                size: y.Ay.Sizes.SMALL,
                className: k.Ok
            }), h ? (0, i.jsx)("div", {
                className: k.X$,
                children: (0, i.jsx)(c.sqX, {
                    "aria-label": R.intl.formatToPlainString(R.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: U(t, u),
                    className: k.X$,
                    style: {
                        transform: "scale(".concat(f, ")")
                    },
                    children: (0, i.jsx)(x.A, {
                        participant: t,
                        width: n,
                        fit: null != g ? g : O.$.CONTAIN,
                        popoutType: m.N.OVERLAY,
                        focused: !r,
                        selected: !1,
                        wrapperClassName: r ? k.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: k.Rh,
                children: (0, i.jsx)(v.A, {
                    noText: !0,
                    className: k.HL,
                    stream: t.stream
                })
            }), r ? null : (0, i.jsx)(G, {
                participant: t,
                hasActiveStream: h,
                onEnablePin: () => {
                    a || (0, p.v0)(l)
                }
            })]
        })
    })