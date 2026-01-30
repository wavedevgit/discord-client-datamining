/** Chunk was on 12925 **/
/** chunk id: 175203, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => ep,
    Yl: () => ef
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    o = n.n(a),
    i = n(934551),
    c = n(311907),
    s = n(827734),
    u = n(990078),
    d = n(397927),
    _ = n(827343),
    f = n(820284),
    p = n(587895),
    A = n(429913),
    b = n(520698),
    h = n(659974),
    m = n(164617),
    I = n(66004),
    y = n(958005),
    g = n(609425),
    O = n(73392),
    v = n(529020),
    E = n(401901),
    C = n(612258),
    N = n(551826),
    P = n(87001),
    T = n(574172),
    x = n(665691),
    w = n(209932),
    j = n(253932),
    S = n(461782),
    L = n(614518),
    k = n(706787),
    D = n(961350),
    G = n(760751),
    R = n(111162),
    W = n(430452),
    U = n(290863),
    V = n(485296),
    F = n(977997),
    M = n(712687),
    B = n(790381),
    z = n(266080),
    H = n(723702),
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
    eo = n(707511);
let ei = [en.lp.ACTIVITY],
    ec = l.memo(e => {
        var t, n, a, i, s, u, m, y, g, O, P, T, M, B;
        let z, H, K, {
                participant: $,
                popoutType: ec,
                onDoubleClick: es,
                onContextMenu: eu,
                onClick: ed,
                onMouseDown: ef,
                onKeyDown: ep,
                className: eA,
                style: eb,
                containerStyle: eh,
                channel: em,
                width: eI,
                onVideoResize: ey,
                inCall: eg = !1,
                selected: eO = !1,
                noBorder: ev = !1,
                noVideoRender: eE = !1,
                focused: eC = !1,
                blocked: eN = !1,
                ignored: eP = !1,
                fit: eT = E.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: ew = !1,
                forceIdle: ej = !1,
                controlsBottom: eS
            } = e,
            eL = l.useContext(S.vG) || ej,
            [ek, eD] = l.useState(!1),
            eG = j.Q_.useSetting(),
            eR = (0, c.bG)([R.default], () => R.default.isStreamInfoOverlayEnabled),
            [eW, eU] = l.useState(!1),
            eV = (0, c.bG)([D.default], () => D.default.getId()),
            eF = $.type === en.lp.ACTIVITY ? null : $.user,
            eM = null != (t = null == eF ? void 0 : eF.id) ? t : null,
            [eB] = (0, A.A)($.type === en.lp.ACTIVITY ? [$.applicationId] : []),
            ez = (0, c.bG)([W.A], () => null != eM && W.A.isLocalVideoDisabled(eM, (0, b.A)($.type)), [eM, $.type]),
            eH = (0, c.bG)([W.A], () => null != eM ? W.A.getVideoToggleState(eM, (0, b.A)($.type)) : et.bb8.NONE, [eM, $.type]),
            eK = eH === et.bb8.AUTO_PROBING,
            {
                speaking: eY,
                latched: eJ,
                ringing: eZ,
                hasVideo: eq
            } = (0, ee.A)($, eV),
            eQ = (0, c.bG)([w.A], () => null !== eM && w.A.isUserPlayingSounds(eM), [eM]),
            eX = (y = eV, g = $, O = em.getGuildId(), z = g.type !== en.lp.ACTIVITY ? g.user.id : g.applicationId, H = (0, c.cf)([F.A], () => {
                var e, t, n;
                let r = F.A.getVoiceState(O, z);
                return {
                    muted: null != (e = null == r ? void 0 : r.mute) && e,
                    deafened: null != (t = null == r ? void 0 : r.deaf) && t,
                    suppressed: null != (n = null == r ? void 0 : r.suppress) && n,
                    voiceChannelId: null == r ? void 0 : r.channelId
                }
            }), K = (0, c.cf)([W.A], () => {
                let e = (0, b.A)(g.type);
                return y === z ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: W.A.isLocalMute(z, e),
                    localVideoDisabled: W.A.isLocalVideoDisabled(z, e),
                    localVideoAutoDisabled: W.A.isLocalVideoAutoDisabled(z, e)
                }
            }, [y, g.type, z]), {
                serverMuted: H.muted,
                serverDeafened: H.deafened,
                suppressed: H.suppressed,
                localMuted: K.muted,
                muted: null != (P = g.type === en.lp.USER && (null == (M = g.voiceState) ? void 0 : M.isVoiceMuted())) && P,
                deafened: null != (T = g.type === en.lp.USER && (null == (B = g.voiceState) ? void 0 : B.isVoiceDeafened())) && T
            }),
            e$ = $.type === en.lp.STREAM && eM === eV,
            e0 = (0, c.bG)([L.A], () => $.type === en.lp.USER && null != eM ? L.A.getEffectForUserId(eM) : null),
            e2 = (0, c.bG)([F.A], () => F.A.getVoicePlatformForChannel(em.id, null != eM ? eM : et.dJq)),
            {
                showGameIcon: e1
            } = v.Ay.useExperiment({
                location: "voice_users"
            }, {
                autoTrackExposure: !1
            }),
            e3 = (0, c.bG)([U.A], () => e1 && null != eM ? U.A.findActivity(eM, e => null != e.application_id && e.type === et.$pd.PLAYING) : null, [e1, eM]),
            e5 = (0, c.bG)([G.A], () => (null == e3 ? void 0 : e3.application_id) != null ? G.A.getDetectableGame(e3.application_id) : null),
            e6 = (0, c.bG)([p.A], () => null != e5 && (null == e3 ? void 0 : e3.application_id) != null ? p.A.getApplication(null == e3 ? void 0 : e3.application_id) : void 0),
            e7 = (0, x.UF)({
                userId: eM,
                channelId: em.id
            }),
            e8 = (0, x.DY)({
                streamKey: $.type === en.lp.STREAM ? $.id : null,
                channelId: em.id
            }),
            e9 = l.useMemo(() => $.type === en.lp.STREAM ? null != e8 && e8 : $.type === en.lp.USER && null != e7 && e7, [e8, e7, $.type]);
        l.useEffect(() => {
            eD(eC)
        }, [eC]);
        let e4 = l.useCallback(() => {
                null != eM && _.A.toggleLocalMute(eM, el.x.STREAM)
            }, [eM]),
            te = l.useCallback(e => {
                null == ed || ed($, e)
            }, [ed, $]),
            tt = l.useCallback(e => {
                null == es || es($, e)
            }, [es, $]),
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
                    selected: eO,
                    popoutType: ec,
                    width: eI,
                    fit: eT,
                    onVideoResize: ey,
                    paused: ex,
                    focused: eC,
                    idle: eL,
                    controlsBottom: eS
                }), tl = (0, r.jsx)(Q.D, {
                    participant: $,
                    selected: eO,
                    width: eI,
                    focused: eC,
                    idle: eL,
                    premiumIndicator: !1
                }), ta = ea.intl.formatToPlainString(ea.t.gHPz3Q, {
                    streamerName: $.user.username
                });
                break;
            case en.lp.USER:
                tr = (0, r.jsx)(X.A, {
                    channel: em,
                    inCall: eg,
                    participant: $,
                    popoutType: ec,
                    fit: eT,
                    onVideoResize: ey,
                    paused: ex,
                    selected: eO,
                    width: eI,
                    blocked: eN,
                    ignored: eP,
                    noVideoRender: eE || eK,
                    pulseSpeakingIndicator: ew
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
                    selected: eO,
                    channel: em,
                    width: eI
                }), ta = ea.intl.formatToPlainString(ea.t.YCvOsO, {
                    activityName: null == eB ? void 0 : eB.name
                });
                break;
            case en.lp.HIDDEN_STREAM:
                tr = (0, r.jsx)(Q.A, {
                    participant: $,
                    selected: eO,
                    width: eI,
                    fit: eT,
                    onVideoResize: ey,
                    paused: ex,
                    popoutType: ec,
                    focused: eC,
                    idle: eL
                })
        }
        let to = l.useRef(null),
            ti = (0, c.bG)([V.A], () => $.type === en.lp.USER ? V.A.getVoiceVolume($.id) : -1 / 0),
            tc = (0, h.v)({
                isSpeaking: eY,
                voiceDb: ti,
                spreadDirection: h.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            ts = $.type === en.lp.STREAM ? d.kN9 : d.npA;
        return (0, r.jsx)(f.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, r.jsx)("div", {
                className: o()(eo.iE, {
                    [eo.DF]: eZ
                }, eA),
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
                    className: eo.Vs,
                    children: [(0, r.jsx)(q.A, {
                        ref: to,
                        className: o()(eo.Vs, {
                            [eo.E7]: ev,
                            [eo.k_]: null == ed,
                            [eo.N7]: eL
                        }),
                        noBorder: ev,
                        style: eb,
                        participantUserId: eM,
                        children: (0, r.jsxs)(d.sqX, {
                            "aria-label": ta,
                            className: eo.lG,
                            onDoubleClick: tt,
                            onContextMenu: e => tn(e, $.type === en.lp.STREAM),
                            onClick: te,
                            onMouseDown: ef,
                            onKeyDown: ep,
                            focusProps: {
                                offset: 1
                            },
                            children: [null != e0 && null != eM ? (0, r.jsx)(k.A, {
                                voiceChannelEffect: e0,
                                onComplete: () => (0, L.a)(eM),
                                userId: eM
                            }) : null, $.type === en.lp.USER ? (0, r.jsx)("div", {
                                className: eo.nl,
                                children: (0, r.jsx)(I.A, {
                                    userId: eM,
                                    channelId: em.id,
                                    guildId: em.getGuildId(),
                                    containerDimensions: {
                                        width: null != (n = null == to || null == (i = to.current) ? void 0 : i.clientWidth) ? n : 0,
                                        height: null != (a = null == to || null == (s = to.current) ? void 0 : s.clientHeight) ? a : 0
                                    }
                                })
                            }) : null, tr, ev ? null : (0, r.jsx)("div", {
                                className: eo.hD,
                                children: tl
                            }), eO ? (0, r.jsx)("div", {
                                className: eo._Q,
                                children: (0, r.jsx)(ts, {
                                    size: "md",
                                    color: "currentColor",
                                    className: eo.Dt
                                })
                            }) : null, ei.includes($.type) ? null : (0, r.jsx)(e_, (u = function(e) {
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
                                width: eI,
                                inCall: eg,
                                participantId: $.id,
                                participantType: $.type,
                                hasVideo: null != eq && eq
                            }, eX), m = m = {
                                idle: eL,
                                platform: e2,
                                title: (0, Y.A)(em, $),
                                blocked: eN,
                                ignored: eP,
                                localVideoDisabled: ez,
                                videoToggleState: eH,
                                hideAudioIcon: e$,
                                onContextMenu: tn,
                                onToggleMute: e4,
                                participantUserId: eM,
                                channel: em,
                                application: e6,
                                secureFramesVerified: e9,
                                isHovered: eW,
                                popoutType: ec
                            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(m)).forEach(function(e) {
                                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(m, e))
                            }), u)), eg && !ev ? (0, r.jsx)("div", {
                                className: o()(eo.PQ, {
                                    [eo.pU]: !eC && (eQ || null != e0),
                                    [eo.JB]: eJ && !eY && !eC && !eQ
                                }),
                                style: eC || eQ ? void 0 : tc
                            }) : null]
                        })
                    }), eG && eR && eW && (0, r.jsx)(J.A, {
                        currentUserId: eV,
                        participant: $
                    }), (0, r.jsx)(C.A, {
                        isFiring: ek,
                        callTileRef: to.current
                    })]
                })
            })
        })
    });

function es(e) {
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
            return (0, r.jsx)(B.A, {
                className: l
            });
        case en.J7.QUEST:
            return (0, r.jsx)(i.VrHeadsetIcon, {
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
            className: o()(eo.V7, {
                [eo.kl]: l
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
    } = e, o = l.useMemo(() => (0, y.A)(t, n), [t, n]), i = (0, c.bG)([P.A], () => P.A.getIsAlwaysOnTop(o)), s = l.useCallback(() => {
        T.setAlwaysOnTop(o, !i)
    }, [o, i]);
    return H.isPlatformEmbedded && K.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS) ? (0, r.jsx)(eu, {
        onClick: s,
        tooltipText: i ? ea.intl.string(ea.t.YdyDM9) : ea.intl.string(ea.t.ZVGHwP),
        icon: i ? d.hl9 : d.qgw,
        hideWhenInactive: a
    }) : null
}
ec.displayName = "CallTile";
let e_ = l.memo(e => {
    let {
        idle: t,
        title: n,
        width: a,
        focused: i,
        videoToggleState: _,
        blocked: f,
        ignored: p,
        participantId: A,
        participantType: h,
        participantUserId: I,
        channel: y,
        platform: v,
        secureFramesVerified: E,
        onContextMenu: C,
        muted: N,
        deafened: P,
        localMuted: T,
        serverMuted: x,
        serverDeafened: w,
        hasVideo: j,
        hideAudioIcon: S,
        onToggleMute: L,
        popoutType: k
    } = e, D = (0, c.bG)([W.A], () => null != I && W.A.isLocalVideoAutoDisabled(I, (0, b.A)(h)), [I, h]), G = (0, g.A)({
        userId: I,
        guildId: y.getGuildId()
    }), R = (0, O.a)({
        displayNameStyles: G
    }), U = (0, $.Y)(a), V = (0, $.V)(a), [F, B] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== M.A.isOpen() && ((e = M.A.isOpen()) || B(!1))
            };
        return M.A.addChangeListener(t), () => M.A.removeChangeListener(t)
    }, []);
    let z = !S && h === en.lp.STREAM && j && (!V || T),
        H = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: r,
                deafened: l,
                muted: a
            } = e;
            return r ? d.TJE : n ? d.O1p : l ? d.cQT : t ? d.O1p : a ? d.z0P : null
        }({
            localMuted: T,
            serverMuted: x,
            serverDeafened: w,
            deafened: P,
            muted: N
        }),
        K = [];
    return i ? k === m.N.CALL_TILE && K.push((0, r.jsx)(ed, {
        channelId: y.id,
        participantId: A,
        hideWhenInactive: !F
    }, "stay-on-top")) : (K.push((0, r.jsx)(eu, {
        onClick: e => {
            e.stopPropagation(), B(!0), C(e, !0, en.GK.THREE_DOT)
        },
        tooltipText: ea.intl.string(ea.t["+1H47t"]),
        icon: d.jNK,
        hideWhenInactive: !F
    }, "options")), z && K.push((0, r.jsx)(eu, {
        onClick: L,
        tooltipText: T ? ea.intl.string(ea.t.YqAjXy) : ea.intl.string(ea.t.w4m945),
        icon: T ? d._RO : d.HKD,
        hideWhenInactive: !T && !F
    }, "mute"))), (0, r.jsxs)("div", {
        className: o()(eo.MU, {
            [eo.oE]: V,
            [eo.Ol]: i
        }),
        children: [(0, r.jsx)("div", {
            className: o()(eo.Ik, {
                [eo.EX]: a < 195
            }),
            children: D || _ === et.bb8.AUTO_PROBING ? t ? (0, r.jsx)("div", {
                className: eo.h5,
                children: (0, r.jsx)(d.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, r.jsxs)("div", {
                className: o()(eo.ns, eo.WP),
                children: [(0, r.jsx)("div", {
                    className: eo.h5,
                    children: (0, r.jsx)(d.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    className: eo.Wk,
                    children: ea.intl.string(ea.t.m2Hyj0)
                })]
            }) : null
        }), !U && (0, r.jsxs)("div", {
            className: o()(eo.Qp, {
                [eo.EX]: a < 195
            }),
            children: [(0, r.jsxs)(d.Text, {
                className: eo.ac,
                color: "none",
                variant: V ? "text-sm/normal" : "text-md/normal",
                children: [null != H && h === en.lp.USER && (0, r.jsx)(H, {
                    className: o()(eo.fh, {
                        [eo.oE]: V
                    }),
                    size: "xs",
                    color: "currentColor"
                }), f ? (0, r.jsx)("div", {
                    className: eo.Z5,
                    children: (0, r.jsx)(d.KTN, {
                        size: "lg",
                        className: eo.Q6,
                        color: s.A.unsafe_rawColors.RED_400.css
                    })
                }) : null, p ? (0, r.jsx)("div", {
                    className: eo.PP,
                    children: (0, r.jsx)(d.G3N, {
                        size: "lg",
                        className: eo.Q6
                    })
                }) : null, t ? null : (0, r.jsx)(es, {
                    participantType: h,
                    platform: v,
                    className: o()(eo.fh, {
                        [eo.oE]: V
                    })
                }), null == n || "" === n || t ? null : (0, r.jsx)("span", {
                    className: o()(eo.Wk, R),
                    children: n
                }), E && (0, r.jsx)(u.m, {
                    text: ea.intl.string(ea.t.ZEem6O),
                    children: (0, r.jsx)(d.m5V, {
                        className: eo.vW,
                        size: "xs",
                        color: s.A.colors.TEXT_STRONG,
                        "aria-label": ea.intl.string(ea.t.mR9cf3)
                    })
                })]
            }), K.length > 0 ? (0, r.jsx)("div", {
                className: eo._v,
                children: K
            }) : null]
        })]
    })
});
e_.displayName = "CallTileOverlay";
let ef = /^(14256|21552)$/.test(n.j) ? E.$ : null,
    ep = ec