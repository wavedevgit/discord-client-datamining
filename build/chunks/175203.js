/** chunk id: 175203 params = (module,exports,require) **/
n.d(t, {
    Ay: () => eb,
    Yl: () => ex
}), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(407045),
    c = n(934551),
    o = n(311907),
    d = n(827734),
    u = n(990078),
    p = n(397927),
    m = n(827343),
    h = n(820284),
    g = n(672979),
    _ = n(793574),
    A = n(429913),
    f = n(520698),
    x = n(164617),
    b = n(66004),
    I = n(958005),
    v = n(384059),
    C = n(556525),
    N = n(609425),
    y = n(73392),
    E = n(401901),
    T = n(40056),
    S = n(117029),
    j = n(612258),
    M = n(551826),
    D = n(87001),
    P = n(574172),
    O = n(665691),
    R = n(724759),
    k = n(635885),
    U = n(209932),
    G = n(253932),
    L = n(461782),
    w = n(614518),
    V = n(706787),
    H = n(961350),
    B = n(111162),
    F = n(430452),
    W = n(290863),
    z = n(485296),
    Q = n(977997),
    Y = n(712687),
    $ = n(790381),
    J = n(266080),
    X = n(723702),
    K = n(837921),
    q = n(141035),
    Z = n(654820),
    ee = n(804980),
    et = n(272812),
    en = n(304047),
    ea = n(203355),
    ei = n(83982),
    el = n(345812),
    es = n(110234),
    er = n(652215),
    ec = n(806931),
    eo = n(31408),
    ed = n(731854),
    eu = n(985018),
    ep = n(391308);
