/** chunk id: 433560 params = (module,exports,require) **/
n.d(t, {
    O: () => L,
    d: () => G
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(205693),
    u = n(435371),
    d = n(397927),
    c = n(827343),
    h = n(442433),
    g = n(391973),
    m = n(401843),
    f = n(520698),
    A = n(164617),
    I = n(402216),
    E = n(607407),
    p = n(534400),
    _ = n(267102),
    S = n(401901),
    x = n(203355),
    T = n(110234),
    C = n(616356),
    N = n(961350),
    v = n(430452),
    y = n(287809),
    M = n(562153),
    b = n(810412),
    R = n(761661),
    D = n(652215),
    O = n(985018),
    w = n(614715);

function j(e) {
    let {
        participant: t
    } = e, n = t.user.id, l = (0, a.bG)([v.Ay], () => {
        let e = (0, f.A)(t.type);
        return v.Ay.isLocalMute(t.user.id, e)
    }, [t]), s = (0, a.bG)([N.default], () => N.default.getId()), {
        hasVideo: h
    } = (0, T.A)(t, s), g = l && h, m = r.useCallback(() => {
        c.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(u.m_, {
        text: g ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945),
        children: (0, i.jsx)(d.DUT, {
            className: w.IF,
            onClick: e => {
                e.stopPropagation(), (0, b.YX)(D.uss.GO_LIVE, {
                    type: b.Z5.AUDIO,
                    value: g ? b.IP.ENABLED : b.IP.DISABLED,
                    userId: t.user.id
                }), m()
            },
            children: g ? (0, i.jsx)(d._RO, {
                size: "sm",
                color: "currentColor"
            }) : (0, i.jsx)(d.HKD, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}

function k(e, t) {
    return r => {
        (0, b.YX)(D.uss.GO_LIVE, {
            type: b.Z5.GO_LIVE,
            value: b.IP.SETTINGS_OPENED,
            userId: e.user.id
        }), r.stopPropagation(), (0, h.L3)(r, async () => {
            let {
                default: r
            } = await n.e("61361").then(n.bind(n, 663912));
            return n => (0, i.jsx)(r, {
                ...n,
                stream: e.stream,
                exitFullscreen: () => {},
                appContext: t
            })
        })
    }
}

function U(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: r
    } = e, l = (0, _.Us)(), o = n.user, c = (0, a.bG)([y.default], () => y.default.getUser(o.id) ?? o, [o]), h = t ? O.intl.string(O.t.tLxK4l) : O.intl.string(O.t.E5RDnK);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: s()(w.MI, {
                [w.te]: t
            })
        }), !t && (0, i.jsx)("div", {
            className: w.TP,
            children: (0, i.jsx)(u.m_, {
                text: h,
                children: (0, i.jsxs)(d.DUT, {
                    className: w.kx,
                    onClick: () => {
                        (0, m.A9)(n.stream, {
                            forceMultiple: !0,
                            noFocus: !0
                        }), r(), (0, b.YX)(D.uss.GO_LIVE, {
                            type: b.Z5.GO_LIVE,
                            value: b.IP.ENABLED,
                            userId: n.user.id
                        })
                    },
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: O.intl.string(O.t.I6JG46)
                    }), (0, i.jsx)(d.vAm, {
                        size: "sm",
                        color: "currentColor"
                    })]
                })
            })
        }), (0, i.jsxs)("div", {
            className: w.ne,
            children: [(0, i.jsx)("div", {
                className: w.fL,
                children: (0, i.jsxs)("div", {
                    className: w.K8,
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: w.yb,
                        children: M.Ay.getName(n.stream.guildId, n.stream.channelId, o)
                    }), (0, i.jsx)(p.Ay, {
                        primaryGuild: c.primaryGuild,
                        userId: c.id,
                        containerClassName: w.Mp,
                        inline: !1,
                        onShowProfile: () => {
                            (0, b.YX)(D.uss.GO_LIVE, {
                                type: b.Z5.GO_LIVE,
                                value: b.IP.GUILD_PROFILE_OPENED,
                                userId: n.user.id
                            })
                        }
                    })]
                })
            }), (0, i.jsx)("div", {
                className: w.FO,
                children: t && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(j, {
                        participant: n
                    }), (0, i.jsx)(u.m_, {
                        text: O.intl.string(O.t["3D5yo/"]),
                        children: (0, i.jsx)(d.DUT, {
                            className: w.IF,
                            onClick: k(n, l),
                            children: (0, i.jsx)(d.jNK, {
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
let L = new Set([D.XYD.ENDED, D.XYD.FAILED, D.XYD.PAUSED]),
    G = r.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: r,
            widgetId: l,
            pinned: s
        } = e, o = (0, a.bG)([C.A], () => C.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, _.Us)(), c = null != o && L.has(o.state), h = null != o, m = (0, R.dh)(t.stream), f = (0, R.XG)(t.stream);
        return !h && r || c ? null : (0, i.jsxs)("div", {
            className: w.Vs,
            children: [h && !r && (0, i.jsx)(I.Ay, {
                size: I.Ay.Sizes.SMALL,
                className: w.Ok
            }), h ? (0, i.jsx)("div", {
                className: w.X$,
                children: (0, i.jsx)(d.sqX, {
                    "aria-label": O.intl.formatToPlainString(O.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: k(t, u),
                    className: w.X$,
                    style: {
                        transform: `scale(${m})`
                    },
                    children: (0, i.jsx)(x.A, {
                        participant: t,
                        width: n,
                        fit: f ?? S.$.CONTAIN,
                        popoutType: A.N.OVERLAY,
                        selected: !1,
                        wrapperClassName: r ? w.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: w.Rh,
                children: (0, i.jsx)(E.A, {
                    noText: !0,
                    className: w.HL,
                    stream: t.stream
                })
            }), r ? null : (0, i.jsx)(U, {
                participant: t,
                hasActiveStream: h,
                onEnablePin: () => {
                    s || (0, g.v0)(l)
                }
            })]
        })
    })