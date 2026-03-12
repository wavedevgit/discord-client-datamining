/** chunk id: 433560 params = (module,exports,require) **/
n.d(t, {
    O: () => V,
    d: () => U
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(417597),
    o = n(205693),
    d = n(435371),
    u = n(397927),
    c = n(827343),
    h = n(442433),
    g = n(391973),
    m = n(401843),
    p = n(520698),
    A = n(164617),
    x = n(402216),
    E = n(652896),
    f = n(607407),
    S = n(534400),
    I = n(267102),
    T = n(401901),
    v = n(203355),
    C = n(110234),
    j = n(616356),
    y = n(961350),
    w = n(430452),
    O = n(287809),
    _ = n(562153),
    N = n(810412),
    b = n(589051),
    R = n(761661),
    M = n(652215),
    L = n(985018),
    z = n(997388);

function D(e) {
    let {
        participant: t
    } = e;
    return (0, i.jsx)(d.m_, {
        text: L.intl.string(L.t["4EGMWL"]),
        children: (0, i.jsx)(u.DUT, {
            className: z.IF,
            onClick: e => {
                (0, m.vN)((0, E._z)(t.stream), !1), e.stopPropagation(), (0, N.YX)(M.uss.GO_LIVE, {
                    type: N.Z5.SCREEN_SHARE,
                    value: N.IP.DISABLED,
                    userId: t.user.id
                })
            },
            children: (0, i.jsx)(u.GT3, {
                size: "sm",
                color: u.LU0.colors.WHITE
            })
        })
    })
}

function k(e) {
    let {
        participant: t
    } = e, n = t.user.id, l = (0, a.bG)([w.Ay], () => {
        let e = (0, p.A)(t.type);
        return w.Ay.isLocalMute(t.user.id, e)
    }, [t]), r = (0, a.bG)([y.default], () => y.default.getId()), {
        hasVideo: h
    } = (0, C.A)(t, r), g = l && h, m = s.useCallback(() => {
        c.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(d.m_, {
        text: g ? L.intl.string(L.t.YqAjXy) : L.intl.string(L.t.w4m945),
        children: (0, i.jsx)(u.DUT, {
            className: z.IF,
            onClick: e => {
                e.stopPropagation(), (0, N.YX)(M.uss.GO_LIVE, {
                    type: N.Z5.AUDIO,
                    value: g ? N.IP.ENABLED : N.IP.DISABLED,
                    userId: t.user.id
                }), m()
            },
            children: g ? (0, i.jsx)(u._RO, {
                size: "sm",
                color: "currentColor"
            }) : (0, i.jsx)(u.HKD, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}

function P(e, t) {
    return s => {
        (0, N.YX)(M.uss.GO_LIVE, {
            type: N.Z5.GO_LIVE,
            value: N.IP.SETTINGS_OPENED,
            userId: e.user.id
        }), s.stopPropagation(), (0, h.L3)(s, async () => {
            let {
                default: s
            } = await n.e("61361").then(n.bind(n, 663912));
            return n => (0, i.jsx)(s, {
                ...n,
                stream: e.stream,
                exitFullscreen: () => {},
                appContext: t
            })
        })
    }
}

function G(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: s
    } = e, l = (0, I.Us)(), o = n.user, c = (0, a.bG)([O.default], () => O.default.getUser(o.id) ?? o, [o]), h = t ? L.intl.string(L.t.tLxK4l) : L.intl.string(L.t.E5RDnK), {
        enabled: g
    } = (0, b.QC)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: r()(z.MI, {
                [z.te]: t
            })
        }), !t && (0, i.jsx)("div", {
            className: z.TP,
            children: (0, i.jsx)(d.m_, {
                text: h,
                children: (0, i.jsxs)(u.DUT, {
                    className: z.kx,
                    onClick: () => {
                        (0, m.A9)(n.stream, {
                            forceMultiple: !0,
                            noFocus: !0
                        }), s(), (0, N.YX)(M.uss.GO_LIVE, {
                            type: N.Z5.GO_LIVE,
                            value: N.IP.ENABLED,
                            userId: n.user.id
                        })
                    },
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: L.intl.string(L.t.I6JG46)
                    }), (0, i.jsx)(u.vAm, {
                        size: "sm",
                        color: "currentColor"
                    })]
                })
            })
        }), (0, i.jsxs)("div", {
            className: z.ne,
            children: [(0, i.jsx)("div", {
                className: z.fL,
                children: (0, i.jsxs)("div", {
                    className: z.K8,
                    children: [(0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: z.yb,
                        children: _.Ay.getName(n.stream.guildId, n.stream.channelId, o)
                    }), (0, i.jsx)(S.Ay, {
                        primaryGuild: c.primaryGuild,
                        userId: c.id,
                        containerClassName: z.Mp,
                        inline: !1,
                        onShowProfile: () => {
                            (0, N.YX)(M.uss.GO_LIVE, {
                                type: N.Z5.GO_LIVE,
                                value: N.IP.GUILD_PROFILE_OPENED,
                                userId: n.user.id
                            })
                        }
                    })]
                })
            }), (0, i.jsx)("div", {
                className: z.FO,
                children: t && (0, i.jsxs)(i.Fragment, {
                    children: [g && (0, i.jsx)(D, {
                        participant: n
                    }), (0, i.jsx)(k, {
                        participant: n
                    }), (0, i.jsx)(d.m_, {
                        text: L.intl.string(L.t["3D5yo/"]),
                        children: (0, i.jsx)(u.DUT, {
                            className: z.IF,
                            onClick: P(n, l),
                            children: (0, i.jsx)(u.jNK, {
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
let V = new Set([M.XYD.ENDED, M.XYD.FAILED, M.XYD.PAUSED]),
    U = s.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: s,
            widgetId: l,
            pinned: r
        } = e, o = (0, a.bG)([j.A], () => j.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), d = (0, I.Us)(), c = null != o && V.has(o.state), h = null != o, m = (0, R.dh)(t.stream), p = (0, R.XG)(t.stream);
        return !h && s || c ? null : (0, i.jsxs)("div", {
            className: z.Vs,
            children: [h && !s && (0, i.jsx)(x.Ay, {
                size: x.Ay.Sizes.SMALL,
                className: z.Ok
            }), h ? (0, i.jsx)("div", {
                className: z.X$,
                children: (0, i.jsx)(u.sqX, {
                    "aria-label": L.intl.formatToPlainString(L.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: P(t, d),
                    className: z.X$,
                    style: {
                        transform: `scale(${m})`
                    },
                    children: (0, i.jsx)(v.A, {
                        participant: t,
                        width: n,
                        fit: p ?? T.$.CONTAIN,
                        popoutType: A.N.OVERLAY,
                        selected: !1,
                        wrapperClassName: s ? z.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: z.Rh,
                children: (0, i.jsx)(f.A, {
                    noText: !0,
                    className: z.HL,
                    stream: t.stream
                })
            }), s ? null : (0, i.jsx)(G, {
                participant: t,
                hasActiveStream: h,
                onEnablePin: () => {
                    r || (0, g.v0)(l)
                }
            })]
        })
    })