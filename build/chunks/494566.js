/** chunk id: 494566, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GF: () => eo,
    LK: () => eg,
    NO: () => ec,
    Yb: () => ea,
    pp: () => es,
    sm: () => ed,
    un: () => eu
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(377802),
    a = n(348858),
    o = n(416696),
    u = n(621956),
    d = n(446080),
    c = n(397927),
    h = n(827343),
    m = n(442433),
    g = n(956793),
    p = n(793574),
    A = n(688810),
    f = n(617354),
    x = n(980923),
    E = n(206018),
    S = n(750765),
    v = n(18235),
    C = n(183184),
    I = n(47167),
    T = n(713654),
    _ = n(880144),
    y = n(338771),
    j = n(263063),
    b = n(178442),
    w = n(209932),
    O = n(989799),
    N = n(167579),
    M = n(704877),
    R = n(173660),
    k = n(675991),
    L = n(848362),
    D = n(594831),
    z = n(222692),
    P = n(709562),
    G = n(996744),
    V = n(85612),
    U = n(277342),
    H = n(616356),
    Y = n(961350),
    F = n(71393),
    Z = n(430452),
    W = n(383501),
    X = n(309010),
    K = n(287809),
    B = n(977997),
    q = n(810412),
    Q = n(823901),
    J = n(592598),
    $ = n(395011),
    ee = n(243612),
    et = n(652215),
    en = n(985018),
    ei = n(991256);

function el(e) {
    let t = l.useRef(null);
    return l.useEffect(() => {
        e && (t.current?.(), t.current = null)
    }, [e]), e => (t.current = e, e)
}

function er(e) {
    let {
        ref: t,
        isActive: n,
        disabled: l,
        iconComponent: r,
        iconColor: s,
        tooltip: a,
        defaultColor: o = "primaryDark",
        highlightedColor: u = "primaryDark",
        caretColor: d,
        popoutOpen: c,
        onClick: h,
        popoutDisabled: m,
        onPopoutClick: g,
        onMouseEnter: p,
        onMouseLeave: A,
        onContextMenu: f,
        isTrayButton: x,
        ...E
    } = e;
    return (0, i.jsx)(P.l, {
        ref: t,
        onClick: h ?? (() => {}),
        color: n ? u : o,
        className: ei.x6,
        disabled: l,
        popoutOpen: c,
        popoutDisabled: m,
        label: a,
        isTrayButton: x,
        onMouseEnter: e => {
            p?.(e)
        },
        onMouseLeave: e => {
            A?.(e)
        },
        iconComponent: r,
        iconColor: s,
        caretColor: d,
        isActive: n,
        onContextMenu: f,
        onPopoutClick: g,
        "aria-label": E["aria-label"]
    })
}

function es(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, s = l.useRef(null), {
        suppress: a,
        selfMute: o,
        mute: u
    } = (0, R.A)(t), d = o || u || a, h = (0, x.A)(o, u, a, !1), {
        Component: m,
        play: g,
        events: A
    } = (0, U.q)(d);
    l.useEffect(() => () => g(), [g, d]);
    let f = el(n),
        S = e => t => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.MICROPHONE,
                value: q.IP.SETTINGS_OPENED
            })
        },
        v = (0, ee.b4)()?.id,
        I = (0, r.bG)([J.A], () => J.A.isLimitedInteractionOverrideEnabled(v)),
        T = (0, G.Cg)({
            location: p.A.OVERLAY,
            autoTrackExposure: !0
        });
    return (0, i.jsx)(c.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e, n = f(t);
            return T ? (0, i.jsx)(V.a, {
                wide: !0,
                showOutputDevices: !0,
                onSettingsButtonClick: n,
                showSearchBar: !I
            }) : (0, i.jsx)(E.A, {
                onClose: n,
                maybeRenderPTTCheckbox: !0,
                renderInputProfiles: !0,
                renderInputDevices: !0,
                renderInputVolume: !0,
                maybeRenderInputMeter: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, i.jsx)(er, {
                ref: s,
                iconComponent: m,
                isActive: d,
                highlightedColor: "red",
                tooltip: h,
                onClick: () => {
                    (0, C.A)(u, a, et.JJy.OVERLAY), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                        type: q.Z5.MICROPHONE,
                        value: d ? q.IP.ENABLED : q.IP.DISABLED,
                        userId: Y.default.getId()
                    })
                },
                onPopoutClick: S(n),
                onContextMenu: S(n),
                popoutOpen: l,
                onMouseEnter: () => {
                    A.onMouseEnter()
                },
                onMouseLeave: () => {
                    A.onMouseLeave()
                },
                isTrayButton: !0
            })
        }
    })
}

function ea(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, r = l.useRef(null), {
        selfDeaf: s,
        deaf: o
    } = (0, N.A)(t), u = s || o, {
        Component: d,
        play: h,
        events: {
            onMouseEnter: m,
            onMouseLeave: g
        }
    } = (0, a.I)(u ? "undeafen" : "deafen"), p = o ? c.TJE : d;
    l.useEffect(() => () => h(), [u, h]);
    let A = () => {
            (0, v.A)(o, et.JJy.OVERLAY), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.AUDIO,
                value: o ? q.IP.ENABLED : q.IP.DISABLED,
                userId: Y.default.getId()
            })
        },
        x = e => t => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.AUDIO,
                value: q.IP.SETTINGS_OPENED
            })
        },
        S = el(n);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(E.A, {
                onClose: S(t),
                renderDeafenCheckbox: !0,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                renderSettingsButton: !0,
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, i.jsx)(er, {
                ref: r,
                iconComponent: p,
                tooltip: (0, f.A)(s, o, !1),
                isActive: u,
                highlightedColor: "red",
                onClick: A,
                onContextMenu: x(n),
                onMouseEnter: m,
                onMouseLeave: g,
                onPopoutClick: x(n),
                popoutOpen: l,
                isTrayButton: !0
            })
        }
    })
}

function eo(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, s = l.useRef(null), a = (0, r.bG)([Z.Ay], () => Z.Ay.isVideoEnabled()), o = (0, r.bG)([Z.Ay], () => Object.values(Z.Ay.getVideoDevices())[0]), u = o?.disabled ?? !0, m = !1 === u, g = (0, M.A)(t), p = e => {
        h.A.setVideoEnabled(e)
    }, A = e => t => {
        e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.CAMERA,
            value: q.IP.SETTINGS_OPENED
        })
    }, f = () => {
        u ? m ? p(!0) : (0, z.A)() : p(!a), (0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.CAMERA,
            value: a ? q.IP.DISABLED : q.IP.ENABLED,
            userId: Y.default.getId()
        })
    }, {
        Component: x,
        play: E,
        events: {
            onMouseEnter: v,
            onMouseLeave: C
        }
    } = (0, d.K)(a ? "disable" : "enable"), I = null != t ? (0, k.Q)({
        enabled: a,
        cameraUnavailable: u,
        hasPermission: g,
        channel: t
    }) : void 0;
    l.useEffect(() => () => E(), [a, E]);
    let T = el(n),
        _ = null == t || !g;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: s,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(S.A, {
                onClose: T(t),
                appContext: et.BRT.OVERLAY
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, i.jsx)(er, {
                ref: s,
                iconComponent: x,
                tooltip: I,
                onClick: f,
                isActive: a,
                highlightedColor: "green",
                onPopoutClick: A(n),
                popoutOpen: l,
                onContextMenu: A(n),
                onMouseEnter: v,
                onMouseLeave: C,
                disabled: _,
                isTrayButton: !0
            })
        }
    })
}

function eu(e) {
    let t, {
            voiceChannel: n,
            locked: s
        } = e,
        a = l.useRef(null),
        u = (0, r.bG)([K.default], () => K.default.getCurrentUser()),
        d = (0, M.A)(n),
        h = (0, r.cf)([Z.Ay], () => (0, _.A)(Z.Ay)),
        m = (0, r.bG)([H.A], () => H.A.getCurrentUserActiveStream()),
        g = (0, r.bG)([$.A], () => $.A.getTargetPID()),
        p = (0, Q.y)({
            pid: g,
            allowOneClickGoLive: !0,
            analyticsLocation: et.ThZ.UNLOCKED_OVERLAY
        }),
        A = () => {
            p(), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.GO_LIVE,
                value: q.IP.ENABLED,
                userId: Y.default.getId()
            })
        },
        f = null != m;
    if (f) t = en.intl.string(en.t.S5anIc);
    else if (null != n) {
        let e = (0, ee.qv)();
        t = d ? null != e ? en.intl.format(en.t.AB5gTy, {
            game: e.name
        }) : en.intl.string(en.t.FeUKeA) : en.intl.string(en.t.uQn9B8)
    }
    let x = () => {
            if (f) return (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.GO_LIVE,
                value: q.IP.DISABLED,
                userId: Y.default.getId()
            }), (0, y.A)(m, !1);
            A()
        },
        E = e => t => {
            e(t), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                type: q.Z5.SCREEN_SHARE,
                value: q.IP.SETTINGS_OPENED
            })
        },
        {
            Component: S,
            events: {
                onMouseEnter: v,
                onMouseLeave: C
            },
            play: I
        } = (0, o.c)(f ? "disable" : "enable");
    l.useEffect(() => () => I(), [f, I]);
    let T = el(s);
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(L.A, {
                channel: n,
                currentUser: u,
                activeStreams: f ? [m] : [],
                handleGoLive: A,
                onClose: T(t),
                appContext: et.BRT.OVERLAY,
                disableChangeWindows: !0
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, n) => {
            let {
                onClick: l
            } = e, {
                isShown: r
            } = n;
            return (0, i.jsx)(er, {
                ref: a,
                iconComponent: S,
                tooltip: t,
                "aria-label": en.intl.string(en.t.FeUKeA),
                isActive: f,
                highlightedColor: "green",
                onClick: x,
                popoutOpen: r,
                popoutDisabled: !f,
                onPopoutClick: E(l),
                onContextMenu: E(l),
                onMouseEnter: v,
                onMouseLeave: C,
                disabled: !h || !d,
                isTrayButton: !0
            })
        }
    })
}

function ed(e) {
    let {
        voiceChannel: t,
        locked: s
    } = e, a = l.useRef(null), o = t?.getGuildId() ?? null, {
        mute: d,
        suppress: h
    } = (0, R.A)(t), g = (0, r.bG)([Z.Ay], () => Z.Ay.isDeaf()), p = null == t || d || h || g, {
        analyticsLocations: f
    } = (0, A.Ay)();

    function x(e) {
        null != o && ((0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.SOUNDBOARD,
            value: q.IP.SETTINGS_OPENED
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
        Component: E,
        events: {
            onClick: S,
            onMouseEnter: v,
            onMouseLeave: C
        }
    } = (0, u.E)(), I = el(s), T = (0, r.bG)([w.A, Y.default], () => w.A.isUserPlayingSounds(Y.default.getId()), []) ? "green" : void 0;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return p || null == t ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(O.A, {
                guildId: o,
                channel: t,
                onClose: I(n),
                analyticsSource: "action bar button"
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, i.jsx)(er, {
                ref: a,
                iconComponent: E,
                tooltip: d ? en.intl.string(en.t["Ox4/zU"]) : h ? en.intl.string(en.t["+YBKYI"]) : g ? en.intl.string(en.t.X1lQli) : void 0,
                onClick: e => {
                    S(), (0, q.YX)(et.uss.QUICK_ACTIONS, {
                        type: q.Z5.SOUNDBOARD,
                        value: q.IP.PANEL_OPENED,
                        userId: Y.default.getId()
                    }), n(e)
                },
                highlightedColor: T,
                defaultColor: T,
                onContextMenu: x,
                onMouseEnter: v,
                onMouseLeave: C,
                isActive: l,
                popoutOpen: l,
                disabled: p,
                isTrayButton: !0
            })
        }
    })
}

function ec(e) {
    let {
        voiceChannel: t,
        locked: n
    } = e, a = l.useRef(null), o = (0, r.bG)([X.A], () => X.A.getVoiceChannelId() === t?.id), u = () => {
        (0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.CALL_BUTTON,
            value: q.IP.DISABLED,
            userId: Y.default.getId()
        }), o && g.default.disconnect()
    }, d = (e, t) => {
        g.default.selectVoiceChannel(e), (0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.CALL_BUTTON,
            value: q.IP.ENABLED,
            userId: Y.default.getId(),
            secondaryValue: t
        })
    }, [h, m] = l.useTransition(), p = e => t => {
        m(() => {
            e(t)
        }), (0, q.YX)(et.uss.QUICK_ACTIONS, {
            type: q.Z5.CALL_BUTTON,
            value: q.IP.SETTINGS_OPENED
        })
    }, {
        Component: A,
        events: {
            onMouseEnter: f,
            onMouseLeave: x
        }
    } = (0, s.O)(), E = el(n), S = (0, D.qZ)(), v = o ? A : c._jp;
    return (0, i.jsx)(c.YNO, {
        targetElementRef: a,
        clickTrap: !0,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, i.jsx)(D.Ay, {
                allAvailableChannelRows: S,
                currentVoiceChannel: t,
                onClose: E(n),
                onSelect: d
            })
        },
        align: "center",
        position: "top",
        animation: c.YNO.Animation.FADE,
        children: (e, t) => {
            let {
                onClick: n
            } = e, {
                isShown: l
            } = t;
            return (0, i.jsx)(er, {
                ref: a,
                iconComponent: v,
                tooltip: o ? en.intl.string(en.t["6vrfgt"]) : en.intl.string(en.t.S0W8Z5),
                onClick: o ? u : p(n),
                defaultColor: o ? "disconnect" : void 0,
                onMouseEnter: f,
                onMouseLeave: x,
                onContextMenu: p(n),
                isActive: l,
                onPopoutClick: o ? p(n) : void 0,
                popoutOpen: l,
                isTrayButton: !0
            })
        }
    })
}

function eh(e) {
    let {
        voiceChannel: t
    } = e, n = (0, r.bG)([F.A], () => F.A.getGuild(t.getGuildId()), [t]);
    switch (!0) {
        case t.isGroupDM() || t.isDM():
        case t.isDM():
            return null;
        case null != n:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: ei.rK
                }), (0, i.jsxs)("div", {
                    className: ei._C,
                    children: [(0, i.jsx)(j.A, {
                        guild: n,
                        size: j.A.Sizes.SMOL,
                        className: ei.$f
                    }), (0, i.jsx)(c.Text, {
                        tag: "div",
                        variant: "text-sm/medium",
                        color: "text-strong",
                        className: ei.J5,
                        children: n.name
                    })]
                })]
            });
        default:
            return null
    }
}

function em(e) {
    let {
        voiceChannel: t
    } = e, n = (0, T.gU)(t), l = (0, I.Ay)(t);
    return (0, i.jsxs)("div", {
        className: ei.Wh,
        children: [null != n && (0, i.jsx)(c.Text, {
            tag: "div",
            color: "text-muted",
            variant: "text-xs/normal",
            className: ei.p,
            children: (0, i.jsx)(n, {
                size: "sm",
                color: "currentColor"
            })
        }), null != l && (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: ei.HA,
            children: l
        })]
    })
}

function eg(e) {
    let {
        voiceChannel: t
    } = e, n = t?.id, l = (0, r.cf)([W.A], () => ({
        quality: W.A.getQuality(),
        state: W.A.getState(),
        lastPing: W.A.getLastPing()
    })), s = (0, r.bG)([B.A], () => null != n && B.A.hasVideo(n), [n]);
    return null != n && null != t && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.A, {
            ...l,
            channelId: n,
            hasVideo: s,
            connectionStatusTextVariant: "text-sm/medium"
        }), (0, i.jsx)(eh, {
            voiceChannel: t
        }), (0, i.jsx)("div", {
            className: ei.rK
        }), (0, i.jsx)(em, {
            voiceChannel: t
        })]
    })
}