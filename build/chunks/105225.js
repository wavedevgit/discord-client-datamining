/** Chunk was on 1113 **/
/** chunk id: 105225, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => eP,
    SZ: () => eE,
    rP: () => eC
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(864605),
    u = n(311907),
    d = n(554146),
    h = n(397927),
    p = n(827343),
    g = n(442433),
    f = n(956793),
    m = n(401843),
    b = n(820284),
    A = n(933958),
    y = n(967812),
    O = n(793574),
    _ = n(688810),
    j = n(313961),
    x = n(385318),
    v = n(206018),
    E = n(750765),
    C = n(183184),
    S = n(384059),
    I = n(480890),
    N = n(379848),
    T = n(643501),
    P = n(857253),
    w = n(652896),
    R = n(880144),
    D = n(338771),
    L = n(508654),
    M = n(984624),
    G = n(394412),
    k = n(267102),
    U = n(526292),
    V = n(396495),
    B = n(478564),
    H = n(123973),
    F = n(447404),
    K = n(246356),
    Y = n(710801),
    W = n(496841),
    z = n(383831),
    q = n(905216),
    X = n(577062),
    J = n(533978),
    Q = n(958449),
    Z = n(970636),
    $ = n(996744),
    ee = n(85612),
    et = n(616356),
    en = n(470710),
    er = n(430452),
    el = n(309010),
    ei = n(287809),
    es = n(151476),
    ea = n(405018),
    eo = n(704877),
    ec = n(173660),
    eu = n(543274),
    ed = n(579153),
    eh = n(152535),
    ep = n(848362),
    eg = n(222692),
    ef = n(702904),
    em = n(471993),
    eb = n(442353),
    eA = n(652215),
    ey = n(806931),
    eO = n(49999),
    e_ = n(913957);

function ej() {
    return (ej = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function ex(e) {
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

function ev(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function eE(e, t) {
    if (er.A.isVideoEnabled() === e) return;
    let n = () => p.A.setVideoEnabled(e);
    (0, S.X)(O.A.VOICE_CONTROL_TRAY, S.O.CAMERA, e), e ? (0, eb.A)(n, t) : n()
}

function eC(e) {
    let {
        channel: t,
        currentUser: n,
        exitFullScreen: i,
        canGoLive: s,
        hasPermission: a,
        disabled: o
    } = e, {
        parentAnalyticsLocation: c,
        analyticsLocations: p
    } = (0, _.Ay)(), g = (0, k.Us)(), f = (0, u.yK)([et.A], () => et.A.getAllActiveStreams()), m = f.find(e => e.ownerId === n.id), b = l.useRef(null), A = l.useRef(null), y = t.getGuildId(), O = l.useCallback(() => {
        if (null == i || i(), !s) return (0, ef.A)();
        (0, em.A)(y, t.id, p)
    }, [y, t.id, s, i, p]), j = (0, U.k0)(), [x, v] = l.useState(!1), E = () => {
        ((0, S.X)(c, S.O.STREAM, !0), s) ? O(): (0, ef.A)()
    }, C = () => {
        (0, S.X)(c, S.O.STREAM, !1), (0, D.A)(m)
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [(() => {
            if (j && 0 === f.length) return (0, r.jsx)(N.Ay, {
                contentTypes: [d.M.TRIAL_NUX_STREAM_COACH_MARK],
                bypassAutoDismiss: !0,
                children: e => {
                    let {
                        visibleContent: t,
                        markAsDismissed: n
                    } = e;
                    if (t === d.M.TRIAL_NUX_STREAM_COACH_MARK) return v(!0), (0, r.jsx)(V.b, {
                        buttonRef: b,
                        dismissed: !1,
                        onDismiss: () => {
                            n(eO.i.USER_DISMISS), v(!1)
                        }
                    })
                }
            })
        })(), (0, r.jsx)(F.A, {
            children: (0, r.jsx)(h.YNO, {
                targetElementRef: A,
                renderPopout: e => {
                    let {
                        closePopout: l
                    } = e;
                    return (0, r.jsx)(K.A, {
                        children: (0, r.jsx)(ep.A, {
                            channel: t,
                            currentUser: n,
                            activeStreams: null != m ? [m] : [],
                            handleGoLive: O,
                            appContext: g,
                            onClose: l,
                            onInteraction: eT("ManageStreamsMenu")
                        })
                    })
                },
                position: "top",
                align: "center",
                spacing: 16,
                animation: h.YNO.Animation.FADE,
                children: (e, t) => {
                    let [n, ...l] = [e, t], {} = n, i = ej({}, n), [{
                        isShown: s
                    }] = l;
                    return (0, r.jsx)("div", {
                        ref: A,
                        children: ((e, t) => {
                            let n = null != e ? e : {
                                    onClick: void 0
                                },
                                {
                                    onClick: l
                                } = n,
                                i = function(e, t) {
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
                                }(n, ["onClick"]),
                                s = null != m;
                            return (0, r.jsx)(Q.h, ev(ex({}, i), {
                                centerButton: !0,
                                disabled: o || !a,
                                className: e_.uH,
                                hasPermission: a,
                                streamActive: null != m,
                                isSelfStream: !0,
                                onPopoutClick: s ? function(e) {
                                    null == l || l(e)
                                } : null,
                                popoutOpen: t,
                                shouldShowTooltip: !t,
                                renderNUXHighlight: x,
                                buttonRef: b,
                                onClick: null != m ? C : E
                            }))
                        })(i, s)
                    })
                }
            })
        })]
    })
}

function eS(e) {
    let {
        channel: t,
        idle: n,
        whichPopoutIsOpen: l,
        setWhichPopoutIsOpen: i
    } = e, s = t.getGuildId();
    return (0, y.A)(s, t.id) ? (0, r.jsx)("div", {
        className: e_.UD,
        children: (0, r.jsx)(eu.K, {
            channel: t,
            idle: n,
            whichPopoutIsOpen: l,
            setWhichPopoutIsOpen: i
        })
    }) : null
}
let eI = l.memo(function(e) {
    let {
        currentUser: t,
        onDisconnectCall: n,
        channel: i,
        connectedEmbeddedActivity: s
    } = e, {
        parentAnalyticsLocation: a
    } = (0, _.Ay)(), o = (0, u.bG)([j.A], () => j.A.getSelectedParticipant(i.id)), {
        reducedMotion: d
    } = l.useContext(h.CZY), [p, g] = l.useState(!1), b = null == o ? void 0 : o.id, A = (0, u.bG)([et.A], () => null != b ? et.A.getActiveStreamForStreamKey(b) : null, [b]), y = (null == o ? void 0 : o.type) === ey.lp.STREAM && null != A && A.ownerId !== (null == t ? void 0 : t.id), O = (0, u.yK)([et.A], () => et.A.getAllActiveStreamsForChannel(i.id).filter(e => {
        let {
            ownerId: n
        } = e;
        return n !== (null == t ? void 0 : t.id)
    })), x = (0, L.Qs)(i.id), v = l.useRef(null), E = l.useCallback(() => (null == o ? void 0 : o.type) === ey.lp.ACTIVITY && o.applicationId === (null == s ? void 0 : s.applicationId) ? "ACTIVITY" : y ? "STREAM" : null != x ? "EVENT" : "CALL", [o, null == s ? void 0 : s.applicationId, y, x]), [C, I] = l.useState(E()), N = (0, h.zhh)({
        opacity: p ? .2 : 1,
        transform: p && !d.enabled ? "scale(0.7)" : "scale(1)",
        config: {
            mass: 2,
            tension: p ? 600 : 1e3,
            friction: 45,
            precision: .01,
            clamp: p
        },
        onRest: () => {
            I(E()), g(!1)
        }
    }, "animate-always");
    l.useEffect(() => {
        E() !== C && g(!0)
    }, [C, E]);
    let T = l.useCallback(() => {
        if (null != A)(0, m.vN)((0, w._z)(A));
        else
            for (let e of O)(0, m.vN)((0, w._z)(e))
    }, [O, A]);
    return (0, r.jsx)(h.YNO, {
        targetElementRef: v,
        renderPopout: e => {
            let {
                closePopout: n
            } = e;
            return (0, r.jsx)(ep.A, {
                channel: i,
                currentUser: t,
                activeStreams: O,
                handleGoLive: eA.FXj,
                hideSelfOptions: !0,
                onClose: n,
                onInteraction: eT("ManageStreamsMenu")
            })
        },
        position: "top",
        align: "center",
        animation: h.YNO.Animation.FADE,
        children: (e, l) => {
            let {
                onClick: u
            } = e, {
                isShown: d
            } = l;
            return (0, r.jsx)(c.animated.div, {
                style: N,
                ref: v,
                children: ((e, l) => {
                    let c = {
                        isTrayButton: !1,
                        centerButton: !0,
                        popoutOpen: e
                    };
                    switch (C) {
                        case "ACTIVITY":
                            if (null == o || null == t || o.type !== ey.lp.ACTIVITY || null == s) return;
                            return (0, r.jsx)(z.A, ev(ex({}, c), {
                                applicationId: o.applicationId,
                                color: "disconnect",
                                location: s.location,
                                onPopoutClick: O.length > 0 ? l : null
                            }));
                        case "STREAM":
                            return (0, r.jsx)(Q.h, ev(ex({}, c), {
                                hasPermission: !0,
                                streamActive: !0,
                                color: "disconnect",
                                onClick: () => {
                                    (0, S.X)(a, S.O.STOP_WATCHING), T()
                                },
                                onPopoutClick: O.length > 1 ? l : null,
                                isSelfStream: !1
                            }));
                        case "CALL":
                            return (0, r.jsx)(q.A, ev(ex({}, c), {
                                color: "disconnect",
                                onClick: () => {
                                    (0, S.X)(a, S.O.DISCONNECT), null == n || n()
                                },
                                onPopoutClick: O.length > 0 ? l : null
                            }));
                        case "EVENT":
                            return (0, r.jsx)(M.A, {
                                channelId: i.id,
                                onClick: () => {
                                    (0, S.X)(a, S.O.DISCONNECT), f.default.disconnect(), null == n || n()
                                }
                            })
                    }
                })(d, u)
            })
        }
    })
});

function eN(e) {
    let {
        channel: t,
        cameraUnavailable: n,
        hasCameraPermission: i,
        currentUser: s
    } = e, a = (0, k.Us)(), {
        parentAnalyticsLocation: o
    } = (0, _.Ay)(), {
        reachedLimit: c,
        limit: d
    } = (0, ea.A)(t), h = l.useCallback(() => {
        (0, S.X)(o, S.O.JOIN_VIDEO_CALL), (0, eb.A)(() => f.default.selectVoiceChannel(t.id, !0), a)
    }, [t.id, a, o]), p = l.useCallback(() => {
        n ? (0, eg.A)() : h()
    }, [n, h]), g = (0, u.bG)([en.A], () => {
        let e = en.A.getCall(t.id);
        return (null == e ? void 0 : e.ringing.includes(s.id)) === !0
    });
    return (0, r.jsxs)("div", {
        className: e_.iE,
        children: [(0, r.jsx)(Z.A, {
            enabled: !0,
            centerButton: !0,
            join: !0,
            color: "join",
            channelLimitReached: c,
            channelLimit: d,
            channel: t,
            cameraUnavailable: n,
            hasPermission: i,
            onCameraUnavailable: p,
            className: e_.uH,
            onChange: h
        }), (0, r.jsx)(W.A, {
            centerButton: !0,
            color: "join",
            channel: t,
            className: e_.uH
        }), g ? (0, r.jsx)(Y.A, {
            color: "disconnect",
            channel: t,
            className: e_.uH,
            isTrayButton: !1
        }) : null]
    })
}

function eT(e) {
    return (0, I.s)(e, O.A.VOICE_CONTROL_TRAY, {
        entrypoint: ey.GK.CARET
    })
}
let eP = function(e) {
    var t;
    let {
        channel: n,
        className: i,
        onDisconnectCall: a,
        exitFullScreen: c,
        idleProps: d
    } = e, p = l.useRef(null), [f, m] = l.useState(void 0), y = (0, u.bG)([ei.default], () => {
        let e = ei.default.getCurrentUser();
        return o()(null != e, "CenterControlTray: currentUser cannot be undefined"), e
    }), {
        cameraUnavailable: j,
        enabled: S
    } = (0, es.A)(), I = (0, eo.A)(n), {
        suppress: N,
        selfMute: w,
        mute: D
    } = (0, ec.A)(n), {
        canGoLive: L
    } = (0, u.cf)([er.A], () => ({
        canGoLive: (0, R.A)(er.A)
    })), M = (0, P.A)(), U = (0, u.bG)([T.default], () => null != T.default.getAwaitingRemoteSessionInfo()), V = null != M, F = (0, u.bG)([el.A], () => {
        var e;
        return (null != (e = null == M ? void 0 : M.channelId) ? e : el.A.getVoiceChannelId()) === n.id
    }), Y = (0, B.A)({
        channelId: n.id,
        location: "center-control-tray"
    }), W = (0, u.bG)([A.Ay], () => A.Ay.getCurrentEmbeddedActivity()), {
        reachedLimit: z,
        limit: q
    } = (0, ea.A)(n), {
        analyticsLocations: Q
    } = (0, _.Ay)(O.A.VOICE_CONTROL_TRAY), et = (0, $.Cg)({
        location: O.A.VOICE_CONTROL_TRAY,
        autoTrackExposure: !0
    }), en = (0, H.A)(n), eu = l.useRef(null), ep = l.useRef(null), ef = (0, k.Us)(), em = et ? e => {
        (0, g.L3)(e, () => Promise.resolve(() => (0, r.jsx)(x.default, {
            onClose: g.Z_,
            renderInputDevices: !0,
            renderOutputDevices: !0,
            renderInputModes: !0,
            renderInputVolume: !0,
            renderOutputVolume: !0,
            renderDeafen: !0,
            minimal: !0,
            onInteraction: eT("AudioDeviceMenu"),
            appContext: ef
        })))
    } : void 0;
    return F ? (0, r.jsx)(_.f5, {
        value: Q,
        children: (0, r.jsxs)(b.A, {
            section: eA.JJy.VOICE_CONTROL_TRAY,
            children: [(0, r.jsx)("div", {
                className: e_.rt,
                children: (0, r.jsx)(G.A, {
                    channelId: n.id
                })
            }), (0, r.jsxs)("div", {
                ref: p,
                className: s()(e_.iE, i),
                children: [(0, r.jsxs)("div", {
                    className: e_.qi,
                    children: [(0, r.jsx)(h.YNO, {
                        targetElementRef: eu,
                        renderPopout: e => {
                            let t, {
                                closePopout: n
                            } = e;
                            return t = et ? (0, r.jsx)(ee.a, {
                                wide: !0,
                                showOutputDevices: !0,
                                onSettingsButtonClick: n
                            }) : (0, r.jsx)(v.A, {
                                onInteraction: eT("AudioDeviceMenu"),
                                onClose: n,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: !0,
                                renderInputDevices: !0,
                                renderInputVolume: !0,
                                maybeRenderInputMeter: !0,
                                renderDeafenCheckbox: !0,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                renderSettingsButton: !0,
                                appContext: ef
                            }), (0, r.jsxs)(K.A, {
                                children: [t, " "]
                            })
                        },
                        align: "center",
                        position: "top",
                        animation: h.YNO.Animation.FADE,
                        spacing: 8,
                        children: (e, t) => {
                            let {
                                onClick: n
                            } = e, {
                                isShown: l
                            } = t;
                            return (0, r.jsx)(X.A, {
                                ref: eu,
                                centerButton: !0,
                                onPopoutClick: V ? null : n,
                                selfMute: w,
                                serverMute: D,
                                suppress: N,
                                popoutOpen: l,
                                awaitingRemote: U,
                                onClick: () => (0, C.A)(D, N, eA.JJy.VOICE_CONTROL_TRAY),
                                onContextMenu: em
                            })
                        }
                    }), !V && (0, r.jsx)(h.YNO, {
                        targetElementRef: ep,
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, r.jsx)(K.A, {
                                children: (0, r.jsx)(E.A, {
                                    onClose: t,
                                    minimal: !0,
                                    onInteraction: eT("VideoDeviceMenu"),
                                    appContext: ef
                                })
                            })
                        },
                        position: "top",
                        align: "right",
                        spacing: 16,
                        animation: h.YNO.Animation.FADE,
                        children: (e, t) => {
                            let {
                                onClick: n
                            } = e, {
                                isShown: l
                            } = t;
                            return (0, r.jsx)(Z.A, {
                                ref: ep,
                                centerButton: !0,
                                hasPermission: I,
                                enabled: S,
                                cameraUnavailable: j,
                                onChange: eE,
                                onCameraUnavailable: eg.A,
                                channelLimitReached: z,
                                channelLimit: q,
                                popoutOpen: l,
                                onPopoutClick: n
                            })
                        }
                    })]
                }), (0, r.jsxs)("div", {
                    className: e_.qi,
                    children: [!V && (0, r.jsx)(eC, {
                        channel: n,
                        currentUser: y,
                        exitFullScreen: c,
                        canGoLive: L,
                        hasPermission: I
                    }), !V && (0, r.jsx)(eS, {
                        channel: n,
                        idle: null == (t = null == d ? void 0 : d.idle) || t,
                        whichPopoutIsOpen: f,
                        setWhichPopoutIsOpen: m
                    }), en && (0, r.jsx)(J.A, {
                        channel: n,
                        themeable: !0,
                        whichPopoutIsOpen: f,
                        setWhichPopoutIsOpen: m
                    }), Y && (0, r.jsx)(eh.A, {
                        channel: n,
                        themeable: !0,
                        whichPopoutIsOpen: f,
                        setWhichPopoutIsOpen: m
                    }), (0, r.jsx)(ed.A, {
                        channel: n,
                        whichPopoutIsOpen: f,
                        setWhichPopoutIsOpen: m,
                        remoteMode: V
                    })]
                }), (0, r.jsx)(eI, {
                    connectedEmbeddedActivity: W,
                    currentUser: y,
                    channel: n,
                    onDisconnectCall: a
                })]
            })]
        })
    }) : (0, r.jsx)(_.f5, {
        value: Q,
        children: (0, r.jsx)(eN, {
            channel: n,
            cameraUnavailable: j,
            hasCameraPermission: I,
            currentUser: y
        })
    })
}