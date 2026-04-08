/** chunk id: 494566 params = (module,exports,require) **/
n.d(t, {
    GF: () => ea,
    LK: () => ec,
    NO: () => el,
    Yb: () => ei,
    pp: () => en,
    sm: () => es,
    un: () => er
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    s = n(377802),
    l = n(348858),
    o = n(523875),
    d = n(416696),
    c = n(621956),
    u = n(446080),
    _ = n(397927),
    h = n(827343),
    m = n(442433),
    p = n(956793),
    g = n(688810),
    f = n(617354),
    A = n(980923),
    x = n(206018),
    I = n(750765),
    E = n(18235),
    b = n(183184),
    v = n(47167),
    C = n(713654),
    S = n(880144),
    y = n(338771),
    T = n(263063),
    N = n(178442),
    w = n(209932),
    L = n(989799),
    j = n(167579),
    O = n(704877),
    P = n(173660),
    R = n(675991),
    D = n(848362),
    M = n(594831),
    k = n(222692),
    G = n(709562),
    z = n(616356),
    U = n(961350),
    V = n(71393),
    F = n(430452),
    W = n(383501),
    H = n(309010),
    B = n(287809),
    Y = n(977997),
    X = n(810412),
    Z = n(823901),
    K = n(395011),
    J = n(243612),
    Q = n(652215),
    q = n(985018),
    $ = n(206022);

function ee(e) {
    let t = a.useRef(null);
    return a.useEffect(() => {
        e && (t.current?.(), t.current = null)
    }, [e]), e => (t.current = e, e)
}

function et(e) {
    let {
        ref: t,
        isActive: n,
        disabled: a,
        iconComponent: r,
        iconColor: s,
        tooltip: l,
        defaultColor: o = "primaryDark",
        highlightedColor: d = "primaryDark",
        caretColor: c,
        popoutOpen: u,
        onClick: _,
        popoutDisabled: h,
        onPopoutClick: m,
        onMouseEnter: p,
        onMouseLeave: g,
        onContextMenu: f,
        isTrayButton: A,
        ...x
    } = e;
    return (0, i.jsx)(G.l, {
        ref: t,
        onClick: _ ?? (() => {}),
        color: n ? d : o,
        className: $.x6,
        disabled: a,
        popoutOpen: u,
        popoutDisabled: h,
        label: l,
        isTrayButton: A,
        onMouseEnter: e => {
            p?.(e)
        },
        onMouseLeave: e => {
            g?.(e)
        },
        iconComponent: r,
        iconColor: s,
        caretColor: c,
        isActive: n,
        onContextMenu: f,
        onPopoutClick: m,
        "aria-label": x["aria-label"]
    })
}

function en(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, r = a.useRef(null), {
        suppress: s,
        selfMute: l,
        mute: d
    } = (0, P.A)(t), c = l || d || s, u = (0, A.A)(l, d, s, !1), {
        Component: h,
        play: m,
        events: p
    } = (0, o.L)(c ? "unmute" : "mute");
    a.useEffect(() => () => m(), [m, c]);
    let g = ee(n),
        f = e => t => {
            e(t), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.MICROPHONE,
                value: X.IP.SETTINGS_OPENED
            })
        };
    return (0, i.jsx)(_.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e, n = g(t);
            return (0, i.jsx)(x.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: Q.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: a
            } = t;
            return (0, i.jsx)(et, {
                ref: r,
                iconComponent: h,
                isActive: c,
                highlightedColor: "red",
                tooltip: u,
                onClick: () => {
                    (0, b.A)(d, s, Q.JJy.OVERLAY), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                        type: X.Z5.MICROPHONE,
                        value: c ? X.IP.ENABLED : X.IP.DISABLED,
                        userId: U.default.getId()
                    })
                },
                onPopoutClick: f(n),
                onContextMenu: f(n),
                popoutOpen: a,
                onMouseEnter: () => {
                    p.onMouseEnter()
                },
                onMouseLeave: () => {
                    p.onMouseLeave()
                },
                isTrayButton: !0
            })
        }
    })
}

function ei(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, r = a.useRef(null), {
        selfDeaf: s,
        deaf: o
    } = (0, j.A)(t), d = s || o, {
        Component: c,
        play: u,
        events: {
            onMouseEnter: h,
            onMouseLeave: m
        }
    } = (0, l.I)(d ? "undeafen" : "deafen"), p = o ? _.TJE : c;
    a.useEffect(() => () => u(), [d, u]);
    let g = () => {
            (0, E.A)(o, Q.JJy.OVERLAY), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.AUDIO,
                value: o ? X.IP.ENABLED : X.IP.DISABLED,
                userId: U.default.getId()
            })
        },
        A = e => t => {
            e(t), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.AUDIO,
                value: X.IP.SETTINGS_OPENED
            })
        },
        I = ee(n);
    return (0, i.jsx)(_.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(x.A, {
                onClose: I(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: Q.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: a
            } = t;
            return (0, i.jsx)(et, {
                ref: r,
                iconComponent: p,
                tooltip: (0, f.A)(s, o, !1),
                isActive: d,
                highlightedColor: "red",
                onClick: g,
                onContextMenu: A(n),
                onMouseEnter: h,
                onMouseLeave: m,
                onPopoutClick: A(n),
                popoutOpen: a,
                isTrayButton: !0
            })
        }
    })
}

