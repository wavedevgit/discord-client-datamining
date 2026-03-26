/** chunk id: 147905 params = (module,exports,require) **/
i.d(t, {
    Ay: () => B,
    FT: () => j,
    Ob: () => k
});
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(4208),
    u = i(311907),
    d = i(397927),
    o = i(442433),
    A = i(391973),
    c = i(684013),
    _ = i(401843),
    E = i(765671),
    I = i(717558),
    h = i(964486),
    f = i(775602),
    p = i(659974),
    m = i(66004),
    g = i(142524),
    C = i(534400),
    L = i(342296),
    N = i(481947),
    S = i(616356),
    P = i(961350),
    G = i(555528),
    O = i(430452),
    y = i(485296),
    x = i(977997),
    D = i(996439),
    v = i(427262),
    T = i(810412),
    b = i(652215),
    F = i(985018),
    W = i(901245);

function j(e) {
    switch (e) {
        case b.OSZ.LARGE:
            return d._3J.SIZE_32;
        case b.OSZ.SMALL:
            return d._3J.SIZE_24;
        default:
            return d._3J.SIZE_32
    }
}

function k(e) {
    return d.vCh[e].size
}
let R = () => i.e("15423").then(i.t.bind(i, 155147, 19)).then(e => {
        let {
            default: t
        } = e;
        return t
    }),
    V = {
        entering: {
            config: {
                mass: .2,
                tension: 180,
                friction: 14
            }
        },
        exiting: {
            config: {
                mass: 1,
                tension: 80,
                friction: 10,
                clamp: !0
            }
        }
    },
    w = {
        entering: {
            config: {
                mass: .5,
                tension: 240,
                friction: 10
            }
        },
        exiting: {
            config: {
                mass: 1.5,
                tension: 300,
                friction: 30,
                clamp: !0
            },
            delay: 300
        }
    };