let em = [ec.lp.ACTIVITY],
    eh = i.memo(e => {
        var t, n, l;
        let r, c, d, {
                participant: u,
                popoutType: g,
                onDoubleClick: _,
                onContextMenu: x,
                onClick: I,
                onMouseDown: v,
                onKeyDown: N,
                className: y,
                style: S,
                containerStyle: D,
                channel: P,
                width: R,
                onVideoResize: k,
                inCall: W = !1,
                selected: Y = !1,
                noBorder: $ = !1,
                noVideoRender: J = !1,
                focused: X = !1,
                blocked: K = !1,
                ignored: en = !1,
                fit: el = E.$.CONTAIN,
                paused: eh = !1,
                pulseSpeakingIndicator: eg = !1,
                forceIdle: e_ = !1,
                controlsBottom: eA
            } = e,
            ex = i.useContext(L.vG) || e_,
            [eb, eI] = i.useState(!1),
            ev = G.Q_.useSetting(),
            eC = (0, o.bG)([B.default], () => B.default.isStreamInfoOverlayEnabled),
            [eN, ey] = i.useState(!1),
            eE = (0, o.bG)([H.default], () => H.default.getId()),
            eT = u.type === ec.lp.ACTIVITY ? null : u.user,
            eS = eT?.id ?? null,
            [ej] = (0, A.A)(u.type === ec.lp.ACTIVITY ? [u.applicationId] : []),
            eM = (0, o.bG)([F.Ay], () => null != eS && F.Ay.isLocalVideoDisabled(eS, (0, f.A)(u.type)), [eS, u.type]),
            eD = (0, o.bG)([F.Ay], () => null != eS ? F.Ay.getVideoToggleState(eS, (0, f.A)(u.type)) : er.bb8.NONE, [eS, u.type]),
            eP = eD === er.bb8.AUTO_PROBING,
            {
                speaking: eO,
                ringing: eR,
                hasVideo: ek
            } = (0, es.A)(u, eE),
            eU = (0, o.bG)([U.A], () => null !== eS && U.A.isUserPlayingSounds(eS), [eS]),
            eG = (t = eE, n = u, l = P.getGuildId(), r = n.type !== ec.lp.ACTIVITY ? n.user.id : n.applicationId, c = (0, o.cf)([Q.A], () => {
                let e = Q.A.getVoiceState(l, r);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), d = (0, o.cf)([F.Ay], () => {
                let e = (0, f.A)(n.type);
                return t === r ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: F.Ay.isLocalMute(r, e),
                    localVideoDisabled: F.Ay.isLocalVideoDisabled(r, e),
                    localVideoAutoDisabled: F.Ay.isLocalVideoAutoDisabled(r, e)
                }
            }, [t, n.type, r]), {
                serverMuted: c.muted,
                serverDeafened: c.deafened,
                suppressed: c.suppressed,
                localMuted: d.muted,
                muted: (n.type === ec.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (n.type === ec.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eL = u.type === ec.lp.STREAM && eS === eE,
            ew = (0, o.bG)([w.A], () => u.type === ec.lp.USER && null != eS ? w.A.getEffectForUserId(eS) : null),
            eV = (0, o.bG)([Q.A], () => Q.A.getVoicePlatformForChannel(P.id, eS ?? er.dJq)),
            eH = (0, O.UF)({
                userId: eS,
                channelId: P.id
            }),
            eB = (0, O.DY)({
                streamKey: u.type === ec.lp.STREAM ? u.id : null,
                channelId: P.id
            }),
            eF = i.useMemo(() => u.type === ec.lp.STREAM ? eB ?? !1 : u.type === ec.lp.USER && (eH ?? !1), [eB, eH, u.type]);
        i.useEffect(() => {
            eI(X)
        }, [X]);
        let eW = i.useCallback(() => {
                null != eS && m.A.toggleLocalMute(eS, ed.x.STREAM)
            }, [eS]),
            ez = i.useCallback(e => {
                I?.(u, e)
            }, [I, u]),
            eQ = i.useCallback(e => {
                _?.(u, e)
            }, [_, u]),
            eY = i.useCallback((e, t, n) => {
                x?.(u, e, t, n)
            }, [x, u]),
            e$ = null,
            eJ = null,
            eX = "";
        switch (u.type) {
            case ec.lp.STREAM:
                e$ = (0, a.jsx)(ea.A, {
                    participant: u,
                    selected: Y,
                    popoutType: g,
                    width: R,
                    fit: el,
                    onVideoResize: k,
                    paused: eh
                }), eJ = (0, a.jsx)(ea.D, {
                    participant: u,
                    selected: Y,
                    width: R,
                    focused: X,
                    idle: ex,
                    premiumIndicator: !1
                }), eX = eu.intl.formatToPlainString(eu.t.gHPz3Q, {
                    streamerName: u.user.username
                });
                break;
            case ec.lp.USER:
                e$ = (0, a.jsx)(ei.A, {
                    channel: P,
                    inCall: W,
                    participant: u,
                    popoutType: g,
                    fit: el,
                    onVideoResize: k,
                    paused: eh,
                    selected: Y,
                    width: R,
                    blocked: K,
                    ignored: en,
                    noVideoRender: J || eP,
                    pulseSpeakingIndicator: eg
                }), eJ = (0, a.jsx)(ei.s, {
                    participant: u,
                    channelId: P.id
                }), eX = eu.intl.formatToPlainString(eu.t["iC/x/Q"], {
                    username: u.user.username
                });
                break;
            case ec.lp.ACTIVITY:
                e$ = (0, a.jsx)(ee.Ay, {
                    interactible: X,
                    participant: u,
                    selected: Y,
                    channel: P,
                    width: R
                }), eX = eu.intl.formatToPlainString(eu.t.YCvOsO, {
                    activityName: ej?.name
                });
                break;
            case ec.lp.HIDDEN_STREAM:
                e$ = (0, a.jsx)(ea.A, {
                    participant: u,
                    selected: Y,
                    width: R,
                    fit: el,
                    onVideoResize: k,
                    paused: eh,
                    popoutType: g
                })
        }
        let eK = i.useRef(null),
            eq = (0, o.bG)([z.A], () => u.type === ec.lp.USER ? z.A.getVoiceVolume(u.id) : -1 / 0),
            eZ = (0, C.v)({
                isSpeaking: eO,
                voiceDb: eq,
                spreadDirection: C.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e0 = (0, ec.Ay)(u) ? p.kN9 : ek ? p.npA : p.EsG,
            e5 = u.type === ec.lp.STREAM && X;
        return (0, a.jsx)(h.A, {
            section: er.JJy.VOICE_CHANNEL_TILE,
            children: (0, a.jsx)(T.Ay, {
                streamKey: u.id,
                enableZoom: e5,
                children: (0, a.jsx)("div", {
                    className: s()(ep.iE, {
                        [ep.DF]: eR
                    }, y),
                    style: D,
                    onMouseEnter: () => {
                        ey(!0)
                    },
                    onMouseLeave: () => {
                        ey(!1)
                    },
                    children: (0, a.jsxs)(M.A, {
                        shakeLocation: eo.uD.VOICE_USER,
                        isShaking: eO,
                        className: ep.Vs,
                        children: [(0, a.jsx)(et.A, {
                            ref: eK,
                            className: s()(ep.Vs, {
                                [ep.E7]: $,
                                [ep.k_]: null == I,
                                [ep.N7]: ex
                            }),
                            noBorder: $,
                            style: S,
                            participantUserId: eS,
                            children: (0, a.jsxs)(p.sqX, {
                                "aria-label": eX,
                                className: ep.lG,
                                onDoubleClick: eQ,
                                onContextMenu: e => eY(e, u.type === ec.lp.STREAM),
                                onClick: ez,
                                onMouseDown: v,
                                onKeyDown: N,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != ew && null != eS ? (0, a.jsx)(V.A, {
                                    voiceChannelEffect: ew,
                                    onComplete: () => (0, w.a)(eS),
                                    userId: eS
                                }) : null, u.type === ec.lp.USER ? (0, a.jsx)("div", {
                                    className: ep.nl,
                                    children: (0, a.jsx)(b.A, {
                                        userId: eS,
                                        channelId: P.id,
                                        guildId: P.getGuildId(),
                                        containerDimensions: {
                                            width: eK?.current?.clientWidth ?? 0,
                                            height: eK?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e$, $ ? null : (0, a.jsx)("div", {
                                    className: ep.hD,
                                    children: eJ
                                }), Y ? (0, a.jsx)("div", {
                                    className: ep._Q,
                                    children: (0, a.jsx)(e0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ep.Dt
                                    })
                                }) : null, em.includes(u.type) ? null : (0, a.jsx)(ef, {
                                    focused: X,
                                    width: R,
                                    inCall: W,
                                    participantId: u.id,
                                    participantType: u.type,
                                    hasVideo: ek ?? !1,
                                    ...eG,
                                    idle: ex,
                                    platform: eV,
                                    title: (0, q.A)(P, u),
                                    blocked: K,
                                    ignored: en,
                                    localVideoDisabled: eM,
                                    videoToggleState: eD,
                                    hideAudioIcon: eL,
                                    onContextMenu: eY,
                                    onToggleMute: eW,
                                    participantUserId: eS,
                                    channel: P,
                                    secureFramesVerified: eF,
                                    isHovered: eN,
                                    popoutType: g,
                                    paused: eh,
                                    controlsBottom: eA,
                                    streamId: u.type === ec.lp.STREAM ? u.streamId : null
                                }), W && !$ ? (0, a.jsx)("div", {
                                    className: s()(ep.PQ, {
                                        [ep.pU]: !X && (eU || null != ew)
                                    }),
                                    style: X || eU ? void 0 : eZ
                                }) : null]
                            })
                        }), ev && eC && eN && (0, a.jsx)(Z.A, {
                            currentUserId: eE,
                            participant: u
                        }), (0, a.jsx)(j.A, {
                            isFiring: eb,
                            callTileRef: eK.current
                        })]
                    })
                })
            })
        })
    });

function eg(e) {
    let {
        participantType: t,
        platform: n,
        className: i
    } = e;
    if (t === ec.lp.STREAM) return n === ec.J7.XBOX ? (0, a.jsx)(J.A, {
        className: i
    }) : (0, a.jsx)(p.kN9, {
        size: "md",
        color: "currentColor",
        className: i
    });
    switch (n) {
        case ec.J7.MOBILE:
            return (0, a.jsx)(p.u6o, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        case ec.J7.XBOX:
            return (0, a.jsx)(J.A, {
                className: i
            });
        case ec.J7.PLAYSTATION:
            return (0, a.jsx)($.A, {
                className: i
            });
        case ec.J7.QUEST:
            return (0, a.jsx)(c.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        default:
            return null
    }
}

function e_(e) {
    let {
        icon: t,
        tooltipText: n,
        hideWhenInactive: i,
        idle: l,
        onClick: r
    } = e;
    return (0, a.jsx)(u.m, {
        text: n,
        children: (0, a.jsx)("div", {
            className: s()(ep.V7, {
                [ep.kl]: i,
                [ep.N7]: l
            }),
            children: (0, a.jsx)(p.K0, {
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

function eA(e) {
    let {
        channelId: t,
        participantId: n,
        hideWhenInactive: l,
        idle: s
    } = e, r = i.useMemo(() => (0, I.A)(t, n), [t, n]), c = (0, o.bG)([D.A], () => D.A.getIsAlwaysOnTop(r)), d = i.useCallback(() => {
        (0, v.X)(_.A.CALL_TILE_POPOUT, v.O.STAY_ON_TOP, !c), P.setAlwaysOnTop(r, !c)
    }, [r, c]);
    return X.isPlatformEmbedded && K.Ay.supportsFeature(er.BYE.POPOUT_WINDOWS) ? (0, a.jsx)(e_, {
        onClick: d,
        tooltipText: c ? eu.intl.string(eu.t.YdyDM9) : eu.intl.string(eu.t.ZVGHwP),
        icon: c ? p.hl9 : p.qgw,
        hideWhenInactive: l,
        idle: s
    }) : null
}
eh.displayName = "CallTile";
let ef = i.memo(e => {
    let {
        idle: t,
        title: n,
        width: l,
        focused: m,
        videoToggleState: h,
        blocked: A,
        ignored: b,
        participantId: C,
        participantType: E,
        participantUserId: T,
        channel: j,
        platform: M,
        secureFramesVerified: D,
        onContextMenu: O,
        muted: U,
        deafened: G,
        localMuted: L,
        serverMuted: w,
        serverDeafened: V,
        hasVideo: B,
        hideAudioIcon: z,
        onToggleMute: Q,
        popoutType: $,
        paused: J,
        controlsBottom: X,
        streamId: K
    } = e, q = (0, o.bG)([H.default], () => H.default.getId()), Z = (0, R.B)({
        location: "call_tile"
    }), ee = (0, o.bG)([W.A], () => E === ec.lp.USER && null != T ? W.A.getActivities(T).find(g.A)?.application_id : null), et = (0, k.V)(Z ? T : null), ea = (0, o.bG)([F.Ay], () => null != T && F.Ay.isLocalVideoAutoDisabled(T, (0, f.A)(E)), [T, E]), ei = (0, N.A)({
        userId: T,
        guildId: j.getGuildId()
    }), es = (0, y.a)({
        displayNameStyles: ei
    }), eo = (0, el.Yb)(l), ed = (0, el.VE)(l), em = (0, el.DO)(l), [eh, ef] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== Y.A.isOpen() && ((e = Y.A.isOpen()) || ef(!1))
            };
        return Y.A.addChangeListener(t), () => Y.A.removeChangeListener(t)
    }, []);
    let ex = !z && E === ec.lp.STREAM && B && (!ed || L),
        eb = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: a,
                deafened: i,
                muted: l
            } = e;
            return a ? p.TJE : n ? p.O1p : i ? p.cQT : t ? p.O1p : l ? p.z0P : null
        }({
            localMuted: L,
            serverMuted: w,
            serverDeafened: V,
            deafened: G,
            muted: U
        }),
        eI = (0, p.zhh)({
            value: null != X ? X : 0,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        ev = [];
    m && E === ec.lp.STREAM && ev.push((0, a.jsx)(S.A, {
        streamId: K,
        paused: J
    }, "zoom-controls")), m ? $ === x.N.CALL_TILE && (ev.push((0, a.jsx)(eA, {
        channelId: j.id,
        participantId: C,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), ev.push((0, a.jsx)(e_, {
        onClick: () => {
            (0, v.X)(_.A.CALL_TILE_POPOUT, v.O.POPOUT_RETURN), P.close((0, I.A)(j.id, C))
        },
        tooltipText: eu.intl.string(eu.t["7Dwcnj"]),
        icon: c.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (Z && !em && E === ec.lp.USER && null != T && T !== q && null != et && ev.push((0, a.jsx)(en.M, {
        userId: T,
        channel: j,
        applicationId: et,
        hideWhenInactive: !eh,
        idle: t
    }, "gift")), ev.push((0, a.jsx)(e_, {
        onClick: e => {
            e.stopPropagation(), ef(!0), O(e, !0, ec.GK.THREE_DOT)
        },
        tooltipText: eu.intl.string(eu.t["+1H47t"]),
        icon: p.jNK,
        hideWhenInactive: !eh,
        idle: t
    }, "options")), ex && ev.push((0, a.jsx)(e_, {
        onClick: Q,
        tooltipText: L ? eu.intl.string(eu.t.YqAjXy) : eu.intl.string(eu.t.w4m945),
        icon: L ? p._RO : p.HKD,
        hideWhenInactive: !L && !eh,
        idle: t
    }, "mute")));
    let eC = [];
    null != eb && E === ec.lp.USER && eC.push((0, a.jsx)(eb, {
        className: ep.gr,
        size: "xs",
        color: "currentColor"
    }, "sound-icon")), A && eC.push((0, a.jsx)("div", {
        className: ep.Z5,
        children: (0, a.jsx)(p.KTN, {
            size: "lg",
            className: ep.Q6,
            color: d.A.unsafe_rawColors.RED_400.css
        })
    }, "blocked-icon")), b && eC.push((0, a.jsx)("div", {
        className: ep.PP,
        children: (0, a.jsx)(p.G3N, {
            size: "lg",
            className: ep.Q6
        })
    }, "ignored-icon")), t || eC.push((0, a.jsx)(eg, {
        participantType: E,
        platform: M,
        className: ep.gr
    }, "title-icon")), null == n || "" === n || t || eC.push((0, a.jsx)("span", {
        className: s()(ep.Wk, es),
        children: n
    }, "title-text")), D && eC.push((0, a.jsx)(u.m, {
        text: eu.intl.string(eu.t.ZEem6O),
        children: (0, a.jsx)(p.m5V, {
            className: ep.vW,
            size: "xs",
            color: d.A.colors.TEXT_STRONG,
            "aria-label": eu.intl.string(eu.t.mR9cf3)
        })
    }, "secure-frames-icon"));
    let eN = et ?? ee,
        ey = !Z || m || t || em || E !== ec.lp.USER || null == T || null == eN ? null : (0, a.jsx)(en.X, {
            applicationId: eN,
            hideApplicationName: ed
        });
    return (0, a.jsxs)("div", {
        className: s()(ep.MU, {
            [ep.oE]: ed,
            [ep.Ol]: m
        }),
        children: [(0, a.jsx)("div", {
            className: s()(ep.Ik, {
                [ep.EX]: l < 195
            }),
            children: ea || h === er.bb8.AUTO_PROBING ? t ? (0, a.jsx)("div", {
                className: ep.h5,
                children: (0, a.jsx)(p.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, a.jsxs)("div", {
                className: s()(ep.ns, ep.WP),
                children: [(0, a.jsx)("div", {
                    className: ep.h5,
                    children: (0, a.jsx)(p.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    className: ep.Wk,
                    children: eu.intl.string(eu.t.m2Hyj0)
                })]
            }) : null
        }), !eo && (0, a.jsxs)("div", {
            className: s()(ep.Qp, {
                [ep.EX]: l < 195
            }),
            children: [(0, a.jsxs)("div", {
                className: s()(ep.qV, {
                    [ep.d5]: Z
                }),
                children: [eC.length > 0 && (0, a.jsx)(p.Text, {
                    className: ep.ac,
                    color: "none",
                    variant: ed ? "text-sm/normal" : "text-md/normal",
                    children: eC
                }), ey]
            }), ev.length > 0 ? (0, a.jsx)(r.animated.div, {
                className: s()(ep._v, {
                    [ep.N7]: t,
                    [ep.d5]: Z
                }),
                style: {
                    marginBottom: eI.value
                },
                children: ev
            }) : null]
        })]
    })
});
ef.displayName = "CallTileOverlay";
let ex = /^(14256|21552)$/.test(n.j) ? E.$ : null,
    eb = eh