function ea(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, s = a.useRef(null), l = (0, r.bG)([F.Ay], () => F.Ay.isVideoEnabled()), o = (0, r.bG)([F.Ay], () => Object.values(F.Ay.getVideoDevices())[0]), d = o?.disabled ?? !0, c = !1 === d, m = (0, O.A)(t), p = e => {
        h.A.setVideoEnabled(e)
    }, g = e => t => {
        e(t), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.CAMERA,
            value: X.IP.SETTINGS_OPENED
        })
    }, f = () => {
        d ? c ? p(!0) : (0, k.A)() : p(!l), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.CAMERA,
            value: l ? X.IP.DISABLED : X.IP.ENABLED,
            userId: U.default.getId()
        })
    }, {
        Component: A,
        play: x,
        events: {
            onMouseEnter: E,
            onMouseLeave: b
        }
    } = (0, u.K)(l ? "disable" : "enable"), v = null != t ? (0, R.Q)({
        enabled: l,
        cameraUnavailable: d,
        hasPermission: m,
        channel: t
    }) : void 0;
    a.useEffect(() => () => x(), [l, x]);
    let C = ee(n),
        S = null == t || !m;
    return (0, i.jsx)(_.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(I.A, {
                onClose: C(t),
                appContext: Q.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: a
            } = t;
            return (0, i.jsx)(et, {
                ref: s,
                iconComponent: A,
                tooltip: v,
                onClick: f,
                isActive: l,
                highlightedColor: "green",
                onPopoutClick: g(n),
                popoutOpen: a,
                onContextMenu: g(n),
                onMouseEnter: E,
                onMouseLeave: b,
                disabled: S,
                isTrayButton: !0
            })
        }
    })
}

function er(e) {
    let t, {
            voiceChannel: n,
            locked: s
        } = e,
        l = a.useRef(null),
        o = (0, r.bG)([B.default], () => B.default.getCurrentUser()),
        c = (0, O.A)(n),
        u = (0, r.cf)([F.Ay], () => (0, S.A)(F.Ay)),
        h = (0, r.bG)([z.A], () => z.A.getCurrentUserActiveStream()),
        m = (0, r.bG)([K.A], () => K.A.getTargetPID()),
        p = (0, Z.y)({
            pid: m,
            allowOneClickGoLive: !0,
            analyticsLocation: Q.ThZ.UNLOCKED_OVERLAY
        }),
        g = () => {
            p(), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.GO_LIVE,
                value: X.IP.ENABLED,
                userId: U.default.getId()
            })
        },
        f = null != h;
    if (f) t = q.intl.string(q.t.S5anIc);
    else if (null != n) {
        let e = (0, J.qv)();
        t = c ? null != e ? q.intl.format(q.t.AB5gTy, {
            game: e.name
        }) : q.intl.string(q.t.FeUKeA) : q.intl.string(q.t.uQn9B8)
    }
    let A = () => {
            if (f) return (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.GO_LIVE,
                value: X.IP.DISABLED,
                userId: U.default.getId()
            }), (0, y.A)(h, !1);
            g()
        },
        x = e => t => {
            e(t), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                type: X.Z5.SCREEN_SHARE,
                value: X.IP.SETTINGS_OPENED
            })
        },
        {
            Component: I,
            events: {
                onMouseEnter: E,
                onMouseLeave: b
            },
            play: v
        } = (0, d.c)(f ? "disable" : "enable");
    a.useEffect(() => () => v(), [f, v]);
    let C = ee(s);
    return (0, i.jsx)(_.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(D.A, {
                channel: n,
                currentUser: o,
                activeStreams: f ? [h] : [],
                handleGoLive: g,
                onClose: C(t),
                appContext: Q.BRT.OVERLAY,
                disableChangeWindows: !0
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, n) => {
            let {
                onClick: a
            } = e, {
                isShown: r
            } = n;
            return (0, i.jsx)(et, {
                ref: l,
                iconComponent: I,
                tooltip: t,
                "aria-label": q.intl.string(q.t.FeUKeA),
                isActive: f,
                highlightedColor: "green",
                onClick: A,
                popoutOpen: r,
                popoutDisabled: !f,
                onPopoutClick: x(a),
                onContextMenu: x(a),
                onMouseEnter: E,
                onMouseLeave: b,
                disabled: !u || !c,
                isTrayButton: !0
            })
        }
    })
}

