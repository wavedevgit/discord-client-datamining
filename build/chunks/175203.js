/** chunk id: 175203 params = (module,exports,require) **/
n.d(t, {
    Ay: () => eA,
    Yl: () => ef
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(687498),
    o = n(934551),
    d = n(311907),
    c = n(827734),
    u = n(990078),
    _ = n(397927),
    h = n(827343),
    m = n(820284),
    p = n(793574),
    g = n(429913),
    f = n(520698),
    A = n(164617),
    x = n(66004),
    I = n(958005),
    E = n(384059),
    b = n(556525),
    v = n(609425),
    C = n(73392),
    S = n(401901),
    y = n(40056),
    T = n(117029),
    N = n(612258),
    w = n(551826),
    L = n(87001),
    O = n(574172),
    j = n(665691),
    P = n(724759),
    D = n(635885),
    R = n(209932),
    k = n(253932),
    M = n(461782),
    G = n(614518),
    z = n(706787),
    U = n(961350),
    V = n(111162),
    F = n(430452),
    W = n(485296),
    H = n(977997),
    B = n(712687),
    Y = n(790381),
    X = n(266080),
    Z = n(723702),
    K = n(837921),
    J = n(141035),
    Q = n(654820),
    q = n(804980),
    $ = n(272812),
    ee = n(304047),
    et = n(203355),
    en = n(83982),
    ei = n(345812),
    ea = n(110234),
    er = n(652215),
    el = n(806931),
    es = n(31408),
    eo = n(731854),
    ed = n(985018),
    ec = n(633916);
let eu = [el.lp.ACTIVITY],
    e_ = a.memo(e => {
        var t, n, r;
        let s, o, c, {
                participant: u,
                popoutType: p,
                onDoubleClick: A,
                onContextMenu: I,
                onClick: E,
                onMouseDown: v,
                onKeyDown: C,
                className: T,
                style: L,
                containerStyle: O,
                channel: P,
                width: D,
                onVideoResize: B,
                inCall: Y = !1,
                selected: X = !1,
                noBorder: Z = !1,
                noVideoRender: K = !1,
                focused: ee = !1,
                blocked: ei = !1,
                ignored: e_ = !1,
                fit: eh = S.$.CONTAIN,
                paused: em = !1,
                pulseSpeakingIndicator: ep = !1,
                forceIdle: ef = !1,
                controlsBottom: eA
            } = e,
            ex = a.useContext(M.vG) || ef,
            [eI, eE] = a.useState(!1),
            eb = k.Q_.useSetting(),
            ev = (0, d.bG)([V.default], () => V.default.isStreamInfoOverlayEnabled),
            [eC, eS] = a.useState(!1),
            ey = (0, d.bG)([U.default], () => U.default.getId()),
            eT = u.type === el.lp.ACTIVITY ? null : u.user,
            eN = eT?.id ?? null,
            [ew] = (0, g.A)(u.type === el.lp.ACTIVITY ? [u.applicationId] : []),
            eL = (0, d.bG)([F.Ay], () => null != eN && F.Ay.isLocalVideoDisabled(eN, (0, f.A)(u.type)), [eN, u.type]),
            eO = (0, d.bG)([F.Ay], () => null != eN ? F.Ay.getVideoToggleState(eN, (0, f.A)(u.type)) : er.bb8.NONE, [eN, u.type]),
            ej = eO === er.bb8.AUTO_PROBING,
            {
                speaking: eP,
                ringing: eD,
                hasVideo: eR
            } = (0, ea.A)(u, ey),
            ek = (0, d.bG)([R.A], () => null !== eN && R.A.isUserPlayingSounds(eN), [eN]),
            eM = (t = ey, n = u, r = P.getGuildId(), s = n.type !== el.lp.ACTIVITY ? n.user.id : n.applicationId, o = (0, d.cf)([H.A], () => {
                let e = H.A.getVoiceState(r, s);
                return {
                    muted: e?.mute ?? !1,
                    deafened: e?.deaf ?? !1,
                    suppressed: e?.suppress ?? !1,
                    voiceChannelId: e?.channelId
                }
            }), c = (0, d.cf)([F.Ay], () => {
                let e = (0, f.A)(n.type);
                return t === s ? {
                    muted: !1,
                    deafened: !1
                } : {
                    muted: F.Ay.isLocalMute(s, e),
                    localVideoDisabled: F.Ay.isLocalVideoDisabled(s, e),
                    localVideoAutoDisabled: F.Ay.isLocalVideoAutoDisabled(s, e)
                }
            }, [t, n.type, s]), {
                serverMuted: o.muted,
                serverDeafened: o.deafened,
                suppressed: o.suppressed,
                localMuted: c.muted,
                muted: (n.type === el.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                deafened: (n.type === el.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1
            }),
            eG = u.type === el.lp.STREAM && eN === ey,
            ez = (0, d.bG)([G.A], () => u.type === el.lp.USER && null != eN ? G.A.getEffectForUserId(eN) : null),
            eU = (0, d.bG)([H.A], () => H.A.getVoicePlatformForChannel(P.id, eN ?? er.dJq)),
            eV = (0, j.UF)({
                userId: eN,
                channelId: P.id
            }),
            eF = (0, j.DY)({
                streamKey: u.type === el.lp.STREAM ? u.id : null,
                channelId: P.id
            }),
            eW = a.useMemo(() => u.type === el.lp.STREAM ? eF ?? !1 : u.type === el.lp.USER && (eV ?? !1), [eF, eV, u.type]);
        a.useEffect(() => {
            eE(ee)
        }, [ee]);
        let eH = a.useCallback(() => {
                null != eN && h.A.toggleLocalMute(eN, eo.x.STREAM)
            }, [eN]),
            eB = a.useCallback(e => {
                E?.(u, e)
            }, [E, u]),
            eY = a.useCallback(e => {
                A?.(u, e)
            }, [A, u]),
            eX = a.useCallback((e, t, n) => {
                I?.(u, e, t, n)
            }, [I, u]),
            eZ = null,
            eK = null,
            eJ = "";
        switch (u.type) {
            case el.lp.STREAM:
                eZ = (0, i.jsx)(et.A, {
                    participant: u,
                    selected: X,
                    popoutType: p,
                    width: D,
                    fit: eh,
                    onVideoResize: B,
                    paused: em
                }), eK = (0, i.jsx)(et.D, {
                    participant: u,
                    selected: X,
                    width: D,
                    focused: ee,
                    idle: ex,
                    premiumIndicator: !1
                }), eJ = ed.intl.formatToPlainString(ed.t.gHPz3Q, {
                    streamerName: u.user.username
                });
                break;
            case el.lp.USER:
                eZ = (0, i.jsx)(en.A, {
                    channel: P,
                    inCall: Y,
                    participant: u,
                    popoutType: p,
                    fit: eh,
                    onVideoResize: B,
                    paused: em,
                    selected: X,
                    width: D,
                    blocked: ei,
                    ignored: e_,
                    noVideoRender: K || ej,
                    pulseSpeakingIndicator: ep
                }), eK = (0, i.jsx)(en.s, {
                    participant: u,
                    channelId: P.id
                }), eJ = ed.intl.formatToPlainString(ed.t["iC/x/Q"], {
                    username: u.user.username
                });
                break;
            case el.lp.ACTIVITY:
                eZ = (0, i.jsx)(q.Ay, {
                    interactible: ee,
                    participant: u,
                    selected: X,
                    channel: P,
                    width: D
                }), eJ = ed.intl.formatToPlainString(ed.t.YCvOsO, {
                    activityName: ew?.name
                });
                break;
            case el.lp.HIDDEN_STREAM:
                eZ = (0, i.jsx)(et.A, {
                    participant: u,
                    selected: X,
                    width: D,
                    fit: eh,
                    onVideoResize: B,
                    paused: em,
                    popoutType: p
                })
        }
        let eQ = a.useRef(null),
            eq = (0, d.bG)([W.A], () => u.type === el.lp.USER ? W.A.getVoiceVolume(u.id) : -1 / 0),
            e$ = (0, b.v)({
                isSpeaking: eP,
                voiceDb: eq,
                spreadDirection: b.O.INSET_ONLY,
                maxInnerSpreadRadius: 4
            }),
            e0 = (0, el.Ay)(u) ? _.kN9 : eR ? _.npA : _.EsG,
            e1 = u.type === el.lp.STREAM && ee;
        return (0, i.jsx)(m.A, {
            section: er.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)(y.Ay, {
                streamKey: u.id,
                enableZoom: e1,
                children: (0, i.jsx)("div", {
                    className: l()(ec.iE, {
                        [ec.DF]: eD
                    }, T),
                    style: O,
                    onMouseEnter: () => {
                        eS(!0)
                    },
                    onMouseLeave: () => {
                        eS(!1)
                    },
                    children: (0, i.jsxs)(w.A, {
                        shakeLocation: es.uD.VOICE_USER,
                        isShaking: eP,
                        className: ec.Vs,
                        children: [(0, i.jsx)($.A, {
                            ref: eQ,
                            className: l()(ec.Vs, {
                                [ec.E7]: Z,
                                [ec.k_]: null == E,
                                [ec.N7]: ex
                            }),
                            noBorder: Z,
                            style: L,
                            participantUserId: eN,
                            children: (0, i.jsxs)(_.sqX, {
                                "aria-label": eJ,
                                className: ec.lG,
                                onDoubleClick: eY,
                                onContextMenu: e => eX(e, u.type === el.lp.STREAM),
                                onClick: eB,
                                onMouseDown: v,
                                onKeyDown: C,
                                focusProps: {
                                    offset: 1
                                },
                                children: [null != ez && null != eN ? (0, i.jsx)(z.A, {
                                    voiceChannelEffect: ez,
                                    onComplete: () => (0, G.a)(eN),
                                    userId: eN
                                }) : null, u.type === el.lp.USER ? (0, i.jsx)("div", {
                                    className: ec.nl,
                                    children: (0, i.jsx)(x.A, {
                                        userId: eN,
                                        channelId: P.id,
                                        guildId: P.getGuildId(),
                                        containerDimensions: {
                                            width: eQ?.current?.clientWidth ?? 0,
                                            height: eQ?.current?.clientHeight ?? 0
                                        }
                                    })
                                }) : null, eZ, Z ? null : (0, i.jsx)("div", {
                                    className: ec.hD,
                                    children: eK
                                }), X ? (0, i.jsx)("div", {
                                    className: ec._Q,
                                    children: (0, i.jsx)(e0, {
                                        size: "md",
                                        color: "currentColor",
                                        className: ec.Dt
                                    })
                                }) : null, eu.includes(u.type) ? null : (0, i.jsx)(eg, {
                                    focused: ee,
                                    width: D,
                                    inCall: Y,
                                    participantId: u.id,
                                    participantType: u.type,
                                    hasVideo: eR ?? !1,
                                    ...eM,
                                    idle: ex,
                                    platform: eU,
                                    title: (0, J.A)(P, u),
                                    blocked: ei,
                                    ignored: e_,
                                    localVideoDisabled: eL,
                                    videoToggleState: eO,
                                    hideAudioIcon: eG,
                                    onContextMenu: eX,
                                    onToggleMute: eH,
                                    participantUserId: eN,
                                    channel: P,
                                    secureFramesVerified: eW,
                                    isHovered: eC,
                                    popoutType: p,
                                    paused: em,
                                    controlsBottom: eA,
                                    streamId: u.type === el.lp.STREAM ? u.streamId : null
                                }), Y && !Z ? (0, i.jsx)("div", {
                                    className: l()(ec.PQ, {
                                        [ec.pU]: !ee && (ek || null != ez)
                                    }),
                                    style: ee || ek ? void 0 : e$
                                }) : null]
                            })
                        }), eb && ev && eC && (0, i.jsx)(Q.A, {
                            currentUserId: ey,
                            participant: u
                        }), (0, i.jsx)(N.A, {
                            isFiring: eI,
                            callTileRef: eQ.current
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
    if (t === el.lp.STREAM) return n === el.J7.XBOX ? (0, i.jsx)(X.A, {
        className: a
    }) : (0, i.jsx)(_.kN9, {
        size: "md",
        color: "currentColor",
        className: a
    });
    switch (n) {
        case el.J7.MOBILE:
            return (0, i.jsx)(_.u6o, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        case el.J7.XBOX:
            return (0, i.jsx)(X.A, {
                className: a
            });
        case el.J7.PLAYSTATION:
            return (0, i.jsx)(Y.A, {
                className: a
            });
        case el.J7.QUEST:
            return (0, i.jsx)(o.VrHeadsetIcon, {
                size: "xs",
                color: "currentColor",
                className: a
            });
        default:
            return null
    }
}

function em(e) {
    let {
        icon: t,
        tooltipText: n,
        hideWhenInactive: a,
        idle: r,
        onClick: s
    } = e;
    return (0, i.jsx)(u.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: l()(ec.V7, {
                [ec.kl]: a,
                [ec.N7]: r
            }),
            children: (0, i.jsx)(_.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: e => {
                    e.stopPropagation(), s(e)
                },
                "aria-label": n,
                icon: t
            })
        })
    })
}

function ep(e) {
    let {
        channelId: t,
        participantId: n,
        hideWhenInactive: r,
        idle: l
    } = e, s = a.useMemo(() => (0, I.A)(t, n), [t, n]), o = (0, d.bG)([L.A], () => L.A.getIsAlwaysOnTop(s)), c = a.useCallback(() => {
        (0, E.X)(p.A.CALL_TILE_POPOUT, E.O.STAY_ON_TOP, !o), O.setAlwaysOnTop(s, !o)
    }, [s, o]);
    return Z.isPlatformEmbedded && K.Ay.supportsFeature(er.BYE.POPOUT_WINDOWS) ? (0, i.jsx)(em, {
        onClick: c,
        tooltipText: o ? ed.intl.string(ed.t.YdyDM9) : ed.intl.string(ed.t.ZVGHwP),
        icon: o ? _.hl9 : _.qgw,
        hideWhenInactive: r,
        idle: l
    }) : null
}
e_.displayName = "CallTile";
let eg = a.memo(e => {
    let {
        idle: t,
        title: n,
        width: r,
        focused: h,
        videoToggleState: m,
        blocked: g,
        ignored: x,
        participantId: b,
        participantType: S,
        participantUserId: y,
        channel: N,
        platform: w,
        secureFramesVerified: L,
        onContextMenu: j,
        muted: R,
        deafened: k,
        localMuted: M,
        serverMuted: G,
        serverDeafened: z,
        hasVideo: V,
        hideAudioIcon: W,
        onToggleMute: H,
        popoutType: Y,
        paused: X,
        controlsBottom: Z,
        streamId: K
    } = e, J = (0, P.B)({
        location: "call_tile"
    }), Q = (0, D.V)(J && S === el.lp.USER ? y : null), q = (0, d.bG)([U.default], () => U.default.getId()), $ = (0, d.bG)([F.Ay], () => null != y && F.Ay.isLocalVideoAutoDisabled(y, (0, f.A)(S)), [y, S]), et = (0, v.A)({
        userId: y,
        guildId: N.getGuildId()
    }), en = (0, C.a)({
        displayNameStyles: et
    }), ea = (0, ei.Y)(r), es = (0, ei.V)(r), [eo, eu] = a.useState(!1);
    a.useEffect(() => {
        let e = !1,
            t = () => {
                e !== B.A.isOpen() && ((e = B.A.isOpen()) || eu(!1))
            };
        return B.A.addChangeListener(t), () => B.A.removeChangeListener(t)
    }, []);
    let e_ = !W && S === el.lp.STREAM && V && (!es || M),
        eg = function(e) {
            let {
                localMuted: t,
                serverMuted: n,
                serverDeafened: i,
                deafened: a,
                muted: r
            } = e;
            return i ? _.TJE : n ? _.O1p : a ? _.cQT : t ? _.O1p : r ? _.z0P : null
        }({
            localMuted: M,
            serverMuted: G,
            serverDeafened: z,
            deafened: k,
            muted: R
        }),
        ef = (0, _.zhh)({
            value: null != Z ? Z : 0,
            config: {
                ...s.config.stiff,
                clamp: !0
            }
        }, "animate-always"),
        eA = [];
    return h && S === el.lp.STREAM && eA.push((0, i.jsx)(T.A, {
        streamId: K,
        paused: X
    }, "zoom-controls")), h ? Y === A.N.CALL_TILE && (eA.push((0, i.jsx)(ep, {
        channelId: N.id,
        participantId: b,
        hideWhenInactive: !1,
        idle: t
    }, "stay-on-top")), eA.push((0, i.jsx)(em, {
        onClick: () => {
            (0, E.X)(p.A.CALL_TILE_POPOUT, E.O.POPOUT_RETURN), O.close((0, I.A)(N.id, b))
        },
        tooltipText: ed.intl.string(ed.t["7Dwcnj"]),
        icon: o.WindowReturnIcon,
        hideWhenInactive: !1,
        idle: t
    }, "close"))) : (J && null != y && y !== q && null != Q && eA.push((0, i.jsx)(ee.M, {
        userId: y,
        channel: N,
        applicationId: Q,
        hideWhenInactive: !eo,
        idle: t
    }, "gift")), eA.push((0, i.jsx)(em, {
        onClick: e => {
            e.stopPropagation(), eu(!0), j(e, !0, el.GK.THREE_DOT)
        },
        tooltipText: ed.intl.string(ed.t["+1H47t"]),
        icon: _.jNK,
        hideWhenInactive: !eo,
        idle: t
    }, "options")), e_ && eA.push((0, i.jsx)(em, {
        onClick: H,
        tooltipText: M ? ed.intl.string(ed.t.YqAjXy) : ed.intl.string(ed.t.w4m945),
        icon: M ? _._RO : _.HKD,
        hideWhenInactive: !M && !eo,
        idle: t
    }, "mute"))), (0, i.jsxs)("div", {
        className: l()(ec.MU, {
            [ec.oE]: es,
            [ec.Ol]: h
        }),
        children: [(0, i.jsx)("div", {
            className: l()(ec.Ik, {
                [ec.EX]: r < 195
            }),
            children: $ || m === er.bb8.AUTO_PROBING ? t ? (0, i.jsx)("div", {
                className: ec.h5,
                children: (0, i.jsx)(_.OCo, {
                    size: "md",
                    color: "currentColor"
                })
            }) : (0, i.jsxs)("div", {
                className: l()(ec.ns, ec.WP),
                children: [(0, i.jsx)("div", {
                    className: ec.h5,
                    children: (0, i.jsx)(_.OCo, {
                        size: "md",
                        color: "currentColor"
                    })
                }), (0, i.jsx)(_.Text, {
                    variant: "text-sm/normal",
                    className: ec.Wk,
                    children: ed.intl.string(ed.t.m2Hyj0)
                })]
            }) : null
        }), !ea && (0, i.jsxs)("div", {
            className: l()(ec.Qp, {
                [ec.EX]: r < 195
            }),
            children: [(0, i.jsxs)(_.Text, {
                className: ec.ac,
                color: "none",
                variant: es ? "text-sm/normal" : "text-md/normal",
                children: [null != eg && S === el.lp.USER && (0, i.jsx)(eg, {
                    className: ec.gr,
                    size: "xs",
                    color: "currentColor"
                }), g ? (0, i.jsx)("div", {
                    className: ec.Z5,
                    children: (0, i.jsx)(_.KTN, {
                        size: "lg",
                        className: ec.Q6,
                        color: c.A.unsafe_rawColors.RED_400.css
                    })
                }) : null, x ? (0, i.jsx)("div", {
                    className: ec.PP,
                    children: (0, i.jsx)(_.G3N, {
                        size: "lg",
                        className: ec.Q6
                    })
                }) : null, t ? null : (0, i.jsx)(eh, {
                    participantType: S,
                    platform: w,
                    className: ec.gr
                }), null == n || "" === n || t ? null : (0, i.jsx)("span", {
                    className: l()(ec.Wk, en),
                    children: n
                }), L && (0, i.jsx)(u.m, {
                    text: ed.intl.string(ed.t.ZEem6O),
                    children: (0, i.jsx)(_.m5V, {
                        className: ec.vW,
                        size: "xs",
                        color: c.A.colors.TEXT_STRONG,
                        "aria-label": ed.intl.string(ed.t.mR9cf3)
                    })
                })]
            }), eA.length > 0 ? (0, i.jsx)(s.animated.div, {
                className: l()(ec._v, {
                    [ec.N7]: t,
                    [ec.d5]: J
                }),
                style: {
                    marginBottom: ef.value
                },
                children: eA
            }) : null]
        })]
    })
});
eg.displayName = "CallTileOverlay";
let ef = /^(14256|21552)$/.test(n.j) ? S.$ : null,
    eA = e_