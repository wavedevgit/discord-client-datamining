/** chunk id: 175203 params = (module,exports,require) **/
n.d(t, {
    Ay: () => ef,
    Yl: () => eA
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
    g = n(793574),
    _ = n(429913),
    A = n(520698),
    f = n(164617),
    x = n(66004),
    b = n(958005),
    I = n(384059),
    v = n(556525),
    C = n(609425),
    N = n(73392),
    y = n(401901),
    E = n(40056),
    T = n(117029),
    S = n(612258),
    j = n(551826),
    M = n(87001),
    D = n(574172),
    P = n(665691),
    O = n(724759),
    R = n(635885),
    k = n(209932),
    U = n(253932),
    G = n(461782),
    L = n(614518),
    w = n(706787),
    V = n(961350),
    H = n(111162),
    B = n(430452),
    F = n(485296),
    W = n(977997),
    z = n(712687),
    Q = n(790381),
    Y = n(266080),
    $ = n(723702),
    J = n(837921),
    X = n(141035),
    K = n(654820),
    q = n(804980),
    Z = n(272812),
    ee = n(304047),
    et = n(203355),
    en = n(83982),
    ea = n(345812),
    ei = n(110234),
    el = n(652215),
    es = n(806931),
    er = n(31408),
    ec = n(731854),
    eo = n(985018),
    ed = n(391308);
let eu = [es.lp.ACTIVITY],
    ep = i.memo(e => {
        var t, n, l;
        let r, c, d, {
                participant: u,
                popoutType: g,
                onDoubleClick: f,
                onContextMenu: b,
                onClick: I,
                onMouseDown: C,
                onKeyDown: N,
                className: T,
                style: M,
                containerStyle: D,
                channel: O,
                width: R,
                onVideoResize: z,
                inCall: Q = !1,
                selected: Y = !1,
                noBorder: $ = !1,
                noVideoRender: J = !1,
                focused: ee = !1,
                blocked: ea = !1,
                ignored: ep = !1,
                fit: em = y.$.CONTAIN,
                paused: eh = !1,
                pulseSpeakingIndicator: eg = !1,
                forceIdle: eA = !1,
                controlsBottom: ef
            } = e,
            ex = i.useContext(G.vG) || eA,
            [eb, eI] = i.useState(!1),
            ev = U.Q_.useSetting(),
            eC = (0, o.bG)([H.default], () => H.default.isStreamInfoOverlayEnabled),
            [eN, ey] = i.useState(!1),
            eE = (0, o.bG)([V.default], () => V.default.getId()),
            eT = u.type === es.lp.ACTIVITY ? null : u.user,
            eS = eT?.id ?? null,
            [ej] = (0, _.A)(u.type === es.lp.ACTIVITY ? [u.applicationId] : []),
            eM = (0, o.bG)([B.Ay], () => null != eS && B.Ay.isLocalVideoDisabled(eS, (0, A.A)(u.type)), [eS, u.type]),
            eD = (0, o.bG)([B.Ay], () => null != eS ? B.Ay.getVideoToggleState(eS, (0, A.A)(u.type)) : el.bb8.NONE, [eS, u.type]),
            eP = eD === el.bb8.AUTO_PROBING,
            {
                speaking: eO,
                ringing: eR,
                hasVideo: ek
            } = (0, ei.A)(u, eE),
            eU = (0, o.bG)([k.A], () => null !== eS && k.A.isUserPlayingSounds(eS), [eS]),
            eG = (t = eE, n = u, l = O.getGuildId(), r = n.type !== es.lp.ACTIVITY ? n.user.id : n.applicationId, c = (0, o.cf)([W.A], () => {
                let e = W.A.getVoiceState(l, r);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), d = (0, o.cf)([B.Ay], () => {
                let e = (0, A.A)(n.type);
                return t === r ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: B.Ay.isLocalMute(r, e),
                    localVideoDisabled: B.Ay.isLocalVideoDisabled(r, e),
                    localVideoAutoDisabled: B.Ay.isLocalVideoAutoDisabled(r, e)
                }
            }, [t, n.type, r]), {
                serverMuted: c.muted,
                serverDeafened: c.deafened,
                suppressed: c.suppressed,
                localMuted: d.muted,
                muted: (n.type === es.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (n.type === es.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eL = u.type === es.lp.STREAM && eS === eE,
            ew = (0, o.bG)([L.A], () => u.type === es.lp.USER && null != eS ? L.A.getEffectForUserId(eS) : null),
            eV = (0, o.bG)([W.A], () => W.A.getVoicePlatformForChannel(O.id, eS ?? el.dJq)),
            eH = (0, P.UF)({
                userId: eS,
                channelId: O.id
            }),
            eB = (0, P.DY)({
                streamKey: u.type === es.lp.STREAM ? u.id : null,
                channelId: O.id
            }),
            eF = i.useMemo(() => u.type === es.lp.STREAM ? eB ?? !1 : u.type === es.lp.USER && (eH ?? !1), [eB, eH, u.type]);
        i.useEffect(() => {
            eI(ee)
        }, [ee]);
        let eW = i.useCallback(() => {
                null != eS && m.A.toggleLocalMute(eS, ec.x.STREAM)
            }, [eS]),
            ez = i.useCallback(e => {
                I?.(u, e)
            }, [I, u]),
            eQ = i.useCallback(e => {
                f?.(u, e)
            }, [f, u]),
            eY = i.useCallback((e, t, n) => {
                b?.(u, e, t, n)
            }, [b, u]),
            e$ = null,
            eJ = null,
            eX = "";
        switch (u.type) {
            case es.lp.STREAM:
                e$ = (0, a.jsx)(et.A, {
                    participant: u,
                    selected: Y,
                    popoutType: g,
                    width: R,
                    fit: em,
                    onVideoResize: z,
                    paused: eh
                }), eJ = (0, a.jsx)(et.D, {
                    participant: u,
                    selected: Y,
                    width: R,
                    focused: ee,
                    idle: ex,
                    premiumIndicator: !1
                }), eX = eo.intl.formatToPlainString(eo.t.gHPz3Q, {
                    streamerName: u.user.username
                });
                break;
            case es.lp.USER:
                e$ = (0, a.jsx)(en.A, {
                    channel: O,
                    inCall: Q,
                    participant: u,
                    popoutType: g,
                    fit: em,
                    onVideoResize: z,
                    paused: eh,
                    selected: Y,
                    width: R,
                    blocked: ea,
                    ignored: ep,
                    noVideoRender: J || eP,
                    pulseSpeakingIndicator: eg
                }), eJ = (0, a.jsx)(en.s, {
                    participant: u,
                    channelId: O.id
                }), eX = eo.intl.formatToPlainString(eo.t["iC/x/Q"], {
                    username: u.user.username
                });
                break;
            case es.lp.ACTIVITY:
                e$ = (0, a.jsx)(q.Ay, {
                    interactible: ee,
                    participant: u,
                    selected: Y,
                    channel: O,
                    width: R
                }), eX = eo.intl.formatToPlainString(eo.t.YCvOsO, {
                    activityName: ej?.name
                });
                break;
            case es.lp.HIDDEN_STREAM:
                e$ = (0, a.jsx)(et.A, {
                    participant: u,
                    selected: Y,
                    width: R,
                    fit: em,
                    onVideoResize: z,
                    paused: eh,
                    popoutType: g
                })
        }
        let eK = i.useRef(null),
            eq = (0, o.bG)([F.A], () => u.type === es.lp.USER ? F.A.getVoiceVolume(u.id) : -1 / 0),
            eZ = (0, v.v)({
                isSpeaking: eO,
                voiceDb: eq,
                spreadDirection: v.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e0 = (0, es.Ay)(u) ? p.kN9 : ek ? p.npA : p.EsG,
            e5 = u.type === es.lp.STREAM && ee;
        return (0, a.jsx)(h.A, {
            section: el.JJy.VOICE_CHANNEL_TILE,
            children: (0, a.jsx)(E.Ay, {
                streamKey: u.id,
                enableZoom: e5,
                children: (0, a.jsx)("div", {
                    className: s()(ed.iE, {
                        [ed.DF]: eR
                    }, T),
                    style: D,
                    onMouseEnter: () => {
                        ey(!0)
                    },
                    onMouseLeave: () => {
                        ey(!1)
                    },
                    children: (0, a.jsxs)(j.A, {
                        shakeLocation: er.uD.VOICE_USER,
                        isShaking: eO,
                        className: ed.Vs,
                        children: [(0, a.jsx)(Z.A, {
                            ref: eK,
                            className: s()(ed.Vs, {
                                [ed.E7]: $,
                                [ed.k_]: null == I,
                                [ed.N7]: ex
                            }),
                            noBorder: $,
                            style: M,
                            participantUserId: eS,
                            children: (0, a.jsxs)(p.sqX, {
                                "aria-label": eX,
                                className: ed.lG,
                                onDoubleClick: eQ,
                                onContextMenu: e => eY(e, u.type === es.lp.STREAM),
                                onClick: ez,
                                onMouseDown: C,
                                onKeyDown: N,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != ew && null != eS ? (0, a.jsx)(w.A, {
                                    voiceChannelEffect: ew,
                                    onComplete: () => (0, L.a)(eS),
                                    userId: eS
                                }) : null, u.type === es.lp.USER ? (0, a.jsx)("div", {
                                    className: ed.nl,
                                    children: (0, a.jsx)(x.A, {
                                        userId: eS,
                                        channelId: O.id,
                                        guildId: O.getGuildId(),
                                        containerDimensions: {
                                            width: eK?.current?.clientWidth ?? 0,
                                            height: eK?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, e$, $ ? null : (0, a.jsx)("div", {
                                    className: ed.hD,
                                    children: eJ
                                }), Y ? (0, a.jsx)("div", {
                                    className: ed._Q,
                                    children: (0, a.jsx)(e0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ed.Dt
                                    })
                                }) : null, eu.includes(u.type) ? null : (0, a.jsx)(e_, {
                                    focused: ee,
                                    width: R,
                                    inCall: Q,
                                    participantId: u.id,
                                    participantType: u.type,
                                    hasVideo: ek ?? !1,
                                    ...eG,
                                    idle: ex,
                                    platform: eV,
                                    title: (0, X.A)(O, u),
                                    blocked: ea,
                                    ignored: ep,
                                    localVideoDisabled: eM,
                                    videoToggleState: eD,
                                    hideAudioIcon: eL,
                                    onContextMenu: eY,
                                    onToggleMute: eW,
                                    participantUserId: eS,
                                    channel: O,
                                    secureFramesVerified: eF,
                                    isHovered: eN,
                                    popoutType: g,
                                    paused: eh,
                                    controlsBottom: ef,
                                    streamId: u.type === es.lp.STREAM ? u.streamId : null
                                }), Q && !$ ? (0, a.jsx)("div", {
                                    className: s()(ed.PQ, {
                                        [ed.pU]: !ee && (eU || null != ew)
                                    }),
                                    style: ee || eU ? void 0 : eZ
                                }) : null]
                            })
                        }), ev && eC && eN && (0, a.jsx)(K.A, {
                            currentUserId: eE,
                            participant: u
                        }), (0, a.jsx)(S.A, {
                            isFiring: eb,
                            callTileRef: eK.current
                        })]
                    })
                })
            })
        })
    });

function em(e) {
    let {
        participantType: t,
        platform: n,
        className: i
    } = e;
    if (t === es.lp.STREAM) return n === es.J7.XBOX ? (0, a.jsx)(Y.A, {
        className: i
    }) : (0, a.jsx)(p.kN9, {
        size: "md",
        color: "currentColor",
        className: i
    });
    switch (n) {
        case es.J7.MOBILE:
            return (0, a.jsx)(p.u6o, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        case es.J7.XBOX:
            return (0, a.jsx)(Y.A, {
                className: i
            });
        case es.J7.PLAYSTATION:
            return (0, a.jsx)(Q.A, {
                className: i
            });
        case es.J7.QUEST:
            return (0, a.jsx)(c.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: i
            });
        default:
            return null
    }
}

function eh(e) {
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
            className: s()(ed.V7, {
                [ed.kl]: i,
                [ed.N7]: l
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

function eg(e) {
    let {
        channelId: t,
        participantId: n,
        hideWhenInactive: l,
        idle: s
    } = e, r = i.useMemo(() => (0, b.A)(t, n), [t, n]), c = (0, o.bG)([M.A], () => M.A.getIsAlwaysOnTop(r)), d = i.useCallback(() => {
        (0, I.X)(g.A.CALL_TILE_POPOUT, I.O.STAY_ON_TOP, !c), D.setAlwaysOnTop(r, !c)
    }, [r, c]);
    return $.isPlatformEmbedded && J.Ay.supportsFeature(el.BYE.POPOUT_WINDOWS) ? (0, a.jsx)(eh, {
        onClick: d,
        tooltipText: c ? eo.intl.string(eo.t.YdyDM9) : eo.intl.string(eo.t.ZVGHwP),
        icon: c ? p.hl9 : p.qgw,
        hideWhenInactive: l,
        idle: s
    }) : null
}
ep.displayName = "CallTile";
let e_ = i.memo(e => {
    let {
        idle: t,
        title: n,
        width: l,
        focused: m,
        videoToggleState: h,
        blocked: _,
        ignored: x,
        participantId: v,
        participantType: y,
        participantUserId: E,
        channel: S,
        platform: j,
        secureFramesVerified: M,
        onContextMenu: P,
        muted: k,
        deafened: U,
        localMuted: G,
        serverMuted: L,
        serverDeafened: w,
        hasVideo: H,
        hideAudioIcon: F,
        onToggleMute: W,
        popoutType: Q,
        paused: Y,
        controlsBottom: $,
        streamId: J
    } = e, X = (0, o.bG)([V.default], () => V.default.getId()), K = (0, O.B)({
        location: "call_tile"
    }), q = (0, R.V)(K ? E : null), Z = (0, o.bG)([B.Ay], () => null != E && B.Ay.isLocalVideoAutoDisabled(E, (0, A.A)(y)), [E, y]), et = (0, C.A)({
        userId: E,
        guildId: S.getGuildId()
    }), en = (0, N.a)({
        displayNameStyles: et
    }), ei = (0, ea.Yb)(l), er = (0, ea.VE)(l), ec = (0, ea.DO)(l), [eu, ep] = i.useState(!1);
    i.useEffect(() => {
        let e = !1,
            t = () => {
                e !== z.A.isOpen() && ((e = z.A.isOpen()) || ep(!1))
            };
        return z.A.addChangeListener(t), () => z.A.removeChangeListener(t)
    }, []);
    let e_ = !F && y === es.lp.STREAM && H && (!er || G),
        eA = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: a,
                deafened: i,
                muted: l
            } = e;
            return a ? p.TJE : n ? p.O1p : i ? p.cQT : t ? p.O1p : l ? p.z0P : null
        }({
            localMuted: G,
            serverMuted: L,
            serverDeafened: w,
            deafened: U,
            muted: k
        }),
        ef = (0, p.zhh)({
            value: null != $ ? $ : 0,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        ex = [];
    m && y === es.lp.STREAM && ex.push((0, a.jsx)(T.A, {
        streamId: J,
        paused: Y
    }, "zoom-controls")), m ? Q === f.N.CALL_TILE && (ex.push((0, a.jsx)(eg, {
        channelId: S.id,
        participantId: v,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), ex.push((0, a.jsx)(eh, {
        onClick: () => {
            (0, I.X)(g.A.CALL_TILE_POPOUT, I.O.POPOUT_RETURN), D.close((0, b.A)(S.id, v))
        },
        tooltipText: eo.intl.string(eo.t["7Dwcnj"]),
        icon: c.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (K && !ec && y === es.lp.USER && null != E && E !== X && null != q && ex.push((0, a.jsx)(ee.M, {
        userId: E,
        channel: S,
        applicationId: q,
        hideWhenInactive: !eu,
        idle: t
    }, "gift")), ex.push((0, a.jsx)(eh, {
        onClick: e => {
            e.stopPropagation(), ep(!0), P(e, !0, es.GK.THREE_DOT)
        },
        tooltipText: eo.intl.string(eo.t["+1H47t"]),
        icon: p.jNK,
        hideWhenInactive: !eu,
        idle: t
    }, "options")), e_ && ex.push((0, a.jsx)(eh, {
        onClick: W,
        tooltipText: G ? eo.intl.string(eo.t.YqAjXy) : eo.intl.string(eo.t.w4m945),
        icon: G ? p._RO : p.HKD,
        hideWhenInactive: !G && !eu,
        idle: t
    }, "mute")));
    let eb = [];
    null != eA && y === es.lp.USER && eb.push((0, a.jsx)(eA, {
        className: ed.gr,
        size: "xs",
        color: "currentColor"
    }, "sound-icon")), _ && eb.push((0, a.jsx)("div", {
        className: ed.Z5,
        children: (0, a.jsx)(p.KTN, {
            size: "lg",
            className: ed.Q6,
            color: d.A.unsafe_rawColors.RED_400.css
        })
    }, "blocked-icon")), x && eb.push((0, a.jsx)("div", {
        className: ed.PP,
        children: (0, a.jsx)(p.G3N, {
            size: "lg",
            className: ed.Q6
        })
    }, "ignored-icon")), t || eb.push((0, a.jsx)(em, {
        participantType: y,
        platform: j,
        className: ed.gr
    }, "title-icon")), null == n || "" === n || t || eb.push((0, a.jsx)("span", {
        className: s()(ed.Wk, en),
        children: n
    }, "title-text")), M && eb.push((0, a.jsx)(u.m, {
        text: eo.intl.string(eo.t.ZEem6O),
        children: (0, a.jsx)(p.m5V, {
            className: ed.vW,
            size: "xs",
            color: d.A.colors.TEXT_STRONG,
            "aria-label": eo.intl.string(eo.t.mR9cf3)
        })
    }, "secure-frames-icon"));
    let eI = !K || m || t || ec || y !== es.lp.USER || null == E || null == q ? null : (0, a.jsx)(ee.X, {
        applicationId: q,
        hideApplicationName: er
    });
    return (0, a.jsxs)("div", {
        className: s()(ed.MU, {
            [ed.oE]: er,
            [ed.Ol]: m
        }),
        children: [(0, a.jsx)("div", {
            className: s()(ed.Ik, {
                [ed.EX]: l < 195
            }),
            children: Z || h === el.bb8.AUTO_PROBING ? t ? (0, a.jsx)("div", {
                className: ed.h5,
                children: (0, a.jsx)(p.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, a.jsxs)("div", {
                className: s()(ed.ns, ed.WP),
                children: [(0, a.jsx)("div", {
                    className: ed.h5,
                    children: (0, a.jsx)(p.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, a.jsx)(p.Text, {
                    variant: "text-sm/normal",
                    className: ed.Wk,
                    children: eo.intl.string(eo.t.m2Hyj0)
                })]
            }) : null
        }), !ei && (0, a.jsxs)("div", {
            className: s()(ed.Qp, {
                [ed.EX]: l < 195
            }),
            children: [(0, a.jsxs)("div", {
                className: s()(ed.qV, {
                    [ed.d5]: K
                }),
                children: [eb.length > 0 && (0, a.jsx)(p.Text, {
                    className: ed.ac,
                    color: "none",
                    variant: er ? "text-sm/normal" : "text-md/normal",
                    children: eb
                }), eI]
            }), ex.length > 0 ? (0, a.jsx)(r.animated.div, {
                className: s()(ed._v, {
                    [ed.N7]: t,
                    [ed.d5]: K
                }),
                style: {
                    marginBottom: ef.value
                },
                children: ex
            }) : null]
        })]
    })
});
e_.displayName = "CallTileOverlay";
let eA = /^(14256|21552)$/.test(n.j) ? y.$ : null,
    ef = ep