/** chunk id: 433560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    O: () => V,
    d: () => U
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
    m = n(391973),
    g = n(401843),
    p = n(520698),
    A = n(164617),
    f = n(402216),
    x = n(652896),
    E = n(607407),
    S = n(534400),
    v = n(267102),
    C = n(401901),
    I = n(203355),
    T = n(110234),
    _ = n(616356),
    y = n(961350),
    j = n(430452),
    b = n(287809),
    w = n(562153),
    O = n(810412),
    N = n(589051),
    M = n(761661),
    R = n(652215),
    k = n(985018),
    L = n(444638);

function D(e) {
    let {
        participant: t
    } = e;
    return (0, i.jsx)(u.m_, {
        text: k.intl.string(k.t["4EGMWL"]),
        children: (0, i.jsx)(d.DUT, {
            className: L.IF,
            onClick: e => {
                (0, g.vN)((0, x._z)(t.stream), !1), e.stopPropagation(), (0, O.YX)(R.uss.GO_LIVE, {
                    type: O.Z5.SCREEN_SHARE,
                    value: O.IP.DISABLED,
                    userId: t.user.id
                })
            },
            children: (0, i.jsx)(d.GT3, {
                size: "sm",
                color: d.LU0.colors.WHITE
            })
        })
    })
}

function z(e) {
    let {
        participant: t
    } = e, n = t.user.id, r = (0, a.bG)([j.Ay], () => {
        let e = (0, p.A)(t.type);
        return j.Ay.isLocalMute(t.user.id, e)
    }, [t]), s = (0, a.bG)([y.default], () => y.default.getId()), {
        hasVideo: h
    } = (0, T.A)(t, s), m = r && h, g = l.useCallback(() => {
        c.A.toggleLocalMute(n, o.x.STREAM)
    }, [n]);
    return (0, i.jsx)(u.m_, {
        text: m ? k.intl.string(k.t.YqAjXy) : k.intl.string(k.t.w4m945),
        children: (0, i.jsx)(d.DUT, {
            className: L.IF,
            onClick: e => {
                e.stopPropagation(), (0, O.YX)(R.uss.GO_LIVE, {
                    type: O.Z5.AUDIO,
                    value: m ? O.IP.ENABLED : O.IP.DISABLED,
                    userId: t.user.id
                }), g()
            },
            children: m ? (0, i.jsx)(d._RO, {
                size: "sm",
                color: "currentColor"
            }) : (0, i.jsx)(d.HKD, {
                size: "sm",
                color: "currentColor"
            })
        })
    })
}

function P(e, t) {
    return l => {
        (0, O.YX)(R.uss.GO_LIVE, {
            type: O.Z5.GO_LIVE,
            value: O.IP.SETTINGS_OPENED,
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

function G(e) {
    let {
        hasActiveStream: t,
        participant: n,
        onEnablePin: l
    } = e, r = (0, v.Us)(), o = n.user, c = (0, a.bG)([b.default], () => b.default.getUser(o.id) ?? o, [o]), h = t ? k.intl.string(k.t.tLxK4l) : k.intl.string(k.t.E5RDnK), {
        enabled: m
    } = (0, N.QC)("GoLiveTile");
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            className: s()(L.MI, {
                [L.te]: t
            })
        }), !t && (0, i.jsx)("div", {
            className: L.TP,
            children: (0, i.jsx)(u.m_, {
                text: h,
                children: (0, i.jsxs)(d.DUT, {
                    className: L.kx,
                    onClick: () => {
                        (0, g.A9)(n.stream, {
                            forceMultiple: !0,
                            noFocus: !0
                        }), l(), (0, O.YX)(R.uss.GO_LIVE, {
                            type: O.Z5.GO_LIVE,
                            value: O.IP.ENABLED,
                            userId: n.user.id
                        })
                    },
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-sm/semibold",
                        color: "always-white",
                        children: k.intl.string(k.t.I6JG46)
                    }), (0, i.jsx)(d.vAm, {
                        size: "sm",
                        color: "currentColor"
                    })]
                })
            })
        }), (0, i.jsxs)("div", {
            className: L.ne,
            children: [(0, i.jsx)("div", {
                className: L.fL,
                children: (0, i.jsxs)("div", {
                    className: L.K8,
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: L.yb,
                        children: w.Ay.getName(n.stream.guildId, n.stream.channelId, o)
                    }), (0, i.jsx)(S.Ay, {
                        primaryGuild: c.primaryGuild,
                        userId: c.id,
                        containerClassName: L.Mp,
                        inline: !1,
                        onShowProfile: () => {
                            (0, O.YX)(R.uss.GO_LIVE, {
                                type: O.Z5.GO_LIVE,
                                value: O.IP.GUILD_PROFILE_OPENED,
                                userId: n.user.id
                            })
                        }
                    })]
                })
            }), (0, i.jsx)("div", {
                className: L.FO,
                children: t && (0, i.jsxs)(i.Fragment, {
                    children: [m && (0, i.jsx)(D, {
                        participant: n
                    }), (0, i.jsx)(z, {
                        participant: n
                    }), (0, i.jsx)(u.m_, {
                        text: k.intl.string(k.t["3D5yo/"]),
                        children: (0, i.jsx)(d.DUT, {
                            className: L.IF,
                            onClick: P(n, r),
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
let V = new Set([R.XYD.ENDED, R.XYD.FAILED, R.XYD.PAUSED]),
    U = l.memo(function(e) {
        let {
            participant: t,
            width: n,
            locked: l,
            widgetId: r,
            pinned: s
        } = e, o = (0, a.bG)([_.A], () => _.A.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, v.Us)(), c = null != o && V.has(o.state), h = null != o, g = (0, M.dh)(t.stream), p = (0, M.XG)(t.stream);
        return !h && l || c ? null : (0, i.jsxs)("div", {
            className: L.Vs,
            children: [h && !l && (0, i.jsx)(f.Ay, {
                size: f.Ay.Sizes.SMALL,
                className: L.Ok
            }), h ? (0, i.jsx)("div", {
                className: L.X$,
                children: (0, i.jsx)(d.sqX, {
                    "aria-label": k.intl.formatToPlainString(k.t.gHPz3Q, {
                        streamerName: t.user.username
                    }),
                    onClick: () => {},
                    onContextMenu: P(t, u),
                    className: L.X$,
                    style: {
                        transform: `scale(${g})`
                    },
                    children: (0, i.jsx)(I.A, {
                        participant: t,
                        width: n,
                        fit: p ?? C.$.CONTAIN,
                        popoutType: A.N.OVERLAY,
                        selected: !1,
                        wrapperClassName: l ? L.Gq : void 0
                    })
                })
            }) : (0, i.jsx)("div", {
                className: L.Rh,
                children: (0, i.jsx)(E.A, {
                    noText: !0,
                    className: L.HL,
                    stream: t.stream
                })
            }), l ? null : (0, i.jsx)(G, {
                participant: t,
                hasActiveStream: h,
                onEnablePin: () => {
                    s || (0, m.v0)(r)
                }
            })]
        })
    })