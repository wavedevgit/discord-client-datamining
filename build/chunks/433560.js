/** chunk id: 433560 params = (module,exports,require) **/
n.d(t, {
    O: () => k,
    d: () => G
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
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
    N = n(616356),
    C = n(961350),
    v = n(430452),
    y = n(287809),
    M = n(562153),
    R = n(810412),
    D = n(761661),
    b = n(652215),
    O = n(985018),
    w = n(144043);

function j(e) {
    let {
        participant: t
    } = e, n = t.user.id, r = (0, a.bG)([v.Ay], () => {
        let e = (0, f.A)(t.type);
        return v.Ay.isLocalMute(t.user.id, e)
    }, [t]), s = (0, a.bG)([C.default], () => C.default.getId()), {
        hasVideo: h
    } = (0, T.A)(t, s), g = r && h, m = l.useCallback(() => {
        c.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(u.m_, {
        text: g ? O.intl.string(O.t.YqAjXy) : O.intl.string(O.t.w4m945),
        children: (0, i.jsx)(d.DUT, {
            className: w.IF,
            onClick: e => {
                e.stopPropagation(), (0, R.YX)(b.uss.GO_LIVE, {
                    type: R.Z5.AUDIO,
                    value: g ? R.IP.ENABLED : R.IP.DISABLED,
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

function U(e, t) {
    return l => {
        (0, R.YX)(b.uss.GO_LIVE, {
            type: R.Z5.GO_LIVE,
            value: R.IP.SETTINGS_OPENED,
            userId: e.user.id
        }), l.stopPropagation(), (0, h.L3)(l, async () => {
            let {
                default: l
            } = await n.e("61361").then(n.bind(n, 663912));
            return n => (0, i.jsx)(l, {
                ...n,
                stream: e.stream,
                exitFullscreen: () => {},
                appContext: t
            })
        })
    }
}

function L(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: l
    } = e, r = (0, _.Us)(), o = n.user, c = (0, a.bG)([y.default], () => y.default.getUser(o.id) ?? o, [o]), h = t ? O.intl.string(O.t.tLxK4l) : O.intl.string(O.t.E5RDnK);
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
                        }), l(), (0, R.YX)(b.uss.GO_LIVE, {
                            type: R.Z5.GO_LIVE,
                            value: R.IP.ENABLED,
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
                            (0, R.YX)(b.uss.GO_LIVE, {
                                type: R.Z5.GO_LIVE,
                                value: R.IP.GUILD_PROFILE_OPENED,
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
                            onClick: U(n, r),
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
let k = new Set([b.XYD.ENDED, b.XYD.FAILED, b.XYD.PAUSED]),
    G = l.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: l,
            widgetId: r,
            pinned: s
        } = e, o = (0, a.bG)([N.A], () => N.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, _.Us)(), c = null != o && k.has(o.state), h = null != o, m = (0, D.dh)(t.stream), f = (0, D.XG)(t.stream);
        return !h && l || c ? null : (0, i.jsxs)("div", {
            className: w.Vs,
            children: [h && !l && (0, i.jsx)(I.Ay, {
                size: I.Ay.Sizes.SMALL,
                className: w.Ok
            }), h ? (0, i.jsx)("div", {
                className: w.X$,
                children: (0, i.jsx)(d.sqX, {
                    "aria-label": O.intl.formatToPlainString(O.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: U(t, u),
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
                        wrapperClassName: l ? w.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: w.Rh,
                children: (0, i.jsx)(E.A, {
                    noText: !0,
                    className: w.HL,
                    stream: t.stream
                })
            }), l ? null : (0, i.jsx)(L, {
                participant: t,
                hasActiveStream: h,
                onEnablePin: () => {
                    s || (0, g.v0)(r)
                }
            })]
        })
    })