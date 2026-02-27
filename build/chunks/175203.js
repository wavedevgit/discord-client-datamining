/** chunk id: 175203, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Ay: () => eA,
    Yl: () => eb
}), a(321073);
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(475539),
    o = a(934551),
    c = a(311907),
    _ = a(827734),
    d = a(990078),
    u = a(397927),
    m = a(827343),
    f = a(820284),
    p = a(793574),
    g = a(587895),
    h = a(429913),
    b = a(520698),
    A = a(659974),
    I = a(164617),
    v = a(66004),
    x = a(958005),
    C = a(384059),
    y = a(609425),
    S = a(73392),
    T = a(529020),
    E = a(401901),
    N = a(40056),
    w = a(117029),
    P = a(612258),
    L = a(551826),
    R = a(87001),
    k = a(574172),
    M = a(665691),
    O = a(209932),
    D = a(253932),
    G = a(461782),
    j = a(614518),
    U = a(706787),
    V = a(961350),
    F = a(760751),
    W = a(111162),
    B = a(430452),
    H = a(290863),
    z = a(485296),
    K = a(977997),
    Y = a(712687),
    X = a(790381),
    Q = a(266080),
    q = a(723702),
    J = a(837921),
    Z = a(141035),
    $ = a(654820),
    ee = a(804980),
    et = a(272812),
    ea = a(203355),
    en = a(83982),
    er = a(345812),
    ei = a(110234),
    es = a(652215),
    el = a(806931),
    eo = a(31408),
    ec = a(731854),
    e_ = a(985018),
    ed = a(707511);
let eu = [el.lp.ACTIVITY],
    em = r.memo(e => {
        var t, a, i;
        let l, o, _, {
                participant: d,
                popoutType: p,
                onDoubleClick: I,
                onContextMenu: x,
                onClick: C,
                onMouseDown: y,
                onKeyDown: S,
                className: w,
                style: R,
                containerStyle: k,
                channel: Y,
                width: X,
                onVideoResize: Q,
                inCall: q = !1,
                selected: J = !1,
                noBorder: er = !1,
                noVideoRender: em = !1,
                focused: ef = !1,
                blocked: ep = !1,
                ignored: eg = !1,
                fit: eb = E.$.CONTAIN,
                paused: eA = !1,
                pulseSpeakingIndicator: eI = !1,
                forceIdle: ev = !1,
                controlsBottom: ex
            } = e,
            eC = r.useContext(G.vG) || ev,
            [ey, eS] = r.useState(!1),
            eT = D.Q_.useSetting(),
            eE = (0, c.bG)([W.default], () => W.default.isStreamInfoOverlayEnabled),
            [eN, ew] = r.useState(!1),
            eP = (0, c.bG)([V.default], () => V.default.getId()),
            eL = d.type === el.lp.ACTIVITY ? null : d.user,
            eR = eL?.id ?? null,
            [ek] = (0, h.A)(d.type === el.lp.ACTIVITY ? [d.applicationId] : []),
            eM = (0, c.bG)([B.Ay], () => null != eR && B.Ay.isLocalVideoDisabled(eR, (0, b.A)(d.type)), [eR, d.type]),
            eO = (0, c.bG)([B.Ay], () => null != eR ? B.Ay.getVideoToggleState(eR, (0, b.A)(d.type)) : es.bb8.NONE, [eR, d.type]),
            eD = eO === es.bb8.AUTO_PROBING,
            {
                speaking: eG,
                ringing: ej,
                hasVideo: eU
            } = (0, ei.A)(d, eP),
            eV = (0, c.bG)([O.A], () => null !== eR && O.A.isUserPlayingSounds(eR), [eR]),
            eF = (t = eP, a = d, i = Y.getGuildId(), l = a.type !== el.lp.ACTIVITY ? a.user.id : a.applicationId, o = (0, c.cf)([K.A], () => {
                let e = K.A.getVoiceState(i, l);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), _ = (0, c.cf)([B.Ay], () => {
                let e = (0, b.A)(a.type);
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
            eW = d.type === el.lp.STREAM && eR === eP,
            eB = (0, c.bG)([j.A], () => d.type === el.lp.USER && null != eR ? j.A.getEffectForUserId(eR) : null),
            eH = (0, c.bG)([K.A], () => K.A.getVoicePlatformForChannel(Y.id, eR ?? es.dJq)),
            {
                showGameIcon: ez
            } = T.Ay.useExperiment({
                location: "voice_users"
            }, {
                autoTrackExposure: !1
            }),
            eK = (0, c.bG)([H.A], () => ez && null != eR ? H.A.findActivity(eR, e => null != e.application_id && e.type === es.$pd.PLAYING) : null, [ez, eR]),
            eY = (0, c.bG)([F.A], () => eK?.application_id != null ? F.A.getDetectableGame(eK.application_id) : null),
            eX = (0, c.bG)([g.A], () => null != eY && eK?.application_id != null ? g.A.getApplication(eK?.application_id) : void 0),
            eQ = (0, M.UF)({
                userId: eR,
                channelId: Y.id
            }),
            eq = (0, M.DY)({
                streamKey: d.type === el.lp.STREAM ? d.id : null,
                channelId: Y.id
            }),
            eJ = r.useMemo(() => d.type === el.lp.STREAM ? eq ?? !1 : d.type === el.lp.USER && (eQ ?? !1), [eq, eQ, d.type]);
        r.useEffect(() => {
            eS(ef)
        }, [ef]);
        let eZ = r.useCallback(() => {
                null != eR && m.A.toggleLocalMute(eR, ec.x.STREAM)
            }, [eR]),
            e$ = r.useCallback(e => {
                C?.(d, e)
            }, [C, d]),
            e0 = r.useCallback(e => {
                I?.(d, e)
            }, [I, d]),
            e5 = r.useCallback((e, t, a) => {
                x?.(d, e, t, a)
            }, [x, d]),
            e1 = null,
            e9 = null,
            e2 = "";
        switch (d.type) {
            case el.lp.STREAM:
                e1 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: J,
                    popoutType: p,
                    width: X,
                    fit: eb,
                    onVideoResize: Q,
                    paused: eA
                }), e9 = (0, n.jsx)(ea.D, {
                    participant: d,
                    selected: J,
                    width: X,
                    focused: ef,
                    idle: eC,
                    premiumIndicator: !1
                }), e2 = e_.intl.formatToPlainString(e_.t.gHPz3Q, {
                    streamerName: d.user.username
                });
                break;
            case el.lp.USER:
                e1 = (0, n.jsx)(en.A, {
                    channel: Y,
                    inCall: q,
                    participant: d,
                    popoutType: p,
                    fit: eb,
                    onVideoResize: Q,
                    paused: eA,
                    selected: J,
                    width: X,
                    blocked: ep,
                    ignored: eg,
                    noVideoRender: em || eD,
                    pulseSpeakingIndicator: eI
                }), e9 = (0, n.jsx)(en.s, {
                    participant: d,
                    channelId: Y.id
                }), e2 = e_.intl.formatToPlainString(e_.t["iC/x/Q"], {
                    username: d.user.username
                });
                break;
            case el.lp.ACTIVITY:
                e1 = (0, n.jsx)(ee.Ay, {
                    interactible: ef,
                    participant: d,
                    selected: J,
                    channel: Y,
                    width: X
                }), e2 = e_.intl.formatToPlainString(e_.t.YCvOsO, {
                    activityName: ek?.name
                });
                break;
            case el.lp.HIDDEN_STREAM:
                e1 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: J,
                    width: X,
                    fit: eb,
                    onVideoResize: Q,
                    paused: eA,
                    popoutType: p
                })
        }
        let e7 = r.useRef(null),
            e6 = (0, c.bG)([z.A], () => d.type === el.lp.USER ? z.A.getVoiceVolume(d.id) : -1 / 0),
            e8 = (0, A.v)({
                isSpeaking: eG,
                voiceDb: e6,
                spreadDirection: A.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e4 = (0, el.Ay)(d) ? u.kN9 : eU ? u.npA : u.EsG,
            e3 = d.type === el.lp.STREAM && ef;
        return (0, n.jsx)(f.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, n.jsx)(N.Ay, {
                streamKey: d.id,
                enableZoom: e3,
                children: (0, n.jsx)("div", {
                    className: s()(ed.iE, {
                        [ed.DF]: ej
                    }, w),
                    style: k,
                    onMouseEnter: () => {
                        ew(!0)
                    },
                    onMouseLeave: () => {
                        ew(!1)
                    },
                    children: (0, n.jsxs)(L.A, {
                        shakeLocation: eo.uD.VOICE_USER,
                        isShaking: eG,
                        className: ed.Vs,
                        children: [(0, n.jsx)(et.A, {
                            ref: e7,
                            className: s()(ed.Vs, {
                                [ed.E7]: er,
                                [ed.k_]: null == C,
                                [ed.N7]: eC
                            }),
                            noBorder: er,
                            style: R,
                            participantUserId: eR,
                            children: (0, n.jsxs)(u.sqX, {
                                "aria-label": e2,
                                className: ed.lG,
                                onDoubleClick: e0,
                                onContextMenu: e => e5(e, d.type === el.lp.STREAM),
                                onClick: e$,
                                onMouseDown: y,
                                onKeyDown: S,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != eB && null != eR ? (0, n.jsx)(U.A, {
                                    voiceChannelEffect: eB,
                                    onComplete: () => (0, j.a)(eR),
                                    userId: eR
                                }) : null, d.type === el.lp.USER ? (0, n.jsx)("div", {
                                    className: ed.nl,
                                    children: (0, n.jsx)(v.A, {
                                        userId: eR,
                                        channelId: Y.id,
                                        guildId: Y.getGuildId(),
                                        containerDimensions: {
                                            width: e7?.current?.clientWidth ?? 0,
                                            height: e7?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e1, er ? null : (0, n.jsx)("div", {
                                    className: ed.hD,
                                    children: e9
                                }), J ? (0, n.jsx)("div", {
                                    className: ed._Q,
                                    children: (0, n.jsx)(e4, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ed.Dt
                                    })
                                }) : null, eu.includes(d.type) ? null : (0, n.jsx)(eh, {
                                    focused: ef,
                                    width: X,
                                    inCall: q,
                                    participantId: d.id,
                                    participantType: d.type,
                                    hasVideo: eU ?? !1,
                                    ...eF,
                                    idle: eC,
                                    platform: eH,
                                    title: (0, Z.A)(Y, d),
                                    blocked: ep,
                                    ignored: eg,
                                    localVideoDisabled: eM,
                                    videoToggleState: eO,
                                    hideAudioIcon: eW,
                                    onContextMenu: e5,
                                    onToggleMute: eZ,
                                    participantUserId: eR,
                                    channel: Y,
                                    application: eX,
                                    secureFramesVerified: eJ,
                                    isHovered: eN,
                                    popoutType: p,
                                    paused: eA,
                                    controlsBottom: ex,
                                    streamId: d.type === el.lp.STREAM ? d.streamId : null
                                }), q && !er ? (0, n.jsx)("div", {
                                    className: s()(ed.PQ, {
                                        [ed.pU]: !ef && (eV || null != eB)
                                    }),
                                    style: ef || eV ? void 0 : e8
                                }) : null]
                            })
                        }), eT && eE && eN && (0, n.jsx)($.A, {
                            currentUserId: eP,
                            participant: d
                        }), (0, n.jsx)(P.A, {
                            isFiring: ey,
                            callTileRef: e7.current
                        })]
                    })
                })
            })
        })
    });

function ef(e) {
    let {
        participantType: t,
        platform: a,
        className: r
    } = e;
    if (t === el.lp.STREAM) return a === el.J7.XBOX ? (0, n.jsx)(Q.A, {
        className: r
    }) : (0, n.jsx)(u.kN9, {
        size: "md",
        color: "currentColor",
        className: r
    });
    switch (a) {
        case el.J7.MOBILE:
            return (0, n.jsx)(u.u6o, {
                size: "xs",
                color: "currentColor",
                className: r
            });
        case el.J7.XBOX:
            return (0, n.jsx)(Q.A, {
                className: r
            });
        case el.J7.PLAYSTATION:
            return (0, n.jsx)(X.A, {
                className: r
            });
        case el.J7.QUEST:
            return (0, n.jsx)(o.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: r
            });
        default:
            return null
    }
}

function ep(e) {
    let {
        icon: t,
        tooltipText: a,
        hideWhenInactive: r,
        idle: i,
        onClick: l
    } = e;
    return (0, n.jsx)(d.m, {
        text: a,
        children: (0, n.jsx)("div", {
            className: s()(ed.V7, {
                [ed.kl]: r,
                [ed.N7]: i
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

function eg(e) {
    let {
        channelId: t,
        participantId: a,
        hideWhenInactive: i,
        idle: s
    } = e, l = r.useMemo(() => (0, x.A)(t, a), [t, a]), o = (0, c.bG)([R.A], () => R.A.getIsAlwaysOnTop(l)), _ = r.useCallback(() => {
        (0, C.X)(p.A.CALL_TILE_POPOUT, C.O.STAY_ON_TOP, !o), k.setAlwaysOnTop(l, !o)
    }, [l, o]);
    return q.isPlatformEmbedded && J.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS) ? (0, n.jsx)(ep, {
        onClick: _,
        tooltipText: o ? e_.intl.string(e_.t.YdyDM9) : e_.intl.string(e_.t.ZVGHwP),
        icon: o ? u.hl9 : u.qgw,
        hideWhenInactive: i,
        idle: s
    }) : null
}
em.displayName = "CallTile";
let eh = r.memo(e => {
    let {
        idle: t,
        title: a,
        width: i,
        focused: m,
        videoToggleState: f,
        blocked: g,
        ignored: h,
        participantId: A,
        participantType: v,
        participantUserId: T,
        channel: E,
        platform: N,
        secureFramesVerified: P,
        onContextMenu: L,
        muted: R,
        deafened: M,
        localMuted: O,
        serverMuted: D,
        serverDeafened: G,
        hasVideo: j,
        hideAudioIcon: U,
        onToggleMute: V,
        popoutType: F,
        paused: W,
        controlsBottom: H,
        streamId: z
    } = e, K = (0, c.bG)([B.Ay], () => null != T && B.Ay.isLocalVideoAutoDisabled(T, (0, b.A)(v)), [T, v]), X = (0, y.A)({
        userId: T,
        guildId: E.getGuildId()
    }), Q = (0, S.a)({
        displayNameStyles: X
    }), q = (0, er.Y)(i), J = (0, er.V)(i), [Z, $] = r.useState(!1);
    r.useEffect(() => {
        let e = !1,
            t = () => {
                e !== Y.A.isOpen() && ((e = Y.A.isOpen()) || $(!1))
            };
        return Y.A.addChangeListener(t), () => Y.A.removeChangeListener(t)
    }, []);
    let ee = !U && v === el.lp.STREAM && j && (!J || O),
        et = function(e) {
            let {
                localMuted: t,
                serverMuted: a,
                serverDeafened: n,
                deafened: r,
                muted: i
            } = e;
            return n ? u.TJE : a ? u.O1p : r ? u.cQT : t ? u.O1p : i ? u.z0P : null
        }({
            localMuted: O,
            serverMuted: D,
            serverDeafened: G,
            deafened: M,
            muted: R
        }),
        ea = (0, u.zhh)({
            value: null != H ? H : 0,
            config: {
                ...l.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        en = [];
    return m && v === el.lp.STREAM && en.push((0, n.jsx)(w.A, {
        streamId: z,
        paused: W
    }, "zoom-controls")), m ? F === I.N.CALL_TILE && (en.push((0, n.jsx)(eg, {
        channelId: E.id,
        participantId: A,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), en.push((0, n.jsx)(ep, {
        onClick: () => {
            (0, C.X)(p.A.CALL_TILE_POPOUT, C.O.POPOUT_RETURN), k.close((0, x.A)(E.id, A))
        },
        tooltipText: e_.intl.string(e_.t["7Dwcnj"]),
        icon: o.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (en.push((0, n.jsx)(ep, {
        onClick: e => {
            e.stopPropagation(), $(!0), L(e, !0, el.GK.THREE_DOT)
        },
        tooltipText: e_.intl.string(e_.t["+1H47t"]),
        icon: u.jNK,
        hideWhenInactive: !Z,
        idle: t
    }, "options")), ee && en.push((0, n.jsx)(ep, {
        onClick: V,
        tooltipText: O ? e_.intl.string(e_.t.YqAjXy) : e_.intl.string(e_.t.w4m945),
        icon: O ? u._RO : u.HKD,
        hideWhenInactive: !O && !Z,
        idle: t
    }, "mute"))), (0, n.jsxs)("div", {
        className: s()(ed.MU, {
            [ed.oE]: J,
            [ed.Ol]: m
        }),
        children: [(0, n.jsx)("div", {
            className: s()(ed.Ik, {
                [ed.EX]: i < 195
            }),
            children: K || f === es.bb8.AUTO_PROBING ? t ? (0, n.jsx)("div", {
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
        }), !q && (0, n.jsxs)("div", {
            className: s()(ed.Qp, {
                [ed.EX]: i < 195
            }),
            children: [(0, n.jsxs)(u.Text, {
                className: ed.ac,
                color: "none",
                variant: J ? "text-sm/normal" : "text-md/normal",
                children: [null != et && v === el.lp.USER && (0, n.jsx)(et, {
                    className: ed.gr,
                    size: "xs",
                    color: "currentColor"
                }), g ? (0, n.jsx)("div", {
                    className: ed.Z5,
                    children: (0, n.jsx)(u.KTN, {
                        size: "lg",
                        className: ed.Q6,
                        color: _.A.unsafe_rawColors.RED_400.css
                    })
                }) : null, h ? (0, n.jsx)("div", {
                    className: ed.PP,
                    children: (0, n.jsx)(u.G3N, {
                        size: "lg",
                        className: ed.Q6
                    })
                }) : null, t ? null : (0, n.jsx)(ef, {
                    participantType: v,
                    platform: N,
                    className: ed.gr
                }), null == a || "" === a || t ? null : (0, n.jsx)("span", {
                    className: s()(ed.Wk, Q),
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
eh.displayName = "CallTileOverlay";
let eb = /^(14256|21552)$/.test(a.j) ? E.$ : null,
    eA = em