function es(e) {
    let {
        voiceChannel: t,
        locked: s
    } = e, l = a.useRef(null), o = t?.getGuildId() ?? null, {
        mute: d,
        suppress: u
    } = (0, P.A)(t), h = (0, r.bG)([F.Ay], () => F.Ay.isDeaf()), p = null == t || d || u || h, {
        analyticsLocations: f
    } = (0, g.Ay)();

    function A(e) {
        null != o && ((0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.SOUNDBOARD,
            value: X.IP.SETTINGS_OPENED
        }), (0, m.L3)(e, async () => {
            let {
                default: e
            } = await n.e("51111").then(n.bind(n, 323002));
            return t => (0, i.jsx)(e, {
                sourceAnalyticsLocations: f,
                guildId: o,
                ...t
            })
        }))
    }
    let {
        Component: x,
        events: {
            onClick: I,
            onMouseEnter: E,
            onMouseLeave: b
        }
    } = (0, c.E)(), v = ee(s), C = (0, r.bG)([w.A, U.default], () => w.A.isUserPlayingSounds(U.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(_.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return p || null == t ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(L.A, {
                guildId: o,
                channel: t,
                onClose: v(n),
                analyticsSource: "action bar button"
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: a
            } = t;
            return (0, i.jsx)(et, {
                ref: l,
                iconComponent: x,
                tooltip: d ? q.intl.string(q.t["Ox4/zU"]) : u ? q.intl.string(q.t["+YBKYI"]) : h ? q.intl.string(q.t.X1lQli) : void 0,
                onClick: e => {
                    I(), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
                        type: X.Z5.SOUNDBOARD,
                        value: X.IP.PANEL_OPENED,
                        userId: U.default.getId()
                    }), n(e)
                },
                highlightedColor: C,
                defaultColor: C,
                onContextMenu: A,
                onMouseEnter: E,
                onMouseLeave: b,
                isActive: a,
                popoutOpen: a,
                disabled: p,
                isTrayButton: !0
            })
        }
    })
}

function el(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, l = a.useRef(null), o = (0, r.bG)([H.A], () => H.A.getVoiceChannelId() === t?.id), d = () => {
        (0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.CALL_BUTTON,
            value: X.IP.DISABLED,
            userId: U.default.getId()
        }), o && p.default.disconnect()
    }, c = (e, t) => {
        p.default.selectVoiceChannel(e), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.CALL_BUTTON,
            value: X.IP.ENABLED,
            userId: U.default.getId(),
            secondaryValue: t
        })
    }, [u, h] = a.useTransition(), m = e => t => {
        h(() => {
            e(t)
        }), (0, X.YX)(Q.uss.QUICK_ACTIONS, {
            type: X.Z5.CALL_BUTTON,
            value: X.IP.SETTINGS_OPENED
        })
    }, {
        Component: g,
        events: {
            onMouseEnter: f,
            onMouseLeave: A
        }
    } = (0, s.O)(), x = ee(n), I = (0, M.qZ)(), E = o ? g : _._jp;
    return (0, i.jsx)(_.YNO, {
        targetElementRef: l,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, i.jsx)(M.Ay, {
                allAvailableChannelRows: I,
                currentVoiceChannel: t,
                onClose: x(n),
                onSelect: c
            })
        },
        align: "center",
        position: "top",
        animation: _.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: a
            } = t;
            return (0, i.jsx)(et, {
                ref: l,
                iconComponent: E,
                tooltip: o ? q.intl.string(q.t["6vrfgt"]) : q.intl.string(q.t.S0W8Z5),
                onClick: o ? d : m(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: f,
                onMouseLeave: A,
                onContextMenu: m(n),
                isActive: a,
                onPopoutClick: o ? m(n) : void 0,
                popoutOpen: a,
                isTrayButton: !0
            })
        }
    })
}

function eo(e) {
    let {
        voiceChannel: t
    } = e, n = (0, r.bG)([V.A], () => V.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: $.rK
                }), (0, i.jsxs)("div", {
                    className: $._C,
                    children: [(0, i.jsx)(T.Ay, {
                        guild: n,
                        size: T.Ay.Sizes.SMOL,
                        className: $.$f
                    }), (0, i.jsx)(_.Text, {
                        tag: "div",
                        variant: "text-sm/medium",
                        color: "text-strong",
                        className: $.J5,
                        children: n.name
                    })]
                })]
            });
        default:
            return null
    }
}

function ed(e) {
    let {
        voiceChannel: t
    } = e, n = (0, C.gU)(t), a = (0, v.Ay)(t);
    return (0, i.jsxs)("div", {
        className: $.Wh,
        children: [null != n && (0, i.jsx)(_.Text, {
            tag: "div",
            color: "text-muted",
            variant: "text-xs/normal",
            className: $.p,
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor"
            })
        }), null != a && (0, i.jsx)(_.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: $.HA,
            children: a
        })]
    })
}

function ec(e) {
    let {
        voiceChannel: t
    } = e, n = t?.id, a = (0, r.cf)([W.A], () => ({
        quality: W.A.getQuality(),
        state: W.A.getState(),
        lastPing: W.A.getLastPing()
    })), s = (0, r.bG)([Y.A], () => null != n && Y.A.hasVideo(n), [n]);
    return null != n && null != t && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(N.A, {
            ...a,
            channelId: n,
            hasVideo: s,
            connectionStatusTextVariant: "text-sm/medium"
        }), (0, i.jsx)(eo, {
            voiceChannel: t
        }), (0, i.jsx)("div", {
            className: $.rK
        }), (0, i.jsx)(ed, {
            voiceChannel: t
        })]
    })
}