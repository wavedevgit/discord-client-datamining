/** chunk id: 175203 params = (module,exports,require) **/
i.d(t, {
    Ay: () => ex,
    Yl: () => ef
}), i(321073);
var n = i(627968),
    a = i(64700),
    l = i(503698),
    s = i.n(l),
    r = i(687498),
    c = i(934551),
    o = i(311907),
    d = i(827734),
    u = i(990078),
    p = i(397927),
    m = i(827343),
    _ = i(820284),
    h = i(793574),
    g = i(294323),
    A = i(429913),
    f = i(520698),
    x = i(164617),
    b = i(66004),
    I = i(958005),
    N = i(384059),
    C = i(556525),
    v = i(609425),
    y = i(73392),
    T = i(401901),
    E = i(40056),
    S = i(117029),
    j = i(612258),
    M = i(551826),
    D = i(87001),
    P = i(574172),
    O = i(665691),
    U = i(724759),
    k = i(635885),
    G = i(209932),
    R = i(253932),
    L = i(461782),
    w = i(614518),
    V = i(706787),
    H = i(961350),
    W = i(111162),
    B = i(430452),
    F = i(485296),
    z = i(977997),
    Q = i(712687),
    Y = i(790381),
    $ = i(266080),
    K = i(723702),
    J = i(837921),
    X = i(141035),
    q = i(654820),
    Z = i(804980),
    ee = i(272812),
    et = i(304047),
    ei = i(203355),
    en = i(83982),
    ea = i(345812),
    el = i(110234),
    es = i(652215),
    er = i(806931),
    ec = i(31408),
    eo = i(731854),
    ed = i(985018),
    eu = i(633916);
