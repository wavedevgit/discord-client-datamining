/** chunk id: 433560 params = (module,exports,require) **/
n.d(t, {
    O: () => M,
    d: () => G
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(417597),
    o = n(205693),
    d = n(435371),
    c = n(397927),
    u = n(827343),
    _ = n(442433),
    h = n(391973),
    m = n(401843),
    f = n(520698),
    p = n(164617),
    g = n(402216),
    A = n(607407),
    x = n(534400),
    I = n(267102),
    E = n(401901),
    b = n(203355),
    v = n(110234),
    S = n(616356),
    C = n(961350),
    y = n(430452),
    T = n(287809),
    N = n(562153),
    w = n(810412),
    L = n(761661),
    j = n(652215),
    O = n(985018),
    P = n(413116);

function R(e) {
    let {
        participant: t
    } = e, n = t.user.id, r = (0, s.bG)([y.Ay], () => {
        let e = (0, f.A)(t.type);
        return y.Ay.isLocalMute(t.user.id, e)
    }, [t]), l = (0, s.bG)([C.default], () => C.default.getId()), {
        hasVideo: _
    } = (0, v.A)(t, l), h = r && _, m = a.useCallback(() => {
        u.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(d.m_, {
        text: h ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945),
        children: (0, i.jsx)(c.DUT, {
            className: P.IF,
            onClick: e => {
                e.stopPropagation(), (0, w.YX)(j.uss.GO_LIVE, {
                    type: w.Z5.AUDIO,
                    value: h ? w.IP.ENABLED : w.IP.DISABLED,
                    userId: t.user.id
                }), m()
            },
            children: h ? (0, i.jsx)(c._RO, {
                size: "sm",
                color: "currentColor"
            }) : (0, i.jsx)(c.HKD, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}

function D(e, t) {
    return a => {
        (0, w.YX)(j.uss.GO_LIVE, {
            type: w.Z5.GO_LIVE,
            value: w.IP.SETTINGS_OPENED,
            userId: e.user.id
        }), a.stopPropagation(), (0, _.L3)(a, async () => {
            let {
                default: a
            } = await n.e("61361").then(n.bind(n, 663912));
            return n => (0, i.jsx)(a, {
                ...n,
                stream: e.stream,
                exitFullscreen: () => {},
                appContext: t
            })
        })
    }
}

function k(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: a
    } = e, r = (0, I.Us)(), o = n.user, u = (0, s.bG)([T.default], () => T.default.getUser(o.id) ?? o, [o]), _ = t ? O.intl.string(O.t.tLxK4l) : O.intl.string(O.t.E5RDnK);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: l()(P.MI, {
                [P.te]: t
            })
        }), !t && (0, i.jsx)("div", {
            className: P.TP,
            children: (0, i.jsx)(d.m_, {
                text: _,
                children: (0, i.jsxs)(c.DUT, {
                    className: P.kx,
                    onClick: () => {
                        (0, m.A9)(n.stream, {
                            forceMultiple: !0,
                            noFocus: !0
                        }), a(), (0, w.YX)(j.uss.GO_LIVE, {
                            type: w.Z5.GO_LIVE,
                            value: w.IP.ENABLED,
                            userId: n.user.id
                        })
                    },
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: O.intl.string(O.t.I6JG46)
                    }), (0, i.jsx)(c.vAm, {
                        size: "sm",
                        color: "currentColor"
                    })]
                })
            })
        }), (0, i.jsxs)("div", {
            className: P.ne,
            children: [(0, i.jsx)("div", {
                className: P.fL,
                children: (0, i.jsxs)("div", {
                    className: P.K8,
                    children: [(0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: P.yb,
                        children: N.Ay.getName(n.stream.guildId, n.stream.channelId, o)
                    }), (0, i.jsx)(x.Ay, {
                        primaryGuild: u.primaryGuild,
                        userId: u.id,
                        containerClassName: P.Mp,
                        inline: !1,
                        onShowProfile: () => {
                            (0, w.YX)(j.uss.GO_LIVE, {
                                type: w.Z5.GO_LIVE,
                                value: w.IP.GUILD_PROFILE_OPENED,
                                userId: n.user.id
                            })
                        }
                    })]
                })
            }), (0, i.jsx)("div", {
                className: P.FO,
                children: t && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(R, {
                        participant: n
                    }), (0, i.jsx)(d.m_, {
                        text: O.intl.string(O.t["3D5yo/"]),
                        children: (0, i.jsx)(c.DUT, {
                            className: P.IF,
                            onClick: D(n, r),
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
let M = new Set([j.XYD.ENDED, j.XYD.FAILED, j.XYD.PAUSED]),
    G = a.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: a,
            widgetId: r,
            pinned: l
        } = e, o = (0, s.bG)([S.A], () => S.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), d = (0, I.Us)(), u = null != o && M.has(o.state), _ = null != o, m = (0, L.dh)(t.stream), f = (0, L.XG)(t.stream);
        return !_ && a || u ? null : (0, i.jsxs)("div", {
            className: P.Vs,
            children: [_ && !a && (0, i.jsx)(g.Ay, {
                size: g.Ay.Sizes.SMALL,
                className: P.Ok
            }), _ ? (0, i.jsx)("div", {
                className: P.X$,
                children: (0, i.jsx)(c.sqX, {
                    "aria-label": O.intl.formatToPlainString(O.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: D(t, d),
                    className: P.X$,
                    style: {
                        transform: `scale(${m})`
                    },
                    children: (0, i.jsx)(b.A, {
                        participant: t,
                        width: n,
                        fit: f ?? E.$.CONTAIN,
                        popoutType: p.N.OVERLAY,
                        selected: !1,
                        wrapperClassName: a ? P.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: P.Rh,
                children: (0, i.jsx)(A.A, {
                    noText: !0,
                    className: P.HL,
                    stream: t.stream
                })
            }), a ? null : (0, i.jsx)(k, {
                participant: t,
                hasActiveStream: _,
                onEnablePin: () => {
                    l || (0, h.v0)(r)
                }
            })]
        })
    })