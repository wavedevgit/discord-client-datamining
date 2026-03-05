/** chunk id: 175203, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Ay: () => eA,
    Yl: () => eh
}), a(321073);
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    o = a(380278),
    l = a(934551),
    c = a(311907),
    _ = a(827734),
    d = a(990078),
    u = a(397927),
    f = a(827343),
    m = a(820284),
    p = a(793574),
    g = a(587895),
    b = a(429913),
    h = a(520698),
    A = a(659974),
    I = a(164617),
    v = a(66004),
    C = a(958005),
    y = a(384059),
    x = a(609425),
    S = a(73392),
    T = a(529020),
    E = a(401901),
    N = a(40056),
    w = a(117029),
    P = a(612258),
    L = a(551826),
    k = a(87001),
    R = a(574172),
    M = a(665691),
    D = a(209932),
    O = a(253932),
    G = a(461782),
    U = a(614518),
    V = a(706787),
    j = a(961350),
    B = a(760751),
    F = a(111162),
    W = a(430452),
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
    eo = a(806931),
    el = a(31408),
    ec = a(731854),
    e_ = a(985018),
    ed = a(257277);
let eu = [eo.lp.ACTIVITY],
    ef = r.memo(e => {
        var t, a, i;
        let o, l, _, {
                participant: d,
                popoutType: p,
                onDoubleClick: I,
                onContextMenu: C,
                onClick: y,
                onMouseDown: x,
                onKeyDown: S,
                className: w,
                style: k,
                containerStyle: R,
                channel: Y,
                width: X,
                onVideoResize: Q,
                inCall: q = !1,
                selected: J = !1,
                noBorder: er = !1,
                noVideoRender: ef = !1,
                focused: em = !1,
                blocked: ep = !1,
                ignored: eg = !1,
                fit: eh = E.$.CONTAIN,
                paused: eA = !1,
                pulseSpeakingIndicator: eI = !1,
                forceIdle: ev = !1,
                controlsBottom: eC
            } = e,
            ey = r.useContext(G.vG) || ev,
            [ex, eS] = r.useState(!1),
            eT = O.Q_.useSetting(),
            eE = (0, c.bG)([F.default], () => F.default.isStreamInfoOverlayEnabled),
            [eN, ew] = r.useState(!1),
            eP = (0, c.bG)([j.default], () => j.default.getId()),
            eL = d.type === eo.lp.ACTIVITY ? null : d.user,
            ek = eL?.id ?? null,
            [eR] = (0, b.A)(d.type === eo.lp.ACTIVITY ? [d.applicationId] : []),
            eM = (0, c.bG)([W.Ay], () => null != ek && W.Ay.isLocalVideoDisabled(ek, (0, h.A)(d.type)), [ek, d.type]),
            eD = (0, c.bG)([W.Ay], () => null != ek ? W.Ay.getVideoToggleState(ek, (0, h.A)(d.type)) : es.bb8.NONE, [ek, d.type]),
            eO = eD === es.bb8.AUTO_PROBING,
            {
                speaking: eG,
                ringing: eU,
                hasVideo: eV
            } = (0, ei.A)(d, eP),
            ej = (0, c.bG)([D.A], () => null !== ek && D.A.isUserPlayingSounds(ek), [ek]),
            eB = (t = eP, a = d, i = Y.getGuildId(), o = a.type !== eo.lp.ACTIVITY ? a.user.id : a.applicationId, l = (0, c.cf)([K.A], () => {
                let e = K.A.getVoiceState(i, o);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), _ = (0, c.cf)([W.Ay], () => {
                let e = (0, h.A)(a.type);
                return t === o ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: W.Ay.isLocalMute(o, e),
                    localVideoDisabled: W.Ay.isLocalVideoDisabled(o, e),
                    localVideoAutoDisabled: W.Ay.isLocalVideoAutoDisabled(o, e)
                }
            }, [t, a.type, o]), {
                serverMuted: l.muted,
                serverDeafened: l.deafened,
                suppressed: l.suppressed,
                localMuted: _.muted,
                muted: (a.type === eo.lp.USER && a.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (a.type === eo.lp.USER && a.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eF = d.type === eo.lp.STREAM && ek === eP,
            eW = (0, c.bG)([U.A], () => d.type === eo.lp.USER && null != ek ? U.A.getEffectForUserId(ek) : null),
            eH = (0, c.bG)([K.A], () => K.A.getVoicePlatformForChannel(Y.id, ek ?? es.dJq)),
            {
                showGameIcon: ez
            } = T.Ay.useExperiment({
                location: "voice_users"
            }, {
                autoTrackExposure: !1
            }),
            eK = (0, c.bG)([H.A], () => ez && null != ek ? H.A.findActivity(ek, e => null != e.application_id && e.type === es.$pd.PLAYING) : null, [ez, ek]),
            eY = (0, c.bG)([B.A], () => eK?.application_id != null ? B.A.getDetectableGame(eK.application_id) : null),
            eX = (0, c.bG)([g.A], () => null != eY && eK?.application_id != null ? g.A.getApplication(eK?.application_id) : void 0),
            eQ = (0, M.UF)({
                userId: ek,
                channelId: Y.id
            }),
            eq = (0, M.DY)({
                streamKey: d.type === eo.lp.STREAM ? d.id : null,
                channelId: Y.id
            }),
            eJ = r.useMemo(() => d.type === eo.lp.STREAM ? eq ?? !1 : d.type === eo.lp.USER && (eQ ?? !1), [eq, eQ, d.type]);
        r.useEffect(() => {
            eS(em)
        }, [em]);
        let eZ = r.useCallback(() => {
                null != ek && f.A.toggleLocalMute(ek, ec.x.STREAM)
            }, [ek]),
            e$ = r.useCallback(e => {
                y?.(d, e)
            }, [y, d]),
            e0 = r.useCallback(e => {
                I?.(d, e)
            }, [I, d]),
            e1 = r.useCallback((e, t, a) => {
                C?.(d, e, t, a)
            }, [C, d]),
            e5 = null,
            e9 = null,
            e2 = "";
        switch (d.type) {
            case eo.lp.STREAM:
                e5 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: J,
                    popoutType: p,
                    width: X,
                    fit: eh,
                    onVideoResize: Q,
                    paused: eA
                }), e9 = (0, n.jsx)(ea.D, {
                    participant: d,
                    selected: J,
                    width: X,
                    focused: em,
                    idle: ey,
                    premiumIndicator: !1
                }), e2 = e_.intl.formatToPlainString(e_.t.gHPz3Q, {
                    streamerName: d.user.username
                });
                break;
            case eo.lp.USER:
                e5 = (0, n.jsx)(en.A, {
                    channel: Y,
                    inCall: q,
                    participant: d,
                    popoutType: p,
                    fit: eh,
                    onVideoResize: Q,
                    paused: eA,
                    selected: J,
                    width: X,
                    blocked: ep,
                    ignored: eg,
                    noVideoRender: ef || eO,
                    pulseSpeakingIndicator: eI
                }), e9 = (0, n.jsx)(en.s, {
                    participant: d,
                    channelId: Y.id
                }), e2 = e_.intl.formatToPlainString(e_.t["iC/x/Q"], {
                    username: d.user.username
                });
                break;
            case eo.lp.ACTIVITY:
                e5 = (0, n.jsx)(ee.Ay, {
                    interactible: em,
                    participant: d,
                    selected: J,
                    channel: Y,
                    width: X
                }), e2 = e_.intl.formatToPlainString(e_.t.YCvOsO, {
                    activityName: eR?.name
                });
                break;
            case eo.lp.HIDDEN_STREAM:
                e5 = (0, n.jsx)(ea.A, {
                    participant: d,
                    selected: J,
                    width: X,
                    fit: eh,
                    onVideoResize: Q,
                    paused: eA,
                    popoutType: p
                })
        }
        let e7 = r.useRef(null),
            e8 = (0, c.bG)([z.A], () => d.type === eo.lp.USER ? z.A.getVoiceVolume(d.id) : -1 / 0),
            e6 = (0, A.v)({
                isSpeaking: eG,
                voiceDb: e8,
                spreadDirection: A.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e4 = (0, eo.Ay)(d) ? u.kN9 : eV ? u.npA : u.EsG,
            e3 = d.type === eo.lp.STREAM && em;
        return (0, n.jsx)(m.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, n.jsx)(N.Ay, {
                streamKey: d.id,
                enableZoom: e3,
                children: (0, n.jsx)("div", {
                    className: s()(ed.iE, {
                        [ed.DF]: eU
                    }, w),
                    style: R,
                    onMouseEnter: () => {
                        ew(!0)
                    },
                    onMouseLeave: () => {
                        ew(!1)
                    },
                    children: (0, n.jsxs)(L.A, {
                        shakeLocation: el.uD.VOICE_USER,
                        isShaking: eG,
                        className: ed.Vs,
                        children: [(0, n.jsx)(et.A, {
                            ref: e7,
                            className: s()(ed.Vs, {
                                [ed.E7]: er,
                                [ed.k_]: null == y,
                                [ed.N7]: ey
                            }),
                            noBorder: er,
                            style: k,
                            participantUserId: ek,
                            children: (0, n.jsxs)(u.sqX, {
                                "aria-label": e2,
                                className: ed.lG,
                                onDoubleClick: e0,
                                onContextMenu: e => e1(e, d.type === eo.lp.STREAM),
                                onClick: e$,
                                onMouseDown: x,
                                onKeyDown: S,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != eW && null != ek ? (0, n.jsx)(V.A, {
                                    voiceChannelEffect: eW,
                                    onComplete: () => (0, U.a)(ek),
                                    userId: ek
                                }) : null, d.type === eo.lp.USER ? (0, n.jsx)("div", {
                                    className: ed.nl,
                                    children: (0, n.jsx)(v.A, {
                                        userId: ek,
                                        channelId: Y.id,
                                        guildId: Y.getGuildId(),
                                        containerDimensions: {
                                            width: e7?.current?.clientWidth ?? 0,
                                            height: e7?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e5, er ? null : (0, n.jsx)("div", {
                                    className: ed.hD,
                                    children: e9
                                }), J ? (0, n.jsx)("div", {
                                    className: ed._Q,
                                    children: (0, n.jsx)(e4, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ed.Dt
                                    })
                                }) : null, eu.includes(d.type) ? null : (0, n.jsx)(eb, {
                                    focused: em,
                                    width: X,
                                    inCall: q,
                                    participantId: d.id,
                                    participantType: d.type,
                                    hasVideo: eV ?? !1,
                                    ...eB,
                                    idle: ey,
                                    platform: eH,
                                    title: (0, Z.A)(Y, d),
                                    blocked: ep,
                                    ignored: eg,
                                    localVideoDisabled: eM,
                                    videoToggleState: eD,
                                    hideAudioIcon: eF,
                                    onContextMenu: e1,
                                    onToggleMute: eZ,
                                    participantUserId: ek,
                                    channel: Y,
                                    application: eX,
                                    secureFramesVerified: eJ,
                                    isHovered: eN,
                                    popoutType: p,
                                    paused: eA,
                                    controlsBottom: eC,
                                    streamId: d.type === eo.lp.STREAM ? d.streamId : null
                                }), q && !er ? (0, n.jsx)("div", {
                                    className: s()(ed.PQ, {
                                        [ed.pU]: !em && (ej || null != eW)
                                    }),
                                    style: em || ej ? void 0 : e6
                                }) : null]
                            })
                        }), eT && eE && eN && (0, n.jsx)($.A, {
                            currentUserId: eP,
                            participant: d
                        }), (0, n.jsx)(P.A, {
                            isFiring: ex,
                            callTileRef: e7.current
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
        className: r
    } = e;
    if (t === eo.lp.STREAM) return a === eo.J7.XBOX ? (0, n.jsx)(Q.A, {
        className: r
    }) : (0, n.jsx)(u.kN9, {
        size: "md",
        color: "currentColor",
        className: r
    });
    switch (a) {
        case eo.J7.MOBILE:
            return (0, n.jsx)(u.u6o, {
                size: "xs",
                color: "currentColor",
                className: r
            });
        case eo.J7.XBOX:
            return (0, n.jsx)(Q.A, {
                className: r
            });
        case eo.J7.PLAYSTATION:
            return (0, n.jsx)(X.A, {
                className: r
            });
        case eo.J7.QUEST:
            return (0, n.jsx)(l.VrHeadsetIcon, {
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
        onClick: o
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
                    e.stopPropagation(), o(e)
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
    } = e, o = r.useMemo(() => (0, C.A)(t, a), [t, a]), l = (0, c.bG)([k.A], () => k.A.getIsAlwaysOnTop(o)), _ = r.useCallback(() => {
        (0, y.X)(p.A.CALL_TILE_POPOUT, y.O.STAY_ON_TOP, !l), R.setAlwaysOnTop(o, !l)
    }, [o, l]);
    return q.isPlatformEmbedded && J.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS) ? (0, n.jsx)(ep, {
        onClick: _,
        tooltipText: l ? e_.intl.string(e_.t.YdyDM9) : e_.intl.string(e_.t.ZVGHwP),
        icon: l ? u.hl9 : u.qgw,
        hideWhenInactive: i,
        idle: s
    }) : null
}
ef.displayName = "CallTile";
let eb = r.memo(e => {
    let {
        idle: t,
        title: a,
        width: i,
        focused: f,
        videoToggleState: m,
        blocked: g,
        ignored: b,
        participantId: A,
        participantType: v,
        participantUserId: T,
        channel: E,
        platform: N,
        secureFramesVerified: P,
        onContextMenu: L,
        muted: k,
        deafened: M,
        localMuted: D,
        serverMuted: O,
        serverDeafened: G,
        hasVideo: U,
        hideAudioIcon: V,
        onToggleMute: j,
        popoutType: B,
        paused: F,
        controlsBottom: H,
        streamId: z
    } = e, K = (0, c.bG)([W.Ay], () => null != T && W.Ay.isLocalVideoAutoDisabled(T, (0, h.A)(v)), [T, v]), X = (0, x.A)({
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
    let ee = !V && v === eo.lp.STREAM && U && (!J || D),
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
            localMuted: D,
            serverMuted: O,
            serverDeafened: G,
            deafened: M,
            muted: k
        }),
        ea = (0, u.zhh)({
            value: null != H ? H : 0,
            config: {
                ...o.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        en = [];
    return f && v === eo.lp.STREAM && en.push((0, n.jsx)(w.A, {
        streamId: z,
        paused: F
    }, "zoom-controls")), f ? B === I.N.CALL_TILE && (en.push((0, n.jsx)(eg, {
        channelId: E.id,
        participantId: A,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), en.push((0, n.jsx)(ep, {
        onClick: () => {
            (0, y.X)(p.A.CALL_TILE_POPOUT, y.O.POPOUT_RETURN), R.close((0, C.A)(E.id, A))
        },
        tooltipText: e_.intl.string(e_.t["7Dwcnj"]),
        icon: l.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (en.push((0, n.jsx)(ep, {
        onClick: e => {
            e.stopPropagation(), $(!0), L(e, !0, eo.GK.THREE_DOT)
        },
        tooltipText: e_.intl.string(e_.t["+1H47t"]),
        icon: u.jNK,
        hideWhenInactive: !Z,
        idle: t
    }, "options")), ee && en.push((0, n.jsx)(ep, {
        onClick: j,
        tooltipText: D ? e_.intl.string(e_.t.YqAjXy) : e_.intl.string(e_.t.w4m945),
        icon: D ? u._RO : u.HKD,
        hideWhenInactive: !D && !Z,
        idle: t
    }, "mute"))), (0, n.jsxs)("div", {
        className: s()(ed.MU, {
            [ed.oE]: J,
            [ed.Ol]: f
        }),
        children: [(0, n.jsx)("div", {
            className: s()(ed.Ik, {
                [ed.EX]: i < 195
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
        }), !q && (0, n.jsxs)("div", {
            className: s()(ed.Qp, {
                [ed.EX]: i < 195
            }),
            children: [(0, n.jsxs)(u.Text, {
                className: ed.ac,
                color: "none",
                variant: J ? "text-sm/normal" : "text-md/normal",
                children: [null != et && v === eo.lp.USER && (0, n.jsx)(et, {
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
                }) : null, b ? (0, n.jsx)("div", {
                    className: ed.PP,
                    children: (0, n.jsx)(u.G3N, {
                        size: "lg",
                        className: ed.Q6
                    })
                }) : null, t ? null : (0, n.jsx)(em, {
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
            }), en.length > 0 ? (0, n.jsx)(o.animated.div, {
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
eb.displayName = "CallTileOverlay";
let eh = /^(14256|21552)$/.test(a.j) ? E.$ : null,
    eA = ef