let ep = [er.lp.ACTIVITY],
    em = a.memo(e => {
        var t, i, l;
        let r, c, d, {
                participant: u,
                popoutType: h,
                onDoubleClick: g,
                onContextMenu: x,
                onClick: I,
                onMouseDown: N,
                onKeyDown: v,
                className: y,
                style: S,
                containerStyle: D,
                channel: P,
                width: U,
                onVideoResize: k,
                inCall: Q = !1,
                selected: Y = !1,
                noBorder: $ = !1,
                noVideoRender: K = !1,
                focused: J = !1,
                blocked: et = !1,
                ignored: ea = !1,
                fit: em = T.$.CONTAIN,
                paused: e_ = !1,
                pulseSpeakingIndicator: eh = !1,
                forceIdle: eg = !1,
                controlsBottom: ef
            } = e,
            ex = a.useContext(L.vG) || eg,
            [eb, eI] = a.useState(!1),
            eN = R.Q_.useSetting(),
            eC = (0, o.bG)([W.default], () => W.default.isStreamInfoOverlayEnabled),
            [ev, ey] = a.useState(!1),
            eT = (0, o.bG)([H.default], () => H.default.getId()),
            eE = u.type === er.lp.ACTIVITY ? null : u.user,
            eS = eE?.id ?? null,
            [ej] = (0, A.A)(u.type === er.lp.ACTIVITY ? [u.applicationId] : []),
            eM = (0, o.bG)([B.Ay], () => null != eS && B.Ay.isLocalVideoDisabled(eS, (0, f.A)(u.type)), [eS, u.type]),
            eD = (0, o.bG)([B.Ay], () => null != eS ? B.Ay.getVideoToggleState(eS, (0, f.A)(u.type)) : es.bb8.NONE, [eS, u.type]),
            eP = eD === es.bb8.AUTO_PROBING,
            {
                speaking: eO,
                ringing: eU,
                hasVideo: ek
            } = (0, el.A)(u, eT),
            eG = (0, o.bG)([G.A], () => null !== eS && G.A.isUserPlayingSounds(eS), [eS]),
            eR = (t = eT, i = u, l = P.getGuildId(), r = i.type !== er.lp.ACTIVITY ? i.user.id : i.applicationId, c = (0, o.cf)([z.A], () => {
                let e = z.A.getVoiceState(l, r);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), d = (0, o.cf)([B.Ay], () => {
                let e = (0, f.A)(i.type);
                return t === r ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: B.Ay.isLocalMute(r, e),
                    localVideoDisabled: B.Ay.isLocalVideoDisabled(r, e),
                    localVideoAutoDisabled: B.Ay.isLocalVideoAutoDisabled(r, e)
                }
            }, [t, i.type, r]), {
                serverMuted: c.muted,
                serverDeafened: c.deafened,
                suppressed: c.suppressed,
                localMuted: d.muted,
                muted: (i.type === er.lp.USER && i.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (i.type === er.lp.USER && i.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eL = u.type === er.lp.STREAM && eS === eT,
            ew = (0, o.bG)([w.A], () => u.type === er.lp.USER && null != eS ? w.A.getEffectForUserId(eS) : null),
            eV = (0, o.bG)([z.A], () => z.A.getVoicePlatformForChannel(P.id, eS ?? es.dJq)),
            eH = (0, O.UF)({
                userId: eS,
                channelId: P.id
            }),
            eW = (0, O.DY)({
                streamKey: u.type === er.lp.STREAM ? u.id : null,
                channelId: P.id
            }),
            eB = a.useMemo(() => u.type === er.lp.STREAM ? eW ?? !1 : u.type === er.lp.USER && (eH ?? !1), [eW, eH, u.type]);
        a.useEffect(() => {
            eI(J)
        }, [J]);
        let eF = a.useCallback(() => {
                null != eS && m.A.toggleLocalMute(eS, eo.x.STREAM)
            }, [eS]),
            ez = a.useCallback(e => {
                I?.(u, e)
            }, [I, u]),
            eQ = a.useCallback(e => {
                g?.(u, e)
            }, [g, u]),
            eY = a.useCallback((e, t, i) => {
                x?.(u, e, t, i)
            }, [x, u]),
            e$ = null,
            eK = null,
            eJ = "";
        switch (u.type) {
            case er.lp.STREAM:
                e$ = (0, n.jsx)(ei.A, {
                    participant: u,
                    selected: Y,
                    popoutType: h,
                    width: U,
                    fit: em,
                    onVideoResize: k,
                    paused: e_
                }), eK = (0, n.jsx)(ei.D, {
                    participant: u,
                    selected: Y,
                    width: U,
                    focused: J,
                    idle: ex,
                    premiumIndicator: !1
                }), eJ = ed.intl.formatToPlainString(ed.t.gHPz3Q, {
                    streamerName: u.user.username
                });
                break;
            case er.lp.USER:
                e$ = (0, n.jsx)(en.A, {
                    channel: P,
                    inCall: Q,
                    participant: u,
                    popoutType: h,
                    fit: em,
                    onVideoResize: k,
                    paused: e_,
                    selected: Y,
                    width: U,
                    blocked: et,
                    ignored: ea,
                    noVideoRender: K || eP,
                    pulseSpeakingIndicator: eh
                }), eK = (0, n.jsx)(en.s, {
                    participant: u,
                    channelId: P.id
                }), eJ = ed.intl.formatToPlainString(ed.t["iC/x/Q"], {
                    username: u.user.username
                });
                break;
            case er.lp.ACTIVITY:
                e$ = (0, n.jsx)(Z.Ay, {
                    interactible: J,
                    participant: u,
                    selected: Y,
                    channel: P,
                    width: U
                }), eJ = ed.intl.formatToPlainString(ed.t.YCvOsO, {
                    activityName: ej?.name
                });
                break;
            case er.lp.HIDDEN_STREAM:
                e$ = (0, n.jsx)(ei.A, {
                    participant: u,
                    selected: Y,
                    width: U,
                    fit: em,
                    onVideoResize: k,
                    paused: e_,
                    popoutType: h
                })
        }
        let eX = a.useRef(null),
            eq = (0, o.bG)([F.A], () => u.type === er.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0),
            eZ = (0, C.v)({
                isSpeaking: eO,
                voiceDb: eq,
                spreadDirection: C.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e0 = (0, er.Ay)(u) ? p.kN9 : ek ? p.npA : p.EsG,
            e5 = u.type === er.lp.STREAM && J;
        return (0, n.jsx)(_.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, n.jsx)(E.Ay, {
                streamKey: u.id,
                enableZoom: e5,
                children: (0, n.jsx)("div", {
                    className: s()(eu.iE, {
                        [eu.DF]: eU
                    }, y),
                    style: D,
                    onMouseEnter: () => {
                        ey(!0)
                    },
                    onMouseLeave: () => {
                        ey(!1)
                    },
                    children: (0, n.jsxs)(M.A, {
                        shakeLocation: ec.uD.VOICE_USER,
                        isShaking: eO,
                        className: eu.Vs,
                        children: [(0, n.jsx)(ee.A, {
                            ref: eX,
                            className: s()(eu.Vs, {
                                [eu.E7]: $,
                                [eu.k_]: null == I,
                                [eu.N7]: ex
                            }),
                            noBorder: $,
                            style: S,
                            participantUserId: eS,
                            children: (0, n.jsxs)(p.sqX, {
                                "aria-label": eJ,
                                className: eu.lG,
                                onDoubleClick: eQ,
                                onContextMenu: e => eY(e, u.type === er.lp.STREAM),
                                onClick: ez,
                                onMouseDown: N,
                                onKeyDown: v,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != ew && null != eS ? (0, n.jsx)(V.A, {
                                    voiceChannelEffect: ew,
                                    onComplete: () => (0, w.a)(eS),
                                    userId: eS
                                }) : null, u.type === er.lp.USER ? (0, n.jsx)("div", {
                                    className: eu.nl,
                                    children: (0, n.jsx)(b.A, {
                                        userId: eS,
                                        channelId: P.id,
                                        guildId: P.getGuildId(),
                                        containerDimensions: {
                                            width: eX?.current?.clientWidth ?? 0,
                                            height: eX?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e$, $ ? null : (0, n.jsx)("div", {
                                    className: eu.hD,
                                    children: eK
                                }), Y ? (0, n.jsx)("div", {
                                    className: eu._Q,
                                    children: (0, n.jsx)(e0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eu.Dt
                                    })
                                }) : null, ep.includes(u.type) ? null : (0, n.jsx)(eA, {
                                    focused: J,
                                    width: U,
                                    inCall: Q,
                                    participantId: u.id,
                                    participantType: u.type,
                                    hasVideo: ek ?? !1,
                                    ...eR,
                                    idle: ex,
                                    platform: eV,
                                    title: (0, X.A)(P, u),
                                    blocked: et,
                                    ignored: ea,
                                    localVideoDisabled: eM,
                                    videoToggleState: eD,
                                    hideAudioIcon: eL,
                                    onContextMenu: eY,
                                    onToggleMute: eF,
                                    participantUserId: eS,
                                    channel: P,
                                    secureFramesVerified: eB,
                                    isHovered: ev,
                                    popoutType: h,
                                    paused: e_,
                                    controlsBottom: ef,
                                    streamId: u.type === er.lp.STREAM ? u.streamId : null
                                }), Q && !$ ? (0, n.jsx)("div", {
                                    className: s()(eu.PQ, {
                                        [eu.pU]: !J && (eG || null != ew)
                                    }),
                                    style: J || eG ? void 0 : eZ
                                }) : null]
                            })
                        }), eN && eC && ev && (0, n.jsx)(q.A, {
                            currentUserId: eT,
                            participant: u
                        }), (0, n.jsx)(j.A, {
                            isFiring: eb,
                            callTileRef: eX.current
                        })]
                    })
                })
            })
        })
    });

function e_(e) {
    let {
        participantType: t,
        platform: i,
        className: a
    } = e;
    if (t === er.lp.STREAM) return i === er.J7.XBOX ? (0, n.jsx)($.A, {
        className: a
    }) : (0, n.jsx)(p.kN9, {
        size: "md",
        color: "currentColor",
        className: a
    });
    switch (i) {
        case er.J7.MOBILE:
            return (0, n.jsx)(p.u6o, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        case er.J7.XBOX:
            return (0, n.jsx)($.A, {
                className: a
            });
        case er.J7.PLAYSTATION:
            return (0, n.jsx)(Y.A, {
                className: a
            });
        case er.J7.QUEST:
            return (0, n.jsx)(c.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        default:
            return null
    }
}

function eh(e) {
    let {
        icon: t,
        tooltipText: i,
        hideWhenInactive: a,
        idle: l,
        onClick: r
    } = e;
    return (0, n.jsx)(u.m, {
        text: i,
        children: (0, n.jsx)("div", {
            className: s()(eu.V7, {
                [eu.kl]: a,
                [eu.N7]: l
            }),
            children: (0, n.jsx)(p.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: e => {
                    e.stopPropagation(), r(e)
                },
                "aria-label": i,
                icon: t
            })
        })
    })
}

function eg(e) {
    let {
        channelId: t,
        participantId: i,
        hideWhenInactive: l,
        idle: s
    } = e, r = a.useMemo(() => (0, I.A)(t, i), [t, i]), c = (0, o.bG)([D.A], () => D.A.getIsAlwaysOnTop(r)), d = a.useCallback(() => {
        (0, N.X)(h.A.CALL_TILE_POPOUT, N.O.STAY_ON_TOP, !c), P.setAlwaysOnTop(r, !c)
    }, [r, c]);
    return K.isPlatformEmbedded && J.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS) ? (0, n.jsx)(eh, {
        onClick: d,
        tooltipText: c ? ed.intl.string(ed.t.YdyDM9) : ed.intl.string(ed.t.ZVGHwP),
        icon: c ? p.hl9 : p.qgw,
        hideWhenInactive: l,
        idle: s
    }) : null
}
em.displayName = "CallTile";
let eA = a.memo(e => {
    let {
        idle: t,
        title: i,
        width: l,
        focused: m,
        videoToggleState: _,
        blocked: A,
        ignored: b,
        participantId: C,
        participantType: T,
        participantUserId: E,
        channel: j,
        platform: M,
        secureFramesVerified: D,
        onContextMenu: O,
        muted: G,
        deafened: R,
        localMuted: L,
        serverMuted: w,
        serverDeafened: V,
        hasVideo: W,
        hideAudioIcon: F,
        onToggleMute: z,
        popoutType: Y,
        paused: $,
        controlsBottom: K,
        streamId: J
    } = e, X = (0, o.bG)([H.default], () => H.default.getId()), {
        enabled: q,
        gameDetailsButtonMode: Z
    } = U.zK.useConfig({
        location: "call_tile"
    }), ee = (0, k.V)(q ? E : null), [ei, en] = T === er.lp.USER && Z === U.HW.OPEN_APPLICATION_WIDGET ? [E, ee] : [null, null], el = (0, g.A)(ei, en, "call_tile"), ec = (0, o.bG)([B.Ay], () => null != E && B.Ay.isLocalVideoAutoDisabled(E, (0, f.A)(T)), [E, T]), eo = (0, v.A)({
        userId: E,
        guildId: j.getGuildId()
    }), ep = (0, y.a)({
        displayNameStyles: eo
    }), em = (0, ea.Y)(l), eA = (0, ea.V)(l), [ef, ex] = a.useState(!1);
    a.useEffect(() => {
        let e = !1,
            t = () => {
                e !== Q.A.isOpen() && ((e = Q.A.isOpen()) || ex(!1))
            };
        return Q.A.addChangeListener(t), () => Q.A.removeChangeListener(t)
    }, []);
    let eb = !F && T === er.lp.STREAM && W && (!eA || L),
        eI = function(e) {
            let {
                localMuted: t,
                serverMuted: i,
                serverDeafened: n,
                deafened: a,
                muted: l
            } = e;
            return n ? p.TJE : i ? p.O1p : a ? p.cQT : t ? p.O1p : l ? p.z0P : null
        }({
            localMuted: L,
            serverMuted: w,
            serverDeafened: V,
            deafened: R,
            muted: G
        }),
        eN = (0, p.zhh)({
            value: null != K ? K : 0,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        eC = [];
    m && T === er.lp.STREAM && eC.push((0, n.jsx)(S.A, {
        streamId: J,
        paused: $
    }, "zoom-controls")), m ? Y === x.N.CALL_TILE && (eC.push((0, n.jsx)(eg, {
        channelId: j.id,
        participantId: C,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), eC.push((0, n.jsx)(eh, {
        onClick: () => {
            (0, N.X)(h.A.CALL_TILE_POPOUT, N.O.POPOUT_RETURN), P.close((0, I.A)(j.id, C))
        },
        tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
        icon: c.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (q && T === er.lp.USER && null != E && E !== X && null != ee && eC.push((0, n.jsx)(et.MI, {
        userId: E,
        channel: j,
        applicationId: ee,
        hideWhenInactive: !ef,
        idle: t
    }, "gift")), eC.push((0, n.jsx)(eh, {
        onClick: e => {
            e.stopPropagation(), ex(!0), O(e, !0, er.GK.THREE_DOT)
        },
        tooltipText: ed.intl.string(ed.t["+1H47t"]),
        icon: p.jNK,
        hideWhenInactive: !ef,
        idle: t
    }, "options")), eb && eC.push((0, n.jsx)(eh, {
        onClick: z,
        tooltipText: L ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
        icon: L ? p._RO : p.HKD,
        hideWhenInactive: !L && !ef,
        idle: t
    }, "mute")));
    let ev = [];
    null != eI && T === er.lp.USER && ev.push((0, n.jsx)(eI, {
        className: eu.gr,
        size: "xs",
        color: "currentColor"
    }, "sound-icon")), A && ev.push((0, n.jsx)("div", {
        className: eu.Z5,
        children: (0, n.jsx)(p.KTN, {
            size: "lg",
            className: eu.Q6,
            color: d.A.unsafe_rawColors.RED_400.css
        })
    }, "blocked-icon")), b && ev.push((0, n.jsx)("div", {
        className: eu.PP,
        children: (0, n.jsx)(p.G3N, {
            size: "lg",
            className: eu.Q6
        })
    }, "ignored-icon")), t || ev.push((0, n.jsx)(e_, {
        participantType: T,
        platform: M,
        className: eu.gr
    }, "title-icon")), null == i || "" === i || t || ev.push((0, n.jsx)("span", {
        className: s()(eu.Wk, ep),
        children: i
    }, "title-text")), D && ev.push((0, n.jsx)(u.m, {
        text: ed.intl.string(ed.t.ZEem6O),
        children: (0, n.jsx)(p.m5V, {
            className: eu.vW,
            size: "xs",
            color: d.A.colors.TEXT_STRONG,
            "aria-label": ed.intl.string(ed.t.mR9cf3)
        })
    }, "secure-frames-icon"));
    let ey = null;
    return q && !m && T === er.lp.USER && null != E && null != ee && (Z === U.HW.OPEN_APPLICATION_WIDGET ? ey = (0, n.jsx)(et.sU, {
        userId: E,
        applicationId: ee,
        channel: j,
        hasApplicationWidget: el.hasApplicationWidgetOnUserProfile,
        hideApplicationName: eA
    }) : Z === U.HW.OPEN_GAME_PROFILE && (ey = (0, n.jsx)(et.X0, {
        applicationId: ee,
        hideApplicationName: eA
    }))), (0, n.jsxs)("div", {
        className: s()(eu.MU, {
            [eu.oE]: eA,
            [eu.Ol]: m
        }),
        children: [(0, n.jsx)("div", {
            className: s()(eu.Ik, {
                [eu.EX]: l < 195
            }),
            children: ec || _ === es.bb8.AUTO_PROBING ? t ? (0, n.jsx)("div", {
                className: eu.h5,
                children: (0, n.jsx)(p.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, n.jsxs)("div", {
                className: s()(eu.ns, eu.WP),
                children: [(0, n.jsx)("div", {
                    className: eu.h5,
                    children: (0, n.jsx)(p.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, n.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    className: eu.Wk,
                    children: ed.intl.string(ed.t.m2Hyj0)
                })]
            }) : null
        }), !em && (0, n.jsxs)("div", {
            className: s()(eu.Qp, {
                [eu.EX]: l < 195
            }),
            children: [(0, n.jsxs)("div", {
                className: s()(eu.qV, {
                    [eu.d5]: q
                }),
                children: [ev.length > 0 && (0, n.jsx)(p.Text, {
                    className: eu.ac,
                    color: "none",
                    variant: eA ? "text-sm/normal" : "text-md/normal",
                    children: ev
                }), ey]
            }), eC.length > 0 ? (0, n.jsx)(r.animated.div, {
                className: s()(eu._v, {
                    [eu.N7]: t,
                    [eu.d5]: q
                }),
                style: {
                    marginBottom: eN.value
                },
                children: eC
            }) : null]
        })]
    })
});
eA.displayName = "CallTileOverlay";
let ef = /^(14256|21552)$/.test(i.j) ? T.$ : null,
    ex = em