function M(e, t) {
    let [i, n] = l.useState(null != e && e > Date.now() - 1e4), [s, a] = l.useState(!1), [r, u] = l.useState(!0);
    return (0, h.Ay)(() => {
        i && !t && (u(!1), setTimeout(() => {
            a(!0)
        }, 16))
    }), (0, h.Ay)(() => {
        let e = setTimeout(() => {
            n(!1), setTimeout(() => {
                a(!1)
            }, 16)
        }, 2600);
        return () => clearTimeout(e)
    }), l.useMemo(() => ({
        showConnectedAnimation: s,
        recentlyConnected: i,
        hideConnectedAnimation: r,
        setHideConnectedAnimation: u
    }), [s, i, r, u])
}
let Y = l.memo(function(e) {
        let {
            nick: t,
            connectedOn: i,
            isSettingsPreview: s,
            voiceBackgroundWidth: o,
            rightAlign: A = !1
        } = e, {
            showConnectedAnimation: c,
            recentlyConnected: _,
            hideConnectedAnimation: I,
            setHideConnectedAnimation: h
        } = M(i, s), {
            ref: p,
            width: m
        } = (0, E.Ay)(), g = (0, u.bG)([f.A], () => f.A.useReducedMotion), C = _ ? "entering" : "exiting", {
            width: L
        } = (0, r.useSpring)({
            ...V[C],
            width: c ? m : o
        }), {
            opacity: N
        } = (0, r.useSpring)({
            ...w[C],
            opacity: +!!c,
            onRest: () => {
                c || h(!0)
            }
        }), S = l.useMemo(() => I || g ? "none" : "block", [I, g]);
        return (0, n.jsx)(r.animated.div, {
            className: a()(W.rH, {
                [W.pG]: A
            }),
            style: {
                width: L,
                opacity: N,
                display: S
            },
            children: (0, n.jsxs)("div", {
                ref: p,
                className: a()(W.LB, {
                    [W.RP]: "exiting" === C,
                    [W.kb]: !A,
                    [W.pG]: A
                }),
                children: [A && (0, n.jsx)(d.akl, {
                    importData: R,
                    shouldAnimate: !g,
                    className: W.lY
                }), (0, n.jsx)("div", {
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: F.intl.format(F.t.uFcReq, {
                            nick: t
                        })
                    })
                }), !A && (0, n.jsx)(d.akl, {
                    importData: R,
                    shouldAnimate: !g,
                    className: W.lY
                }), (0, n.jsx)("div", {
                    className: W.k1
                })]
            })
        })
    }),
    U = l.memo(function(e) {
        let {
            avatarSize: t,
            userId: i,
            channelId: l,
            guildId: s
        } = e, a = 2 * t, r = -(t / 2);
        return (0, n.jsx)("div", {
            className: W.QZ,
            style: {
                top: r,
                left: r,
                width: a,
                height: a
            },
            children: (0, n.jsx)(m.A, {
                userId: i,
                channelId: l,
                guildId: s,
                containerDimensions: {
                    width: a,
                    height: a
                }
            })
        })
    }),
    K = l.memo(d.euF),
    Z = l.memo(function(e) {
        let {
            channel: t,
            flipped: i = !1,
            locked: s = !1,
            user: r,
            nick: o,
            displayNameMode: A,
            displayUserMode: c,
            size: h = b.OSZ.LARGE,
            onClick: f,
            onContextMenu: m,
            context: L,
            guildId: G,
            isSettingsPreview: v = !1,
            voiceState: F,
            showStreamPreview: R,
            onShowStreamPreview: V,
            onWatchStream: w,
            connectedOn: Z,
            ref: B
        } = e, z = (0, u.bG)([P.default], () => P.default.getId() === r.id, [r.id]), {
            ref: J,
            width: H
        } = (0, E.Ay)(), {
            showConnectedAnimation: X
        } = M(Z, v), q = F?.sessionId, $ = t.id, Q = r.id, [ee] = (0, u.bG)([x.A], () => [x.A.getVoiceStateForChannel($, Q) ?? x.A.getVoiceStateForSession(Q, q), x.A.getVoiceStateVersion()], [$, Q, q], D.D), et = v ? F : ee ?? F, [ei, en, el] = (0, u.yK)([O.Ay], () => z ? [!O.Ay.isSupported() || O.Ay.isSelfMute() || O.Ay.isSelfMutedTemporarily(), O.Ay.isSelfDeaf(), !1] : [!O.Ay.isSupported() || O.Ay.isLocalMute(r.id), !1, O.Ay.isLocalVideoDisabled(r.id)], [z, r.id]), es = (0, u.bG)([S.A], () => {
            let e = S.A.getCurrentUserActiveStream();
            return null != e && e.ownerId !== r.id && S.A.getViewerIds(e).filter(e => e === r.id).length > 0
        }, [r.id]), ea = v && F?.discoverable, er = (0, I.A)({
            userId: r.id,
            context: L
        }) || ea, eu = (0, u.bG)([S.A], () => S.A.getStreamForUser(r.id, G)), ed = null != eu, eo = l.useCallback(() => {
            (R || null != ed) && V(null)
        }, [V, R, ed]), eA = l.useCallback(() => (0, n.jsx)(g.A, {
            user: r,
            channel: t,
            onWatch: () => {
                null != eu && ((0, _.A9)(eu, {
                    forceMultiple: !0,
                    noFocus: !0
                }), eo(), w(eu ?? null))
            },
            onAction: () => w,
            previewIsOpen: R,
            location: b.ThZ.UNLOCKED_OVERLAY,
            hideTip: !0
        }), [r, t, eu, R, eo, w]), ec = l.useCallback(e => {
            s || m?.(e, r)
        }, [s, m, r]), e_ = l.useCallback(() => {
            s || null != ed && V(r.id)
        }, [s, V, ed, r]), eE = s || v, eI = l.useMemo(() => j(h), [h]), eh = l.useMemo(() => k(eI), [eI]), ef = l.useMemo(() => r.getAvatarURL(G, eh), [r, G, eh]), ep = (0, u.bG)([y.A], () => y.A.getVoiceVolume(Q));
        return c === b.f5z.ONLY_WHILE_SPEAKING && eE && !er || null == et ? null : i ? (0, n.jsxs)(d.DUT, {
            innerRef: B,
            className: a()(W.q7, {
                [W.zY]: er,
                [W.bG]: !s,
                [W.zq]: i,
                [W.cU]: X
            }),
            onClick: s ? void 0 : e => f?.(e, r),
            onContextMenu: ec,
            onMouseEnter: e_,
            onMouseLeave: eo,
            children: [eE && (A === b.pwA.NEVER || !er && A === b.pwA.ONLY_WHILE_SPEAKING) ? null : (0, n.jsx)(d.YNO, {
                targetElementRef: J,
                position: "left",
                renderPopout: eA,
                shouldShow: R,
                onRequestClose: eo,
                spacing: 0,
                children: () => (0, n.jsxs)("div", {
                    className: W.Xh,
                    ref: J,
                    children: [(0, n.jsx)(N.Kc, {
                        guildId: G,
                        user: r,
                        video: et.selfVideo,
                        isStreaming: ed,
                        className: W.ZA,
                        iconClassName: W.Ow,
                        isWatching: es,
                        localMute: ei && !z,
                        localVideoDisabled: el,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || en && !z,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    }), !v && (0, n.jsx)(C.Ay, {
                        primaryGuild: r.primaryGuild,
                        userId: r.id,
                        contextGuildId: G,
                        className: W.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, T.YX)(b.uss.VOICE_V3, {
                                type: T.Z5.VOICE,
                                value: T.IP.PROFILE_OPENED,
                                userId: r.id
                            })
                        }
                    }), (0, n.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: o
                    })]
                })
            }), !z && (0, n.jsx)(Y, {
                nick: o,
                connectedOn: Z,
                isSettingsPreview: v,
                voiceBackgroundWidth: H,
                rightAlign: !0
            }), (0, n.jsx)(K, {
                className: a()(W.my, {
                    [W.yS]: ep === -1 / 0
                }),
                size: eI,
                src: ef,
                isSpeaking: er,
                voiceDb: ep,
                speakingStylesConfig: {
                    spreadDirection: p.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), (0, n.jsx)(U, {
                avatarSize: eh,
                userId: r.id,
                channelId: t.id,
                guildId: t.getGuildId()
            })]
        }) : (0, n.jsxs)(d.DUT, {
            innerRef: B,
            className: a()(W.q7, {
                [W.zY]: er,
                [W.bG]: !s,
                [W.zq]: i,
                [W.cU]: X
            }),
            onClick: s ? void 0 : e => f?.(e, r),
            onContextMenu: ec,
            onMouseEnter: e_,
            onMouseLeave: eo,
            children: [(0, n.jsx)(K, {
                className: a()(W.my, {
                    [W.yS]: ep === -1 / 0
                }),
                size: eI,
                src: ef,
                isSpeaking: er,
                voiceDb: ep,
                speakingStylesConfig: {
                    spreadDirection: p.O.INSET_ONLY,
                    maxInnerSpreadRadius: 4,
                    hideIfVolumeMissing: !0
                },
                "aria-hidden": !0
            }), !z && (0, n.jsx)(Y, {
                nick: o,
                connectedOn: Z,
                isSettingsPreview: v,
                voiceBackgroundWidth: H
            }), eE && (A === b.pwA.NEVER || !er && A === b.pwA.ONLY_WHILE_SPEAKING) ? null : (0, n.jsx)(d.YNO, {
                targetElementRef: J,
                position: "right",
                renderPopout: eA,
                shouldShow: R,
                onRequestClose: eo,
                spacing: 0,
                children: () => (0, n.jsxs)("div", {
                    className: a()(W.Xh, {
                        [W.$A]: ed
                    }),
                    ref: J,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: o
                    }), !v && (0, n.jsx)(C.Ay, {
                        primaryGuild: r.primaryGuild,
                        userId: r.id,
                        contextGuildId: G,
                        className: W.fc,
                        disableGuildProfile: !0,
                        onShowProfile: () => {
                            (0, T.YX)(b.uss.VOICE_V3, {
                                type: T.Z5.VOICE,
                                value: T.IP.PROFILE_OPENED,
                                userId: r.id
                            })
                        }
                    }), (0, n.jsx)(N.Kc, {
                        guildId: G,
                        user: r,
                        video: et.selfVideo,
                        isStreaming: ed,
                        className: W.ZA,
                        iconClassName: W.Ow,
                        isWatching: es,
                        localMute: ei && !z,
                        localVideoDisabled: el,
                        mute: et.isVoiceMuted(),
                        deaf: et.isVoiceDeafened() || en && !z,
                        serverMute: et.mute || et.suppress,
                        serverDeaf: et.deaf,
                        disabled: !1
                    })]
                })
            })]
        })
    }),
    B = l.memo(function(e) {
        let {
            widgetId: t,
            channel: s,
            sortedVoiceState: a,
            displayNameMode: r,
            displayUserMode: u,
            locked: d,
            flipped: _,
            size: E,
            isPreviewingInGame: I,
            isSettingsPreview: h,
            context: f
        } = e, p = l.useRef(null), {
            user: m,
            member: g,
            voiceState: C,
            connectedOn: N
        } = a, [S, P] = l.useState(null), [O, y] = l.useState(null);
        l.useEffect(() => {
            d && y(null)
        }, [d]), l.useEffect(() => {
            null != S && (0, T.YX)(b.uss.VOICE_V3, {
                type: T.Z5.GO_LIVE,
                value: T.IP.STREAM_PREVIEWED
            })
        }, [S]);
        let x = e => {
                P(e)
            },
            D = (e, t) => {
                h || (0, o.L3)(e, async () => {
                    let {
                        default: e
                    } = await Promise.all([i.e("97262"), i.e("87997"), i.e("84991")]).then(i.bind(i, 180812));
                    return (0, T.YX)(b.uss.VOICE_V3, {
                        type: T.Z5.VOICE,
                        value: T.IP.SETTINGS_OPENED,
                        userId: t.id
                    }), i => (0, n.jsx)(e, {
                        ...i,
                        user: t,
                        channelId: s?.id,
                        guildId: s?.guild_id,
                        mediaEngineContext: f,
                        onShowProfile: () => y(t.id),
                        appContext: b.BRT.OVERLAY,
                        onWatchStream: () => {
                            (0, T.YX)(b.uss.VOICE_V3, {
                                type: T.Z5.GO_LIVE,
                                value: T.IP.ENABLED,
                                userId: t.id
                            })
                        }
                    })
                })
            },
            F = l.useCallback(e => {
                let i = G.A.getWidget(t)?.layoutId,
                    n = null != i ? G.A.getWidgetsForLayout(i)?.find(e => e.type === b.uss.GO_LIVE) : null;
                null == n || n.pinned || ((0, A.v0)(n.id), c.A.track(b.HAw.OVERLAY_PIN_TOGGLED, {
                    pinned: !0,
                    guild_id: s?.guild_id,
                    channel_id: s?.id,
                    channel_type: s?.type,
                    widget_type: b.uss.GO_LIVE
                })), null != e && null != n && (0, T.YX)(b.uss.VOICE_V3, {
                    type: T.Z5.GO_LIVE,
                    value: T.IP.ENABLED,
                    userId: e.ownerId
                })
            }, [s, t]);
        if (null == m || null == s || null == C) return null;
        let W = d || I;
        return (0, n.jsx)(L.A, {
            targetElementRef: p,
            user: m,
            guildId: s.guild_id,
            channelId: s.id,
            appContext: b.BRT.OVERLAY,
            shouldShow: O === m.id,
            onRequestClose: () => y(null),
            spacing: 24,
            children: () => (0, n.jsx)(Z, {
                ref: p,
                guildId: s?.guild_id,
                user: m,
                connectedOn: N,
                nick: g?.nick ?? v.Ay.getName(m),
                flipped: _,
                voiceState: C,
                displayNameMode: r,
                displayUserMode: u,
                size: E,
                locked: W,
                onContextMenu: D,
                onClick: D,
                context: f,
                channel: s,
                showStreamPreview: m.id === S,
                onShowStreamPreview: x,
                onWatchStream: F,
                isSettingsPreview: h
            })
        }, m.id)
    })