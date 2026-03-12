/** chunk id: 175203 params = (module,exports,require) **/
"use strict";
a.d(t, {
    Ay: () => eb,
    Yl: () => eh
}), a(321073);
var n = a(627968),
    i = a(64700),
    r = a(503698),
    s = a.n(r),
    l = a(490249),
    o = a(934551),
    c = a(311907),
    _ = a(827734),
    d = a(990078),
    u = a(397927),
    f = a(827343),
    m = a(820284),
    p = a(793574),
    A = a(587895),
    g = a(429913),
    h = a(520698),
    b = a(659974),
    I = a(164617),
    C = a(66004),
    v = a(958005),
    y = a(384059),
    E = a(609425),
    x = a(73392),
    S = a(529020),
    T = a(401901),
    L = a(40056),
    N = a(117029),
    P = a(612258),
    w = a(551826),
    G = a(87001),
    O = a(574172),
    D = a(665691),
    k = a(209932),
    R = a(253932),
    M = a(461782),
    U = a(614518),
    F = a(706787),
    j = a(961350),
    W = a(760751),
    V = a(111162),
    B = a(430452),
    z = a(290863),
    H = a(485296),
    K = a(977997),
    Y = a(712687),
    X = a(790381),
    J = a(266080),
    Q = a(723702),
    Z = a(837921),
    q = a(141035),
    $ = a(654820),
    ee = a(804980),
    et = a(272812),
    ea = a(203355),
    en = a(83982),
    ei = a(345812),
    er = a(110234),
    es = a(652215),
    el = a(806931),
    eo = a(31408),
    ec = a(731854),
    e_ = a(985018),
    ed = a(257277);
