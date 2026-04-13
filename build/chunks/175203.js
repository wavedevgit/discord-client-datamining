/** chunk id: 175203 params = (module,exports,require) **/
n.d(t, {
    Ay: () => ex,
    Yl: () => ef
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(687498),
    c = n(934551),
    o = n(311907),
    d = n(827734),
    u = n(990078),
    p = n(397927),
    m = n(827343),
    h = n(820284),
    _ = n(793574),
    g = n(294323),
    A = n(429913),
    f = n(520698),
    x = n(164617),
    I = n(66004),
    b = n(958005),
    N = n(384059),
    v = n(556525),
    C = n(609425),
    y = n(73392),
    E = n(401901),
    T = n(40056),
    S = n(117029),
    j = n(612258),
    M = n(551826),
    D = n(87001),
    P = n(574172),
    O = n(665691),
    U = n(724759),
    G = n(635885),
    R = n(209932),
    k = n(253932),
    L = n(461782),
    w = n(614518),
    V = n(706787),
    H = n(961350),
    B = n(111162),
    W = n(430452),
    F = n(485296),
    z = n(977997),
    Q = n(712687),
    Y = n(790381),
    $ = n(266080),
    J = n(723702),
    K = n(837921),
    X = n(141035),
    q = n(654820),
    Z = n(804980),
    ee = n(272812),
    et = n(304047),
    en = n(203355),
    ei = n(83982),
    ea = n(345812),
    el = n(110234),
    es = n(652215),
    er = n(806931),
    ec = n(31408),
    eo = n(731854),
    ed = n(985018),
    eu = n(633916);
let ep = [er.lp.ACTIVITY],
    em = a.memo(e => {
        var t, n, l;
        let r, c, d, {
                participant: u,
                popoutType: _,
                onDoubleClick: g,
                onContextMenu: x,
                onClick: b,
                onMouseDown: N,
                onKeyDown: C,
                className: y,
                style: S,
                containerStyle: D,
                channel: P,
                width: U,
                onVideoResize: G,
                inCall: Q = !1,
                selected: Y = !1,
                noBorder: $ = !1,
                noVideoRender: J = !1,
                focused: K = !1,
                blocked: et = !1,
                ignored: ea = !1,
                fit: em = E.$.CONTAIN,
                paused: eh = !1,
                pulseSpeakingIndicator: e_ = !1,
                forceIdle: eg = !1,
                controlsBottom: ef
            } = e,
            ex = a.useContext(L.vG) || eg,
            [eI, eb] = a.useState(!1),
            eN = k.Q_.useSetting(),
            ev = (0, o.bG)([B.default], () => B.default.isStreamInfoOverlayEnabled),
            [eC, ey] = a.useState(!1),
            eE = (0, o.bG)([H.default], () => H.default.getId()),
            eT = u.type === er.lp.ACTIVITY ? null : u.user,
            eS = eT?.id ?? null,
            [ej] = (0, A.A)(u.type === er.lp.ACTIVITY ? [u.applicationId] : []),
            eM = (0, o.bG)([W.Ay], () => null != eS && W.Ay.isLocalVideoDisabled(eS, (0, f.A)(u.type)), [eS, u.type]),
            eD = (0, o.bG)([W.Ay], () => null != eS ? W.Ay.getVideoToggleState(eS, (0, f.A)(u.type)) : es.bb8.NONE, [eS, u.type]),
            eP = eD === es.bb8.AUTO_PROBING,
            {
                speaking: eO,
                ringing: eU,
                hasVideo: eG
            } = (0, el.A)(u, eE),
            eR = (0, o.bG)([R.A], () => null !== eS && R.A.isUserPlayingSounds(eS), [eS]),
            ek = (t = eE, n = u, l = P.getGuildId(), r = n.type !== er.lp.ACTIVITY ? n.user.id : n.applicationId, c = (0, o.cf)([z.A], () => {
                let e = z.A.getVoiceState(l, r);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), d = (0, o.cf)([W.Ay], () => {
                let e = (0, f.A)(n.type);
                return t === r ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: W.Ay.isLocalMute(r, e),
                    localVideoDisabled: W.Ay.isLocalVideoDisabled(r, e),
                    localVideoAutoDisabled: W.Ay.isLocalVideoAutoDisabled(r, e)
                }
            }, [t, n.type, r]), {
                serverMuted: c.muted,
                serverDeafened: c.deafened,
                suppressed: c.suppressed,
                localMuted: d.muted,
                muted: (n.type === er.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (n.type === er.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eL = u.type === er.lp.STREAM && eS === eE,
            ew = (0, o.bG)([w.A], () => u.type === er.lp.USER && null != eS ? w.A.getEffectForUserId(eS) : null),
            eV = (0, o.bG)([z.A], () => z.A.getVoicePlatformForChannel(P.id, eS ?? es.dJq)),
            eH = (0, O.UF)({
                userId: eS,
                channelId: P.id
            }),
            eB = (0, O.DY)({
                streamKey: u.type === er.lp.STREAM ? u.id : null,
                channelId: P.id
            }),
            eW = a.useMemo(() => u.type === er.lp.STREAM ? eB ?? !1 : u.type === er.lp.USER && (eH ?? !1), [eB, eH, u.type]);
        a.useEffect(() => {
            eb(K)
        }, [K]);
        let eF = a.useCallback(() => {
                null != eS && m.A.toggleLocalMute(eS, eo.x.STREAM)
            }, [eS]),
            ez = a.useCallback(e => {
                b?.(u, e)
            }, [b, u]),
            eQ = a.useCallback(e => {
                g?.(u, e)
            }, [g, u]),
            eY = a.useCallback((e, t, n) => {
                x?.(u, e, t, n)
            }, [x, u]),
            e$ = null,
            eJ = null,
            eK = "";
        switch (u.type) {
            case er.lp.STREAM:
                e$ = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Y,
                    popoutType: _,
                    width: U,
                    fit: em,
                    onVideoResize: G,
                    paused: eh
                }), eJ = (0, i.jsx)(en.D, {
                    participant: u,
                    selected: Y,
                    width: U,
                    focused: K,
                    idle: ex,
                    premiumIndicator: !1
                }), eK = ed.intl.formatToPlainString(ed.t.gHPz3Q, {
                    streamerName: u.user.username
                });
                break;
            case er.lp.USER:
                e$ = (0, i.jsx)(ei.A, {
                    channel: P,
                    inCall: Q,
                    participant: u,
                    popoutType: _,
                    fit: em,
                    onVideoResize: G,
                    paused: eh,
                    selected: Y,
                    width: U,
                    blocked: et,
                    ignored: ea,
                    noVideoRender: J || eP,
                    pulseSpeakingIndicator: e_
                }), eJ = (0, i.jsx)(ei.s, {
                    participant: u,
                    channelId: P.id
                }), eK = ed.intl.formatToPlainString(ed.t["iC/x/Q"], {
                    username: u.user.username
                });
                break;
            case er.lp.ACTIVITY:
                e$ = (0, i.jsx)(Z.Ay, {
                    interactible: K,
                    participant: u,
                    selected: Y,
                    channel: P,
                    width: U
                }), eK = ed.intl.formatToPlainString(ed.t.YCvOsO, {
                    activityName: ej?.name
                });
                break;
            case er.lp.HIDDEN_STREAM:
                e$ = (0, i.jsx)(en.A, {
                    participant: u,
                    selected: Y,
                    width: U,
                    fit: em,
                    onVideoResize: G,
                    paused: eh,
                    popoutType: _
                })
        }
        let eX = a.useRef(null),
            eq = (0, o.bG)([F.A], () => u.type === er.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0),
            eZ = (0, v.v)({
                isSpeaking: eO,
                voiceDb: eq,
                spreadDirection: v.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e0 = (0, er.Ay)(u) ? p.kN9 : eG ? p.npA : p.EsG,
            e5 = u.type === er.lp.STREAM && K;
        return (0, i.jsx)(h.A, {
            section: es.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(T.Ay, {
                streamKey: u.id,
                enableZoom: e5,
                children: (0, i.jsx)("div", {
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
                    children: (0, i.jsxs)(M.A, {
                        shakeLocation: ec.uD.VOICE_USER,
                        isShaking: eO,
                        className: eu.Vs,
                        children: [(0, i.jsx)(ee.A, {
                            ref: eX,
                            className: s()(eu.Vs, {
                                [eu.E7]: $,
                                [eu.k_]: null == b,
                                [eu.N7]: ex
                            }),
                            noBorder: $,
                            style: S,
                            participantUserId: eS,
                            children: (0, i.jsxs)(p.sqX, {
                                "aria-label": eK,
                                className: eu.lG,
                                onDoubleClick: eQ,
                                onContextMenu: e => eY(e, u.type === er.lp.STREAM),
                                onClick: ez,
                                onMouseDown: N,
                                onKeyDown: C,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != ew && null != eS ? (0, i.jsx)(V.A, {
                                    voiceChannelEffect: ew,
                                    onComplete: () => (0, w.a)(eS),
                                    userId: eS
                                }) : null, u.type === er.lp.USER ? (0, i.jsx)("div", {
                                    className: eu.nl,
                                    children: (0, i.jsx)(I.A, {
                                        userId: eS,
                                        channelId: P.id,
                                        guildId: P.getGuildId(),
                                        containerDimensions: {
                                            width: eX?.current?.clientWidth ?? 0,
                                            height: eX?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e$, $ ? null : (0, i.jsx)("div", {
                                    className: eu.hD,
                                    children: eJ
                                }), Y ? (0, i.jsx)("div", {
                                    className: eu._Q,
                                    children: (0, i.jsx)(e0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: eu.Dt
                                    })
                                }) : null, ep.includes(u.type) ? null : (0, i.jsx)(eA, {
                                    focused: K,
                                    width: U,
                                    inCall: Q,
                                    participantId: u.id,
                                    participantType: u.type,
                                    hasVideo: eG ?? !1,
                                    ...ek,
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
                                    secureFramesVerified: eW,
                                    isHovered: eC,
                                    popoutType: _,
                                    paused: eh,
                                    controlsBottom: ef,
                                    streamId: u.type === er.lp.STREAM ? u.streamId : null
                                }), Q && !$ ? (0, i.jsx)("div", {
                                    className: s()(eu.PQ, {
                                        [eu.pU]: !K && (eR || null != ew)
                                    }),
                                    style: K || eR ? void 0 : eZ
                                }) : null]
                            })
                        }), eN && ev && eC && (0, i.jsx)(q.A, {
                            currentUserId: eE,
                            participant: u
                        }), (0, i.jsx)(j.A, {
                            isFiring: eI,
                            callTileRef: eX.current
                        })]
                    })
                })
            })
        })
    });

function eh(e) {
    let {
        participantType: t,
        platform: n,
        className: a
    } = e;
    if (t === er.lp.STREAM) return n === er.J7.XBOX ? (0, i.jsx)($.A, {
        className: a
    }) : (0, i.jsx)(p.kN9, {
        size: "md",
        color: "currentColor",
        className: a
    });
    switch (n) {
        case er.J7.MOBILE:
            return (0, i.jsx)(p.u6o, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        case er.J7.XBOX:
            return (0, i.jsx)($.A, {
                className: a
            });
        case er.J7.PLAYSTATION:
            return (0, i.jsx)(Y.A, {
                className: a
            });
        case er.J7.QUEST:
            return (0, i.jsx)(c.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        default:
            return null
    }
}

function e_(e) {
    let {
        icon: t,
        tooltipText: n,
        hideWhenInactive: a,
        idle: l,
        onClick: r
    } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: s()(eu.V7, {
                [eu.kl]: a,
                [eu.N7]: l
            }),
            children: (0, i.jsx)(p.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: e => {
                    e.stopPropagation(), r(e)
                },
                "aria-label": n,
                icon: t
            })
        })
    })
}

function eg(e) {
    let {
        channelId: t,
        participantId: n,
        hideWhenInactive: l,
        idle: s
    } = e, r = a.useMemo(() => (0, b.A)(t, n), [t, n]), c = (0, o.bG)([D.A], () => D.A.getIsAlwaysOnTop(r)), d = a.useCallback(() => {
        (0, N.X)(_.A.CALL_TILE_POPOUT, N.O.STAY_ON_TOP, !c), P.setAlwaysOnTop(r, !c)
    }, [r, c]);
    return J.isPlatformEmbedded && K.Ay.supportsFeature(es.BYE.POPOUT_WINDOWS) ? (0, i.jsx)(e_, {
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
        title: n,
        width: l,
        focused: m,
        videoToggleState: h,
        blocked: A,
        ignored: I,
        participantId: v,
        participantType: E,
        participantUserId: T,
        channel: j,
        platform: M,
        secureFramesVerified: D,
        onContextMenu: O,
        muted: R,
        deafened: k,
        localMuted: L,
        serverMuted: w,
        serverDeafened: V,
        hasVideo: B,
        hideAudioIcon: F,
        onToggleMute: z,
        popoutType: Y,
        paused: $,
        controlsBottom: J,
        streamId: K
    } = e, X = (0, o.bG)([H.default], () => H.default.getId()), {
        enabled: q,
        gameDetailsButtonMode: Z
    } = U.zK.useConfig({
        location: "call_tile"
    }), ee = (0, G.V)(q ? T : null), [en, ei] = E === er.lp.USER && Z === U.HW.OPEN_APPLICATION_WIDGET ? [T, ee] : [null, null], el = (0, g.A)(en, ei, "call_tile"), ec = (0, o.bG)([W.Ay], () => null != T && W.Ay.isLocalVideoAutoDisabled(T, (0, f.A)(E)), [T, E]), eo = (0, C.A)({
        userId: T,
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
    let eI = !F && E === er.lp.STREAM && B && (!eA || L),
        eb = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: i,
                deafened: a,
                muted: l
            } = e;
            return i ? p.TJE : n ? p.O1p : a ? p.cQT : t ? p.O1p : l ? p.z0P : null
        }({
            localMuted: L,
            serverMuted: w,
            serverDeafened: V,
            deafened: k,
            muted: R
        }),
        eN = (0, p.zhh)({
            value: null != J ? J : 0,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        ev = [];
    m && E === er.lp.STREAM && ev.push((0, i.jsx)(S.A, {
        streamId: K,
        paused: $
    }, "zoom-controls")), m ? Y === x.N.CALL_TILE && (ev.push((0, i.jsx)(eg, {
        channelId: j.id,
        participantId: v,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), ev.push((0, i.jsx)(e_, {
        onClick: () => {
            (0, N.X)(_.A.CALL_TILE_POPOUT, N.O.POPOUT_RETURN), P.close((0, b.A)(j.id, v))
        },
        tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
        icon: c.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (q && E === er.lp.USER && null != T && T !== X && null != ee && ev.push((0, i.jsx)(et.MI, {
        userId: T,
        channel: j,
        applicationId: ee,
        hideWhenInactive: !ef,
        idle: t
    }, "gift")), ev.push((0, i.jsx)(e_, {
        onClick: e => {
            e.stopPropagation(), ex(!0), O(e, !0, er.GK.THREE_DOT)
        },
        tooltipText: ed.intl.string(ed.t["+1H47t"]),
        icon: p.jNK,
        hideWhenInactive: !ef,
        idle: t
    }, "options")), eI && ev.push((0, i.jsx)(e_, {
        onClick: z,
        tooltipText: L ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
        icon: L ? p._RO : p.HKD,
        hideWhenInactive: !L && !ef,
        idle: t
    }, "mute")));
    let eC = [];
    null != eb && E === er.lp.USER && eC.push((0, i.jsx)(eb, {
        className: eu.gr,
        size: "xs",
        color: "currentColor"
    }, "sound-icon")), A && eC.push((0, i.jsx)("div", {
        className: eu.Z5,
        children: (0, i.jsx)(p.KTN, {
            size: "lg",
            className: eu.Q6,
            color: d.A.unsafe_rawColors.RED_400.css
        })
    }, "blocked-icon")), I && eC.push((0, i.jsx)("div", {
        className: eu.PP,
        children: (0, i.jsx)(p.G3N, {
            size: "lg",
            className: eu.Q6
        })
    }, "ignored-icon")), t || eC.push((0, i.jsx)(eh, {
        participantType: E,
        platform: M,
        className: eu.gr
    }, "title-icon")), null == n || "" === n || t || eC.push((0, i.jsx)("span", {
        className: s()(eu.Wk, ep),
        children: n
    }, "title-text")), D && eC.push((0, i.jsx)(u.m, {
        text: ed.intl.string(ed.t.ZEem6O),
        children: (0, i.jsx)(p.m5V, {
            className: eu.vW,
            size: "xs",
            color: d.A.colors.TEXT_STRONG,
            "aria-label": ed.intl.string(ed.t.mR9cf3)
        })
    }, "secure-frames-icon"));
    let ey = null;
    return q && !m && E === er.lp.USER && null != T && null != ee && (Z === U.HW.OPEN_APPLICATION_WIDGET ? ey = (0, i.jsx)(et.sU, {
        userId: T,
        applicationId: ee,
        channel: j,
        hasApplicationWidget: el.hasApplicationWidgetOnUserProfile,
        hideApplicationName: eA
    }) : Z === U.HW.OPEN_GAME_PROFILE && (ey = (0, i.jsx)(et.X0, {
        applicationId: ee,
        hideApplicationName: eA
    }))), (0, i.jsxs)("div", {
        className: s()(eu.MU, {
            [eu.oE]: eA,
            [eu.Ol]: m
        }),
        children: [(0, i.jsx)("div", {
            className: s()(eu.Ik, {
                [eu.EX]: l < 195
            }),
            children: ec || h === es.bb8.AUTO_PROBING ? t ? (0, i.jsx)("div", {
                className: eu.h5,
                children: (0, i.jsx)(p.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, i.jsxs)("div", {
                className: s()(eu.ns, eu.WP),
                children: [(0, i.jsx)("div", {
                    className: eu.h5,
                    children: (0, i.jsx)(p.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, i.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    className: eu.Wk,
                    children: ed.intl.string(ed.t.m2Hyj0)
                })]
            }) : null
        }), !em && (0, i.jsxs)("div", {
            className: s()(eu.Qp, {
                [eu.EX]: l < 195
            }),
            children: [(0, i.jsxs)("div", {
                className: s()(eu.qV, {
                    [eu.d5]: q
                }),
                children: [eC.length > 0 && (0, i.jsx)(p.Text, {
                    className: eu.ac,
                    color: "none",
                    variant: eA ? "text-sm/normal" : "text-md/normal",
                    children: eC
                }), ey]
            }), ev.length > 0 ? (0, i.jsx)(r.animated.div, {
                className: s()(eu._v, {
                    [eu.N7]: t,
                    [eu.d5]: q
                }),
                style: {
                    marginBottom: eN.value
                },
                children: ev
            }) : null]
        })]
    })
});
eA.displayName = "CallTileOverlay";
let ef = /^(14256|21552)$/.test(n.j) ? E.$ : null,
    ex = em