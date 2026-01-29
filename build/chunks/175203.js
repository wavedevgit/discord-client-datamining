/** Chunk was on 12925 **/
/** chunk id: 175203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => eA,
    Yl: () => ef
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    o = n(934551),
    s = n(311907),
    c = n(827734),
    u = n(990078),
    d = n(397927),
    _ = n(827343),
    f = n(820284),
    A = n(587895),
    p = n(429913),
    b = n(520698),
    h = n(659974),
    m = n(164617),
    g = n(66004),
    I = n(958005),
    y = n(609425),
    E = n(73392),
    O = n(529020),
    v = n(401901),
    C = n(612258),
    N = n(551826),
    T = n(87001),
    P = n(574172),
    x = n(665691),
    S = n(209932),
    L = n(253932),
    w = n(461782),
    j = n(614518),
    D = n(706787),
    k = n(961350),
    G = n(760751),
    R = n(111162),
    M = n(430452),
    U = n(290863),
    F = n(485296),
    W = n(977997),
    V = n(712687),
    H = n(790381),
    z = n(266080),
    B = n(723702),
    K = n(837921),
    Y = n(141035),
    J = n(654820),
    Z = n(804980),
    q = n(272812),
    Q = n(203355),
    X = n(83982),
    $ = n(345812),
    ee = n(110234),
    et = n(652215),
    en = n(806931),
    er = n(31408),
    el = n(731854),
    ea = n(985018),
    ei = n(707511);
let eo = [en.lp.ACTIVITY],
    es = l.memo(e => {
        var t, n, a, o, c, u, m, I, y, E, T, P, V, H;
        let z, B, K, {
                participant: $,
                popoutType: es,
                onDoubleClick: ec,
                onContextMenu: eu,
                onClick: ed,
                onMouseDown: ef,
                onKeyDown: eA,
                className: ep,
                style: eb,
                containerStyle: eh,
                channel: em,
                width: eg,
                onVideoResize: eI,
                inCall: ey = !1,
                selected: eE = !1,
                noBorder: eO = !1,
                noVideoRender: ev = !1,
                focused: eC = !1,
                blocked: eN = !1,
                ignored: eT = !1,
                fit: eP = v.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: eS = !1,
                forceIdle: eL = !1,
                controlsBottom: ew
            } = e,
            ej = l.useContext(w.vG) || eL,
            [eD, ek] = l.useState(!1),
            eG = L.Q_.useSetting(),
            eR = (0, s.bG)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eM, eU] = l.useState(!1),
            eF = (0, s.bG)([k.default], () => k.default.getId()),
            eW = $.type === en.lp.ACTIVITY ? null : $.user,
            eV = null != (t = null == eW ? void 0 : eW.id) ? t : null,
            [eH] = (0, p.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
            ez = (0, s.bG)([M.A], () => null != eV && M.A.isLocalVideoDisabled(eV, (0, b.A)($.type)), [eV, $.type]),
            eB = (0, s.bG)([M.A], () => null != eV ? M.A.getVideoToggleState(eV, (0, b.A)($.type)) : et.bb8.NONE, [eV, $.type]),
            eK = eB === et.bb8.AUTO_PROBING,
            {
                speaking: eY,
                latched: eJ,
                ringing: eZ,
                hasVideo: eq
            } = (0, ee.A)($, eF),
            eQ = (0, s.bG)([S.A], () => null !== eV && S.A.isUserPlayingSounds(eV), [eV]),
            eX = (I = eF, y = $, E = em.getGuildId(), z = y.type !== en.lp.ACTIVITY ? y.user.id : y.applicationId, B = (0, s.cf)([W.A], () => {
                var e, t, n;
                let r = W.A.getVoiceState(E, z);
                return {
                    muted: null != (e = null == r ? void 0 : r.mute) && e,
                    deafened: null != (t = null == r ? void 0 : r.deaf) && t,
                    suppressed: null != (n = null == r ? void 0 : r.suppress) && n,
                    voiceChannelId: null == r ? void 0 : r.channelId
                }
            }), K = (0, s.cf)([M.A], () => {
                let e = (0, b.A)(y.type);
                return I === z ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: M.A.isLocalMute(z, e),
                    localVideoDisabled: M.A.isLocalVideoDisabled(z, e),
                    localVideoAutoDisabled: M.A.isLocalVideoAutoDisabled(z, e)
                }
            }, [I, y.type, z]), {
                serverMuted: B.muted,
                serverDeafened: B.deafened,
                suppressed: B.suppressed,
                localMuted: K.muted,
                muted: null != (T = y.type === en.lp.USER && (null == (V = y.voiceState) ? void 0 : V.isVoiceMuted())) && T,
                deafened: null != (P = y.type === en.lp.USER && (null == (H = y.voiceState) ? void 0 : H.isVoiceDeafened())) && P
            }),
            e$ = $.type === en.lp.STREAM && eV === eF,
            e0 = (0, s.bG)([j.A], () => $.type === en.lp.USER && null != eV ? j.A.getEffectForUserId(eV) : null),
            e1 = (0, s.bG)([W.A], () => W.A.getVoicePlatformForChannel(em.id, null != eV ? eV : et.dJq)),
            {
                showGameIcon: e2
            } = O.Ay.useExperiment({
                location: "voice_users"
            }, {
                autoTrackExposure: !1
            }),
            e3 = (0, s.bG)([U.A], () => e2 && null != eV ? U.A.findActivity(eV, e => null != e.application_id && e.type === et.$pd.PLAYING) : null, [e2, eV]),
            e5 = (0, s.bG)([G.A], () => (null == e3 ? void 0 : e3.application_id) != null ? G.A.getDetectableGame(e3.application_id) : null),
            e6 = (0, s.bG)([A.A], () => null != e5 && (null == e3 ? void 0 : e3.application_id) != null ? A.A.getApplication(null == e3 ? void 0 : e3.application_id) : void 0),
            e7 = (0, x.UF)({
                userId: eV,
                channelId: em.id
            }),
            e8 = (0, x.DY)({
                streamKey: $.type === en.lp.STREAM ? $.id : null,
                channelId: em.id
            }),
            e9 = l.useMemo(() => $.type === en.lp.STREAM ? null != e8 && e8 : $.type === en.lp.USER && null != e7 && e7, [e8, e7, $.type]);
        l.useEffect(() => {
            ek(eC)
        }, [eC]);
        let e4 = l.useCallback(() => {
                null != eV && _.A.toggleLocalMute(eV, el.x.STREAM)
            }, [eV]),
            te = l.useCallback(e => {
                null == ed || ed($, e)
            }, [ed, $]),
            tt = l.useCallback(e => {
                null == ec || ec($, e)
            }, [ec, $]),
            tn = l.useCallback((e, t, n) => {
                null == eu || eu($, e, t, n)
            }, [eu, $]),
            tr = null,
            tl = null,
            ta = "";
        switch ($.type) {
            case en.lp.STREAM:
                tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: eE,
                    popoutType: es,
                    width: eg,
                    fit: eP,
                    onVideoResize: eI,
                    paused: ex,
                    focused: eC,
                    idle: ej,
                    controlsBottom: ew
                }), tl = (0, r.jsx)(Q.D, {
                    participant: $,
                    selected: eE,
                    width: eg,
                    focused: eC,
                    idle: ej,
                    premiumIndicator: !1
                }), ta = ea.intl.formatToPlainString(ea.t.gHPz3Q, {
                    streamerName: $.user.username
                });
                break;
            case en.lp.USER:
                tr = (0, r.jsx)(X.A, {
                    channel: em,
                    inCall: ey,
                    participant: $,
                    popoutType: es,
                    fit: eP,
                    onVideoResize: eI,
                    paused: ex,
                    selected: eE,
                    width: eg,
                    blocked: eN,
                    ignored: eT,
                    noVideoRender: ev || eK,
                    pulseSpeakingIndicator: eS
                }), tl = (0, r.jsx)(X.s, {
                    participant: $,
                    channelId: em.id
                }), ta = ea.intl.formatToPlainString(ea.t["iC/x/Q"], {
                    username: $.user.username
                });
                break;
            case en.lp.ACTIVITY:
                tr = (0, r.jsx)(Z.Ay, {
                    interactible: eC,
                    participant: $,
                    selected: eE,
                    channel: em,
                    width: eg
                }), ta = ea.intl.formatToPlainString(ea.t.YCvOsO, {
                    activityName: null == eH ? void 0 : eH.name
                });
                break;
            case en.lp.HIDDEN_STREAM:
                tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: eE,
                    width: eg,
                    fit: eP,
                    onVideoResize: eI,
                    paused: ex,
                    popoutType: es,
                    focused: eC,
                    idle: ej
                })
        }
        let ti = l.useRef(null),
            to = (0, s.bG)([F.A], () => $.type === en.lp.USER ? F.A.getVoiceVolume($.id) : -1 / 0),
            ts = (0, h.v)({
                isSpeaking: eY,
                voiceDb: to,
                spreadDirection: h.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            tc = $.type === en.lp.STREAM ? d.kN9 : d.npA;
        return (0, r.jsx)(f.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: i()(ei.iE, {
                    [ei.DF]: eZ
                }, ep),
                style: eh,
                onMouseEnter: () => {
                    eU(!0)
                },
                onMouseLeave: () => {
                    eU(!1)
                },
                children: (0, r.jsxs)(N.A, {
                    shakeLocation: er.uD.VOICE_USER,
                    isShaking: eY,
                    className: ei.Vs,
                    children: [(0, r.jsx)(q.A, {
                        ref: ti,
                        className: i()(ei.Vs, {
                            [ei.E7]: eO,
                            [ei.k_]: null == ed,
                            [ei.N7]: ej
                        }),
                        noBorder: eO,
                        style: eb,
                        participantUserId: eV,
                        children: (0, r.jsxs)(d.sqX, {
                            "aria-label": ta,
                            className: ei.lG,
                            onDoubleClick: tt,
                            onContextMenu: e => tn(e, $.type === en.lp.STREAM),
                            onClick: te,
                            onMouseDown: ef,
                            onKeyDown: eA,
                            focusProps: {
                                offset: 1
                            },
                            children: [null != e0 && null != eV ? (0, r.jsx)(D.A, {
                                voiceChannelEffect: e0,
                                onComplete: () => (0, j.a)(eV),
                                userId: eV
                            }) : null, $.type === en.lp.USER ? (0, r.jsx)("div", {
                                className: ei.nl,
                                children: (0, r.jsx)(g.A, {
                                    userId: eV,
                                    channelId: em.id,
                                    guildId: em.getGuildId(),
                                    containerDimensions: {
                                        width: null != (n = null == ti || null == (o = ti.current) ? void 0 : o.clientWidth) ? n : 0,
                                        height: null != (a = null == ti || null == (c = ti.current) ? void 0 : c.clientHeight) ? a : 0
                                    }
                                })
                            }) : null, tr, eO ? null : (0, r.jsx)("div", {
                                className: ei.hD,
                                children: tl
                            }), eE ? (0, r.jsx)("div", {
                                className: ei._Q,
                                children: (0, r.jsx)(tc, {
                                    size: "md",
                                    color: "currentColor",
                                    className: ei.Dt
                                })
                            }) : null, eo.includes($.type) ? null : (0, r.jsx)(e_, (u = function(e) {
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
                            }({
                                focused: eC,
                                width: eg,
                                inCall: ey,
                                participantId: $.id,
                                participantType: $.type,
                                hasVideo: null != eq && eq
                            }, eX), m = m = {
                                idle: ej,
                                platform: e1,
                                title: (0, Y.A)(em, $),
                                blocked: eN,
                                ignored: eT,
                                localVideoDisabled: ez,
                                videoToggleState: eB,
                                hideAudioIcon: e$,
                                onContextMenu: tn,
                                onToggleMute: e4,
                                participantUserId: eV,
                                channel: em,
                                application: e6,
                                secureFramesVerified: e9,
                                isHovered: eM,
                                popoutType: es
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(m)).forEach(function(e) {
                                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(m, e))
                            }), u)), ey && !eO ? (0, r.jsx)("div", {
                                className: i()(ei.PQ, {
                                    [ei.pU]: !eC && (eQ || null != e0),
                                    [ei.JB]: eJ && !eY && !eC && !eQ
                                }),
                                style: eC || eQ ? void 0 : ts
                            }) : null]
                        })
                    }), eG && eR && eM && (0, r.jsx)(J.A, {
                        currentUserId: eF,
                        participant: $
                    }), (0, r.jsx)(C.A, {
                        isFiring: eD,
                        callTileRef: ti.current
                    })]
                })
            })
        })
    });

function ec(e) {
    let {
        participantType: t,
        platform: n,
        className: l
    } = e;
    if (t === en.lp.STREAM) return n === en.J7.XBOX ? (0, r.jsx)(z.A, {
        className: l
    }) : (0, r.jsx)(d.kN9, {
        size: "md",
        color: "currentColor",
        className: l
    });
    switch (n) {
        case en.J7.MOBILE:
            return (0, r.jsx)(d.u6o, {
                size: "xs",
                color: "currentColor",
                className: l
            });
        case en.J7.XBOX:
            return (0, r.jsx)(z.A, {
                className: l
            });
        case en.J7.PLAYSTATION:
            return (0, r.jsx)(H.A, {
                className: l
            });
        case en.J7.QUEST:
            return (0, r.jsx)(o.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: l
            });
        default:
            return null
    }
}

function eu(e) {
    let {
        icon: t,
        tooltipText: n,
        hideWhenInactive: l,
        onClick: a
    } = e;
    return (0, r.jsx)(u.m, {
        text: n,
        children: (0, r.jsx)("div", {
            className: i()(ei.V7, {
                [ei.kl]: l
            }),
            children: (0, r.jsx)(d.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: e => {
                    e.stopPropagation(), a(e)
                },
                "aria-label": n,
                icon: t
            })
        })
    })
}

function ed(e) {
    let {
        channelId: t,
        participantId: n,
        hideWhenInactive: a
    } = e, i = l.useMemo(() => (0, I.A)(t, n), [t, n]), o = (0, s.bG)([T.A], () => T.A.getIsAlwaysOnTop(i)), c = l.useCallback(() => {
        P.setAlwaysOnTop(i, !o)
    }, [i, o]);
    return B.isPlatformEmbedded && K.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS) ? (0, r.jsx)(eu, {
        onClick: c,
        tooltipText: o ? ea.intl.string(ea.t.YdyDM9) : ea.intl.string(ea.t.ZVGHwP),
        icon: o ? d.hl9 : d.qgw,
        hideWhenInactive: a
    }) : null
}
es.displayName = "CallTile";
let e_ = l.memo(e => {
    let {
        idle: t,
        title: n,
        width: a,
        focused: o,
        videoToggleState: _,
        blocked: f,
        ignored: A,
        participantId: p,
        participantType: h,
        participantUserId: g,
        channel: I,
        platform: O,
        secureFramesVerified: v,
        onContextMenu: C,
        muted: N,
        deafened: T,
        localMuted: P,
        serverMuted: x,
        serverDeafened: S,
        hasVideo: L,
        hideAudioIcon: w,
        onToggleMute: j,
        popoutType: D
    } = e, k = (0, s.bG)([M.A], () => null != g && M.A.isLocalVideoAutoDisabled(g, (0, b.A)(h)), [g, h]), G = (0, y.A)({
        userId: g,
        guildId: I.getGuildId()
    }), R = (0, E.a)({
        displayNameStyles: G
    }), U = (0, $.Y)(a), F = (0, $.V)(a), [W, H] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== V.A.isOpen() && ((e = V.A.isOpen()) || H(!1))
            };
        return V.A.addChangeListener(t), () => V.A.removeChangeListener(t)
    }, []);
    let z = !w && h === en.lp.STREAM && L && (!F || P),
        B = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: r,
                deafened: l,
                muted: a
            } = e;
            return r ? d.TJE : n ? d.O1p : l ? d.cQT : t ? d.O1p : a ? d.z0P : null
        }({
            localMuted: P,
            serverMuted: x,
            serverDeafened: S,
            deafened: T,
            muted: N
        }),
        K = [];
    return o ? D === m.N.CALL_TILE && K.push((0, r.jsx)(ed, {
        channelId: I.id,
        participantId: p,
        hideWhenInactive: !W
    }, "stay-on-top")) : (K.push((0, r.jsx)(eu, {
        onClick: e => {
            e.stopPropagation(), H(!0), C(e, !0, en.GK.THREE_DOT)
        },
        tooltipText: ea.intl.string(ea.t["+1H47t"]),
        icon: d.jNK,
        hideWhenInactive: !W
    }, "options")), z && K.push((0, r.jsx)(eu, {
        onClick: j,
        tooltipText: P ? ea.intl.string(ea.t.YqAjXy) : ea.intl.string(ea.t.w4m945),
        icon: P ? d._RO : d.HKD,
        hideWhenInactive: !P && !W
    }, "mute"))), (0, r.jsxs)("div", {
        className: i()(ei.MU, {
            [ei.oE]: F,
            [ei.Ol]: o
        }),
        children: [(0, r.jsx)("div", {
            className: i()(ei.Ik, {
                [ei.EX]: a < 195
            }),
            children: k || _ === et.bb8.AUTO_PROBING ? t ? (0, r.jsx)("div", {
                className: ei.h5,
                children: (0, r.jsx)(d.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, r.jsxs)("div", {
                className: i()(ei.ns, ei.WP),
                children: [(0, r.jsx)("div", {
                    className: ei.h5,
                    children: (0, r.jsx)(d.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    className: ei.Wk,
                    children: ea.intl.string(ea.t.m2Hyj0)
                })]
            }) : null
        }), !U && (0, r.jsxs)("div", {
            className: i()(ei.Qp, {
                [ei.EX]: a < 195
            }),
            children: [(0, r.jsxs)(d.Text, {
                className: ei.ac,
                color: "none",
                variant: F ? "text-sm/normal" : "text-md/normal",
                children: [null != B && h === en.lp.USER && (0, r.jsx)(B, {
                    className: i()(ei.fh, {
                        [ei.oE]: F
                    }),
                    size: "xs",
                    color: "currentColor"
                }), f ? (0, r.jsx)("div", {
                    className: ei.Z5,
                    children: (0, r.jsx)(d.KTN, {
                        size: "lg",
                        className: ei.Q6,
                        color: c.A.unsafe_rawColors.RED_400.css
                    })
                }) : null, A ? (0, r.jsx)("div", {
                    className: ei.PP,
                    children: (0, r.jsx)(d.G3N, {
                        size: "lg",
                        className: ei.Q6
                    })
                }) : null, t ? null : (0, r.jsx)(ec, {
                    participantType: h,
                    platform: O,
                    className: i()(ei.fh, {
                        [ei.oE]: F
                    })
                }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
                    className: i()(ei.Wk, R),
                    children: n
                }), v && (0, r.jsx)(u.m, {
                    text: ea.intl.string(ea.t.ZEem6O),
                    children: (0, r.jsx)(d.m5V, {
                        className: ei.vW,
                        size: "xs",
                        color: c.A.colors.TEXT_STRONG,
                        "aria-label": ea.intl.string(ea.t.mR9cf3)
                    })
                })]
            }), K.length > 0 ? (0, r.jsx)("div", {
                className: ei._v,
                children: K
            }) : null]
        })]
    })
});
e_.displayName = "CallTileOverlay";
let ef = /^(14256|21552)$/.test(n.j) ? v.$ : null,
    eA = es