let eu = [el.lp.ACTIVITY],
    ef = i.memo(e => {
        var t, a, r;
        let l, o, _, {
                participant: d,
                popoutType: p,
                onDoubleClick: I,
                onContextMenu: v,
                onClick: y,
                onMouseDown: E,
                onKeyDown: x,
                className: N,
                style: G,
                containerStyle: O,
                channel: Y,
                width: X,
                onVideoResize: J,
                inCall: Q = !1,
                selected: Z = !1,
                noBorder: ei = !1,
                noVideoRender: ef = !1,
                focused: em = !1,
                blocked: ep = !1,
                ignored: eA = !1,
                fit: eh = T.$.CONTAIN,
                paused: eb = !1,
                pulseSpeakingIndicator: eI = !1,
                forceIdle: eC = !1,
                controlsBottom: ev
            } = e,
            ey = i.useContext(M.vG) || eC,
            [eE, ex] = i.useState(!1),
            eS = R.Q_.useSetting(),
            eT = (0, c.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [eL, eN] = i.useState(!1),
            eP = (0, c.bG)([j.default], () => j.default.getId()),
            ew = d.type === el.lp.ACTIVITY ? null : d.user,
            eG = ew?.id ?? null,
            [eO] = (0, g.A)(d.type === el.lp.ACTIVITY ? [d.applicationId] : []),
            eD = (0, c.bG)([B.Ay], () => null != eG && B.Ay.isLocalVideoDisabled(eG, (0, h.A)(d.type)), [eG, d.type]),
            ek = (0, c.bG)([B.Ay], () => null != eG ? B.Ay.getVideoToggleState(eG, (0, h.A)(d.type)) : es.bb8.NONE, [eG, d.type]),
            eR = ek === es.bb8.AUTO_PROBING,
            {
                speaking: eM,
                ringing: eU,
                hasVideo: eF
            } = (0, er.A)(d, eP),
            ej = (0, c.bG)([k.A], () => null !== eG && k.A.isUserPlayingSounds(eG), [eG]),
            eW = (t = eP, a = d, r = Y.getGuildId(), l = a.type !== el.lp.ACTIVITY ? a.user.id : a.applicationId, o = (0, c.cf)([K.A], () => {
                let e = K.A.getVoiceState(r, l);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), _ = (0, c.cf)([B.Ay], () => {
                let e = (0, h.A)(a.type);
                return t === l ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: B.Ay.isLocalMute(l, e),
                    localVideoDisabled: B.Ay.isLocalVideoDisabled(l, e),
                    localVideoAutoDisabled: B.Ay.isLocalVideoAutoDisabled(l, e)
                }
            }, [t, a.type, l]), {
                serverMuted: o.muted,
                serverDeafened: o.deafened,
                suppressed: o.suppressed,
                localMuted: _.muted,
                muted: (a.type === el.lp.USER && a.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (a.type === el.lp.USER && a.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eV = d.type === el.lp.STREAM && eG === eP,
            eB = (0, c.bG)([U.A], () => d.type === el.lp.USER && null != eG ? U.A.getEffectForUserId(eG) : null),
            ez = (0, c.bG)([K.A], () => K.A.getVoicePlatformForChannel(Y.id, eG ?? es.dJq)),
            {
                showGameIcon: eH
            } = S.Ay.useExperiment({
                location: "voice_users"
            }, {
                autoTrackExposure: !1
            }),
            eK = (0, c.bG)([z.A], () => eH && null != eG ? z.A.findActivity(eG, e => null != e.application_id && e.type === es.$pd.PLAYING) : null, [eH, eG]),
            eY = (0, c.bG)([W.A], () => eK?.application_id != null ? W.A.getDetectableGame(eK.application_id) : null),
            eX = (0, c.bG)([A.A], () => null != eY && eK?.application_id != null ? A.A.getApplication(eK?.application_id) : void 0),
            eJ = (0, D.UF)({
                userId: eG,
                channelId: Y.id
            }),
            eQ = (0, D.DY)({
                streamKey: d.type === el.lp.STREAM ? d.id : null,
                channelId: Y.id
            }),
            eZ = i.useMemo(() => d.type === el.lp.STREAM ? eQ ?? !1 : d.type === el.lp.USER && (eJ ?? !1), [eQ, eJ, d.type]);
        i.useEffect(() => {
            ex(em)
        }, [em]);
        let eq = i.useCallback(() => {
                null != eG && f.A.toggleLocalMute(eG, ec.x.STREAM)
            }, [eG]),
            e$ = i.useCallback(e => {
                y?.(d, e)
            }, [y, d]),
            e0 = i.useCallback(e => {
                I?.(d, e)
            }, [I, d]),
            e2 = i.useCallback((e, t, a) => {
                v?.(d, e, t, a)
            }, [v, d]),
            e1 = null,
            e7 = null,
            e9 = "";
        switch (d.type) {
            case el.lp.STREAM:
                e1 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: Z,
                    popoutType: p,
                    width: X,
                    fit: eh,
                    onVideoResize: J,
                    paused: eb
                }), e7 = (0, n.jsx)(ea.D, {
                    participant: d,
                    selected: Z,
                    width: X,
                    focused: em,
                    idle: ey,
                    premiumIndicator: !1
                }), e9 = e_.intl.formatToPlainString(e_.t.gHPz3Q, {
                    streamerName: d.user.username
                });
                break;
            case el.lp.USER:
                e1 = (0, n.jsx)(en.A, {
                    channel: Y,
                    inCall: Q,
                    participant: d,
                    popoutType: p,
                    fit: eh,
                    onVideoResize: J,
                    paused: eb,
                    selected: Z,
                    width: X,
                    blocked: ep,
                    ignored: eA,
                    noVideoRender: ef || eR,
                    pulseSpeakingIndicator: eI
                }), e7 = (0, n.jsx)(en.s, {
                    participant: d,
                    channelId: Y.id
                }), e9 = e_.intl.formatToPlainString(e_.t["iC/x/Q"], {
                    username: d.user.username
                });
                break;
            case el.lp.ACTIVITY:
                e1 = (0, n.jsx)(ee.Ay, {
                    interactible: em,
                    participant: d,
                    selected: Z,
                    channel: Y,
                    width: X
                }), e9 = e_.intl.formatToPlainString(e_.t.YCvOsO, {
                    activityName: eO?.name
                });
                break;
            case el.lp.HIDDEN_STREAM:
                e1 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: Z,
                    width: X,
                    fit: eh,
                    onVideoResize: J,
                    paused: eb,
                    popoutType: p
                })
        }
        let e5 = i.useRef(null),
            e6 = (0, c.bG)([H.A], () => d.type === el.lp.USER ? H.A.getVoiceVolume(d.id) : -1 / 0),
            e8 = (0, b.v)({
                isSpeaking: eM,
                voiceDb: e6,
                spreadDirection: b.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e3 = (0, el.Ay)(d) ? u.kN9 : eF ? u.npA : u.EsG,
            e4 = d.type === el.lp.STREAM && em;
        return (0, n.jsx)(m.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, n.jsx)(L.Ay, {
                streamKey: d.id,
                enableZoom: e4,
                children: (0, n.jsx)("div", {
                    className: s()(ed.iE, {
                        [ed.DF]: eU
                    }, N),
                    style: O,
                    onMouseEnter: () => {
                        eN(!0)
                    },
                    onMouseLeave: () => {
                        eN(!1)
                    },
                    children: (0, n.jsxs)(w.A, {
                        shakeLocation: eo.uD.VOICE_USER,
                        isShaking: eM,
                        className: ed.Vs,
                        children: [(0, n.jsx)(et.A, {
                            ref: e5,
                            className: s()(ed.Vs, {
                                [ed.E7]: ei,
                                [ed.k_]: null == y,
                                [ed.N7]: ey
                            }),
                            noBorder: ei,
                            style: G,
                            participantUserId: eG,
                            children: (0, n.jsxs)(u.sqX, {
                                "aria-label": e9,
                                className: ed.lG,
                                onDoubleClick: e0,
                                onContextMenu: e => e2(e, d.type === el.lp.STREAM),
                                onClick: e$,
                                onMouseDown: E,
                                onKeyDown: x,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != eB && null != eG ? (0, n.jsx)(F.A, {
                                    voiceChannelEffect: eB,
                                    onComplete: () => (0, U.a)(eG),
                                    userId: eG
                                }) : null, d.type === el.lp.USER ? (0, n.jsx)("div", {
                                    className: ed.nl,
                                    children: (0, n.jsx)(C.A, {
                                        userId: eG,
                                        channelId: Y.id,
                                        guildId: Y.getGuildId(),
                                        containerDimensions: {
                                            width: e5?.current?.clientWidth ?? 0,
                                            height: e5?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e1, ei ? null : (0, n.jsx)("div", {
                                    className: ed.hD,
                                    children: e7
                                }), Z ? (0, n.jsx)("div", {
                                    className: ed._Q,
                                    children: (0, n.jsx)(e3, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ed.Dt
                                    })
                                }) : null, eu.includes(d.type) ? null : (0, n.jsx)(eg, {
                                    focused: em,
                                    width: X,
                                    inCall: Q,
                                    participantId: d.id,
                                    participantType: d.type,
                                    hasVideo: eF ?? !1,
                                    ...eW,
                                    idle: ey,
                                    platform: ez,
                                    title: (0, q.A)(Y, d),
                                    blocked: ep,
                                    ignored: eA,
                                    localVideoDisabled: eD,
                                    videoToggleState: ek,
                                    hideAudioIcon: eV,
                                    onContextMenu: e2,
                                    onToggleMute: eq,
                                    participantUserId: eG,
                                    channel: Y,
                                    application: eX,
                                    secureFramesVerified: eZ,
                                    isHovered: eL,
                                    popoutType: p,
                                    paused: eb,
                                    controlsBottom: ev,
                                    streamId: d.type === el.lp.STREAM ? d.streamId : null
                                }), Q && !ei ? (0, n.jsx)("div", {
                                    className: s()(ed.PQ, {
                                        [ed.pU]: !em && (ej || null != eB)
                                    }),
                                    style: em || ej ? void 0 : e8
                                }) : null]
                            })
                        }), eS && eT && eL && (0, n.jsx)($.A, {
                            currentUserId: eP,
                            participant: d
                        }), (0, n.jsx)(P.A, {
                            isFiring: eE,
                            callTileRef: e5.current
                        })]
                    })
                })
            })
        })
    });

function em(e) {
    let {
        participantType: t,
        platform: a,
        className: i
    } = e;
    if (t === el.lp.STREAM) return a === el.J7.XBOX ? (0, n.jsx)(J.A, {
        className: i
    }) : (0, n.jsx)(u.kN9, {
        size: "md",
        color: "currentColor",
        className: i
    });
    switch (a) {
        case el.J7.MOBILE:
            return (0, n.jsx)(u.u6o, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        case el.J7.XBOX:
            return (0, n.jsx)(J.A, {
                className: i
            });
        case el.J7.PLAYSTATION:
            return (0, n.jsx)(X.A, {
                className: i
            });
        case el.J7.QUEST:
            return (0, n.jsx)(o.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        default:
            return null
    }
}

function ep(e) {
    let {
        icon: t,
        tooltipText: a,
        hideWhenInactive: i,
        idle: r,
        onClick: l
    } = e;
    return (0, n.jsx)(d.m, {
        text: a,
        children: (0, n.jsx)("div", {
            className: s()(ed.V7, {
                [ed.kl]: i,
                [ed.N7]: r
            }),
            children: (0, n.jsx)(u.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: e => {
                    e.stopPropagation(), l(e)
                },
                "aria-label": a,
                icon: t
            })
        })
    })
}

function eA(e) {
    let {
        channelId: t,
        participantId: a,
        hideWhenInactive: r,
        idle: s
    } = e, l = i.useMemo(() => (0, v.A)(t, a), [t, a]), o = (0, c.bG)([G.A], () => G.A.getIsAlwaysOnTop(l)), _ = i.useCallback(() => {
        (0, y.X)(p.A.CALL_TILE_POPOUT, y.O.STAY_ON_TOP, !o), O.setAlwaysOnTop(l, !o)
    }, [l, o]);
    return Q.isPlatformEmbedded && Z.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS) ? (0, n.jsx)(ep, {
        onClick: _,
        tooltipText: o ? e_.intl.string(e_.t.YdyDM9) : e_.intl.string(e_.t.ZVGHwP),
        icon: o ? u.hl9 : u.qgw,
        hideWhenInactive: r,
        idle: s
    }) : null
}
ef.displayName = "CallTile";
let eg = i.memo(e => {
    let {
        idle: t,
        title: a,
        width: r,
        focused: f,
        videoToggleState: m,
        blocked: A,
        ignored: g,
        participantId: b,
        participantType: C,
        participantUserId: S,
        channel: T,
        platform: L,
        secureFramesVerified: P,
        onContextMenu: w,
        muted: G,
        deafened: D,
        localMuted: k,
        serverMuted: R,
        serverDeafened: M,
        hasVideo: U,
        hideAudioIcon: F,
        onToggleMute: j,
        popoutType: W,
        paused: V,
        controlsBottom: z,
        streamId: H
    } = e, K = (0, c.bG)([B.Ay], () => null != S && B.Ay.isLocalVideoAutoDisabled(S, (0, h.A)(C)), [S, C]), X = (0, E.A)({
        userId: S,
        guildId: T.getGuildId()
    }), J = (0, x.a)({
        displayNameStyles: X
    }), Q = (0, ei.Y)(r), Z = (0, ei.V)(r), [q, $] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== Y.A.isOpen() && ((e = Y.A.isOpen()) || $(!1))
            };
        return Y.A.addChangeListener(t), () => Y.A.removeChangeListener(t)
    }, []);
    let ee = !F && C === el.lp.STREAM && U && (!Z || k),
        et = function(e) {
            let {
                localMuted: t,
                serverMuted: a,
                serverDeafened: n,
                deafened: i,
                muted: r
            } = e;
            return n ? u.TJE : a ? u.O1p : i ? u.cQT : t ? u.O1p : r ? u.z0P : null
        }({
            localMuted: k,
            serverMuted: R,
            serverDeafened: M,
            deafened: D,
            muted: G
        }),
        ea = (0, u.zhh)({
            value: null != z ? z : 0,
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        en = [];
    return f && C === el.lp.STREAM && en.push((0, n.jsx)(N.A, {
        streamId: H,
        paused: V
    }, "zoom-controls")), f ? W === I.N.CALL_TILE && (en.push((0, n.jsx)(eA, {
        channelId: T.id,
        participantId: b,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), en.push((0, n.jsx)(ep, {
        onClick: () => {
            (0, y.X)(p.A.CALL_TILE_POPOUT, y.O.POPOUT_RETURN), O.close((0, v.A)(T.id, b))
        },
        tooltipText: e_.intl.string(e_.t["7Dwcnj"]),
        icon: o.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (en.push((0, n.jsx)(ep, {
        onClick: e => {
            e.stopPropagation(), $(!0), w(e, !0, el.GK.THREE_DOT)
        },
        tooltipText: e_.intl.string(e_.t["+1H47t"]),
        icon: u.jNK,
        hideWhenInactive: !q,
        idle: t
    }, "options")), ee && en.push((0, n.jsx)(ep, {
        onClick: j,
        tooltipText: k ? e_.intl.string(e_.t.YqAjXy) : e_.intl.string(e_.t.w4m945),
        icon: k ? u._RO : u.HKD,
        hideWhenInactive: !k && !q,
        idle: t
    }, "mute"))), (0, n.jsxs)("div", {
        className: s()(ed.MU, {
            [ed.oE]: Z,
            [ed.Ol]: f
        }),
        children: [(0, n.jsx)("div", {
            className: s()(ed.Ik, {
                [ed.EX]: r < 195
            }),
            children: K || m === es.bb8.AUTO_PROBING ? t ? (0, n.jsx)("div", {
                className: ed.h5,
                children: (0, n.jsx)(u.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, n.jsxs)("div", {
                className: s()(ed.ns, ed.WP),
                children: [(0, n.jsx)("div", {
                    className: ed.h5,
                    children: (0, n.jsx)(u.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, n.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    className: ed.Wk,
                    children: e_.intl.string(e_.t.m2Hyj0)
                })]
            }) : null
        }), !Q && (0, n.jsxs)("div", {
            className: s()(ed.Qp, {
                [ed.EX]: r < 195
            }),
            children: [(0, n.jsxs)(u.Text, {
                className: ed.ac,
                color: "none",
                variant: Z ? "text-sm/normal" : "text-md/normal",
                children: [null != et && C === el.lp.USER && (0, n.jsx)(et, {
                    className: ed.gr,
                    size: "xs",
                    color: "currentColor"
                }), A ? (0, n.jsx)("div", {
                    className: ed.Z5,
                    children: (0, n.jsx)(u.KTN, {
                        size: "lg",
                        className: ed.Q6,
                        color: _.A.unsafe_rawColors.RED_400.css
                    })
                }) : null, g ? (0, n.jsx)("div", {
                    className: ed.PP,
                    children: (0, n.jsx)(u.G3N, {
                        size: "lg",
                        className: ed.Q6
                    })
                }) : null, t ? null : (0, n.jsx)(em, {
                    participantType: C,
                    platform: L,
                    className: ed.gr
                }), null == a || "" === a || t ? null : (0, n.jsx)("span", {
                    className: s()(ed.Wk, J),
                    children: a
                }), P && (0, n.jsx)(d.m, {
                    text: e_.intl.string(e_.t.ZEem6O),
                    children: (0, n.jsx)(u.m5V, {
                        className: ed.vW,
                        size: "xs",
                        color: _.A.colors.TEXT_STRONG,
                        "aria-label": e_.intl.string(e_.t.mR9cf3)
                    })
                })]
            }), en.length > 0 ? (0, n.jsx)(l.animated.div, {
                className: s()(ed._v, {
                    [ed.N7]: t
                }),
                style: {
                    marginBottom: ea.value
                },
                children: en
            }) : null]
        })]
    })
});
eg.displayName = "CallTileOverlay";
let eh = /^(14256|21552)$/.test(a.j) ? T.$ : null,
    eb = ef